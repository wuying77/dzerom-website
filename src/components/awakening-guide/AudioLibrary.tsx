import { useState, useEffect, useRef } from 'react';

const tracks = [
  {
    id: 1,
    title: '阿尔法脑波冥想',
    duration: '15:00',
    cover: 'alpha-wave'
  },
  {
    id: 2,
    title: '西塔脑波深度放松',
    duration: '30:00',
    cover: 'theta-wave'
  },
  {
    id: 3,
    title: '自然白噪音',
    duration: '45:00',
    cover: 'white-noise'
  }
];

export default function AudioLibrary() {
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = (trackId: number) => {
    setCurrentTrack(trackId);
    setIsPlaying(true);
    setTimeLeft(900); // 15 minutes in seconds
  };

  const handleStop = () => {
    setIsPlaying(false);
    setTimer(null);
    setTimeLeft(0);
  };

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsPlaying(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      setTimer(interval);
      return () => clearInterval(interval);
    }
  }, [isPlaying, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section className="p-6 bg-black/30 rounded-lg border border-green-500/30">
      <h2 className="text-2xl font-cinzel mb-4">音频库</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {tracks.map(track => (
          <div 
            key={track.id}
            className={`p-4 border rounded-lg transition-all ${
              currentTrack === track.id ? 'border-green-500 bg-green-500/10' : 'border-gray-700'
            }`}
          >
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-black flex items-center justify-center border border-gray-700">
                <i className="fa-solid fa-music text-green-500 text-2xl"></i>
              </div>
              <div className="ml-4">
                <h3 className="font-cinzel">{track.title}</h3>
                <p className="font-courier text-sm">{track.duration}</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <button
                onClick={() => currentTrack === track.id && isPlaying ? handleStop() : handlePlay(track.id)}
                className={`px-3 py-1 rounded font-courier ${
                  currentTrack === track.id && isPlaying ? 
                  'bg-red-500 text-black' : 'bg-green-500/10 border border-green-500 text-green-500'
                }`}
              >
                {currentTrack === track.id && isPlaying ? '停止' : '播放'}
              </button>
              
              {currentTrack === track.id && isPlaying && (
                <span className="font-courier text-sm">
                  剩余: {formatTime(timeLeft)}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-black/50 border border-gray-700 rounded-lg">
        <h3 className="font-cinzel mb-2">睡眠定时器</h3>
        <div className="flex items-center space-x-4">
          <select 
            className="bg-black border border-green-500 px-3 py-1 font-courier"
            onChange={(e) => setTimeLeft(parseInt(e.target.value))}
            disabled={!isPlaying}
          >
            <option value="300">5分钟</option>
            <option value="900" selected>15分钟</option>
            <option value="1800">30分钟</option>
            <option value="3600">60分钟</option>
          </select>
          
          <button
            onClick={() => setIsPlaying(false)}
            disabled={!isPlaying}
            className="px-3 py-1 bg-green-500/10 border border-green-500 text-green-500 disabled:opacity-50 font-courier"
          >
            停止定时
          </button>
        </div>
      </div>
      
      <audio ref={audioRef} />
    </section>
  );
}
