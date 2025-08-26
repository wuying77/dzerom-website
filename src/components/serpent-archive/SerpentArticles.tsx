import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '@/App';

export const articles = {
  zh: [
    {
      id: 1,
      title: '蛇神文明能量网格研究',
      content: `全球蛇神文明遗迹的能量网络分析...` // 这里放原有文章内容
    },
    {
      id: 2,
      title: '被遗忘的蛇神文明网络与地球地下高科技矩阵',
      content: `如果你相信人类文明只有五千年历史...` // 这里放用户提供的文章内容
    }
  ],
  en: [
    {
      id: 1,
      title: 'Research on Serpent Civilization Energy Grid',
      content: `Analysis of energy networks in global serpent civilization relics...`
    },
    {
      id: 2,
      title: 'The Forgotten Serpent Civilization Network and Earth\'s Underground High-Tech Matrix',
      content: `If you believe human civilization is only 5,000 years old...`
    }
  ]
};

export default function SerpentArticles() {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const langArticles = articles[language as keyof typeof articles] || articles.zh;

  return (
    <div className="p-6 bg-black/70 rounded-lg border border-red-500/30">
      <h3 className="text-xl font-cinzel mb-4">蛇神文明研究文章</h3>
      
      <div className="space-y-6">
        {langArticles.map(article => (
          <div 
            key={article.id}
            className="p-4 border border-red-500/30 rounded cursor-pointer hover:bg-red-500/10 transition-colors"
            onClick={() => navigate(`/serpent-archive/article/${article.id}`)}
          >
            <h4 className="text-lg font-cinzel text-red-500">{article.title}</h4>
            <p className="font-courier mt-2 line-clamp-2">{article.content.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}
