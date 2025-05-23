const crypto = require('crypto');

exports.handler = async (event, context) => {
  const secret = process.env.GITHUB_WEBHOOK_SECRET;
  const signature = event.headers['x-hub-signature-256'];
  const payload = event.body;
  const expectedSignature = 'sha256=' + crypto.createHmac('sha256', secret).update(payload).digest('hex');

  if (signature !== expectedSignature) {
    console.log('签名不匹配');
    return {
      statusCode: 401,
      body: 'Invalid signature'
    };
  }

  console.log('收到 GitHub Webhook:', payload);
  return {
    statusCode: 200,
    body: 'Webhook received and verified'
  };
};
