import { useState } from 'react';

const tibetanText = [
  "听啊！当生命的气息停止时，",
  "你将体验到纯净的光明，",
  "这是实相的本性，无始无终。",
  "认出它，安住其中，",
  "你将获得解脱。"
];

const jungText = [
  "集体无意识是心灵的深层结构，",
  "包含人类共有的原型意象。",
  "当个体意识与之连接时，",
  "将体验到超越个人的智慧，",
  "这是自我实现的必经之路。"
];

export default function ClassicAnalysis() {
  const [notes, setNotes] = useState<Record<number, string>>(() => {
    const saved = localStorage.getItem('classic-notes');
    return saved ? JSON.parse(saved) : {};
  });
  const [activeLine, setActiveLine] = useState<number | null>(null);

  const handleNoteSave = (line: number, text: string) => {
    const newNotes = {...notes, [line]: text};
    setNotes(newNotes);
    localStorage.setItem('classic-notes', JSON.stringify(newNotes));
  };

  return (
    <section className="p-6 bg-black/30 rounded-lg border border-green-500/30">
      <h2 className="text-2xl font-cinzel mb-4">经典解析</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-cinzel mb-2">西藏度亡经</h3>
          <div className="font-courier space-y-2">
            {tibetanText.map((line, index) => (
              <div 
                key={index}
                className={`p-2 cursor-pointer ${activeLine === index ? 'bg-green-500/10' : ''}`}
                onClick={() => setActiveLine(index)}
              >
                {line}
                {notes[index] && <div className="text-xs mt-1 text-green-500">批注: {notes[index]}</div>}
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-cinzel mb-2">荣格理论</h3>
          <div className="font-courier space-y-2">
            {jungText.map((line, index) => (
              <div 
                key={index}
                className={`p-2 cursor-pointer ${activeLine === index ? 'bg-green-500/10' : ''}`}
                onClick={() => setActiveLine(index)}
              >
                {line}
                {notes[index] && <div className="text-xs mt-1 text-green-500">批注: {notes[index]}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {activeLine !== null && (
        <div className="mt-6">
          <textarea
            value={notes[activeLine] || ''}
            onChange={(e) => handleNoteSave(activeLine, e.target.value)}
            placeholder="添加批注..."
            className="w-full p-3 bg-black/50 border border-green-500 text-white font-courier"
            rows={3}
          />
          <button
            onClick={() => setActiveLine(null)}
            className="mt-2 px-4 py-2 bg-green-500/10 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors"
          >
            完成
          </button>
        </div>
      )}
    </section>
  );
}
