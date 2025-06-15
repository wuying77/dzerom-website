import { useState } from 'react';

const videos = [
  {
    title: '失落文明：蛇神崇拜的起源',
    chapters: [
      { time: '00:00', title: '开场' },
      { time: '02:30', title: '印度纳迦崇拜' },
      { time: '08:15', title: '玛雅羽蛇神' },
      { time: '15:40', title: '全球蛇形遗迹' }
    ]
  },
  {
    title: '神秘仪式：蛇形装置解密',
    chapters: [
      { time: '00:00', title: '装置发现' },
      { time: '05:20', title: '功能推测' },
      { time: '12:45', title: '现代复制品' }
    ]
  },
  {
    title: '维度穿越：蛇神文明理论',
    chapters: [
      { time: '00:00', title: '理论介绍' },
      { time: '07:10', title: '考古证据' },
      { time: '14:30', title: '现代启示' }
    ]
  }
];

export default function DocumentVideos() {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [currentChapter, setCurrentChapter] = useState(0);

  return (
    <div className="p-6 bg-black/70 rounded-lg border border-red-500/30">
      <h3 className="text-xl font-cinzel mb-4">档案视频</h3>
      
      <div className="flex mb-4 space-x-2 overflow-x-auto">
        {videos.map((video, index) => (
          <button
            key={index}
            onClick={() => setSelectedVideo(index)}
            className={`px-3 py-1 rounded font-courier whitespace-nowrap ${selectedVideo === index ? 'bg-red-500 text-black' : 'bg-black text-white border border-red-500'}`}
          >
            {video.title}
          </button>
        ))}
      </div>
      
      <div className="aspect-video bg-black mb-4 flex items-center justify-center">
        <p className="text-white/50">视频播放器将在此处显示</p>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {videos[selectedVideo].chapters.map((chapter, index) => (
          <button
            key={index}
            onClick={() => setCurrentChapter(index)}
            className={`px-3 py-1 rounded font-courier text-sm ${currentChapter === index ? 'bg-red-500 text-black' : 'bg-black text-white border border-red-500'}`}
          >
            {chapter.time} - {chapter.title}
          </button>
        ))}
      </div>
    </div>
  );
}
