import {
  ProfileInfo,
  VlogReelItem,
  PhotoboothItem,
  FilmStripItem,
  RoadmapStep,
  ServiceItem,
  GalleryPhotoItem
} from '../types/portfolio.ts';

export const profileInfo: ProfileInfo = {
  name: "Thảo Liên Lê",
  siteTitle: "Marketing Portfolio - Thảo Liên Lê",
  role: "Marketing Specialist · Growth & Brand Strategist",
  vlogTagline: "Explore my work, my ideas, and the stories behind them - perhaps our next story begins here.",
  location: "TP. Hồ Chí Minh",
  instagramHandle: "@thaolien.journey",
  quote: "Đưa thương hiệu đến đúng nơi, chạm đúng người, biến những kết nối thành hành động.",
  heroImages: {
    traSuBoat: "/photos/p29.jpg",      // Chèo thuyền rừng tràm Trà Sư xanh mướt
    fairyStream: "/photos/p3.jpg",      // Nắng xuyên tán cây, suối rừng bay bổng
    daLatCafe: "/photos/p15.jpg",       // Ban công thông Đà Lạt Nhà Của Thông
    chicBlack: "/photos/p1.jpg",        // Chân dung đầm đen thanh lịch gốm sứ
    castle: "/photos/p10.jpg",          // Lâu đài cổ tích hồ nước & tai thỏ
    thaiWatArun: "/photos/p20.jpg",     // Chùa Wat Arun trang phục Thái kiêu sa
    bangkokCat: "/photos/p25.jpg",      // Nghệ thuật đường phố Song Wat vui tươi
    pinkDress: "/photos/p5.jpg"         // Đầm yếm hồng pastel tiểu thư
  }
};

export const homeContent = {
  heroTagline: "Explore my work, my ideas, and the stories behind them - perhaps our next story begins here.",
  heroMission: "Đưa thương hiệu đến đúng nơi, chạm đúng người, biến những kết nối thành hành động.",
  aboutMe: {
    title: "Một chút về mình",
    greeting: "Xin chào, mình là Thao Lien Le (hay Tali).",
    experience: "Mình có hơn 3 năm làm Marketing trong môi trường SMEs cho mình cơ hội được “chạm” vào nhiều khía cạnh: từ lên plan, đóng góp tối ưu sản phẩm, làm content, edit video, chạy Ads đến biên tập và tổ chức sự kiện.",
    philosophy: "Và cũng chính môi trường đó dạy mình một điều: Marketing không phải lúc nào cũng bắt đầu với nguồn lực lớn, mà là tìm cách tận dụng nguồn lực có hạn để đưa thương hiệu đến đúng thị trường mục tiêu và tạo ra chuyển đổi tốt.",
    university: "Đại học Kinh tế TP.HCM (UEH)",
    honor: "Tốt nghiệp Xuất sắc",
    major: "QTKD",
    gpa: "3.81 / 4.0"
  },
  skills: [
    {
      id: "skill-1",
      title: "Xây dựng và phát triển kênh TikTok từ con số 0",
      desc: "Từ định hướng nội dung đến triển khai video.",
      icon: "🎵",
      colorScheme: "pink" as const
    },
    {
      id: "skill-2",
      title: "Lập kế hoạch Marketing",
      desc: "Nghiên cứu thị trường, phân tích khách hàng mục tiêu, xác định hướng truyền thông và nội dung theo từng giai đoạn.",
      icon: "📊",
      colorScheme: "matcha" as const
    },
    {
      id: "skill-3",
      title: "Sáng tạo nội dung video",
      desc: "Lên ý tưởng, viết kịch bản, tham gia ghi hình và định hướng dựng video.",
      icon: "🎬",
      colorScheme: "pink" as const
    },
    {
      id: "skill-4",
      title: "Booking và triển khai KOL/UGC",
      desc: "Định hướng nội dung cho Creator phù hợp với kế hoạch và thông điệp của sản phẩm.",
      icon: "🤝",
      colorScheme: "matcha" as const
    },
    {
      id: "skill-5",
      title: "Thiết kế bằng AI",
      desc: "Thực hiện Social Post và Profile công ty bằng AI.",
      icon: "✨",
      colorScheme: "pink" as const
    },
    {
      id: "skill-6",
      title: "Chạy quảng cáo",
      desc: "Định hướng nội dung và lên chiến dịch chạy quảng cáo sản phẩm.",
      icon: "🚀",
      colorScheme: "matcha" as const
    }
  ],
  achievements: [
    {
      id: "ach-1",
      category: "Xây kênh TikTok từ con số 0",
      highlight: "Đạt gần 700 tin nhắn tự nhiên mỗi tháng",
      colorScheme: "matcha" as const
    },
    {
      id: "ach-2",
      category: "Video Reels",
      highlight: "Đạt nhiều video viral trên 100k view",
      colorScheme: "pink" as const
    },
    {
      id: "ach-3",
      category: "Tối ưu chi phí Ads",
      highlight: "6 triệu ngân sách → 300+ tin nhắn → gần 300 TRIỆU doanh thu",
      colorScheme: "matcha" as const
    },
    {
      id: "ach-4",
      category: "Đưa AI vào công việc Marketing",
      highlight: "Giúp doanh nghiệp tối ưu nhân sự và đẩy nhanh quá trình sản xuất nội dung",
      colorScheme: "pink" as const
    }
  ]
};

export interface PartnerBrand {
  id: string;
  category: string;
  name: string;
  logo: string;
  bgColor?: string;
  isDarkLogo?: boolean;
}

export const partnerBrands: PartnerBrand[] = [
  {
    id: "brand-happybook",
    category: "Du lịch",
    name: "HappyBook",
    logo: "/brands/happybook.jpg",
    bgColor: "#FFFFFF"
  },
  {
    id: "brand-cilove",
    category: "Áo cưới",
    name: "CiLove Bridal",
    logo: "/brands/cilove.jpg",
    bgColor: "#FAF4ED"
  },
  {
    id: "brand-colorbook",
    category: "In ấn",
    name: "ColorBook",
    logo: "/brands/colorbook.jpg",
    bgColor: "#FFF8D6"
  },
  {
    id: "brand-wilson",
    category: "Nha khoa",
    name: "Wilson Dentistry",
    logo: "/brands/wilson.jpg",
    bgColor: "#142646",
    isDarkLogo: true
  },
  {
    id: "brand-yen-huynh",
    category: "Yến sào",
    name: "Yến sào Yến Huỳnh",
    logo: "/brands/yen-huynh.jpg",
    bgColor: "#FFFFFF"
  },
  {
    id: "brand-nguyen-nguyen",
    category: "Thể thao",
    name: "Nguyễn Nguyễn",
    logo: "/brands/nguyen-nguyen.png",
    bgColor: "#0F0F0F",
    isDarkLogo: true
  }
];

export const navCategories = [
  { id: 'home', title: 'Trang chủ', icon: '🌸', desc: 'Giới thiệu tổng quan, hồ sơ năng lực & thành tựu', badge: 'Overview' },
  { id: 'tiktok', title: 'Xây kênh TikTok từ số 0', icon: '🎵', desc: 'Định hướng nội dung, tăng trưởng 700+ tin nhắn tự nhiên', badge: 'Viral Growth' },
  { id: 'video-reels', title: 'Video reels', icon: '🎬', desc: 'Tuyển tập video ngắn viral 100k+ views trên đa nền tảng', badge: '100k+ Views' },
  { id: 'video-ugc', title: 'Video UGC', icon: '📱', desc: 'Triển khai User Generated Content chân thực & chuyển đổi', badge: 'Creator Hub' },
  { id: 'marketing-plan', title: 'Kế hoạch Marketing', icon: '📊', desc: 'Nghiên cứu thị trường & chiến lược truyền thông giai đoạn', badge: 'Strategy' },
  { id: 'zalo-oa', title: 'Zalo OA', icon: '💬', desc: 'Xây dựng phễu chăm sóc khách hàng & tương tác tự động', badge: 'Retention' },
  { id: 'ads', title: 'Ads', icon: '📈', desc: 'Tối ưu ngân sách 6TR mang lại gần 300TR doanh thu', badge: 'High ROI' },
  { id: 'design-ai', title: 'Design AI', icon: '✨', desc: 'Thiết kế Social Post & Profile công ty tối ưu bằng AI', badge: 'AI Innovation' },
  { id: 'personal-brand', title: 'Xây thương hiệu cá nhân', icon: '👑', desc: 'Định vị phong cách, lan tỏa giá trị độc bản bền vững', badge: 'Personal Branding' }
] as const;

export const vlogReels: VlogReelItem[] = [
  {
    id: "reel-1",
    title: "Trà Sư Emerald Journey: Bản Giao Hưởng Thiên Nhiên Xanh",
    tag: "Eco Travel & Storytelling",
    metrics: "2.4M Views",
    previewVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    fullVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnailUrl: "/photos/p29.jpg",
    coverImage: "/photos/p29.jpg",
    location: "Rừng Tràm Trà Sư, An Giang",
    colorScheme: "matcha"
  },
  {
    id: "reel-2",
    title: "Đà Lạt Pine Mist & Slow Living: Tiếp Thị Trải Nghiệm Cafe",
    tag: "Lifestyle & F&B Hospitality",
    metrics: "1.8M Views",
    previewVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    fullVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    thumbnailUrl: "/photos/p15.jpg",
    coverImage: "/photos/p15.jpg",
    location: "Đà Lạt, Lâm Đồng",
    colorScheme: "matcha"
  },
  {
    id: "reel-3",
    title: "Bangkok Song Wat Artsy Walk & Street Style Campaign",
    tag: "Fashion & Creative Tour",
    metrics: "3.2M Views",
    previewVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    fullVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    thumbnailUrl: "/photos/p26.jpg",
    coverImage: "/photos/p26.jpg",
    location: "Song Wat, Bangkok",
    colorScheme: "pink"
  },
  {
    id: "reel-4",
    title: "Lotus Field Dream & Mobile Content Creation Workshop",
    tag: "Content Creator Vlog",
    metrics: "950K Views",
    previewVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    fullVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnailUrl: "/photos/p4.jpg",
    coverImage: "/photos/p4.jpg",
    location: "Đầm Sen Xanh Mát",
    colorScheme: "matcha"
  }
];

export const photobooths: PhotoboothItem[] = [
  {
    id: "photobooth-matcha",
    theme: "matcha",
    location: "Tra Su & Da Lat Botanical Walk",
    date: "SPRING / SUMMER MEMORIES",
    tag: "Matcha Nature Edition 🍃",
    sticker: "🌿 ⋆ ˚｡⋆୨୧˚",
    photos: [
      "/photos/p29.jpg", // Tra Su ao vang
      "/photos/p3.jpg",  // Suoi nang rung
      "/photos/p15.jpg", // Da lat ban cong
      "/photos/p4.jpg"   // Dam sen selfie
    ],
    caption: "Hòa mình cùng sắc xanh lá cây bạt ngàn của rừng tràm và những sớm mù sương."
  },
  {
    id: "photobooth-pink",
    theme: "pink",
    location: "Bangkok & Fairytale Odyssey",
    date: "GOLDEN HOUR & EVENING GLOW",
    tag: "Rose Petals & Glow 🎀",
    sticker: "🌸 ⋆ ˚｡⋆♡˚",
    photos: [
      "/photos/p5.jpg",  // Dam yem hong
      "/photos/p20.jpg", // Trang phuc Thai Wat Arun
      "/photos/p10.jpg", // Lau dai co tich
      "/photos/p25.jpg"  // Meo Song Wat cute
    ],
    caption: "Những buổi chiều rực rỡ, ánh đèn hoàng hôn và nụ cười ghi dấu tuổi thanh xuân."
  }
];

export const filmStripPhotos: FilmStripItem[] = [
  {
    id: "film-1",
    title: "Venice Canal Night",
    location: "Grand World Riverside",
    imageUrl: "/photos/p13.jpg",
    frameCode: "01A"
  },
  {
    id: "film-2",
    title: "Pine Cafe Wooden Wall",
    location: "Đà Lạt, Lâm Đồng",
    imageUrl: "/photos/p2.jpg",
    frameCode: "02A"
  },
  {
    id: "film-3",
    title: "Chic Pottery Atelier",
    location: "Hà Nội Studio",
    imageUrl: "/photos/p1.jpg",
    frameCode: "03A"
  },
  {
    id: "film-4",
    title: "Riverside Breeze",
    location: "Venice Promenade",
    imageUrl: "/photos/p14.jpg",
    frameCode: "04A"
  },
  {
    id: "film-5",
    title: "Fairytale Castle Walk",
    location: "Fantasy Theme Park",
    imageUrl: "/photos/p11.jpg",
    frameCode: "05A"
  },
  {
    id: "film-6",
    title: "Song Wat Retro Cafe",
    location: "Bangkok Streets",
    imageUrl: "/photos/p26.jpg",
    frameCode: "06A"
  }
];

export const roadmapSteps: RoadmapStep[] = [
  {
    stepNumber: "01",
    title: "Gieo Mầm Ý Tưởng & Phân Tích Thương Hiệu",
    timeTag: "Khởi hành",
    description: "Thấu hiểu chân dung khách hàng, lắng nghe câu chuyện nguồn cội và phác thảo moodboard mỹ cảm với bảng màu hồng phấn & xanh matcha đặc trưng.",
    icon: "🌱",
    badge: "Strategic Seed",
    highlightPhoto: "/photos/p1.jpg",
    accent: "matcha"
  },
  {
    stepNumber: "02",
    title: "Sản Xuất Hình Ảnh & Video Điện Ảnh",
    timeTag: "Trải nghiệm",
    description: "Bấm máy tại các địa điểm thơ mộng, bắt trọn từng khoảnh khắc tự nhiên, ánh sáng vàng ấm áp và góc máy dọc tối ưu hóa cho Reels & TikTok.",
    icon: "🎬",
    badge: "Cinematic Shoot",
    highlightPhoto: "/photos/p4.jpg",
    accent: "pink"
  },
  {
    stepNumber: "03",
    title: "Lan Tỏa Đa Kênh & Kết Nối Cảm Xúc",
    timeTag: "Cất cánh",
    description: "Xây dựng chiến dịch nội dung du lịch, gắn kết câu chuyện sản phẩm vào lối sống thanh lịch, khơi gợi tương tác tự nhiên từ hàng triệu người xem.",
    icon: "🍃",
    badge: "Organic Growth",
    highlightPhoto: "/photos/p29.jpg",
    accent: "matcha"
  },
  {
    stepNumber: "04",
    title: "Bùng Nổ Chuyển Đổi & Khẳng Định Vị Thế",
    timeTag: "Đích đến",
    description: "Đo lường chỉ số ROI, tối ưu hóa tệp khách hàng trung thành và biến tình yêu thương hiệu thành doanh số bứt phá lâu dài.",
    icon: "✨",
    badge: "Sweet Success",
    highlightPhoto: "/photos/p20.jpg",
    accent: "pink"
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: "srv-1",
    title: "Chiến Lược Thương Hiệu & Mỹ Cảm",
    subtitle: "Brand Aesthetic Direction",
    description: "Định hình phong cách thị giác độc bản cho thương hiệu: từ moodboard, màu sắc, font chữ cho đến tinh thần cốt lõi khiến khách hàng nhìn là nhớ.",
    bullets: [
      "Bộ nhận diện thẩm mỹ cao cấp (Palette & Typography)",
      "Chiến lược định vị nội dung Lifestyle & Du lịch",
      "Kế hoạch truyền thông 90 ngày bứt phá"
    ],
    ribbonColor: "matcha",
    buttonText: "Chọn Gói Xanh Matcha 🍃",
    tag: "Được Yêu Thích Nhất"
  },
  {
    id: "srv-2",
    title: "Sản Xuất Video Dọc & Travel Vlog",
    subtitle: "Vertical Reels & TikTok Production",
    description: "Sáng tạo các thước phim 9:16 bay bổng, giàu nhạc tính và màu sắc điện ảnh, biến sản phẩm của bạn thành điểm nhấn mê hoặc trên mạng xã hội.",
    bullets: [
      "Kịch bản quay chụp chi tiết theo trend viral",
      "Quay phim & Hậu kỳ chỉnh màu điện ảnh chuyên nghiệp",
      "Đóng gói 12 - 20 video ngắn tối ưu thuật toán"
    ],
    ribbonColor: "pink",
    buttonText: "Chọn Gói Hồng Phấn 🌸",
    tag: "Viral Showcase"
  },
  {
    id: "srv-3",
    title: "Tư Vấn Chiến Dịch Tiếp Thị Toàn Diện",
    subtitle: "Full-Funnel Campaign Strategy",
    description: "Đồng hành từ A-Z cùng doanh nghiệp: từ phân tích thị trường, triển khai influencer marketing đến chuyển đổi doanh số bền vững.",
    bullets: [
      "Điều phối chiến dịch ra mắt sản phẩm mới",
      "Quản lý hiệu quả ngân sách và đo lường ROI",
      "Báo cáo chuyên sâu và tối ưu hóa chuyển đổi"
    ],
    ribbonColor: "matcha",
    buttonText: "Tư Vấn Cùng Thảo Liên 🎀",
    tag: "Chuyên Sâu"
  }
];

export const allPersonalPhotos: GalleryPhotoItem[] = [
  { id: "g1", url: "/photos/p29.jpg", title: "Thuyền Nan Giữa Rừng Tràm", caption: "Trôi theo dòng nước bèo xanh mướt Trà Sư", location: "Trà Sư, An Giang", tag: "Nature" },
  { id: "g2", url: "/photos/p3.jpg", title: "Nắng Sớm Xuyên Tán Rừng", caption: "Khoảnh khắc tiên cảnh bên dòng suối nhỏ", location: "Suối Rừng Xanh", tag: "Nature" },
  { id: "g3", url: "/photos/p15.jpg", title: "Góc Ban Công Gió Thông", caption: "Tiệm Cà Phê Nhà Của Thông đầy nắng", location: "Đà Lạt, Lâm Đồng", tag: "Cafe Vlog" },
  { id: "g4", url: "/photos/p4.jpg", title: "Nụ Cười Bên Đầm Sen", caption: "Hương sen thanh khiết giữa trưa hè rạng rỡ", location: "Đầm Sen Xanh Mát", tag: "Nature" },
  { id: "g5", url: "/photos/p5.jpg", title: "Blush Pink Evening Dress", caption: "Sắc hồng tiểu thư thanh tao và dịu dàng", location: "Dạ Tiệc Tối", tag: "Fashion" },
  { id: "g6", url: "/photos/p6.jpg", title: "Cocktail & Ánh Đèn Tím", caption: "Những rung cảm nhẹ nhàng bên bàn tiệc", location: "Lounge Bar", tag: "Fashion" },
  { id: "g7", url: "/photos/p7.jpg", title: "Góc Nghiêng Dịu Dàng", caption: "Nét đẹp trong trẻo cùng chiếc đầm yếm hồng", location: "Studio Chân Dung", tag: "Fashion" },
  { id: "g8", url: "/photos/p8.jpg", title: "Ánh Mắt Hoàng Hôn", caption: "Chạm vào cảm xúc trong từng thước ảnh", location: "Gala Event", tag: "Fashion" },
  { id: "g9", url: "/photos/p9.jpg", title: "Nàng Tiểu Thư Đài Các", caption: "Thướt tha trong không gian dạ tiệc lộng lẫy", location: "Evening Glow", tag: "Fashion" },
  { id: "g10", url: "/photos/p10.jpg", title: "Tòa Lâu Đài Cổ Tích", caption: "Lạc bước vào thế giới thần tiên ven hồ nước", location: "Fantasy Theme Park", tag: "Fantasy" },
  { id: "g11", url: "/photos/p11.jpg", title: "Cổng Lâu Đài Châu Âu", caption: "Kiến trúc cổ điển nguy nga và lãng mạn", location: "Grand Castle", tag: "Fantasy" },
  { id: "g12", url: "/photos/p12.jpg", title: "Tháp Chuông Thần Thoại", caption: "Giai điệu tích tắc giữa thị trấn cổ tích", location: "Fairytale Town", tag: "Fantasy" },
  { id: "g13", url: "/photos/p13.jpg", title: "Đêm Lung Linh Venice", caption: "Sắc màu rực rỡ soi bóng trên kênh đào", location: "Grand World Venice", tag: "Travel" },
  { id: "g14", url: "/photos/p14.jpg", title: "Cầu Kênh Đào Tình Yêu", caption: "Dạo bước dưới làn gió sông mát lạnh", location: "Venice Promenade", tag: "Travel" },
  { id: "g15", url: "/photos/p16.jpg", title: "Khung Cửa Kính Đồi Thông", caption: "Ngắm sương mờ lãng đãng buổi sớm", location: "Nhà Của Thông, Đà Lạt", tag: "Cafe Vlog" },
  { id: "g16", url: "/photos/p17.jpg", title: "Tách Cà Phê Mơ Màng", caption: "Hương vị cao nguyên đậm đà khó quên", location: "Đà Lạt, Lâm Đồng", tag: "Cafe Vlog" },
  { id: "g17", url: "/photos/p18.jpg", title: "Thềm Hoa Tú Cầu Nở Rộ", caption: "Sắc hoa bừng nở đón ánh ban mai", location: "Vườn Hoa Đà Lạt", tag: "Nature" },
  { id: "g18", url: "/photos/p19.jpg", title: "Chiều Buông Trên Cao Nguyên", caption: "Ánh nắng vàng óng ả ôm trọn rặng thông", location: "Đồi Thông Mơ Màng", tag: "Travel" },
  { id: "g19", url: "/photos/p20.jpg", title: "Trang Phục Thái Wat Arun", caption: "Hóa thân thành nàng thơ tại Chùa Bình Minh", location: "Wat Arun, Bangkok", tag: "Culture" },
  { id: "g20", url: "/photos/p21.jpg", title: "Ngọn Tháp Sứ Tráng Lệ", caption: "Chiêm ngưỡng kiệt tác kiến trúc cổ kính", location: "Wat Arun, Bangkok", tag: "Culture" },
  { id: "g21", url: "/photos/p22.jpg", title: "Khăn Choàng Vàng Lụa Thái", caption: "Nét đài các kiêu sa trong từng cử chỉ", location: "Wat Arun Courtyard", tag: "Culture" },
  { id: "g22", url: "/photos/p23.jpg", title: "Thềm Gạch Cổ Soi Bóng Nắng", caption: "Những bước chân khám phá văn hóa phương Nam", location: "Bangkok Ancient Temple", tag: "Culture" },
  { id: "g23", url: "/photos/p24.jpg", title: "Hoa Văn Gốm Sứ Tinh Xảo", caption: "Từng mảnh gốm cổ lưu giữ hàng trăm năm", location: "Wat Arun Details", tag: "Culture" },
  { id: "g24", url: "/photos/p25.jpg", title: "Stay Weird & No Bad Days", caption: "Phố nghệ thuật Song Wat và chú mèo đáng yêu", location: "Song Wat, Bangkok", tag: "Street Art" },
  { id: "g25", url: "/photos/p26.jpg", title: "Tiệm Nước Phong Cách Retro", caption: "Những góc phố vintage rực rỡ sắc màu", location: "Song Wat Street", tag: "Cafe Vlog" },
  { id: "g26", url: "/photos/p27.jpg", title: "Con Hẻm Nghệ Thuật Sáng Tạo", caption: "Góc phố cổ chứa đựng nhiều câu chuyện", location: "Song Wat Art District", tag: "Street Art" },
  { id: "g27", url: "/photos/p28.jpg", title: "Kiến Trúc Hoài Niệm Bangkok", caption: "Nét rêu phong đan xen nhịp sống hiện đại", location: "Bangkok Heritage", tag: "Travel" },
  { id: "g28", url: "/photos/p1.jpg", title: "Tiệm Gốm Nâu Trầm", caption: "Chân dung thanh lịch bên bàn gốm mộc mạc", location: "Atelier Gốm Sứ Hà Nội", tag: "Aesthetic" },
  { id: "g29", url: "/photos/p2.jpg", title: "Bảng Gỗ Nhà Của Thông", caption: "Chốn bình yên dành cho những tâm hồn mơ mộng", location: "Đà Lạt, Lâm Đồng", tag: "Travel" }
];
