/**
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

export const tiktokChannelsData: TikTokChannel[] = [
  {
    "id": "trum-visa-trung-quoc",
    "name": "Trùm Visa Trung Quốc",
    "handle": "@happybook.visatrungquoc",
    "avatar": "/brands/happybook.jpg",
    "channelScreenshot": "/channels/channel_visatrungquoc.jpg",
    "url": "https://www.tiktok.com/@happybook.visatrungquoc",
    "followers": "5.124",
    "likes": "79.1K",
    "following": "0",
    "bio": "HappyBook Visa • Chuyên tư vấn visa Trung Quốc - HongKong. Inbox trực tiếp tại TikTok hoặc liên hệ 0.9.0.2.7.6.7.7.1.5",
    "timeframe": "5/2025 - 5/2026",
    "roles": [
      "Định hướng tuyến nội dung kênh",
      "Viết content",
      "Làm VJ kênh",
      "Edit video"
    ],
    "strategy": "Nhận thấy tiềm năng từ thị trường visa Trung Quốc, mình xây dựng kênh với hai tuyến nội dung chủ lực: thông tin nóng và bán hàng. Nội dung viral giúp thu hút đúng tệp khách hàng và tăng độ nhận diện; nội dung bán hàng tiếp tục khơi gợi nhu cầu và thúc đẩy chuyển đổi.",
    "highlightMetric": "Gần 200 tin nhắn tự nhiên mỗi tháng",
    "colorScheme": "pink",
    "groups": [
      {
        "groupName": "Video Viral",
        "videos": [
          {
            "id": "7509492482032323847",
            "url": "https://www.tiktok.com/@happybook.visatrungquoc/video/7509492482032323847",
            "title": "Lần đầu nhập cảnh Trung Quốc thì đừng bỏ qua video này nhé 🥰",
            "tag": "Viral",
            "type": "viral",
            "thumbnail": "/tiktok-thumbs/7509492482032323847.jpg",
            "views": "335.7K",
            "likes": "24.3K",
            "comments": "247"
          },
          {
            "id": "7574765286365187336",
            "url": "https://www.tiktok.com/@happybook.visatrungquoc/video/7574765286365187336",
            "title": "Từ 20/11/2025 Trung Quốc có yêu cầu nhập cảnh mới đối với diện visa du lịch L15 và L30",
            "tag": "Viral",
            "type": "viral",
            "thumbnail": "/tiktok-thumbs/7574765286365187336.jpg",
            "views": "101.3K",
            "likes": "3.5K",
            "comments": "84"
          },
          {
            "id": "7528035489178340616",
            "url": "https://www.tiktok.com/@happybook.visatrungquoc/video/7528035489178340616",
            "title": "Lấy chồng Trung Quốc, SƯỚNG hay KHỔ?",
            "tag": "Viral",
            "type": "viral",
            "thumbnail": "/tiktok-thumbs/7528035489178340616.jpg",
            "views": "75.6K",
            "likes": "6.3K",
            "comments": "116"
          },
          {
            "id": "7523241260308598024",
            "url": "https://www.tiktok.com/@happybook.visatrungquoc/video/7523241260308598024",
            "title": "Bạn có đang hiểu lầm về 3 sự thật này tại Trung Quốc?",
            "tag": "Viral",
            "type": "viral",
            "thumbnail": "/tiktok-thumbs/7523241260308598024.jpg",
            "views": "82.5K",
            "likes": "3.3K",
            "comments": "29"
          }
        ]
      },
      {
        "groupName": "Video Bán Hàng",
        "videos": [
          {
            "id": "7507619030430141703",
            "url": "https://www.tiktok.com/@happybook.visatrungquoc/video/7507619030430141703",
            "title": "Mấy bà chuẩn bị lấy chồng Trung Quốc nhưng còn phân vân không biết chọn loại visa nào thì xem ngay video nhé 🥰",
            "tag": "Bán Hàng",
            "type": "sales",
            "thumbnail": "/tiktok-thumbs/7507619030430141703.jpg",
            "views": "36.5K",
            "likes": "1.8K",
            "comments": "32"
          },
          {
            "id": "7579207025867951378",
            "url": "https://www.tiktok.com/@happybook.visatrungquoc/video/7579207025867951378",
            "title": "Chị em sắp du lịch Trung Quốc xem hết video này để chọn loại visa phù hợp nhé!",
            "tag": "Bán Hàng",
            "type": "sales",
            "thumbnail": "/tiktok-thumbs/7579207025867951378.jpg",
            "views": "46.5K",
            "likes": "1.2K",
            "comments": "59"
          },
          {
            "id": "7523142347803151634",
            "url": "https://www.tiktok.com/@happybook.visatrungquoc/video/7523142347803151634",
            "title": "Visa dán nhiều thủ tục phức tạp 👉 Visa đoàn là chân ái cho chuyến đi lịch Trung Quốc sắp tới của bạn 🥰",
            "tag": "Bán Hàng",
            "type": "sales",
            "thumbnail": "/tiktok-thumbs/7523142347803151634.jpg",
            "views": "6K",
            "likes": "30",
            "comments": "53"
          },
          {
            "id": "7611566903655451922",
            "url": "https://www.tiktok.com/@happybook.visatrungquoc/video/7611566903655451922",
            "title": "Lưu ngay 3 mẹo đi Cung Yến Hàng Châu để có trải nghiệm tiệc cung đình đáng nhớ khi sang Trung Quốc nha.",
            "tag": "Bán Hàng",
            "type": "sales",
            "thumbnail": "/tiktok-thumbs/7611566903655451922.jpg",
            "views": "12.1K",
            "likes": "275",
            "comments": "19"
          }
        ]
      }
    ]
  },
  {
    "id": "govietnam-happybook",
    "name": "Go VietNam with HappyBook",
    "handle": "@happybook.inbound",
    "avatar": "/brands/happybook.jpg",
    "channelScreenshot": "/channels/channel_happybook_inbound.jpg",
    "url": "https://www.tiktok.com/@happybook.inbound",
    "followers": "6.906",
    "likes": "33.5K",
    "following": "0",
    "bio": "Vietnam evisa & Airport Fast Track • Whatapp/Zalo: 0.9.0.9.3.7.6.4.2.1",
    "timeframe": "7/2025 - 3/2026",
    "roles": [
      "Định hướng tuyến nội dung kênh",
      "Viết content",
      "Edit video"
    ],
    "strategy": "Fast Track - Dịch vụ hỗ trợ ưu tiên xuất nhập cảnh tại sân bay, không phải sản phẩm mới, nhưng cách truyền thông trên thị trường vẫn chưa thực sự nổi bật. Mình đề xuất hướng nội dung gần gũi, đi thẳng vào những “nỗi đau” thực tế của khách hàng và biến một dịch vụ khá xa lạ trở nên dễ hiểu, dễ tiếp cận hơn. Từ con số 0, kênh trở thành một trong những kênh nổi bật về nội dung Fast Track.",
    "highlightMetric": "Gần 700 tin nhắn tự nhiên/tháng",
    "colorScheme": "matcha",
    "groups": [
      {
        "groupName": "Video Sản Phẩm & Dịch Vụ Fast Track Sân Bay",
        "videos": [
          {
            "id": "7547668459866541319",
            "url": "https://www.tiktok.com/@happybook.inbound/video/7547668459866541319",
            "title": "Cần dịch vụ đón tiễn ưu tiên sân bay 👉 Inbox Bách Khoa Hộ Chiếu ngay!",
            "tag": "Dịch Vụ",
            "type": "inbound",
            "thumbnail": "/tiktok-thumbs/7547668459866541319.jpg",
            "views": "195K",
            "likes": "2.4K",
            "comments": "641"
          },
          {
            "id": "7584474947158854930",
            "url": "https://www.tiktok.com/@happybook.inbound/video/7584474947158854930",
            "title": "Đừng nói Fast Track là dịch vụ mồi chài hay trái phép khi bạn chưa sử dụng. Fast Track là dịch vụ hợp pháp giúp bạn có trải nghiệm bay trọn vẹn hơn",
            "tag": "Dịch Vụ",
            "type": "inbound",
            "thumbnail": "/tiktok-thumbs/7584474947158854930.jpg",
            "views": "25.8K",
            "likes": "195",
            "comments": "55"
          },
          {
            "id": "7550173757961293064",
            "url": "https://www.tiktok.com/@happybook.inbound/video/7550173757961293064",
            "title": "Sợ xuất/nhập cảnh đông đúc 👉 Đặt Fast Track ngay!",
            "tag": "Dịch Vụ",
            "type": "inbound",
            "thumbnail": "/tiktok-thumbs/7550173757961293064.jpg",
            "views": "45.2K",
            "likes": "337",
            "comments": "131"
          },
          {
            "id": "7552857971101863175",
            "url": "https://www.tiktok.com/@happybook.inbound/video/7552857971101863175",
            "title": "Đón người thân ở sân bay thì đặt ngay Fast Track bạn nhé!",
            "tag": "Dịch Vụ",
            "type": "inbound",
            "thumbnail": "/tiktok-thumbs/7552857971101863175.jpg",
            "views": "26.5K",
            "likes": "253",
            "comments": "36"
          }
        ]
      }
    ]
  },
  {
    "id": "nguyen-nguyen",
    "name": "Nguyễn Nguyễn",
    "handle": "@nguyennguyeniuiu",
    "avatar": "/brands/nguyennguyen.jpg",
    "channelScreenshot": "/channels/channel_nguyennguyen.jpg",
    "url": "https://www.tiktok.com/@nguyennguyeniuiu",
    "followers": "1.235",
    "likes": "78K",
    "following": "28",
    "bio": "Plan B: Phép thuật winx en chan tíck • Contact for work: hiennguyen.ebba.neu@gmail.com",
    "timeframe": "6/2026 - 9/2026",
    "roles": [
      "Định hướng tuyến nội dung kênh",
      "Viết content",
      "Edit video"
    ],
    "strategy": "Từ trải nghiệm của Nguyễn Nguyễn, một người chơi cầu lông không chuyên, mình định hướng nội dung theo góc nhìn gần gũi, biến những câu chuyện rất đời thường trên sân cầu thành chất liệu thu hút người xem.",
    "highlightMetric": "Hơn 15 video viral & nhận booking có phí khi chưa đầy 1.000 followers",
    "colorScheme": "pink",
    "groups": [
      {
        "groupName": "Video Viral & Booking Nhãn Hàng Sân Cầu",
        "videos": [
          {
            "id": "7646019319406546194",
            "url": "https://www.tiktok.com/@nguyennguyeniuiu/video/7646019319406546194",
            "title": "Tui chọn đánh cầu lông sân máy lạnh vì Hoả Diệm Sơn nay đã có chi nhánh SG 😭🏸",
            "tag": "Viral",
            "type": "viral",
            "thumbnail": "/tiktok-thumbs/7646019319406546194.jpg",
            "views": "470.7K",
            "likes": "15.4K",
            "comments": "145"
          },
          {
            "id": "7638968218714934546",
            "url": "https://www.tiktok.com/@nguyennguyeniuiu/video/7638968218714934546",
            "title": "Mọi người thích đánh cầu sân thường hay sân máy lạnh 💃🏻",
            "tag": "Viral",
            "type": "viral",
            "thumbnail": "/tiktok-thumbs/7638968218714934546.jpg",
            "views": "131.9K",
            "likes": "3.6K",
            "comments": "106"
          },
          {
            "id": "7669439467001842952",
            "url": "https://www.tiktok.com/@nguyennguyeniuiu/video/7669439467001842952",
            "title": "Mọi người ăn uống gì trước lúc đi đánh cầu lông z, còn tui thì chọn 👉🏻",
            "tag": "Viral",
            "type": "viral",
            "thumbnail": "/tiktok-thumbs/7669439467001842952.jpg",
            "views": "3.4M",
            "likes": "10.7K",
            "comments": "52"
          },
          {
            "id": "7669081597085322503",
            "url": "https://www.tiktok.com/@nguyennguyeniuiu/video/7669081597085322503",
            "title": "Mọi người đang chơi vợt nào z, newbie hơn 1 năm chơi cầu như tui nên đổi vợt nào thì ngon zị các lông thủ ơiiii",
            "tag": "Viral",
            "type": "viral",
            "thumbnail": "/tiktok-thumbs/7669081597085322503.jpg",
            "views": "183K",
            "likes": "5.5K",
            "comments": "101"
          },
          {
            "id": "7665749926600592658",
            "url": "https://www.tiktok.com/@nguyennguyeniuiu/video/7665749926600592658",
            "title": "Các bác thấy món gì đầu tư là phí tiền khi chơi cầu lông zạa",
            "tag": "Viral",
            "type": "viral",
            "thumbnail": "/tiktok-thumbs/7665749926600592658.jpg",
            "views": "275K",
            "likes": "10.2K",
            "comments": "127"
          },
          {
            "id": "7662787609327881490",
            "url": "https://www.tiktok.com/@nguyennguyeniuiu/video/7662787609327881490",
            "title": "Các bác mua đồ cầu lông hết bnhiu rùiii",
            "tag": "Viral",
            "type": "viral",
            "thumbnail": "/tiktok-thumbs/7662787609327881490.jpg",
            "views": "164.7K",
            "likes": "7.2K",
            "comments": "175"
          },
          {
            "id": "7667966172469546258",
            "url": "https://www.tiktok.com/@nguyennguyeniuiu/video/7667966172469546258",
            "title": "Mng chơi cầu lông bao lâu rùi, chia sẻ kinh nghiệm cho newbie với nè",
            "tag": "Viral",
            "type": "viral",
            "thumbnail": "/tiktok-thumbs/7667966172469546258.jpg",
            "views": "49.7K",
            "likes": "2.2K",
            "comments": "17"
          },
          {
            "id": "7672783496095517970",
            "url": "https://www.tiktok.com/@nguyennguyeniuiu/video/7672783496095517970",
            "title": "Đi đánh cầu lông ở sân máy lạnh sẽ như thế nàooo",
            "tag": "Viral",
            "type": "viral",
            "thumbnail": "/tiktok-thumbs/7672783496095517970.jpg",
            "views": "98.5K",
            "likes": "2.5K",
            "comments": "49"
          }
        ]
      }
    ]
  },
  {
    "id": "tali-tung-tang",
    "name": "Tali Tung Tăng",
    "handle": "@talitungtang",
    "avatar": "/brands/nguyennguyen.jpg",
    "channelScreenshot": "/channels/channel_talitungtang.jpg",
    "url": "https://www.tiktok.com/@talitungtang",
    "followers": "81",
    "likes": "6.744",
    "following": "20",
    "bio": "Mỗi chuyến đi là một lần khám phá thế giới và khám phá chính mình 💕",
    "timeframe": "Đang phát triển",
    "roles": [
      "Travel Vlogger",
      "Sáng tạo nội dung",
      "Quay & Edit video"
    ],
    "strategy": "Nơi mình thực hiện đam mê trở thành travel vlogger. Nơi kể những câu chuyện thật về những chuyến đi của mình và cũng thể hiện rõ chất làm nội dung và cách mình edit video.",
    "highlightMetric": "Travel Vlog trải nghiệm chân thực & phong cách edit cuốn hút",
    "colorScheme": "matcha",
    "groups": [
      {
        "groupName": "Video Travel Vlog & Trải Nghiệm Chuyến Đi",
        "videos": [
          {
            "id": "7683187313895050517",
            "url": "https://www.tiktok.com/@talitungtang/video/7683187313895050517",
            "title": "Lần đầu nhập cảnh Thái Lan bà nào lo lắng chưa biết chuẩn bị gì thì xem hết video nha",
            "tag": "Vlog",
            "type": "vlog",
            "thumbnail": "/tiktok-thumbs/7683187313895050517.jpg",
            "views": "25.4K",
            "likes": "1.1K",
            "comments": "11"
          },
          {
            "id": "7664622564756573460",
            "url": "https://www.tiktok.com/@talitungtang/video/7664622564756573460",
            "title": "Du lịch Thái Lan, đi tự túc hay đi tour vui hơn. Xem hết vlog ngày 1 của Tali để biết nhoaaaa",
            "tag": "Vlog",
            "type": "vlog",
            "thumbnail": "/tiktok-thumbs/7664622564756573460.jpg",
            "views": "36.9K",
            "likes": "1.7K",
            "comments": "32"
          },
          {
            "id": "7659057379027242261",
            "url": "https://www.tiktok.com/@talitungtang/video/7659057379027242261",
            "title": "Du lịch Thái Lan 3n3đ tốn bao nhiêu xiền",
            "tag": "Vlog",
            "type": "vlog",
            "thumbnail": "/tiktok-thumbs/7659057379027242261.jpg",
            "views": "23.9K",
            "likes": "796",
            "comments": "30"
          },
          {
            "id": "7634537563453279509",
            "url": "https://www.tiktok.com/@talitungtang/video/7634537563453279509",
            "title": "Bình Hưng liệu có không đáng trải nghiệm như cđm hay nói. Cùng xem Tali ăn chơi gì tại Bình Hưng nha",
            "tag": "Vlog",
            "type": "vlog",
            "thumbnail": "/tiktok-thumbs/7634537563453279509.jpg",
            "views": "33.4K",
            "likes": "608",
            "comments": "36"
          }
        ]
      }
    ]
  }
];
