export default function VideoLectures({ isDark }: { isDark: boolean }) {
  return (
     <section className={`p-8 rounded-lg ${isDark ? 'bg-gray-900' : 'bg-white'} border border-green-500/30`}>
      <h2 className="text-2xl font-cinzel mb-6 text-green-500">视频解读</h2>
      <div className="font-courier">
        <div className="aspect-video bg-black/50 flex items-center justify-center">
          <p className="text-white/50">视频播放器将在此处显示</p>
        </div>
        <p className="mt-4">精选视频讲座与解读</p>
      </div>
    </section>
  );
}
