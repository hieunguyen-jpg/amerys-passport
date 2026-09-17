export default function Logo({ className = '', tone = 'deep' }) {
  const color = tone === 'light' ? 'text-lighteal' : 'text-deep';
  return (
    <div className={`flex flex-col items-center ${color} ${className}`}>
      <svg width="56" height="16" viewBox="0 0 56 16" fill="none" className="mb-1.5">
        <path
          d="M2 9 C 6 4, 10 4, 14 9 C 18 14, 22 14, 26 9 C 30 4, 34 4, 38 9 C 42 14, 46 14, 50 9 C 52 6.5, 53 6, 54 6"
          stroke="currentColor"
          strokeWidth="1.3"
          fill="none"
        />
      </svg>
      <div className="font-display text-xl tracking-[0.28em] leading-none">AMÉRYS</div>
      <div className="text-[9px] tracking-[0.35em] mt-1">PHÚ QUỐC</div>
    </div>
  );
}
