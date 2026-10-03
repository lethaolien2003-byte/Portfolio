/**
 * ĐỊNH NGHĨA KIỂU DỮ LIỆU CHO MARKETING PORTFOLIO & TRAVEL VLOG MOODBOARD
 */

export type NavPage = 
  | 'home' 
  | 'tiktok' 
  | 'video-reels' 
  | 'video-ugc' 
  | 'marketing-plan' 
  | 'ads' 
  | 'design-ai' 
  | 'photo-diary'
  | 'roadmap'
  | 'services'
  | 'contact';

export interface PhotoboothItem {
  id: string;
  theme: 'matcha' | 'pink';
  location: string;
  date: string;
  tag: string;
  photos: string[]; // 4 ảnh theo chuẩn photobooth Hàn Quốc (Life4Cuts)
  caption: string;
  sticker: string;
}

export interface FilmStripItem {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  frameCode: string;
}

export interface VlogReelItem {
  id: string;
  title: string;
  tag: string;
  metrics: string;
  previewVideoUrl: string;
  fullVideoUrl: string;
  thumbnailUrl: string;
  coverImage: string;
  location: string;
  colorScheme: 'matcha' | 'pink';
}

export interface RoadmapStep {
  stepNumber: string;
  title: string;
  timeTag?: string;
  description: string;
  icon: string;
  badge: string;
  highlightPhoto?: string;
  accent: 'matcha' | 'pink';
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  ribbonColor: 'matcha' | 'pink';
  buttonText: string;
  tag: string;
}

export interface GalleryPhotoItem {
  id: string;
  url: string;
  title: string;
  caption: string;
  location: string;
  tag: string;
}

export interface ProfileInfo {
  name: string;
  siteTitle: string; // 'Marketing Portfolio Thao Lien Le'
  role: string;
  vlogTagline: string;
  location: string;
  instagramHandle: string;
  quote: string;
  heroImages: {
    traSuBoat: string;
    fairyStream: string;
    daLatCafe: string;
    chicBlack: string;
    castle: string;
    thaiWatArun: string;
    bangkokCat: string;
    pinkDress: string;
  };
}

export interface FacebookReel {
  id: string;
  url: string;
  title: string;
  description: string;
  thumbnail: string;
  tag: string;
  metrics?: string;
}

export interface FacebookPost {
  id: string;
  url: string;
  title: string;
  excerpt: string;
  image?: string;
  tag: string;
  date?: string;
}

export interface FacebookBrandShowcase {
  id: string;
  name: string;
  category: string;
  logo: string;
  roles: string[];
  strategy: string;
  colorScheme: 'matcha' | 'pink';
  reels: FacebookReel[];
  posts: FacebookPost[];
}
