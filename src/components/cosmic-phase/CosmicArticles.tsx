import { useContext } from 'react';
import { LanguageContext } from '@/App';
import { useNavigate } from 'react-router-dom';

const articles = {
  zh: [
    {
      id: 1,
      title: '量子相位与文明跃迁',
      excerpt: '探讨量子相位如何影响文明发展轨迹',
      date: '2023.06'
    },
    {
      id: 2,
      title: '阴阳相位全息模型',
      excerpt: '基于全息原理的宇宙阴阳相位统一模型',
      date: '2024.05'
    },
    {
      id: 3,
      title: '宇宙阴阳相论：宇宙能量循环的激进观点',
      excerpt: '阴阳形而上学与多维相循环的统一框架',
      date: '2025.06'
    }
  ],
  en: [
    {
      id: 1,
      title: 'Quantum Phase and Civilization Transition',
      excerpt: 'Exploring how quantum phases influence civilization development trajectories',
      date: '2023.06'
    },
    {
      id: 2,
      title: 'Yin-Yang Phase Holographic Model',
      excerpt: 'A unified model of cosmic yin-yang phases based on holographic principles',
      date: '2024.05'
    },
    {
      id: 3,
      title: 'Cosmic Yin-Yang Phase Theory',
      excerpt: 'A unified framework of yin-yang metaphysics and multidimensional phase cycles',
      date: '2025.06'
    }
  ]
};

export default function CosmicArticles({ isDark }: { isDark: boolean }) {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const langArticles = articles[language as keyof typeof articles] || articles.zh;

  return (
     <section className={`p-8 rounded-lg ${isDark ? 'bg-gray-900' : 'bg-white'} border border-green-500/30`}>
      <h2 className="text-2xl font-cinzel mb-6 text-green-500">宇宙阴阳相位论文章</h2>
      <div className="space-y-4">
        {langArticles.map(article => (
          <div 
            key={article.id}
            className="p-4 border border-purple-500/30 rounded cursor-pointer hover:bg-purple-500/10 transition-colors"
            onClick={() => navigate(`/cosmic-phase/articles/${article.id}`)}
          >
            <h3 className="text-lg font-medium">{article.title}</h3>
            <p className="text-sm opacity-80 mt-2">{article.excerpt}</p>
            <p className="text-xs opacity-60 mt-2">{article.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
