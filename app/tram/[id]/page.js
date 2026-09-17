import Link from 'next/link';
import { notFound } from 'next/navigation';
import { stations, getStationById } from '../../../lib/stations';
import WaveStrip from '../../../components/WaveStrip';

export function generateStaticParams() {
  return stations.map((s) => ({ id: String(s.id) }));
}

export function generateMetadata({ params }) {
  const station = getStationById(params.id);
  return {
    title: station ? `${station.title} — 8 Dấu Yêu Amérys` : 'Trạm không tồn tại',
  };
}

export default function StationPage({ params }) {
  const station = getStationById(params.id);
  if (!station) return notFound();

  const prev = stations.find((s) => s.id === station.id - 1);
  const next = stations.find((s) => s.id === station.id + 1);

  return (
    <main className="min-h-screen pb-16">
      {/* Header */}
      <section className="bg-deep text-white pt-8 pb-7 px-5 rounded-b-[32px]">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-lighteal/80 text-sm mb-5"
        >
          <span>←</span> Bản đồ 8 trạm
        </Link>
        <div className="text-[11px] tracking-widest2 uppercase text-terracotta">
          Trạm {String(station.id).padStart(2, '0')} / 08
        </div>
        <div className="flex items-center gap-3 mt-2">
          <div className="text-3xl">{station.icon}</div>
          <h1 className="font-display text-2xl leading-tight">{station.title}</h1>
        </div>
        <p className="mt-3 text-sm text-lighteal/90 leading-relaxed">{station.tagline}</p>
        <div className="text-teal/60 mt-6 -mb-2 h-5 overflow-hidden">
          <WaveStrip />
        </div>
      </section>

      {/* Info grid */}
      <section className="px-5 -mt-2">
        <div className="grid grid-cols-1 gap-2.5">
          <InfoRow label="Đối tượng" value={station.audience} />
          <InfoRow label="Thời gian" value={station.time} />
          <InfoRow label="Địa điểm" value={station.location} />
        </div>
      </section>

      {/* Steps */}
      <section className="px-5 mt-6">
        <h2 className="font-display text-lg text-deep mb-3">Cách Tham Gia</h2>
        <ol className="flex flex-col gap-3">
          {station.steps.map((step, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="flex-none flex h-6 w-6 items-center justify-center rounded-full bg-teal text-white text-xs font-semibold mt-0.5">
                {i + 1}
              </span>
              <p className="text-sm text-deep/85 leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>

        {station.externalLink && (
          <a
            href={station.externalLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-terracotta text-white text-sm font-medium py-3"
          >
            {station.externalLink.label}
          </a>
        )}
      </section>

      {/* Notes */}
      {station.notes?.length > 0 && (
        <section className="px-5 mt-6">
          <div className="rounded-2xl bg-lighteal/30 border border-lighteal/60 px-4 py-3.5">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-teal mb-1.5">
              Lưu Ý
            </div>
            {station.notes.map((n, i) => (
              <p key={i} className="text-xs text-deep/70 leading-relaxed">
                {n}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* Stamp reminder */}
      <section className="px-5 mt-6">
        <div className="rounded-2xl border-2 border-dashed border-terracotta/50 px-4 py-4 text-center">
          <div className="text-2xl mb-1">🔴</div>
          <p className="text-xs text-deep/70 leading-relaxed">
            Hoàn thành hoạt động và cho nhân viên xem lại — bạn sẽ được đóng dấu mộc trực
            tiếp lên Passport gia đình.
          </p>
        </div>
      </section>

      {/* Prev/Next nav */}
      <section className="px-5 mt-7 flex items-center justify-between gap-3">
        {prev ? (
          <Link
            href={`/tram/${prev.id}`}
            className="text-sm text-deep/60 flex items-center gap-1"
          >
            ← Trạm {String(prev.id).padStart(2, '0')}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/tram/${next.id}`}
            className="text-sm text-deep/60 flex items-center gap-1"
          >
            Trạm {String(next.id).padStart(2, '0')} →
          </Link>
        ) : (
          <Link href="/" className="text-sm text-deep/60">
            Về bản đồ →
          </Link>
        )}
      </section>
    </main>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-white/70 border border-deep/10 px-4 py-2.5">
      <div className="w-20 flex-none text-[11px] uppercase tracking-wide text-teal font-medium pt-0.5">
        {label}
      </div>
      <div className="text-sm text-deep/85 leading-snug">{value}</div>
    </div>
  );
}
