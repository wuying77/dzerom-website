import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '@/App';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50 px-8 py-4 border-b border-green-500/30">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-green-500 font-cinzel text-xl hover:text-green-300 transition-colors">
          Dimension Zero
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/about" className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 font-courier transition-colors">
            {language === 'zh' ? '关于' : 'About'}
          </Link>
          <Link to="/contact" className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 font-courier transition-colors">
            {language === 'zh' ? '联系' : 'Contact'}
          </Link>
          <select 
            value={language}
            onChange={handleLanguageChange}
            className="bg-black border border-green-500 text-green-500 px-2 py-1 rounded font-courier"
          >
            <option value="zh">中文</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </nav>
  );
}