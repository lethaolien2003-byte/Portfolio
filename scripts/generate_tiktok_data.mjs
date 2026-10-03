import fs from 'fs';

const rawStats = JSON.parse(fs.readFileSync('scripts/tiktok_real_stats.json', 'utf-8'));

const channels = [
  {
    id: "trum-visa-trung-quoc",
    name: "Trùm Visa Trung Quốc",
    handle: "@happybook.visatrungquoc",
    avatar: "/brands/happybook.jpg",
    channelScreenshot: "/channels/channel_visatrungquoc.jpg",
    url: "https://www.tiktok.com/@happybook.visatrungquoc",
    followers: "5.124",
    likes: "79.1K",
    following: "0",
    bio: "HappyBook Visa • Chuyên tư vấn visa Trung Quốc - HongKong. Inbox trực tiếp tại TikTok hoặc liên hệ 0.9.0.2.7.6.7.7.1.5",
    timeframe: "5/2025 - 5/2026",
    roles: [
      "Định hướng tuyến nội dung kênh",
      "Viết content",
      "Làm VJ kênh",
      "Edit video"
    ],
    strategy: "Nhận thấy tiềm năng từ thị trường visa Trung Quốc, mình xây dựng kênh với hai tuyến nội dung chủ lực: thông tin nóng và bán hàng. Nội dung viral giúp thu hút đúng tệp khách hàng và tăng độ nhận diện; nội dung bán hàng tiếp tục khơi gợi nhu cầu và thúc đẩy chuyển đổi. Kết quả, kênh mang về gần 200 tin nhắn tự nhiên mỗi tháng.",
    highlightMetric: "Gần 200 tin nhắn tự nhiên mỗi tháng",
    colorScheme: "pink",
    makeGroups: (vids) => [
      {
        groupName: "Video Viral",
        videos: vids.filter(v => v.type === 'viral')
      },
      {
        groupName: "Video Bán Hàng",
        videos: vids.filter(v => v.type === 'sales')
      }
    ]
  },
  {
    id: "govietnam-happybook",
    name: "Go VietNam with HappyBook",
    handle: "@happybook.inbound",
    avatar: "/brands/happybook.jpg",
    channelScreenshot: "/channels/channel_happybook_inbound.jpg",
    url: "https://www.tiktok.com/@happybook.inbound",
    followers: "6.906",
    likes: "33.5K",
    following: "0",
    bio: "Vietnam evisa & Airport Fast Track • Whatapp/Zalo: 0.9.0.9.3.7.6.4.2.1",
    timeframe: "7/2025 - 3/2026",
    roles: [
      "Định hướng tuyến nội dung kênh",
      "Viết content",
      "Edit video"
    ],
    strategy: "Fast Track - Dịch vụ hỗ trợ ưu tiên xuất nhập cảnh tại sân bay, không phải sản phẩm mới, nhưng cách truyền thông trên thị trường vẫn chưa thực sự nổi bật. Mình đề xuất hướng nội dung gần gũi, đi thẳng vào những “nỗi đau” thực tế của khách hàng và biến một dịch vụ khá xa lạ trở nên dễ hiểu, dễ tiếp cận hơn. Từ con số 0, kênh đạt gần 700 tin nhắn tự nhiên/tháng và trở thành một trong những kênh nổi bật về nội dung Fast Track.",
    highlightMetric: "Gần 700 tin nhắn tự nhiên/tháng",
    colorScheme: "matcha",
    makeGroups: (vids) => [
      {
        groupName: "Video Sản Phẩm & Dịch Vụ Fast Track Sân Bay",
        videos: vids
      }
    ]
  },
  {
    id: "nguyen-nguyen",
    name: "Nguyễn Nguyễn",
    handle: "@nguyennguyeniuiu",
    avatar: "/brands/nguyennguyen.jpg",
    channelScreenshot: "/channels/channel_nguyennguyen.jpg",
    url: "https://www.tiktok.com/@nguyennguyeniuiu",
    followers: "1.235",
    likes: "78K",
    following: "28",
    bio: "Plan B: Phép thuật winx en chan tíck • Contact for work: hiennguyen.ebba.neu@gmail.com",
    timeframe: "6/2026 - 9/2026",
    roles: [
      "Định hướng tuyến nội dung kênh",
      "Viết content",
      "Edit video"
    ],
    strategy: "Từ trải nghiệm của Nguyễn Nguyễn, một người chơi cầu lông không chuyên, mình định hướng nội dung theo góc nhìn gần gũi, biến những câu chuyện rất đời thường trên sân cầu thành chất liệu thu hút người xem. Kết quả, kênh có hơn 15 video viral và bắt đầu nhận booking có phí từ nhãn hàng khi chưa đầy 1.000 followers.",
    highlightMetric: "Hơn 15 video viral & nhận booking có phí khi chưa đầy 1.000 followers",
    colorScheme: "pink",
    makeGroups: (vids) => [
      {
        groupName: "Video Viral & Booking Nhãn Hàng Sân Cầu",
        videos: vids
      }
    ]
  },
  {
    id: "tali-tung-tang",
    name: "Tali Tung Tăng",
    handle: "@talitungtang",
    avatar: "/brands/nguyennguyen.jpg",
    channelScreenshot: "/channels/channel_talitungtang.jpg",
    url: "https://www.tiktok.com/@talitungtang",
    followers: "81",
    likes: "6.744",
    following: "20",
    bio: "Mỗi chuyến đi là một lần khám phá thế giới và khám phá chính mình 💕",
    timeframe: "Đang phát triển",
    roles: [
      "Travel Vlogger",
      "Sáng tạo nội dung",
      "Quay & Edit video"
    ],
    strategy: "Nơi mình thực hiện đam mê trở thành travel vlogger. Nơi kể những câu chuyện thật về những chuyến đi của mình và cũng thể hiện rõ chất làm nội dung và cách mình edit video.",
    highlightMetric: "Travel Vlog trải nghiệm chân thực & phong cách edit cuốn hút",
    colorScheme: "matcha",
    makeGroups: (vids) => [
      {
        groupName: "Video Travel Vlog & Trải Nghiệm Chuyến Đi",
        videos: vids
      }
    ]
  }
];

const assembledChannels = channels.map(c => {
  const channelVideos = rawStats.filter(v => v.channelId === c.id).map(v => {
    let tag = 'Video';
    if (v.type === 'viral') tag = 'Viral';
    else if (v.type === 'sales') tag = 'Bán Hàng';
    else if (v.type === 'inbound') tag = 'Dịch Vụ';
    else if (v.type === 'vlog') tag = 'Vlog';

    return {
      id: v.id,
      url: v.url,
      title: v.title,
      tag: tag,
      type: v.type,
      thumbnail: v.thumbnail,
      views: v.views,
      likes: v.likes,
      comments: v.comments
    };
  });

  const groups = c.makeGroups(channelVideos);

  return {
    id: c.id,
    name: c.name,
    handle: c.handle,
    avatar: c.avatar,
    channelScreenshot: c.channelScreenshot,
    url: c.url,
    followers: c.followers,
    likes: c.likes,
    following: c.following,
    bio: c.bio,
    timeframe: c.timeframe,
    roles: c.roles,
    strategy: c.strategy,
    highlightMetric: c.highlightMetric,
    colorScheme: c.colorScheme,
    groups: groups
  };
});

const tsContent = `/**
 * DỮ LIỆU CÁC KÊNH TIKTOK XÂY DỰNG TỪ CON SỐ 0
 * Dữ liệu số liệu thực tế (lượt xem, lượt tim, bình luận) được cập nhật chính xác từ TikTok
 */

export interface TikTokVideoItem {
  id: string;
  url: string;
  title: string;
  tag?: string;
  type?: 'viral' | 'sales' | 'inbound' | 'vlog';
  thumbnail: string;
  views: string;
  likes: string;
  comments: string;
}

export interface TikTokVideoGroup {
  groupName: string;
  videos: TikTokVideoItem[];
}

export interface TikTokChannel {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  channelScreenshot: string;
  url: string;
  followers: string;
  likes: string;
  following: string;
  bio: string;
  timeframe: string;
  roles: string[];
  strategy: string;
  highlightMetric: string;
  colorScheme: 'pink' | 'matcha';
  groups: TikTokVideoGroup[];
}

export const tiktokChannelsData: TikTokChannel[] = ${JSON.stringify(assembledChannels, null, 2)};
`;

fs.writeFileSync('src/data/tiktokChannelsData.ts', tsContent, 'utf-8');
console.log('Successfully regenerated src/data/tiktokChannelsData.ts with groups!');
