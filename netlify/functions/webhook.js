exports.handler = async (event, context) => {
  console.log('收到 GitHub Webhook:', event.body);
  return {
    statusCode: 200,
    body: 'Webhook received'
  };
};
