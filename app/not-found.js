import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="text-3xl mb-3">🧭</div>
      <h1 className="font-display text-xl text-deep mb-2">Không tìm thấy trạm này</h1>
      <p className="text-sm text-deep/60 mb-5">Có thể mã QR đã sai hoặc trạm không tồn tại.</p>
      <Link
        href="/"
        className="rounded-xl bg-terracotta text-white text-sm font-medium px-5 py-2.5"
      >
        Về bản đồ 8 trạm
      </Link>
    </main>
  );
}
