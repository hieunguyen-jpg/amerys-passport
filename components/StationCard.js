import Link from 'next/link';

export default function StationCard({ station }) {
  return (
    <Link
      href={`/tram/${station.id}`}
      className="group flex items-center gap-4 rounded-2xl bg-white/70 border border-deep/10 px-4 py-3.5 shadow-sm active:scale-[0.98] transition-transform"
    >
      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-teal/10 text-xl">
        <span>{station.icon}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[11px] uppercase tracking-widest text-terracotta font-medium">
          Trạm {String(station.id).padStart(2, '0')} / 08
        </div>
        <div className="font-display text-base leading-snug text-deep truncate">
          {station.title}
        </div>
        <div className="text-xs text-deep/60 truncate">{station.location}</div>
      </div>
      <div className="flex-none text-deep/40 group-active:translate-x-0.5 transition-transform">
        →
      </div>
    </Link>
  );
}
