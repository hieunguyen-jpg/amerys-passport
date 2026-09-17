// Dữ liệu 8 trạm của hành trình "8 Dấu Yêu" — Amérys Phú Quốc
// Đây là nội dung tĩnh, chỉnh sửa trực tiếp tại đây khi cần cập nhật.

export const journeyName = '8 Dấu Yêu';
export const journeySubtitle = 'Hành trình kỷ niệm gia đình';

export const welcomeGift = {
  title: 'Quà Chào Mừng',
  note: 'Không tính vào 8 dấu mộc',
  audience: 'Tất cả khách check-in (walk-in & booking)',
  location: 'Lobby',
  description:
    'Một phần quà nhỏ (chocolate) kèm lời nhắn đã được chuẩn bị sẵn — Lễ tân sẽ trao tận tay bạn ngay khi hoàn tất check-in. Bạn không cần làm gì thêm.',
};

export const stations = [
  {
    id: 1,
    icon: '📸',
    title: 'Check-in Cùng Amérys',
    tagline: 'Lưu lại khoảnh khắc đầu tiên của gia đình bạn tại Amérys.',
    audience: 'Tất cả gia đình khi check-in hoặc trong thời gian lưu trú',
    time: '28/9 – 31/10 (linh hoạt cả ngày)',
    location: 'Sảnh chính Amérys hoặc bất kỳ đâu trong khách sạn',
    steps: [
      'Nhân viên giới thiệu hoạt động ngay sau khi bạn check-in.',
      'Cả gia đình cùng chụp 1 tấm ảnh (nhân viên hỗ trợ bấm máy nếu cần).',
      'Đăng ảnh lên Facebook/Instagram, tag Amérys Phú Quốc và hashtag #ameryshotelphuquoc.',
      'Cho nhân viên xem bài đăng để nhận dấu mộc.',
    ],
    notes: [],
  },
  {
    id: 2,
    icon: '🌅',
    title: 'Hoàng Hôn Bên Nhau',
    tagline: 'Cùng nhau đón một khoảnh khắc hoàng hôn đáng nhớ.',
    audience: 'Tất cả gia đình',
    time: 'Theo khung giờ hoàng hôn trong ngày (xem thông báo tại bảng tin/Lễ tân)',
    location: 'Bãi biển Amérys, bãi biển khác trên đảo, hoặc từ phòng của bạn',
    steps: [
      'Theo dõi khung giờ hoàng hôn được thông báo tại bảng tin hoặc hỏi Lễ tân.',
      'Chụp lại khoảnh khắc hoàng hôn — có thể là ảnh cảnh hoặc ảnh cả nhà cùng nền hoàng hôn.',
      'Cho nhân viên xem ảnh để nhận dấu mộc.',
    ],
    notes: [],
  },
  {
    id: 3,
    icon: '🎨',
    title: 'Cùng Nhau Sáng Tạo',
    tagline: 'Vẽ nên một tác phẩm mang dấu ấn riêng của gia đình bạn.',
    audience: 'Gia đình / cặp đôi',
    time: 'Trong khung giờ hoạt động của Kid Club',
    location: 'Kid Club',
    steps: [
      'Đến Kid Club trong khung giờ hoạt động.',
      'Ngồi tại bàn family, cùng vẽ 1 artwork với vật liệu đã được chuẩn bị sẵn.',
      'Chụp hình cả gia đình cùng tác phẩm hoàn thiện để nhận dấu mộc.',
    ],
    notes: [
      'Tác phẩm của bạn có thể được chọn trưng bày tại Kid Club hoặc lên fanpage Amérys để lan toả tinh thần sáng tạo & gắn kết gia đình — nếu bạn đồng ý, vui lòng xác nhận với nhân viên bằng email hoặc văn bản.',
    ],
  },
  {
    id: 4,
    icon: '🏖️',
    title: 'Lâu Đài Cát Gia Đình',
    tagline: 'Cùng xây một lâu đài cát cho riêng gia đình mình.',
    audience: 'Tất cả gia đình',
    time: 'Cả ngày',
    location: 'Khu vực cát / bãi biển',
    steps: [
      'Ra khu vực cát, sử dụng dụng cụ có sẵn (xô, xẻng, khuôn tạo hình).',
      'Cùng nhau xây một lâu đài cát.',
      'Chụp hình cả gia đình cùng lâu đài cát để nhận dấu mộc.',
    ],
    notes: ['Có thể kết hợp thêm các trò chơi liên hoàn tại Kid Club để kéo dài trải nghiệm.'],
  },
  {
    id: 5,
    icon: '🍳',
    title: 'Bữa Sáng Sum Vầy',
    tagline: 'Một bữa sáng thật ấm áp cùng những người thân yêu.',
    audience: 'Tất cả gia đình',
    time: 'Giờ phục vụ bữa sáng',
    location: 'Nhà hàng',
    steps: [
      'Dùng bữa sáng cùng gia đình/người thân tại nhà hàng.',
      'Chụp 1 tấm ảnh bữa sáng cùng nhau.',
      'Cho nhân viên xem ảnh để nhận dấu mộc.',
    ],
    notes: [],
  },
  {
    id: 6,
    icon: '⭐',
    title: 'Gửi Yêu Thương Qua Đánh Giá',
    tagline: 'Một dòng cảm nhận của bạn giúp lan toả câu chuyện Amérys.',
    audience: 'Tất cả gia đình',
    time: 'Bất kỳ lúc nào trong thời gian lưu trú',
    location: 'Lobby, Memory Corner',
    steps: [
      'Quét mã QR trên welcome card đặt tại Lobby/Memory Corner để mở Google Maps/TripAdvisor.',
      'Viết một đánh giá ngắn về trải nghiệm của bạn tại Amérys.',
      'Cho nhân viên xem đánh giá đã đăng để nhận dấu mộc.',
    ],
    notes: [],
    externalLink: {
      label: 'Mở trang đánh giá Google Maps',
      href: 'https://share.google/gzeyApwOZ14klaapA',
    },
  },
  {
    id: 7,
    icon: '💌',
    title: 'Postcard Gửi Người Thương',
    tagline: 'Một lời nhắn tay viết, gửi đến người bạn yêu thương.',
    audience: 'Tất cả gia đình',
    time: 'Bất kỳ lúc nào trong thời gian lưu trú',
    location: 'Memory Corner',
    steps: [
      'Viết một tấm postcard gửi cho người thân yêu tại Memory Corner.',
      'Bỏ postcard vào mailbox.',
      'Nhận dấu mộc ngay sau khi bỏ postcard vào mailbox.',
    ],
    notes: ['Đội ngũ Amérys sẽ thu gom định kỳ và gửi postcard đến địa chỉ bạn đã ghi.'],
  },
  {
    id: 8,
    icon: '💆',
    title: 'Phút Giây Thư Thái',
    tagline: 'Dành thời gian chăm sóc bản thân tại Les Sens Spa.',
    audience: 'Tất cả khách lưu trú',
    time: 'Theo giờ hoạt động của Spa',
    location: 'Les Sens Spa',
    steps: [
      'Trải nghiệm một dịch vụ tại Les Sens Spa.',
      'Đánh giá trải nghiệm của bạn trên Google.',
      'Không chụp ảnh lưu niệm → nhận 1 dấu mộc. Có chụp ảnh trải nghiệm → nhận 2 dấu mộc.',
    ],
    notes: [],
  },
];

export function getStationById(id) {
  return stations.find((s) => s.id === Number(id));
}
