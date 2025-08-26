import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ModernSixRealms from '@/components/awakening-guide/ModernSixRealms';
import EmpathySuffering from '@/components/awakening-guide/EmpathySuffering';
import AwakeningArticles from '@/components/awakening-guide/AwakeningArticles';

export default function AwakeningGuide() {
  return (
    <div className="min-h-screen bg-[#2A0B45] text-green-500">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-32 space-y-12">
        <h1 className="text-4xl font-cinzel mb-12 text-center text-green-400">觉醒者手册</h1>
        
        <ModernSixRealms />
        <EmpathySuffering />
        <AwakeningArticles />
      </main>
      
      <Footer />
    </div>
  );
}
