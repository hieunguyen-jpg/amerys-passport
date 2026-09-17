# 8 Dấu Yêu — Amérys Phú Quốc

Web app hướng dẫn hành trình 8 trạm trải nghiệm cho khách gia đình (soft opening).
Khách quét mã QR in trên Passport → mở trang tổng quan 8 trạm → chạm vào từng trạm để
xem hướng dẫn, cách tham gia ngắn gọn. Dấu mộc vẫn được đóng **trực tiếp trên Passport
giấy** — app này chỉ đóng vai trò sổ tay hướng dẫn, không cần tài khoản, không cần
lưu dữ liệu.

## Cấu trúc

- `app/page.js` — Trang tổng quan (danh sách 8 trạm + quà chào mừng)
- `app/tram/[id]/page.js` — Trang chi tiết từng trạm (1–8)
- `lib/stations.js` — **Toàn bộ nội dung 8 trạm nằm ở đây.** Muốn sửa chữ, thêm/xoá
  bước hướng dẫn, đổi địa điểm/thời gian... chỉ cần sửa file này.
- `components/` — Logo, hoa văn sóng, thẻ trạm (UI dùng chung)

## Chỉnh sửa nội dung

Mở `lib/stations.js`, mỗi trạm là một object trong mảng `stations`, gồm:
`title`, `tagline`, `audience`, `time`, `location`, `steps` (mảng các bước),
`notes` (lưu ý, có thể để trống `[]`), và `externalLink` (nếu trạm cần link ngoài,
như trạm 06 — Google Maps review).

## Chạy thử trên máy (tuỳ chọn)

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

## Đưa lên GitHub

```bash
git init
git add .
git commit -m "8 Dau Yeu - Amerys family journey guide"
git branch -M main
git remote add origin <link-repo-github-cua-ban>
git push -u origin main
```

## Deploy lên Vercel

1. Vào [vercel.com](https://vercel.com) → **Add New Project**.
2. Chọn repo GitHub vừa push ở trên.
3. Vercel tự nhận diện đây là project Next.js — không cần chỉnh gì thêm, bấm **Deploy**.
4. Sau khi deploy xong, bạn sẽ có 1 link dạng `https://ten-project.vercel.app`.
5. Tạo mã QR trỏ đến link đó (dùng bất kỳ trình tạo QR nào), in lên bìa Passport.
   Có thể trỏ thẳng vào từng trạm, ví dụ `https://ten-project.vercel.app/tram/3`.

## Ghi chú màu sắc thương hiệu (đã áp dụng sẵn trong `tailwind.config.js`)

| Tên      | Hex     |
|----------|---------|
| cream    | #eaddca |
| deep     | #024668 |
| teal     | #06859d |
| lighteal | #b4d5d8 |
| terracotta | #bf704c |

Logo và hoa văn sóng trong app hiện đang được **vẽ lại bằng SVG** để bám theo bộ nhận
diện Amérys (chưa có file logo vector gốc). Nếu bạn có file logo `.svg`/`.png` chính
thức, chỉ cần thay nội dung trong `components/Logo.js` bằng `<img src="/logo.png" />`
(đặt file logo vào thư mục `public/`).
