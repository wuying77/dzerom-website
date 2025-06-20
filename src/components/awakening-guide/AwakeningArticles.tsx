import { useContext } from 'react';
import { LanguageContext } from '@/App';
import MoonMatrix from './MoonMatrix';
import { useNavigate } from 'react-router-dom';

export default function AwakeningArticles() {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  return (
    <section className="p-6 bg-black/30 rounded-lg border border-green-500/30">
      <h2 className="text-2xl font-cinzel mb-6 text-green-400">
        {language === 'zh' ? '觉醒者文章' : 'Awakening Articles'}
      </h2>
      
      <div className="space-y-4 text-green-500">
        <MoonMatrix />
      </div>
    </section>
  );
}