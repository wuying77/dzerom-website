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
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles?.length) {
      setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
      
      // 生成预览URL
      const newPreviewUrls = acceptedFiles.map(file => 
        URL.createObjectURL(file)
      );
      setPreviewUrls(prev => [...prev, ...newPreviewUrls]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
      accept: {
        'image/*': ['.jpeg', '.png', '.jpg', '.gif', '.webp'],
        'video/*': ['.mp4', '.mov', '.avi', '.webm'],
        'application/*': ['.pdf', '.doc', '.docx', '.txt']
      },
    maxFiles: 10,
    multiple: true,
    maxSize: 10 * 1024 * 1024 // 10MB
  });

  const removeFile = (index: number) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
    setPreviewUrls(prevUrls => {
      const newUrls = [...prevUrls];
      URL.revokeObjectURL(newUrls[index]);
      return newUrls.filter((_, i) => i !== index);
    });
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      toast.warning('请先选择要上传的文件');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    try {
      // 开发模式下直接保存文件到本地
      if (process.env.NODE_ENV === 'development') {
        // 模拟上传进度
        const interval = setInterval(() => {
          setUploadProgress(prev => {
            if (prev >= 100) {
              clearInterval(interval);
              return 100;
            }
            return prev + 10;
          });
        }, 200);

        // 保存文件信息到localStorage
        const savedFiles = JSON.parse(localStorage.getItem('uploaded-files') || '[]');
        const newFiles = files.map(file => ({
          name: file.name,
          type: file.type,
          size: file.size,
          lastModified: file.lastModified,
          previewUrl: URL.createObjectURL(file)
        }));
        
        localStorage.setItem('uploaded-files', JSON.stringify([...savedFiles, ...newFiles]));
        
        await new Promise(resolve => setTimeout(resolve, 2000));
        clearInterval(interval);
        toast.success('开发模式: 文件已保存到本地存储');
        setFiles([]);
        setPreviewUrls([]);
        return;
      }

      // 生产环境使用真实API上传
      // 注意：需要部署后端服务才能使用此功能
      // 示例Node.js后端代码可在项目文档中找到
      const formData = new FormData();
      files.forEach(file => {
        formData.append('files', file);
      });

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          toast.success('上传成功！');
          setFiles([]);
          setPreviewUrls([]);
        } else {
          const errorData = await response.json();
          toast.error(`上传失败: ${errorData.message || '未知错误'}`);
        }
      } catch (error) {
        toast.error('无法连接到服务器，请检查后端服务是否运行');
      }
    } catch (error) {
      toast.error('上传出错');
    } finally {
      setIsUploading(false);
      setUploadProgress(100);
    }
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
          <p className="text-sm text-gray-400">支持 JPG, PNG, GIF, MP4, PDF, DOC 等格式 (最大10MB)</p>
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
          
          {/* 图片预览区域 */}
          {contentType === 'image' && previewUrls.length > 0 && (
            <div className="mt-4">
              <h4 className="font-courier mb-2">图片预览:</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {previewUrls.map((url, index) => (
                  <div key={index} className="relative group">
                    <img 
                      src={url} 
                      alt={`预览 ${files[index].name}`}
                      className="w-full h-32 object-cover rounded border border-green-500/30"
                    />
                    <button
                      onClick={() => removeFile(index)}
                      className="absolute top-1 right-1 bg-black/70 rounded-full p-1 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <i className="fa-solid fa-times"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
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