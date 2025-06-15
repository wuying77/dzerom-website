import { useState } from 'react';

const techEvents = [
  {
    id: 1,
    title: '费城实验',
    year: 1943,
    location: '美国',
    type: '军事科技',
    description: '据传美国海军进行的隐形战舰实验，导致舰船瞬间移动和船员融合'
  },
  {
    id: 2,
    title: '蒙托克计划',
    year: 1971,
    location: '美国',
    type: '意识控制',
    description: '传说中的心理控制和时间旅行实验，涉及大量儿童受试者'
  },
  {
    id: 3,
    title: '通古斯大爆炸',
    year: 1908,
    location: '俄罗斯',
    type: '能量武器',
    description: '西伯利亚森林的巨大爆炸，威力相当于1000颗广岛原子弹'
  },
  {
    id: 4,
    title: '道西基地',
    year: 1979,
    location: '美国',
    type: '外星科技',
    description: '传闻中美国政府与外星人合作的地下基地，进行基因实验'
  },
  {
    id: 5,
    title: 'HAARP计划',
    year: 1993,
    location: '阿拉斯加',
    type: '气候武器',
    description: '高频主动极光研究计划，被指控用于天气控制和地震诱发'
  }
];

export default function TechEvents() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredEvents = techEvents.filter(event => {
    const matchesFilter = filter === 'all' || event.type === filter;
    const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase()) || 
                         event.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="p-6 bg-black/70 rounded-lg border border-green-500/30">
      <h3 className="text-xl font-cinzel mb-4">异类科技事件</h3>
      
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <div className="flex items-center space-x-4">
          <span>筛选:</span>
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-black border border-green-500 px-3 py-1"
          >
            <option value="all">全部类型</option>
            <option value="军事科技">军事科技</option>
            <option value="意识控制">意识控制</option>
            <option value="能量武器">能量武器</option>
            <option value="外星科技">外星科技</option>
            <option value="气候武器">气候武器</option>
          </select>
        </div>
        
        <input
          type="text"
          placeholder="搜索事件..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-black border border-green-500 px-3 py-1 flex-1 md:max-w-xs"
        />
      </div>
      
      <div className="space-y-4">
        {filteredEvents.map(event => (
          <div key={event.id} className="p-4 bg-black/50 border border-green-500/30 rounded">
            <div className="flex justify-between items-start">
              <h4 className="text-lg font-medium">{event.title}</h4>
              <span className="text-sm opacity-70">{event.year}年 · {event.location}</span>
            </div>
            <div className="mt-2 text-sm opacity-80">{event.description}</div>
            <div className="mt-2">
              <span className="text-xs px-2 py-1 bg-green-500/10 border border-green-500/30 rounded">
                {event.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
