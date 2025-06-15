export default function TheorySummary({ isDark }: { isDark: boolean }) {
  return (
    <section className={`p-8 rounded-lg ${isDark ? 'bg-gray-900' : 'bg-purple-800'}`}>
      <h2 className="text-2xl font-cinzel mb-6">理论总纲</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-cinzel mb-4">中文版本</h3>
          <p className="font-courier leading-relaxed">
            宇宙阴阳相位论是基于量子纠缠与全息原理的全新宇宙观。该理论认为，宇宙是由无数相互关联的相位构成的动态矩阵，每个相位都包含0-1之间的无限可能状态。阴阳两极并非对立，而是同一相位在不同维度的投影。
          </p>
          <p className="font-courier leading-relaxed mt-4">
            根据该理论，文明发展遵循相位跃迁规律，当文明意识达到特定阈值时，会触发维度升级。蛇神文明作为上古高维文明的遗存，掌握了相位操控技术，其遗迹分布形成全球能量网格。
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-cinzel mb-4">English Version</h3>
          <p className="font-courier leading-relaxed">
            The Cosmic Yin-Yang Phase Theory is a revolutionary cosmological model based on quantum entanglement and holographic principles. It posits that the universe is a dynamic matrix of interconnected phases, each containing infinite potential states between 0 and 1. Yin and Yang are not opposites but projections of the same phase across dimensions.
          </p>
          <p className="font-courier leading-relaxed mt-4">
            According to this theory, civilizations evolve through phase transitions. When collective consciousness reaches critical thresholds, dimensional ascension occurs. The Serpent Civilization, as remnants of an ancient higher-dimensional culture, mastered phase manipulation technologies, leaving behind a global energy grid.
          </p>
        </div>
      </div>
    </section>
  );
}
