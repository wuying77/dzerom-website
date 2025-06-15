import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const initialData = [
  { year: '秦', value: 85 },
  { year: '汉', value: 92 },
  { year: '唐', value: 88 },
  { year: '宋', value: 76 },
  { year: '元', value: 68 },
  { year: '明', value: 72 },
  { year: '清', value: 65 },
  { year: '民国', value: 45 },
  { year: '现代', value: 78 },
];

export default function CycleSimulation() {
  const [data, setData] = useState(initialData);
  const [params, setParams] = useState({
    cycleLength: 300,
    stability: 70,
    externalFactor: 50,
  });

  const handleParamChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setParams({
      ...params,
      [name]: Number(value),
    });
    
    // 模拟参数变化对数据的影响
    const newData = initialData.map((item, index) => ({
      ...item,
      value: Math.max(10, Math.min(100, 
        item.value + (Math.random() - 0.5) * (100 - params.stability) / 10 +
        (index % 2 === 0 ? params.externalFactor / 50 : -params.externalFactor / 50)
      ))
    }));
    setData(newData);
  };

  return (
    <div className="p-6 bg-black/70 rounded-lg border border-green-500/30">
      <h3 className="text-xl font-cinzel mb-4">政权周期推演</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block mb-2">周期长度</label>
            <input
              type="range"
              name="cycleLength"
              min="50"
              max="500"
              value={params.cycleLength}
              onChange={handleParamChange}
              className="w-full"
            />
            <span>{params.cycleLength}年</span>
          </div>
          
          <div>
            <label className="block mb-2">稳定性</label>
            <input
              type="range"
              name="stability"
              min="10"
              max="90"
              value={params.stability}
              onChange={handleParamChange}
              className="w-full"
            />
            <span>{params.stability}%</span>
          </div>
          
          <div>
            <label className="block mb-2">外部因素</label>
            <input
              type="range"
              name="externalFactor"
              min="0"
              max="100"
              value={params.externalFactor}
              onChange={handleParamChange}
              className="w-full"
            />
            <span>{params.externalFactor}%</span>
          </div>
        </div>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#00FF00" opacity={0.3} />
              <XAxis dataKey="year" stroke="#00FF00" />
              <YAxis stroke="#00FF00" domain={[0, 100]} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', borderColor: '#00FF00' }}
                labelStyle={{ color: '#00FF00' }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#00FF00" 
                strokeWidth={2}
                dot={{ fill: '#00FF00' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
