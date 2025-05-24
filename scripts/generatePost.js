const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

// 1. 调用本地API生成文章内容
async function generateArticle(title, aiType = 'kimi') {
  const res = await fetch('http://localhost:3000/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      messages: [
        { role: 'system', content: '你是一位博客写手。' },
        { role: 'user', content: `请用中文写一篇关于“${title}”的原创博客，包含小标题和总结，字数1000字左右。` }
      ],
      aiType
    })
  });
  const data = await res.json();
  return data.reply;
}

// 2. 写入 Markdown 文件
function saveArticle(title, content) {
  const fileName = title.replace(/[\s\/\\]/g, '-') + '.md';
  const filePath = path.join(__dirname, '../posts', fileName);
  const md = `# ${title}\n\n${content}\n`;
  fs.writeFileSync(filePath, md);
  console.log('文章已保存:', filePath);
}

// 3. 主流程
(async () => {
  const title = process.argv[2] || 'AI自动生成博客内容测试';
  const aiType = process.argv[3] || 'kimi'; // 可改为 'gpt'
  console.log(`正在用${aiType}生成文章: ${title}`);
  const content = await generateArticle(title, aiType);
  saveArticle(title, content);
})();