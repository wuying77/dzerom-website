import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'sonner';

type ModuleType = 'cosmic-phase' | 'serpent-archive' | 'black-vault' | 'awakening-guide';
type ContentType = 'article' | 'image' | 'video';

export default function UploadPanel() {
  const [selectedModule, setSelectedModule] = useState<ModuleType>('cosmic-phase');
  const [contentType, setContentType] = useState<ContentType>('article');
  const [files, setFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles?.length) {
      setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.png', '.jpg', '.gif'],
      'video/*': ['.mp4', '.mov', '.avi'],
      'application/*': ['.pdf', '.doc', '.docx', '.txt']
    },
    maxFiles: 10,
    multiple: true
  });

  const removeFile = (index: number) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      toast.warning('请先选择要上传的文件');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    // 模拟上传过程
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          toast.success('上传成功！');
          setFiles([]);
          return 0;
        }
        return prev + 10;
      });
    }, 500);

    return () => clearInterval(interval);
  };

  return (
    <div className="p-6 bg-black/30 rounded-lg border border-green-500/30">
      <h2 className="text-2xl font-cinzel mb-6">内容上传</h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-2 font-courier">选择模块</label>
          <select
            value={selectedModule}
            onChange={(e) => setSelectedModule(e.target.value as ModuleType)}
            className="w-full px-4 py-2 bg-black border border-green-500 text-green-500 rounded"
          >
            <option value="cosmic-phase">宇宙阴阳相位论</option>
            <option value="serpent-archive">蛇神文明档案库</option>
            <option value="black-vault">黑档案室</option>
            <option value="awakening-guide">觉醒者手册</option>
          </select>
        </div>
        
        <div>
          <label className="block mb-2 font-courier">内容类型</label>
          <select
            value={contentType}
            onChange={(e) => setContentType(e.target.value as ContentType)}
            className="w-full px-4 py-2 bg-black border border-green-500 text-green-500 rounded"
          >
            <option value="article">文章/文档</option>
            <option value="image">图片</option>
            <option value="video">视频</option>
          </select>
        </div>
      </div>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragActive ? 'border-green-500 bg-green-500/10' : 'border-gray-600 hover:border-green-500'
        }`}
      >
        <input {...getInputProps()} />
        <div className="space-y-2">
          <i className="fa-solid fa-cloud-arrow-up text-4xl text-green-500"></i>
          <p className="font-courier">
            {isDragActive ? '释放文件以上传' : '拖拽文件到此处或点击选择文件'}
          </p>
          <p className="text-sm text-gray-400">支持 JPG, PNG, GIF, MP4, PDF, DOC 等格式</p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-6 space-y-4">
          <h3 className="font-courier">已选择文件:</h3>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li key={file.name} className="flex justify-between items-center p-2 bg-black/50 rounded">
                <span className="truncate max-w-xs">{file.name}</span>
                <button
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-400"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {isUploading && (
        <div className="mt-6">
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div
              className="bg-green-500 h-2.5 rounded-full"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
          <p className="mt-2 text-right font-courier">{uploadProgress}%</p>
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={isUploading || files.length === 0}
        className={`mt-6 w-full px-4 py-2 rounded font-courier transition-colors ${
          isUploading || files.length === 0
            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
            : 'bg-green-500/10 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black'
        }`}
      >
        {isUploading ? '上传中...' : '开始上传'}
      </button>
    </div>
  );
}