export default function WaveStrip({ className = '' }) {
  const rows = 8;
  return (
    <svg
      viewBox="0 0 320 40"
      preserveAspectRatio="none"
      className={className}
      style={{ width: '100%', height: '100%' }}
    >
      {[...Array(rows)].map((_, i) => {
        const y = 3 + i * 4.6;
        return (
          <path
            key={i}
            d={`M0 ${y} Q 10 ${y - 3} 20 ${y} T 40 ${y} T 60 ${y} T 80 ${y} T 100 ${y} T 120 ${y} T 140 ${y} T 160 ${y} T 180 ${y} T 200 ${y} T 220 ${y} T 240 ${y} T 260 ${y} T 280 ${y} T 300 ${y} T 320 ${y}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        );
      })}
    </svg>
  );
}
