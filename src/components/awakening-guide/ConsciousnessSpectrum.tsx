import { useState, useEffect } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

const initialState = [
  { subject: '专注力', value: 50 },
  { subject: '创造力', value: 50 },
  { subject: '直觉', value: 50 },
  { subject: '情绪', value: 50 },
  { subject: '身体感知', value: 50 },
];

export default function ConsciousnessSpectrum() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('consciousness-spectrum');
    return saved ? JSON.parse(saved) : initialState;
  });

  useEffect(() => {
    localStorage.setItem('consciousness-spectrum', JSON.stringify(data));
  }, [data]);

  const handleChange = (index: number, value: number) => {
    const newData = [...data];
    newData[index].value = value;
    setData(newData);
  };

  return (
    <section className="p-6 bg-black/30 rounded-lg border border-green-500/30">
      <h2 className="text-2xl font-cinzel mb-4">意识频谱</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid stroke="#00FF00" opacity={0.3} />
              <PolarAngleAxis dataKey="subject" stroke="#00FF00" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#00FF00" />
              <Radar 
                name="当前状态" 
                dataKey="value" 
                stroke="#00FF00" 
                fill="#00FF00" 
                fillOpacity={0.2} 
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="space-y-4">
          {data.map((item: any, index: number) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-courier">{item.subject}</span>
                <span className="font-courier">{item.value}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={item.value}
                onChange={(e) => handleChange(index, parseInt(e.target.value))}
                className="w-full"
              />
            </div>
          ))}
          
          <button
            onClick={() => setData(initialState)}
            className="px-4 py-2 bg-green-500/10 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors"
          >
            重置为默认值
          </button>
        </div>
      </div>
    </section>
  );
}
