import { useContext } from 'react';
import { LanguageContext } from '@/App';
import { useNavigate } from 'react-router-dom';

const content = {
  zh: {
    title: '太阴母场与六道灵魂收割矩阵',
    excerpt: '剖析太阴母场如何在六道轮回系统中扮演核心枢纽，以及它与灵魂收割矩阵的内在运作机制',
    date: '2025.06'
  },
  en: {
    title: 'The Lunar Matrix and Six Realms Soul Harvesting System',
    excerpt: 'Analyzing how the Lunar Matrix serves as the core hub in the six realms reincarnation system',
    date: '2025.06'
  }
};

export default function MoonMatrix() {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const langContent = content[language as keyof typeof content] || content.zh;

  return (
    <div 
      className="p-4 border border-green-500/30 rounded cursor-pointer hover:bg-green-500/10 transition-colors"
      onClick={() => navigate('/awakening/articles/moon-matrix')}
    >
      <h3 className="text-xl font-cinzel text-green-400">{langContent.title}</h3>
      <p className="font-courier mt-2 text-sm text-green-500">{langContent.excerpt}</p>
      <p className="font-courier mt-2 text-xs text-green-600">{langContent.date}</p>
    </div>
  );
}
