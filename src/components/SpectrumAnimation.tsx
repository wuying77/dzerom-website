import { useEffect, useState } from 'react';

export default function SpectrumAnimation() {
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    const generateBars = () => {
      const newBars = Array(20).fill(0).map(() => Math.random() * 100);
      setBars(newBars);
    };

    generateBars();
    const interval = setInterval(generateBars, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex items-end overflow-hidden">
      {bars.map((height, index) => (
        <div 
          key={index}
          className="flex-1 bg-green-500/20 transition-all duration-300 ease-in-out"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}