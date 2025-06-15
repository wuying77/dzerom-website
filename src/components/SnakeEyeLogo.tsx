export default function SnakeEyeLogo() {
  return (
    <div className="relative w-32 h-32 animate-pulse">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="45" fill="black" stroke="#00FF00" strokeWidth="2"/>
        <circle cx="50" cy="50" r="35" fill="#00FF00" fillOpacity="0.1"/>
        <ellipse cx="50" cy="50" rx="25" ry="35" fill="black"/>
        <circle cx="50" cy="50" r="15" fill="#00FF00" fillOpacity="0.8"/>
        <circle cx="50" cy="50" r="5" fill="black"/>
      </svg>
    </div>
  );
}