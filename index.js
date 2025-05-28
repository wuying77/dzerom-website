require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const multer = require('multer');
const mime = require('mime-types');

const app = express();
app.use(express.json());

const CONTENT_ROOT = path.join(__dirname, 'posts');

// 保证目录存在
function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// 文件上传目录
const uploadsDir = path.join(__dirname, 'public/uploads');
ensureDir(uploadsDir);

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// 上传接口
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file' });
  res.json({ url: '/uploads/' + req.file.filename });
});

// 聊天/写作接口
app.post('/chat', async (req, res) => {
  const { msg } = req.body;
  if (!msg) return res.json({ reply: '消息不能为空' });

  try {
    // 判断是否带图片 Markdown，自动图片内容分析（Moonshot Vision）
    const imgMatch = msg.match(/!\[.*?\]\((\/uploads\/.+?)\)/);

    if (imgMatch) {
      const imgPath = path.join(__dirname, 'public', imgMatch[1]);
      console.log('分析图片的本地路径:', imgPath, '是否存在:', fs.existsSync(imgPath));
      if (!fs.existsSync(imgPath)) {
        console.error('图片文件不存在:', imgPath);
        return res.json({ reply: '图片文件不存在，无法分析。' });
      }

      // 检测图片 MIME 类型，加前缀
      const ext = path.extname(imgPath).toLowerCase();
      const mimeType = mime.lookup(ext) || 'image/png';
      const base64raw = fs.readFileSync(imgPath, { encoding: 'base64' });
      const base64 = `data:${mimeType};base64,${base64raw}`;
      console.log('base64前缀:', base64.slice(0, 50));

      // 用 Moonshot Vision 分析图片内容
      const visionRes = await fetch('https://api.moonshot.cn/v1/vision/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.KIMI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: "moonshot-v1-128k-vision",
          messages: [
            { role: "user", content: "请详细描述这张图片内容，如果有文字请识别出来。" }
          ],
          files: [
            { type: "image", content: base64 }
          ]
        })
      });

      const data = await visionRes.json();
      console.log('Moonshot Vision API返回状态:', visionRes.status, '返回内容:', JSON.stringify(data));
      if (!visionRes.ok) {
        return res.json({ reply: `图片分析失败（API错误：${data?.error || visionRes.status}）` });
      }
      return res.json({ reply: data.choices?.[0]?.message?.content || "图片分析失败" });
    }

    // 判断是否有“放到X栏目下”的指令
    let column = null;
    const colMatch = msg.match(/(?:放到|保存到|归入|生成在|写到)?([A-Z])栏目/);
    if (colMatch) {
      column = colMatch[1];
    }

    // 判断是否是文章生成指令
    if (/生成|写|文章|博客/.test(msg)) {
      const title = msg.replace(/(帮我|请|生成|写|一篇|博客|文章|首页|风格|的|并放到.*栏目下?)/g, '').trim() || 'AI博客';

      const kimiRes = await fetch('https://api.moonshot.cn/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.KIMI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'moonshot-v1-8k',
          messages: [
            { role: 'user', content: `请帮我写一篇以《${title}》为题的博客文章，结构完整，包含引言、主体和结论。` }
          ]
        })
      });

      const kimiData = await kimiRes.json();
      console.log('Kimi生成博客返回状态:', kimiRes.status, '返回内容:', JSON.stringify(kimiData));
      const content = kimiData.choices?.[0]?.message?.content || '';
      if (!content) return res.json({ reply: 'Kimi 生成内容失败。' });

      const safeTitle = title
        .split('\n')[0]
        .replace(/[\\/:*?"<>|\r\n#]/g, '_')
        .replace(/\s+/g, '_')
        .slice(0, 40) || 'AI博客';
      const filename = `${Date.now()}-${safeTitle}.md`;
      const columnDir = column ? path.join(CONTENT_ROOT, column) : CONTENT_ROOT;
      ensureDir(columnDir);
      const filePath = path.join(columnDir, filename);

      fs.writeFileSync(filePath, `# ${title}\n\n${content}`);

      try {
        execSync('git add .', { cwd: __dirname });
        execSync(`git commit -m "auto: 新增${column ? column + '栏目' : ''}AI文章《${title}》"`, { cwd: __dirname });
        execSync('git push', { cwd: __dirname });
      } catch (e) {
        console.error('Git自动推送失败:', e.message);
      }

      return res.json({
        reply: `已生成《${title}》文章并保存为 ${column ? column + '栏目/' : ''}${filename}，并自动推送到GitHub！`
      });
    } else {
      // 普通 AI 对话
      const kimiRes = await fetch('https://api.moonshot.cn/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.KIMI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'moonshot-v1-8k',
          messages: [
            { role: 'user', content: msg }
          ]
        })
      });

      const kimiData = await kimiRes.json();
      console.log('Kimi普通对话返回状态:', kimiRes.status, '返回内容:', JSON.stringify(kimiData));
      const reply = kimiData.choices?.[0]?.message?.content || 'Kimi没有返回内容';
      return res.json({ reply });
    }
  } catch (e) {
    console.error('Kimi对话出错:', e && e.stack ? e.stack : e);
    res.json({ reply: 'Kimi服务出错，请稍后再试。' });
  }
});

// 静态文件托管
app.use(express.static('public'));

const port = 3000;
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));