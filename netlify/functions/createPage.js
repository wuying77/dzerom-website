const { Octokit } = require('@octokit/rest');

exports.handler = async (event) => {
  const token = process.env.GITHUB_TOKEN;
  const octokit = new Octokit({ auth: token });

  const { path, content } = JSON.parse(event.body);

  await octokit.repos.createOrUpdateFileContents({
    owner: 'wuying77',
    repo: 'dzerom-website',
    path: path,
    message: `创建新页面: ${path}`,
    content: Buffer.from(content).toString('base64'),
    committer: {
      name: 'Netlify Bot',
      email: 'bot@dzerom.xin'
    },
    author: {
      name: 'Netlify Bot',
      email: 'bot@dzerom.xin'
    }
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: '页面已创建' })
  };
};
