import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TheorySummary from '@/components/cosmic-phase/TheorySummary';
import ResearchPapers from '@/components/cosmic-phase/ResearchPapers';
import VideoLectures from '@/components/cosmic-phase/VideoLectures';
import PhaseMatrix from '@/components/cosmic-phase/PhaseMatrix';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useTextZoom } from '@/hooks/useTextZoom';

export default function CosmicPhaseTheory() {
  const { isDark, toggleDarkMode } = useDarkMode();
  const { zoomLevel, setZoomLevel } = useTextZoom();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-gray-200' : 'bg-purple-900 text-white'}`}>
      <Navbar />
      
      <main className="container mx-auto px-4 py-20" style={{ fontSize: `${zoomLevel}px` }}>
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-cinzel">宇宙阴阳相位论</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="mr-2 font-courier">A-</span>
              <input
                type="range"
                min="12"
                max="24"
                value={zoomLevel}
                onChange={(e) => setZoomLevel(Number(e.target.value))}
                className="w-24"
              />
              <span className="ml-2 font-courier">A+</span>
            </div>
            <button
              onClick={toggleDarkMode}
              className="px-4 py-2 border border-purple-500 rounded font-courier hover:bg-purple-500 hover:text-white transition-colors"
            >
              {isDark ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>

        <div className="space-y-20">
          <TheorySummary isDark={isDark} />
          <ResearchPapers isDark={isDark} />
          <VideoLectures isDark={isDark} />
          <PhaseMatrix isDark={isDark} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
