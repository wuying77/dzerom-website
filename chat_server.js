const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const CHAT_FILE = path.join(__dirname, 'chat_history.json');

app.use(express.json());
app.use(express.static('public'));

// 读取所有历史会话
app.get('/api/chats', (req, res) => {
  if (!fs.existsSync(CHAT_FILE)) return res.json({});
  res.json(JSON.parse(fs.readFileSync(CHAT_FILE, 'utf8')));
});

// 获取单个会话详情
app.get('/api/chat/:chatId', (req, res) => {
  if (!fs.existsSync(CHAT_FILE)) return res.json([]);
  const all = JSON.parse(fs.readFileSync(CHAT_FILE, 'utf8'));
  res.json(all[req.params.chatId] || []);
});

// 保存/更新会话
app.post('/api/chat/:chatId', (req, res) => {
  const messages = req.body.messages || [];
  let all = {};
  if (fs.existsSync(CHAT_FILE)) {
    all = JSON.parse(fs.readFileSync(CHAT_FILE, 'utf8'));
  }
  all[req.params.chatId] = messages;
  fs.writeFileSync(CHAT_FILE, JSON.stringify(all, null, 2));
  res.json({ success: true });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Chat server running: http://localhost:${PORT}`);
});