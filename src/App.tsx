import { Routes, Route } from "react-router-dom";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MirrorSupport from "@/pages/MirrorSupport";
import AwakeningGuide from "@/pages/AwakeningGuide";
import Home from "@/pages/Home";
import CosmicPhaseTheory from "@/pages/CosmicPhaseTheory";
import SerpentArchive from "@/pages/SerpentArchive";
import BlackVault from "@/pages/BlackVault";
import ArticleDetail from "@/components/cosmic-phase/ArticleDetail";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => {},
  logout: () => {},
});

export const LanguageContext = createContext({
  language: 'zh',
  setLanguage: (lang: string) => {},
});

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [language, setLanguage] = useState('zh');

  useEffect(() => {
    const savedLang = localStorage.getItem('dimension-zero-lang');
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('dimension-zero-lang', lang);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cosmic-phase" element={<CosmicPhaseTheory />} />
          <Route path="/cosmic-phase/articles/:id" element={<ArticleDetail />} />
          <Route path="/serpent-archive" element={<SerpentArchive />} />
          <Route path="/serpent-archive/serpent-tech" element={<SerpentArchive />} />
          <Route path="/black-vault" element={<BlackVault />} />
          <Route path="/awakening" element={<AwakeningGuide />} />
          <Route path="/awakening/articles/:id" element={<ArticleDetail />} />
          <Route path="/about" element={
            <div className="min-h-screen bg-black text-white">
              <Navbar />
              <main className="container mx-auto px-4 pt-24 pb-32">
                <h1 className="text-4xl font-cinzel mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">关于</h1>
                <div className="max-w-3xl mx-auto space-y-8 font-courier">
                  <p>本网站致力于探索宇宙阴阳相位论、蛇神文明档案、隐秘历史档案和意识觉醒技术。</p>
                  
                  <h2 className="text-2xl font-cinzel text-green-500">宇宙阴阳相位论</h2>
                  <p>研究量子纠缠与全息原理的全新宇宙观，揭示文明发展的相位跃迁规律。</p>
                  
                  <h2 className="text-2xl font-cinzel text-green-500">蛇神文明档案库</h2>
                  <p>收集全球蛇神崇拜遗迹与文物，分析上古高维文明的相位操控技术。</p>
                  
                  <h2 className="text-2xl font-cinzel text-green-500">黑档案室</h2>
                  <p>解密被掩盖的历史事件与异类科技，包括意识控制、能量武器等机密研究。</p>
                  
                  <h2 className="text-2xl font-cinzel text-green-500">觉醒者手册</h2>
                  <p>提供冥想技术、意识频谱分析和经典文献解读，帮助个体实现意识跃迁。</p>
                </div>
              </main>
              <Footer />
            </div>
          } />
          <Route path="/contact" element={
            <div className="min-h-screen bg-black text-white">
              <Navbar />
              <main className="container mx-auto px-4 pt-24 pb-32">
                <h1 className="text-4xl font-cinzel mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">联系</h1>
                <div className="max-w-3xl mx-auto text-center font-courier">
                  <p className="mb-8">订阅我们的Substack获取最新研究内容：</p>
                  <a href="https://dimensionzero.substack.com" className="text-2xl text-green-500 hover:underline">
                    https://dimensionzero.substack.com
                  </a>
                </div>
              </main>
              <Footer />
            </div>
          } />
          <Route path="/mirror-support" element={<MirrorSupport />} />
        </Routes>
      </LanguageContext.Provider>
    </AuthContext.Provider>
  );
}
