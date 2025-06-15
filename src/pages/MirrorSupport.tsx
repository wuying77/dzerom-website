import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const articles = [
  {
    id: 1,
    title: '量子相位与文明跃迁',
    source: 'Substack',
    excerpt: '探讨量子相位如何影响文明发展轨迹的最新研究',
    date: '2025-05-15',
    url: '#'
  },
  {
    id: 2,
    title: '蛇神文明考古新发现',
    source: 'Medium',
    excerpt: '在南美雨林中发现的新遗迹证实了全球蛇神文明网络的存在',
    date: '2025-04-28',
    url: '#'
  },
  {
    id: 3,
    title: '意识频谱测量技术',
    source: 'Substack',
    excerpt: '开发新型意识测量设备，可精确量化人类意识状态',
    date: '2025-03-10',
    url: '#'
  },
  {
    id: 4,
    title: '古代能量网格重建',
    source: 'Medium',
    excerpt: '通过卫星图像分析重建上古文明全球能量传输网络',
    date: '2025-02-22',
    url: '#'
  }
];

export default function MirrorSupport() {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const sortedArticles = [...articles].sort((a, b) => {
    return sortOrder === 'desc' 
      ? new Date(b.date).getTime() - new Date(a.date).getTime()
      : new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setFormErrors({
      ...formErrors,
      [name]: false
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = { ...formErrors };

    if (!formData.name.trim()) {
      newErrors.name = true;
      isValid = false;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = true;
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = true;
      isValid = false;
    }

    setFormErrors(newErrors);

    if (isValid) {
      // 这里可以添加表单提交逻辑
      alert('表单验证通过，感谢您的留言！');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-32">
        <h1 className="text-4xl font-cinzel mb-12 text-center">镜像与支持</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 文章聚合区域 */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-cinzel">文章聚合</h2>
              <button
                onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
                className="px-4 py-2 bg-green-500/10 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors"
              >
                {sortOrder === 'desc' ? '最新优先 ↓' : '最早优先 ↑'}
              </button>
            </div>
            
            <div className="space-y-6">
              {sortedArticles.map(article => (
                <div key={article.id} className="p-6 bg-black/30 rounded-lg border border-green-500/30">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium">{article.title}</h3>
                    <span className="text-sm text-green-500">{article.source}</span>
                  </div>
                  <p className="text-gray-300 mb-3">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{article.date}</span>
                    <a 
                      href={article.url} 
                      className="text-green-500 hover:underline font-courier"
                    >
                      阅读更多 →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 联系与支持区域 */}
          <div>
            <h2 className="text-2xl font-cinzel mb-6">联系通道</h2>
            
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-courier">姓名</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 bg-black/50 border ${formErrors.name ? 'border-red-500' : 'border-green-500'} text-white`}
                  />
                  {formErrors.name && <p className="text-red-500 text-sm mt-1">请输入您的姓名</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1 font-courier">邮箱</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 bg-black/50 border ${formErrors.email ? 'border-red-500' : 'border-green-500'} text-white`}
                  />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">请输入有效的邮箱地址</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1 font-courier">留言</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-2 bg-black/50 border ${formErrors.message ? 'border-red-500' : 'border-green-500'} text-white`}
                  ></textarea>
                  {formErrors.message && <p className="text-red-500 text-sm mt-1">请输入您的留言内容</p>}
                </div>
                
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-green-500/10 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors"
                >
                  发送留言
                </button>
              </div>
            </form>
            
            <div className="space-y-6">
              <div className="p-6 bg-black/30 rounded-lg border border-green-500/30">
                <h3 className="text-xl font-cinzel mb-4">订阅我们的Substack</h3>
                <p className="mb-4">获取最新研究文章和独家内容</p>
                <button className="w-full px-4 py-2 bg-orange-500/10 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition-colors">
                  订阅 Newsletter
                </button>
              </div>
              
              <div className="p-6 bg-black/30 rounded-lg border border-green-500/30">
                <h3 className="text-xl font-cinzel mb-4">支持我们的研究</h3>
                <p className="mb-4">通过Patreon赞助我们的工作</p>
                <button className="w-full px-4 py-2 bg-red-500/10 border border-red-500 text-red-500 hover:bg-red-500 hover:text-black transition-colors">
                  成为赞助者
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
