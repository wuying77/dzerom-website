export default function PhaseMatrix({ isDark }: { isDark: boolean }) {
  return (
    <section className={`p-8 rounded-lg ${isDark ? 'bg-gray-900' : 'bg-purple-800'}`}>
      <h2 className="text-2xl font-cinzel mb-6">相位矩阵</h2>
      <div className="font-courier">
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div 
              key={i}
              className="aspect-square border border-green-500/30 flex items-center justify-center hover:bg-green-500/10 transition-colors"
            >
              <span>相位 {i+1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
