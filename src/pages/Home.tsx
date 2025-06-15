import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SnakeEyeLogo from '@/components/SnakeEyeLogo';
import SpectrumAnimation from '@/components/SpectrumAnimation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageContext } from '@/App';

export default function Home() {
  const navigate = useNavigate();
  const [showSlogan, setShowSlogan] = useState(false);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const timer = setTimeout(() => setShowSlogan(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const modules = [
    { 
      name: language === 'zh' ? '宇宙阴阳相位论' : 'Cosmic Phase Theory', 
      path: '/cosmic-phase' 
    },
    { 
      name: language === 'zh' ? '蛇神文明档案库' : 'Serpent Archive', 
      path: '/serpent-archive' 
    },
    { 
      name: language === 'zh' ? '黑档案室' : 'Black Vault', 
      path: '/black-vault' 
    },
    { 
      name: language === 'zh' ? '觉醒者手册' : 'Awakening Guide', 
      path: '/awakening' 
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="mb-16">
          <SnakeEyeLogo />
        </div>
        
        {showSlogan && (
          <h1 className="text-4xl md:text-6xl font-cinzel mb-16 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]">
            {language === 'zh' ? '篡改宇宙编码，重建文明叙事' : 'Recode the Cosmos, Rewrite Civilization'}
          </h1>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((module, index) => (
            <button
              key={index}
              onClick={() => navigate(module.path)}
              className="px-8 py-4 border border-green-500 text-green-500 font-courier hover:bg-green-500 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50"
            >
              {module.name}
            </button>
          ))}
        </div>
      </div>
      
      <SpectrumAnimation />
      <Footer />
    </div>
  );
}