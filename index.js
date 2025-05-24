require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const multer = require('multer');

const app = express();
app.use(express.json());

const CONTENT_ROOT = path.join(__dirname, 'posts'); // 博客内容根目录

// 保证栏目目录存在
function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// 【新增】文件上传接口
const uploadsDir = path.join(__dirname, 'public/uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file' });
  res.json({ url: '/uploads/' + req.file.filename });
});

// 聊天/写作接口（支持图片内容分析与健壮的文件名处理）
app.post('/chat', async (req, res) => {
  const { msg } = req.body;
  if (!msg) return res.json({ reply: '消息不能为空' });

  try {
    // 判断是否带图片Markdown，自动图片内容分析（Moonshot Vision）
    const imgMatch = msg.match(/!\[.*?\]\((\/uploads\/.+?)\)/);
    if (imgMatch) {
      const imgPath = path.join(__dirname, 'public', imgMatch[1]);
      const base64 = fs.readFileSync(imgPath, {encoding: 'base64'});
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
      return res.json({ reply: data.choices?.[0]?.message?.content || "图片分析失败" });
    }

    // 判断是否有“放到X栏目下”的指令
    let column = null;
    let colMatch = msg.match(/(?:放到|保存到|归入|生成在|写到)?([A-Z])栏目/);
    if (colMatch) {
      column = colMatch[1]; // 比如 "D"
    }

    // 判断是否是文章生成指令
    if (/生成|写|文章|博客/.test(msg)) {
      // 抽取文章主题
      let title = msg.replace(/(帮我|请|生成|写|一篇|博客|文章|首页|风格|的|并放到.*栏目下?)/g, '').trim() || 'AI博客';

      // 请求 Kimi 生成内容
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
      const content = kimiData.choices?.[0]?.message?.content || '';
      if (!content) return res.json({ reply: 'Kimi 生成内容失败。' });

      // 健壮的文件名处理：仅用第一行、过滤特殊符号、最大长度限制
      let safeTitle = title
        .split('\n')[0]                      // 只取第一行
        .replace(/[\\/:*?"<>|\r\n#]/g, '_')  // 禁止特殊字符
        .replace(/\s+/g, '_')                // 空格变下划线
        .slice(0, 40);                       // 最多40字符
      if (!safeTitle) safeTitle = 'AI博客';
      let filename = `${Date.now()}-${safeTitle}.md`;
      let columnDir = column ? path.join(CONTENT_ROOT, column) : CONTENT_ROOT;
      ensureDir(columnDir);
      let filePath = path.join(columnDir, filename);

      fs.writeFileSync(filePath, `# ${title}\n\n${content}`);

      // 自动 git 提交推送
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
      // 普通AI对话
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
      const reply = kimiData.choices?.[0]?.message?.content || 'Kimi没有返回内容';
      return res.json({ reply });
    }
  } catch (e) {
    console.error('Kimi对话出错:', e);
    res.json({ reply: 'Kimi服务出错，请稍后再试。' });
  }
});

// 静态文件托管
app.use(express.static('public'));

const port = 3000;
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));