export default function ResearchPapers({ isDark }: { isDark: boolean }) {
  return (
    <section className={`p-8 rounded-lg ${isDark ? 'bg-gray-900' : 'bg-purple-800'}`}>
      <h2 className="text-2xl font-cinzel mb-6">论文资料</h2>
      <div className="font-courier">
        <p className="mb-4">阶段性研究成果按时间轴排列：</p>
        <ul className="space-y-2">
          <li>• 2023.06 《量子相位与文明跃迁》</li>
          <li>• 2023.12 《蛇神文明能量网格研究》</li>
          <li>• 2024.05 《阴阳相位全息模型》</li>
        </ul>
      </div>
    </section>
  );
}
