import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RelicHeatmap from '@/components/serpent-archive/RelicHeatmap';
import MythologyGraph from '@/components/serpent-archive/MythologyGraph';
import Artifact3DViewer from '@/components/serpent-archive/Artifact3DViewer';
import DocumentVideos from '@/components/serpent-archive/DocumentVideos';
import { useEffect } from 'react';

export default function SerpentArchive() {
  useEffect(() => {
    // 添加脉冲动画样式
    const style = document.createElement('style');
    style.innerHTML = `
      .pulse-dot {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #ff0000;
        box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);
        animation: pulse 2s infinite;
      }
      @keyframes pulse {
        0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7); }
        70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(255, 0, 0, 0); }
        100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 0, 0, 0); }
      }
      .relic-map-tiles { filter: grayscale(100%) invert(1) contrast(0.6) hue-rotate(180deg); }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-32">
        <h1 className="text-4xl font-cinzel mb-12 text-center">蛇神文明档案库</h1>
        
        <div className="space-y-12">
          <div className="h-[500px]">
            <RelicHeatmap />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <MythologyGraph />
            <Artifact3DViewer />
          </div>
          
          <DocumentVideos />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
