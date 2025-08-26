# Dimension Zero 项目

## 文件上传功能部署指南

### 前端部署
1. 将代码上传到GitHub仓库
2. 使用Vercel/Netlify等平台导入仓库自动部署

### 后端部署 (必需)
上传功能需要后端API支持，以下是简单Node.js示例：

```javascript
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

const upload = multer({ dest: 'uploads/' });

app.post('/api/upload', upload.array('files'), (req, res) => {
  if(!req.files) {
    return res.status(400).json({ message: '未上传文件' });
  }
  res.json({ 
    message: '上传成功',
    files: req.files.map(file => ({
      name: file.originalname,
      size: file.size,
      path: file.path
    }))
  });
});

app.listen(3001, () => console.log('服务器运行中...'));
```

### 环境变量
前端需要配置API地址：
```env
VITE_API_URL=http://your-backend-url.com
```

### 完整功能要求
1. 后端服务运行并可达
2. 前端配置正确的API地址
3. 服务器有足够存储空间
