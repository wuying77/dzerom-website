const files = [
  {
    id: 1,
    name: '蒙托克档案-第一卷.pdf',
    size: '4.7MB',
    encrypted: true,
    clearance: '最高机密'
  },
  {
    id: 2,
    name: '道西基地访谈录.pdf',
    size: '2.3MB',
    encrypted: true,
    clearance: '机密'
  },
  {
    id: 3,
    name: '特斯拉未发表手稿.pdf',
    size: '8.1MB',
    encrypted: false,
    clearance: '受限'
  },
  {
    id: 4,
    name: '51区蓝皮书-修订版.pdf',
    size: '5.6MB',
    encrypted: true,
    clearance: '最高机密'
  },
  {
    id: 5,
    name: '西藏古代科技研究.pdf',
    size: '3.2MB',
    encrypted: false,
    clearance: '受限'
  }
];

export default function SecretFiles() {
  return (
    <div className="p-6 bg-black/70 rounded-lg border border-green-500/30">
      <h3 className="text-xl font-cinzel mb-4">机密档案管理</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-green-500/30">
              <th className="text-left py-2 px-4">文件名</th>
              <th className="text-left py-2 px-4">大小</th>
              <th className="text-left py-2 px-4">加密状态</th>
              <th className="text-left py-2 px-4">密级</th>
              <th className="text-right py-2 px-4">操作</th>
            </tr>
          </thead>
          <tbody>
            {files.map(file => (
              <tr key={file.id} className="border-b border-green-500/10 hover:bg-green-500/5">
                <td className="py-3 px-4">{file.name}</td>
                <td className="py-3 px-4">{file.size}</td>
                <td className="py-3 px-4">
                  {file.encrypted ? (
                    <span className="text-red-500">已加密 <i class="fa-solid fa-lock"></i></span>
                  ) : (
                    <span className="text-green-500">未加密 <i class="fa-solid fa-lock-open"></i></span>
                  )}
                </td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 text-xs rounded ${
                    file.clearance === '最高机密' ? 'bg-red-500/20 text-red-500' :
                    file.clearance === '机密' ? 'bg-purple-500/20 text-purple-500' :
                    'bg-blue-500/20 text-blue-500'
                  }`}>
                    {file.clearance}
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <button className="px-3 py-1 bg-green-500/10 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors">
                    下载
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
