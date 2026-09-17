import Logo from '../components/Logo';
import WaveStrip from '../components/WaveStrip';
import StationCard from '../components/StationCard';
import { stations, welcomeGift, journeyName, journeySubtitle } from '../lib/stations';

export default function HomePage() {
  return (
    <main className="min-h-screen pb-14">
      {/* Header */}
      <section className="bg-deep text-lighteal pt-10 pb-8 px-5 rounded-b-[32px]">
        <Logo tone="light" className="mx-auto" />
        <div className="mt-6 text-center">
          <div className="text-[11px] tracking-widest2 uppercase text-terracotta">
            {journeySubtitle}
          </div>
          <h1 className="font-display text-3xl mt-1 text-white">{journeyName}</h1>
          <p className="mt-3 text-sm text-lighteal/90 leading-relaxed max-w-xs mx-auto">
            Mỗi hoạt động hoàn thành = 1 dấu mộc, được đóng trực tiếp lên Passport gia đình
            của bạn. Đủ 8 dấu mộc, mang passport đến Quầy Lễ tân để nhận quà lưu niệm.
          </p>
        </div>
        <div className="text-teal/60 mt-6 -mb-2 h-6 overflow-hidden">
          <WaveStrip />
        </div>
      </section>

      {/* Welcome gift banner */}
      <section className="px-5 -mt-2">
        <div className="rounded-2xl bg-terracotta/10 border border-terracotta/25 px-4 py-3.5 flex items-center gap-3">
          <div className="text-2xl">🍫</div>
          <div className="flex-1">
            <div className="text-xs font-semibold text-terracotta uppercase tracking-wide">
              {welcomeGift.title} · {welcomeGift.note}
            </div>
            <p className="text-xs text-deep/70 mt-0.5 leading-relaxed">
              {welcomeGift.description}
            </p>
          </div>
        </div>
      </section>

      {/* Stations list */}
      <section className="px-5 mt-6">
        <div className="flex items-baseline justify-between mb-3">
          <h2 className="font-display text-lg text-deep">8 Trạm Trải Nghiệm</h2>
          <span className="text-xs text-deep/50">Chạm để xem hướng dẫn</span>
        </div>
        <div className="flex flex-col gap-2.5">
          {stations.map((station) => (
            <StationCard key={station.id} station={station} />
          ))}
        </div>
      </section>

      {/* Footer note */}
      <section className="px-5 mt-8">
        <p className="text-center text-[11px] text-deep/45 leading-relaxed">
          Dấu mộc được đóng trực tiếp trên Passport giấy tại từng trạm.
          <br />
          Trang này chỉ là sổ tay hướng dẫn — không lưu tiến trình của bạn.
        </p>
      </section>
    </main>
  );
}
