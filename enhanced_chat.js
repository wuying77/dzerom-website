// 新增会话历史存储
const CHAT_HISTORY_FILE = path.join(__dirname, 'chat_history.json');
function loadChats() {
  return fs.existsSync(CHAT_HISTORY_FILE)
    ? JSON.parse(fs.readFileSync(CHAT_HISTORY_FILE, 'utf-8'))
    : {};
}
function saveChats(chats) {
  fs.writeFileSync(CHAT_HISTORY_FILE, JSON.stringify(chats, null, 2));
}

app.post('/chat', async (req, res) => {
  const { msg, chatId } = req.body;
  if (!msg) return res.json({ reply: '消息不能为空' });

  // ----- 读取历史 -----
  let chats = loadChats();
  let id = chatId || (Date.now() + '');
  if (!chats[id]) chats[id] = [];
  chats[id].push({ role: 'user', content: msg });

  try {
    // 用历史消息和当前消息发给Kimi
    const kimiRes = await fetch('https://api.moonshot.cn/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.KIMI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'moonshot-v1-8k',
        messages: chats[id] // 全部历史+当前
      })
    });
    const kimiData = await kimiRes.json();
    const reply = kimiData.choices?.[0]?.message?.content || 'Kimi没有返回内容';
    chats[id].push({ role: 'ai', content: reply });
    saveChats(chats);

    return res.json({ reply, chatId: id });
  } catch (e) {
    res.json({ reply: 'Kimi服务出错，请稍后再试。', chatId: id });
  }
});