import { useState, useEffect } from 'react';

const steps = [
  "准备阶段：找一个安静舒适的地方坐下，保持脊柱挺直",
  "呼吸调整：深呼吸5次，吸气4秒，屏息2秒，呼气6秒",
  "专注练习：将注意力集中在呼吸上，观察气息进出",
  "身体扫描：从头顶开始，逐步放松身体的每个部位",
  "意识扩展：想象意识像光一样向四周扩散",
  "结束阶段：慢慢带回意识，活动手指和脚趾"
];

export default function MeditationGuide() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathPhase, setBreathPhase] = useState('inhale');

  useEffect(() => {
    let interval: ReturnType<typeof setTimeout>;
    if (isBreathing) {
      interval = setInterval(() => {
        setBreathPhase(prev => {
          if (prev === 'inhale') return 'hold';
          if (prev === 'hold') return 'exhale';
          return 'inhale';
        });
      }, breathPhase === 'inhale' ? 4000 : breathPhase === 'hold' ? 2000 : 6000);
    }
    return () => clearInterval(interval);
  }, [isBreathing, breathPhase]);

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
    if (index >= 1 && index <= 5) { // 步骤2-6
      setIsBreathing(true);
      setBreathPhase('inhale'); // 重置为吸气阶段
    }
  };

  const toggleBreathing = () => {
    setIsBreathing(!isBreathing);
    if (!isBreathing && currentStep >= 1 && currentStep <= 5) {
      setBreathPhase('inhale'); // 重置为吸气阶段
    }
  };

  return (
    <section className="p-6 bg-black/30 rounded-lg border border-green-500/30">
      <h2 className="text-2xl font-cinzel mb-4">冥想指南</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`p-4 rounded ${currentStep === index ? 'bg-green-500/10 border border-green-500' : 'bg-black/20'} cursor-pointer`}
              onClick={() => handleStepClick(index)}
            >
              <span className="font-courier">步骤 {index + 1}:</span> {step}
            </div>
          ))}
          
          <button
            onClick={toggleBreathing}
            className="mt-4 px-4 py-2 bg-green-500/10 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors"
          >
            {isBreathing ? '暂停呼吸练习' : '开始呼吸练习'}
          </button>
        </div>
        
        <div className="flex items-center justify-center">
          <div 
            className={`w-40 h-40 rounded-full flex items-center justify-center transition-all duration-1000 ease-in-out cursor-pointer ${
              breathPhase === 'inhale' ? 'bg-green-500/30 scale-110' : 
              breathPhase === 'hold' ? 'bg-yellow-500/30 scale-100' : 
              'bg-red-500/30 scale-90'
            }`}
            style={{ 
              transitionDuration: breathPhase === 'inhale' ? '4s' : 
                               breathPhase === 'hold' ? '2s' : '6s' 
            }}
            onClick={toggleBreathing}
          >
            <span className="font-courier">
              {isBreathing ? (
                breathPhase === 'inhale' ? '吸气...' : 
                breathPhase === 'hold' ? '屏息...' : '呼气...'
              ) : '点击开始练习'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
