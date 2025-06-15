import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MeditationGuide from '@/components/awakening-guide/MeditationGuide';
import ConsciousnessSpectrum from '@/components/awakening-guide/ConsciousnessSpectrum';
import ClassicAnalysis from '@/components/awakening-guide/ClassicAnalysis';
import AudioLibrary from '@/components/awakening-guide/AudioLibrary';

export default function AwakeningGuide() {
  return (
    <div className="min-h-screen bg-[#2A0B45] text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-32 space-y-12">
        <h1 className="text-4xl font-cinzel mb-12 text-center">觉醒者手册</h1>
        
        <MeditationGuide />
        <ConsciousnessSpectrum />
        <ClassicAnalysis />
        <AudioLibrary />
      </main>
      
      <Footer />
    </div>
  );
}
