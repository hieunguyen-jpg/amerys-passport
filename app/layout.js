import './globals.css';

export const metadata = {
  title: '8 Dấu Yêu | Amérys Phú Quốc',
  description:
    'Hành trình 8 Dấu Yêu — kỷ niệm gia đình cùng Amérys Phú Quốc. Quét QR, xem hướng dẫn từng trạm và tham gia trải nghiệm.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="min-h-screen font-body bg-cream text-deep antialiased">
        {children}
      </body>
    </html>
  );
}
