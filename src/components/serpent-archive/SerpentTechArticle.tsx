import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '@/App';
import { articles } from './SerpentArticles';
 
export default function SerpentTechArticle() {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  const { id } = useParams();
  const article = articles.find(a => a.id === Number(id));

  if (!article) {
    return <div>{language === 'zh' ? '文章未找到' : 'Article not found'}</div>;
  }

  return (
    <div className="p-6 bg-black/70 rounded-lg border border-red-500/30 max-w-4xl mx-auto">
      <button 
        onClick={() => navigate('/serpent-archive')}
        className="mb-8 px-4 py-2 bg-red-500/10 border border-red-500 text-red-500 hover:bg-red-500 hover:text-black transition-colors font-courier"
      >
        {language === 'zh' ? '返回档案库' : 'Back to Archive'}
      </button>
      
      <h1 className="text-3xl font-cinzel mb-6 text-red-500">
        {language === 'zh' ? article.title : article.titleEn}
      </h1>
      
      <div className="font-courier whitespace-pre-line leading-relaxed">
        {language === 'zh' ? article.content : article.contentEn}
      </div>
    </div>
  );
}
