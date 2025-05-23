const { Octokit } = require('@octokit/rest');

exports.handler = async (event) => {
  const token = process.env.GITHUB_TOKEN;
  const octokit = new Octokit({ auth: token });

  try {
    const { path, content } = JSON.parse(event.body);

    const { data: fileData } = await octokit.repos.getContent({
      owner: 'wuying77',
      repo: 'dzerom-website',
      path: path,
    });

    const sha = fileData.sha;

    await octokit.repos.createOrUpdateFileContents({
      owner: 'wuying77',
      repo: 'dzerom-website',
      path: path,
      message: `编辑页面: ${path}`,
      content: Buffer.from(content).toString('base64'),
      sha: sha,
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
      body: JSON.stringify({ message: '页面已编辑' })
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: '编辑失败', error: error.message })
    };
  }
};
