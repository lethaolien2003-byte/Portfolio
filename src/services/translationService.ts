/**
 * DỊCH VỤ ĐA NGÔN NGỮ & TỰ ĐỘNG DỊCH THUẬT (VIETNAMESE <-> ENGLISH)
 * 
 * 1. Từ điển tra cứu nhanh (Curated Dictionary): dịch chuẩn xác thuật ngữ chuyên ngành Marketing & Portfolio.
 * 2. Bộ dịch tự động thời gian thực (Dynamic Auto-Translate):
 *    - Tự động gọi Google Translate API cho bất kỳ nội dung tiếng Việt mới hoặc được sửa đổi nào.
 *    - Tự động lưu bộ nhớ đệm (Cache) vào localStorage để không bị giật lag và tải tức thì trong các lần sau.
 *    - Giúp người dùng khi sửa bất kỳ content tiếng Việt nào thì bản tiếng Anh TỰ ĐỘNG ĐỔI THEO mà không cần sửa code 2 lần!
 */

export type AppLanguage = 'vi' | 'en';

const CACHE_STORAGE_KEY = 'tali_portfolio_translations_vi_en_v1';

// Tải bộ nhớ đệm đã lưu từ localStorage
function loadLocalCache(): Record<string, string> {
  try {
    const raw = localStorage.getItem(CACHE_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

// Lưu bộ nhớ đệm vào localStorage
function saveLocalCache(cache: Record<string, string>) {
  try {
    localStorage.setItem(CACHE_STORAGE_KEY, JSON.stringify(cache));
  } catch (err) {
    console.warn('Could not save translation cache:', err);
  }
}

const memoryCache: Record<string, string> = loadLocalCache();
const pendingRequests = new Map<string, Promise<string>>();
const listeners = new Set<() => void>();

/**
 * Đăng ký lắng nghe sự kiện khi có bản dịch tự động mới hoàn tất
 */
export function subscribeTranslationUpdates(callback: () => void): () => void {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function notifyListeners() {
  listeners.forEach(cb => {
    try {
      cb();
    } catch (e) {
      console.error(e);
    }
  });
}

/**
 * 1. TỪ ĐIỂN CHUẨN XÁC CHO NỘI DUNG HIỆN TẠI (CURATED HIGH-QUALITY TRANSLATIONS)
 */
export const CURATED_TRANSLATIONS: Record<string, string> = {
  // Navigation & Core Labels
  'Trang chủ': 'Home',
  'Trang Chủ': 'Home',
  'Xây kênh TikTok từ số 0': '0-to-1 TikTok Growth',
  'Content Facebook': 'Facebook Content',
  'Video UGC': 'UGC Videos',
  'Kế hoạch Marketing': 'Marketing Strategy',
  'Ads': 'Performance Ads',
  'Content chạy Ads': 'Ad Creatives & Performance',
  'Design AI': 'AI Design',
  'PORTFOLIO': 'PORTFOLIO',
  'Lên Đầu Trang': 'Back to Top',
  '← Về Trang Chủ': '← Back to Home',
  'Về Trang Chủ': 'Back to Home',
  'Xem Video Reels →': 'Explore Reels →',
  'Xem bản kế hoạch chi tiết': 'View Detailed Plan',
  'Bấm phóng to chi tiết': 'Click to Zoom Detail',
  'Phóng to': 'Zoom',
  'Phóng to ⤢': 'Zoom ⤢',
  'Bấm để phóng to ⤢': 'Click to Zoom ⤢',
  'Bấm để mở xem PDF': 'Click to Open PDF',
  'Xem Trực Tiếp Company Profile': 'View Company Profile Directly',
  'Tải Bản PDF': 'Download PDF',
  'Tải Bản PDF (19 MB)': 'Download PDF (19 MB)',
  'Tải PDF': 'Download PDF',
  'Xem bài chạy Ads trên Facebook': 'View Facebook Ads Post',

  // Section Headers & Common Keys
  'Vai trò của Tali:': "Tali's Role:",
  'Thời gian triển khai:': 'Timeline:',
  'Kết quả đạt được:': 'Achieved Results:',
  'Định hướng nội dung & Chiến lược triển khai': 'Content Direction & Strategy',
  'Được tài trợ (Sponsored Ads)': 'Sponsored Ads',

  // Marketing Plan Page
  'Kế Hoạch Marketing & Content Thực Chiến': 'Practical Marketing & Content Strategy',
  'Xuất thân từ Content, sau nhiều năm làm việc ở nhiều vị trí khác nhau, mình may mắn có cơ hội được học hỏi và trực tiếp thực hiện nhiều dạng kế hoạch: từ định hướng xây dựng kênh, kế hoạch Marketing cho sản phẩm mới đến kế hoạch Content theo từng giai đoạn.':
    'Coming from a content background, with years of hands-on experience across diverse marketing positions, I have had the opportunity to learn and directly implement varied types of plans: from channel positioning roadmaps, new product marketing launches, to phased content calendars.',
  'Theo kinh nghiệm của mình, dù là một kế hoạch Marketing tổng thể hay một kế hoạch Content nhỏ, mọi thứ đều cần bắt đầu từ việc nghiên cứu thị trường, hiểu khách hàng mục tiêu và xác định rõ các trụ nội dung xuyên suốt. Khi hiểu mình đang nói với ai, thị trường cần gì và sản phẩm có lợi thế gì, kế hoạch phía sau mới có hướng đi rõ ràng và thực tế hơn.':
    'In my experience, whether it is an overarching marketing strategy or a micro content plan, everything must begin with thorough market research, deep audience understanding, and well-defined content pillars. Only when we know who we are speaking to, what the market demands, and what unique edge the product offers, does the execution plan gain clarity and practical impact.',

  'Định Hướng Xây Dựng Kênh': 'Channel Positioning & Strategy',
  'Nghiên cứu insight & hành vi tệp khách hàng tiềm năng': 'Research insights & behavioral patterns of target audiences',
  'Xác định rõ các trụ cột nội dung (Content Pillars) chủ lực': 'Define core Content Pillars aligned with brand goals',
  'Thiết lập phong cách kênh chân thật, chuẩn gu thương hiệu': 'Establish authentic channel tone aligned with brand identity',

  'Kế Hoạch Content Theo Từng Giai Đoạn': 'Phased Content Rollout Plan',
  'Tối ưu content đa kênh': 'Omnichannel content optimization',
  'Phối hợp nhịp nhàng giữa kịch bản, quay dựng và thiết kế': 'Harmonious workflow between scripting, filming, and visual design',
  'Theo dõi tiến độ và đánh giá hiệu quả từng bài đăng': 'Monitor production timeline and evaluate post KPIs',

  'Kế Hoạch Marketing Cho Sản Phẩm Mới': 'New Product Launch Marketing Plan',
  'Định vị lợi thế sản phẩm (USP) so với đối thủ': 'Position unique selling points (USPs) against market competitors',
  'Chiến dịch ra mắt mạch lạc: Teasing ➔ Launch ➔ Retargeting': 'Cohesive launch sequence: Teasing ➔ Launch ➔ Retargeting',
  'Tối ưu ngân sách thực tế và gia tăng tỷ lệ chuyển đổi': 'Optimize realistic budget allocation & maximize conversion rates',

  // Ads Page
  'Một Campaign Ads Thành Công Đến Từ 2 Yếu Tố': 'A Successful Ad Campaign Comes From 2 Key Factors',
  'Theo mình, một campaign Ads hiệu quả đến từ 2 yếu tố chính: 70% Content và 30% cách triển khai Ads.':
    'In my view, an effective ad campaign hinges on 2 primary drivers: 70% Content and 30% Ad Execution & Optimization.',
  '70% Content': '70% Content',
  '30% cách triển khai Ads': '30% Ad Execution',
  '70% — CONTENT': '70% — CONTENT',
  'Content cần đánh trúng insight của khách hàng mục tiêu, đủ thu hút để họ dừng lại và quan trọng hơn là thúc đẩy họ ra quyết định.':
    'Content must tap directly into the target audience’s core insight, captivating enough to stop the scroll and, most importantly, motivating them to take action.',
  'Vai trò của Tali: Nghiên cứu content Ads của đối thủ • Phân tích hành vi & insight khách hàng • Tìm angle • Viết kịch bản và caption quảng cáo.':
    "Tali's Role: Competitor ad research • Customer behavior & insight analysis • Finding compelling angles • Writing ad scripts and high-converting copy.",
  '30% — ADS SETUP & OPTIMIZATION': '30% — ADS SETUP & OPTIMIZATION',
  'Một content tốt vẫn cần được đưa đến đúng người, đúng nơi với ngân sách phù hợp. Việc setup và tối ưu Ads giúp content tiếp cận đúng tệp khách hàng và tạo ra kết quả với chi phí hợp lý.':
    'Great content still needs to reach the right people in the right place with the right budget. Strategic setup and continuous optimization ensure the ad reaches qualified prospects and generates maximum ROI.',
  'Vai trò của Tali: Xác định hướng target • Setup campaign • Phân bổ ngân sách • Theo dõi chỉ số và tối ưu dựa trên kết quả thực tế.':
    "Tali's Role: Defining targeting strategy • Setting up campaigns • Budget allocation • Real-time KPI tracking and performance optimization.",
  'Ads từng set (Báo cáo chỉ số & Hiệu quả chiến dịch)': 'Set-by-Set Ad Results (Metrics & Performance Reports)',
  'Ảnh chụp thực tế từ Ads Manager. Bấm vào ảnh để phóng to chi tiết.': 'Real screenshots from Ads Manager. Click image to enlarge details.',
  'Báo Cáo Set #1': 'Set #1 Report',
  'Báo Cáo Set #2': 'Set #2 Report',

  // Design AI Page
  'Ứng Dụng AI Vào Marketing & Design': 'Applying AI to Marketing & Visual Design',
  'Mình sử dụng AI như một trợ lý trong công việc Marketing, giúp rút ngắn thời gian triển khai và tối ưu nguồn lực nhưng vẫn đảm bảo chất lượng đầu ra.':
    'I leverage AI as a smart assistant in marketing operations, drastically cutting down turnaround times and optimizing resources while maintaining premium quality output.',
  'Từ thiết kế Social Visual chỉ trong khoảng 5 phút, xây dựng Company Profile/Portfolio nhanh chóng, đến tạo video và các ấn phẩm truyền thông bằng AI. Nhờ đó, nhiều ý tưởng có thể được thử nghiệm và đưa vào thực tế nhanh hơn, đặc biệt phù hợp với môi trường SMEs có nguồn lực giới hạn.':
    'From designing social visuals in ~5 minutes, creating company profiles/portfolios swiftly, to producing AI-generated video and branding assets. This allows more creative ideas to be tested and launched into market faster—ideal for agile SMEs with lean budgets.',
  'Ấn Phẩm Thiết Kế & Visual Truyền Thông': 'AI-Powered Creative Assets & Visual Showcase',
  'Bấm vào ảnh để phóng to chi tiết.': 'Click image to view in high resolution.',
  'Company Profile (HAPPYBOOK.PROFILE.VN.pdf)': 'Company Profile (HAPPYBOOK.PROFILE.VN.pdf)',
  'Thông Báo Lịch Nghỉ Lễ 30/4 & 1/5': 'Holiday Notice (April 30 & May 1)',
  'Banner Dịch Vụ Du Lịch & Khách Sạn': 'Travel & Hospitality Digital Banner',
  'Poster Chào Mừng Quốc Khánh 2/9': 'National Independence Day Poster (Sept 2)',
  'Visual Quảng Bá Visa Ấn Độ': 'India Visa Promotional Visual',
  'Banner Giới Thiệu eSIM Vietnam Du Lịch': 'Vietnam Travel eSIM Banner',
  'Ưu Đãi 50% Khách Sạn Thương Gia': '50% Off Business Hotel Campaign Visual',

  // TikTok Channel Page
  'Tất cả 4 kênh': 'All 4 Channels',
  'Gần 700 tin nhắn tự nhiên/tháng': 'Nearly 700 organic inquiries/month',
  'Gần 200 tin nhắn tự nhiên mỗi tháng': 'Nearly 200 organic inquiries/month',
  'Hơn 15 video viral & nhận booking có phí khi chưa đầy 1.000 followers': '15+ viral videos & paid sponsor bookings before 1,000 followers',
  'Travel Vlog trải nghiệm chân thực & phong cách edit cuốn hút': 'Authentic travel vlogs & engaging cinematic editing style',
  'Video Viral': 'Viral Content',
  'Video Bán Hàng': 'Sales & Conversion Content',
  'Video Sản Phẩm & Dịch Vụ Fast Track Sân Bay': 'Airport Fast Track Service Videos',
  'Video Viral & Booking Nhãn Hàng Sân Cầu': 'Badminton Viral & Brand Partnership Videos',
  'Video Travel Vlog & Trải Nghiệm Chuyến Đi': 'Travel Vlog & Journey Experience Videos',

  // Home Page sections
  'Một chút về mình': 'A Bit About Myself',
  'Một chút về': 'A Bit About',
  'mình': 'Myself',
  'Tốt nghiệp Xuất sắc': 'Graduated with Distinction',
  'Đại học Kinh tế TP.HCM (UEH)': 'University of Economics Ho Chi Minh City (UEH)',
  'Chuyên ngành: Quản trị Kinh doanh': 'Major: Business Administration',
  'Thành tựu nổi bật': 'Key Achievements',
  'Thành tựu &': 'Key Achievements',
  'Dấu ấn nổi bật': 'Key Highlights',
  'Các brand đã đồng hành': 'Partner Brands & Clients',
  'đồng hành': 'Clients',
  'Các brand đã': 'Partner Brands &',
  'Khám phá thêm các sản phẩm & dự án khác': 'Explore More Works & Case Studies',
  'Xem các video ngắn đa nền tảng (Reels/Shorts), video UGC hoặc các kế hoạch Marketing toàn diện.':
    'Explore cross-platform short-form videos (Reels/Shorts), UGC campaigns, and comprehensive marketing roadmaps.',

  // Facebook Content Page & Roles
  'Sáng Tạo': 'Creative',
  'Thực Chiến': 'In Action',
  'Sáng Tạo Content Facebook Thực Chiến': 'Practical Facebook Content Creation',
  'Định hướng hình ảnh & Chiến lược nội dung': 'Brand Aesthetic & Content Strategy',
  'Video Reels': 'Video Reels',
  'Bài viết Fanpage': 'Fanpage Posts',
  'Viết kịch bản': 'Scriptwriting',
  'Phỏng vấn khách hàng': 'Customer Interviewing',
  'Tham gia ghi hình': 'On-set Filming',
  'Brief edit video': 'Video Editing Brief',
  'Viết caption': 'Copywriting',
  'Brief thiết kế': 'Visual Design Brief',
  'Quay video': 'Video Shooting',
  'Tìm source ảnh': 'Visual Sourcing',
  'Nha khoa Wilson': 'Wilson Dentistry',
  'Nhà in Colorbook': 'Colorbook Print House',
  'Ngành cưới (CiLove Bridal)': 'Bridal Industry (CiLove Bridal)',
  'Ngành Yến Sào (Yến Sào Yến Huỳnh)': 'Bird Nest Industry (Yen Huynh)',
  'Colorbook, một thương hiệu in ấn lâu đời trong ngành cưới. Với “đề bài” là đưa sản phẩm gần hơn với tệp khách lẻ trẻ tuổi, mình đề xuất hướng nội dung hài dí dỏm. Tuyến nội dung này giúp thương hiệu dễ tiếp cận tới khách hàng và đưa sản phẩm tới khách hàng dễ dàng hơn.':
    'Colorbook is an established heritage printing house in the wedding space. Facing the challenge of connecting closer with younger retail customers, I suggested a witty, humorous content angle. This approach made the brand approachable and smoothly showcased the products to the target audience.',
  'Nha khoa Wilson định hướng hình ảnh theo phong cách sang trọng, chuẩn 5 sao. Để tăng sự tin tưởng và tạo sự kết nối với khách hàng trong ngành nha khoa, thay vì đi theo hướng content bác sĩ chia sẻ kiến thức quen thuộc, mình xây dựng kịch bản theo hướng chân thật, để khách hàng tự chia sẻ chính câu chuyện của mình.':
    'Wilson Dentistry positions its brand with a luxurious, 5-star standard. To foster genuine trust and deep customer connection in dental healthcare, rather than standard doctor lectures, I crafted authentic patient-centric interview scripts where clients share their personal real-life stories.',

  // Video UGC Page
  'Tuyển Tập Video UGC Nổi Bật': 'Featured UGC Video Showcase',
  'Bấm trực tiếp vào video để phát hoặc xem toàn màn hình độ phân giải cao.':
    'Click directly on any video to play or view in full-screen high definition.'
};

/**
 * 2. HÀM GỌI GOOGLE TRANSLATE API ĐỘC LẬP TỰ ĐỘNG CHO BẤT KỲ VĂN BẢN NÀO
 */
async function fetchGoogleTranslate(text: string): Promise<string> {
  const trimmed = text.trim();
  if (!trimmed) return text;

  try {
    const encoded = encodeURIComponent(trimmed);
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=vi&tl=en&dt=t&q=${encoded}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Translation API error: ${response.status}`);
    }
    const data = await response.json();
    if (Array.isArray(data) && Array.isArray(data[0])) {
      const translated = data[0].map((item: any) => item[0]).join('');
      return translated || text;
    }
  } catch (error) {
    console.warn('Failed to dynamic translate text:', text, error);
  }
  return text;
}

/**
 * 3. HÀM CHÍNH: DỊCH TỪ VI SANG EN (ĐỒNG BỘ VỚI CACHE + BẤT ĐỒNG BỘ NẾU CHƯA CÓ)
 * 
 * - Nếu text đã có trong Curated Dictionary -> trả về ngay lập tức.
 * - Nếu text đã được lưu trong localStorage cache -> trả về ngay lập tức.
 * - Nếu text chưa có (người dùng vừa thêm hoặc sửa câu mới) -> trả về tạm thời text hiện tại,
 *   đồng thời tự động kích hoạt API ngầm để dịch và lưu vào cache, sau đó tự động kích hoạt re-render!
 */
export function translateText(text: string, currentLang: AppLanguage): string {
  if (currentLang === 'vi') return text;
  if (!text || typeof text !== 'string') return text;

  const trimmed = text.trim();
  if (!trimmed) return text;

  // 1. Kiểm tra từ điển chuẩn xác (ưu tiên cao nhất)
  if (CURATED_TRANSLATIONS[trimmed]) {
    return text.replace(trimmed, CURATED_TRANSLATIONS[trimmed]);
  }

  // 2. Kiểm tra bộ nhớ đệm
  if (memoryCache[trimmed]) {
    return text.replace(trimmed, memoryCache[trimmed]);
  }

  // 3. Nếu chưa có, kích hoạt tác vụ dịch ngầm tự động (chỉ gọi 1 lần cho mỗi chuỗi)
  if (!pendingRequests.has(trimmed)) {
    const requestPromise = fetchGoogleTranslate(trimmed).then((translated) => {
      if (translated && translated !== trimmed) {
        memoryCache[trimmed] = translated;
        saveLocalCache(memoryCache);
        notifyListeners(); // Thông báo giao diện tự động cập nhật
      }
      pendingRequests.delete(trimmed);
      return translated;
    }).catch(() => {
      pendingRequests.delete(trimmed);
      return trimmed;
    });

    pendingRequests.set(trimmed, requestPromise);
  }

  // Trả về bản thân chuỗi trong khi đang tải dịch ngầm
  return text;
}
