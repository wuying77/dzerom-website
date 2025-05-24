const { execSync } = require('child_process');
HEAD

const BLOG_REPO_PATH = 'F:/dzerom.xin'; // 确保路径正确

const path = require('path');

const BLOG_REPO_PATH = 'F:/dzerom.xin'; // 你的本地博客仓库路径
0a37b59 (初始化项目)
const COMMIT_MSG = process.argv[2] || 'auto: 更新AI生成内容';

function pushToGithub() {
  try {
    process.chdir(BLOG_REPO_PATH);
    execSync('git pull', { stdio: 'inherit' });
    execSync('git add .', { stdio: 'inherit' });
    execSync(`git commit -m "${COMMIT_MSG}"`, { stdio: 'inherit' });
    execSync('git push', { stdio: 'inherit' });
    console.log('博客内容已自动推送到GitHub！');
  } catch (err) {
    console.error('推送失败:', err.message);
  }
}

pushToGithub();