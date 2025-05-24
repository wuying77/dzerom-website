export async function chatWithAI(messages, aiType = 'openai') {
  let apiUrl, apiKey, model;
  if (aiType === 'kimi') {
    apiUrl = 'https://api.moonshot.cn/v1/chat/completions';
    apiKey = process.env.KIMI_API_KEY;
    model = 'moonshot-v1-8k';
  } else {
    apiUrl = 'https://api.openai.com/v1/chat/completions';
    apiKey = process.env.OPENAI_API_KEY;
    model = 'gpt-3.5-turbo';
  }
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model,
      messages
    })
  });
  return response.json();
}