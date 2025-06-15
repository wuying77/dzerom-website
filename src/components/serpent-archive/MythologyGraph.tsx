import { useState } from 'react';
import { Sankey } from 'recharts';

const data = {
  nodes: [
    { name: '纳迦', type: '印度' },
    { name: '羽蛇神', type: '玛雅' },
    { name: '八岐大蛇', type: '日本' },
    { name: '伏羲女娲', type: '中国' },
    { name: '乌洛波洛斯', type: '北欧' }
  ],
  links: [
    { source: 0, target: 1, value: 5 },
    { source: 0, target: 2, value: 3 },
    { source: 0, target: 3, value: 7 },
    { source: 1, target: 4, value: 4 },
    { source: 2, target: 4, value: 2 },
    { source: 3, target: 4, value: 6 }
  ]
};

export default function MythologyGraph() {
  const [era, setEra] = useState('all');

  return (
    <div className="p-6 bg-black/70 rounded-lg border border-red-500/30">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-cinzel">神话关系图谱</h3>
        <select 
          value={era}
          onChange={(e) => setEra(e.target.value)}
          className="bg-black border border-red-500 text-white px-3 py-1 rounded font-courier"
        >
          <option value="all">全部时期</option>
          <option value="ancient">上古时期</option>
          <option value="medieval">中古时期</option>
          <option value="modern">近现代</option>
        </select>
      </div>
      
      <div className="h-64">
        <Sankey
          data={data}
          nodePadding={20}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          link={{ stroke: '#ff0000' }}
          node={(props) => (
            <g>
              <rect x={props.x} y={props.y} width={props.width} height={props.height} fill="#ff0000" />
              <text x={props.x + props.width + 5} y={props.y + props.height / 2} fill="white" fontSize={12}>
                {props.payload.name}
              </text>
            </g>
          )}
        />
      </div>
    </div>
  );
}
