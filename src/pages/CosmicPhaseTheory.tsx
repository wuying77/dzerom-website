import { useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TheorySummary from '@/components/cosmic-phase/TheorySummary';
import ResearchPapers from '@/components/cosmic-phase/ResearchPapers';
import VideoLectures from '@/components/cosmic-phase/VideoLectures';
import PhaseMatrix from '@/components/cosmic-phase/PhaseMatrix';
import CosmicArticles from '@/components/cosmic-phase/CosmicArticles';
import TaoTeChingBlackBook from '@/components/cosmic-phase/TaoTeChingBlackBook';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useTextZoom } from '@/hooks/useTextZoom';

export default function CosmicPhaseTheory() {
  const { isDark, toggleDarkMode } = useDarkMode();
  const { zoomLevel, setZoomLevel } = useTextZoom();

  const theoryRef = useRef<HTMLDivElement>(null);
  const taoRef = useRef<HTMLDivElement>(null);
  const otherRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-green-500' : 'bg-white text-black'}`}>
      <Navbar />
      
      <main className="container mx-auto px-4 py-20" style={{ fontSize: `${zoomLevel}px` }}>
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-cinzel text-green-500">宇宙阴阳相位论</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="mr-2 font-courier text-green-500">A-</span>
              <input
                type="range"
                min="12"
                max="24"
                value={zoomLevel}
                onChange={(e) => setZoomLevel(Number(e.target.value))}
                className="w-24"
              />
              <span className="ml-2 font-courier text-green-500">A+</span>
            </div>
            <button
              onClick={toggleDarkMode}
              className="px-4 py-2 border border-green-500 rounded font-courier text-green-500 hover:bg-green-500 hover:text-black transition-colors"
            >
              {isDark ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>

        {/* 新增导航栏 */}
        <div className="flex justify-center mb-12 space-x-4">
          <button 
            onClick={() => scrollToRef(theoryRef)}
             className={`px-6 py-2 rounded font-courier text-green-500 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            宇宙阴阳相位论
          </button>
          <button 
            onClick={() => scrollToRef(otherRef)}
             className={`px-6 py-2 rounded font-courier text-green-500 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            其它资料
          </button>
        </div>

        <div ref={theoryRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <TheorySummary isDark={isDark} />
          </div>
          <div className="space-y-8">
            <CosmicArticles isDark={isDark} />
            <PhaseMatrix isDark={isDark} />
          </div>
        </div>
        
        <div ref={otherRef} className="mt-8 space-y-8">
          <VideoLectures isDark={isDark} />
          <ResearchPapers isDark={isDark} />
        </div>
      </main>

      <Footer />
    </div>
  );
}