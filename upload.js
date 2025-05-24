require('dotenv').config();
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// 配置存储路径和文件名
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // 支持自定义上传目标目录，默认放到 public/uploads
    let target = req.body.dir || 'public/uploads';
    const absDir = path.join(__dirname, target);
    if (!fs.existsSync(absDir)) fs.mkdirSync(absDir, { recursive: true });
    cb(null, absDir);
  },
  filename: function (req, file, cb) {
    // 保证文件名唯一
    const ext = path.extname(file.originalname);
    const basename = path.basename(file.originalname, ext);
    cb(null, `${Date.now()}-${basename}${ext}`);
  }
});
const upload = multer({ storage });

app.use(express.static('public'));
app.use(express.json());

// 上传接口（支持多文件）
app.post('/api/upload', upload.array('files', 10), (req, res) => {
  const files = req.files.map(file => ({
    filename: file.filename,
    path: file.path.replace(__dirname, ''),
    url: `/uploads/${file.filename}`
  }));
  res.json({ success: true, files });
});

app.listen(PORT, () => console.log(`Upload server running: http://localhost:${PORT}`));