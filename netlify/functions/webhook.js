const crypto = require('crypto');

exports.handler = async (event, context) => {
  const secret = process.env.GITHUB_WEBHOOK_SECRET;
  if (!secret) {
    console.log('缺少 GITHUB_WEBHOOK_SECRET 环境变量');
    return {
      statusCode: 500,
      body: 'Server configuration error'
    };
  }

  const headers = Object.fromEntries(Object.entries(event.headers).map(([k, v]) => [k.toLowerCase(), v]));
  const signature = headers['x-hub-signature-256'];
  const payload = event.body;
  const expectedSignature = 'sha256=' + crypto.createHmac('sha256', secret).update(payload).digest('hex');

  if (signature !== expectedSignature) {
    console.log('签名不匹配');
    return {
      statusCode: 401,
      body: 'Invalid signature'
    };
  }

  const data = JSON.parse(payload);
  const eventType = headers['x-github-event'];

  console.log(`收到 Webhook 事件: ${eventType}`);
  console.log('内容:', data);

  return {
    statusCode: 200,
    body: 'Webhook received and verified'
  };
};
