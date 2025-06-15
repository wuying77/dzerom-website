import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '@/App';

export default function Footer() {
  const { language } = useContext(LanguageContext);
  
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50 px-8 py-4 border-t border-green-500/30">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4">
        <Link to="/" className="px-4 py-2 bg-green-500/10 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors font-courier">
          {language === 'zh' ? '返回首页' : 'Back to Home'}
        </Link>
        <div className="w-full flex justify-between items-center text-green-500 font-courier text-sm">
          <span>© 2025 Dimension Zero. All rights reserved.</span>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-300 transition-colors">
              {language === 'zh' ? '条款' : 'Terms'}
            </a>
            <a href="#" className="hover:text-green-300 transition-colors">
              {language === 'zh' ? '隐私' : 'Privacy'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}