import { useParams, useNavigate } from 'react-router-dom';
import { articles } from './ResearchPapers';
import { useContext } from 'react';
import { LanguageContext } from '@/App';
 
export default function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  const article = articles.find(a => a.id === Number(id));

  if (!article) {
    return <div>{language === 'zh' ? '文章未找到' : 'Article not found'}</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 px-4 py-2 bg-green-500/10 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors"
        >
          {language === 'zh' ? '返回论文列表' : 'Back to Articles'}
        </button>
        
        <h1 className="text-3xl font-cinzel mb-6">
          {language === 'zh' ? article.title : (article.titleEn || article.title)}
        </h1>
        <div className="font-courier whitespace-pre-line leading-relaxed">
          {language === 'zh' ? article.content : (article.contentEn || article.content)}
          
          {article.media && article.media.map((item, index) => (
            <div key={index} className="my-8">
              {item.type === 'image' ? (
                <div>
                  <img 
                    src={item.url} 
                    alt={item.caption}
                    className="w-full h-auto rounded-lg border border-green-500/30"
                  />
                  <p className="text-center text-sm text-green-500 mt-2">{item.caption}</p>
                </div>
              ) : (
                <div>
                  <video 
                    src={item.url}
                    controls
                    className="w-full rounded-lg border border-green-500/30"
                  />
                  <p className="text-center text-sm text-green-500 mt-2">{item.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}