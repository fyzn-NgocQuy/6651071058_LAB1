# ANIMEVERSE – Nền Tảng Khám Phá Thế Giới Anime & Nhân Vật

## 1. Cấu trúc thư mục
ANIMEVERSE/
├── index.html          # Trang chủ (Hero Parallax, Trending, Classic, 2024–2026, Character Showcase)
├── explore.html        # Tìm kiếm & lọc đa tiêu chí (JP/EN/VI, thể loại, năm, mùa, trạng thái, điểm)
├── anime-detail.html   # Chi tiết anime, Character Showcase 8–12 nhân vật, Iconic Moments, Lightbox & Spoiler
├── characters.html     # Khám phá toàn bộ nhân vật & xem Showcase chi tiết
├── ranking.html        # Bảng xếp hạng (Phổ biến, Điểm cao, Thịnh hành Live, Top nhân vật, 2024–2026)
├── genres.html         # Khám phá theo 12+ thể loại với màu sắc & bối cảnh riêng
├── latest.html         # Trung tâm cập nhật Anime 2024–2026 thời gian thực (Đông/Xuân/Hè/Thu 2026)
├── about.html          # Giới thiệu kiến trúc, nguồn API & minh bạch dữ liệu
├── css/
│   ├── style.css       # Design system, Dark Theme, Glassmorphism, Navbar, Cards, Responsive
│   └── showcase.css    # Hero Parallax, Character Showcase Stage, Iconic Moments, Lightbox, Ranking
├── js/
│   ├── data-catalog.js # Thư viện 66 anime (Kinh điển, 2020–2023, 2024–2026) & hồ sơ nhân vật chi tiết
│   ├── api.js          # Client AniList GraphQL + Jikan v4 (CORS-safe cho file://, cache localStorage)
│   ├── character.js    # Engine Character Showcase (hover/touch crossfade, slide, aura, particles)
│   ├── main.js         # Navbar, Global Live Search, Loading Screen, Particle Engine, Footer
│   └── pages.js        # Bộ điều khiển logic cho toàn bộ 8 trang HTML
└── assets/
    └── characters/     # (Tùy chọn) Đặt ảnh PNG toàn thân không nền theo tên <character-slug>.png

## 2. Hướng dẫn mở trực tiếp (Không cần localhost)
1. Tạo thư mục `ANIMEVERSE` với cấu trúc thư mục con `css/`, `js/`, `assets/characters/`.
2. Lưu toàn bộ các file HTML, CSS, JS đúng vị trí.
3. Nhấp đúp mở file `index.html` bằng Chrome, Edge hoặc Firefox (`file:///.../ANIMEVERSE/index.html`).
4. Khi có kết nối Internet, website tự động đồng bộ poster, banner, 10–12 nhân vật, ảnh phân cảnh thực tế và danh sách mùa anime 2026 từ AniList GraphQL & Jikan API. Khi mất mạng, hệ thống tự dùng dữ liệu cục bộ + cache `localStorage`.
