import https from 'https';
import fs from 'fs';
import path from 'path';

const videos = [
  // Channel 1: Trùm Visa Trung Quốc
  {
    channelId: 'trum-visa-trung-quoc',
    type: 'viral',
    url: 'https://www.tiktok.com/@happybook.visatrungquoc/video/7509492482032323847'
  },
  {
    channelId: 'trum-visa-trung-quoc',
    type: 'viral',
    url: 'https://www.tiktok.com/@happybook.visatrungquoc/video/7574765286365187336'
  },
  {
    channelId: 'trum-visa-trung-quoc',
    type: 'viral',
    url: 'https://www.tiktok.com/@happybook.visatrungquoc/video/7528035489178340616'
  },
  {
    channelId: 'trum-visa-trung-quoc',
    type: 'viral',
    url: 'https://www.tiktok.com/@happybook.visatrungquoc/video/7523241260308598024'
  },
  {
    channelId: 'trum-visa-trung-quoc',
    type: 'sales',
    url: 'https://www.tiktok.com/@happybook.visatrungquoc/video/7507619030430141703'
  },
  {
    channelId: 'trum-visa-trung-quoc',
    type: 'sales',
    url: 'https://www.tiktok.com/@happybook.visatrungquoc/video/7579207025867951378'
  },
  {
    channelId: 'trum-visa-trung-quoc',
    type: 'sales',
    url: 'https://www.tiktok.com/@happybook.visatrungquoc/video/7523142347803151634'
  },
  {
    channelId: 'trum-visa-trung-quoc',
    type: 'sales',
    url: 'https://www.tiktok.com/@happybook.visatrungquoc/video/7611566903655451922'
  },

  // Channel 2: Go VietNam with HappyBook
  {
    channelId: 'govietnam-happybook',
    type: 'inbound',
    url: 'https://www.tiktok.com/@happybook.inbound/video/7547668459866541319'
  },
  {
    channelId: 'govietnam-happybook',
    type: 'inbound',
    url: 'https://www.tiktok.com/@happybook.inbound/video/7584474947158854930'
  },
  {
    channelId: 'govietnam-happybook',
    type: 'inbound',
    url: 'https://www.tiktok.com/@happybook.inbound/video/7550173757961293064'
  },
  {
    channelId: 'govietnam-happybook',
    type: 'inbound',
    url: 'https://www.tiktok.com/@happybook.inbound/video/7552857971101863175'
  },

  // Channel 3: Nguyễn Nguyễn
  {
    channelId: 'nguyen-nguyen',
    type: 'viral',
    url: 'https://www.tiktok.com/@nguyennguyeniuiu/video/7646019319406546194'
  },
  {
    channelId: 'nguyen-nguyen',
    type: 'viral',
    url: 'https://www.tiktok.com/@nguyennguyeniuiu/video/7638968218714934546'
  },
  {
    channelId: 'nguyen-nguyen',
    type: 'viral',
    url: 'https://www.tiktok.com/@nguyennguyeniuiu/video/7669439467001842952'
  },
  {
    channelId: 'nguyen-nguyen',
    type: 'viral',
    url: 'https://www.tiktok.com/@nguyennguyeniuiu/video/7669081597085322503'
  },
  {
    channelId: 'nguyen-nguyen',
    type: 'viral',
    url: 'https://www.tiktok.com/@nguyennguyeniuiu/video/7665749926600592658'
  },
  {
    channelId: 'nguyen-nguyen',
    type: 'viral',
    url: 'https://www.tiktok.com/@nguyennguyeniuiu/video/7662787609327881490'
  },
  {
    channelId: 'nguyen-nguyen',
    type: 'viral',
    url: 'https://www.tiktok.com/@nguyennguyeniuiu/video/7667966172469546258'
  },
  {
    channelId: 'nguyen-nguyen',
    type: 'viral',
    url: 'https://www.tiktok.com/@nguyennguyeniuiu/video/7672783496095517970'
  },

  // Channel 4: Tali Tung Tăng
  {
    channelId: 'tali-tung-tang',
    type: 'vlog',
    url: 'https://www.tiktok.com/@talitungtang/video/7683187313895050517'
  },
  {
    channelId: 'tali-tung-tang',
    type: 'vlog',
    url: 'https://www.tiktok.com/@talitungtang/video/7664622564756573460'
  },
  {
    channelId: 'tali-tung-tang',
    type: 'vlog',
    url: 'https://www.tiktok.com/@talitungtang/video/7659057379027242261'
  },
  {
    channelId: 'tali-tung-tang',
    type: 'vlog',
    url: 'https://www.tiktok.com/@talitungtang/video/7634537563453279509'
  }
];

function fetchPage(targetUrl) {
  return new Promise((resolve, reject) => {
    const req = https.get(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchPage(res.headers.location).then(resolve).catch(reject);
      }
      let html = '';
      res.on('data', chunk => html += chunk);
      res.on('end', () => resolve(html));
    });
    req.on('error', reject);
    req.setTimeout(12000, () => {
      req.destroy();
      reject(new Error('Timeout'));
    });
  });
}

function downloadImage(imgUrl, destPath) {
  return new Promise((resolve, reject) => {
    https.get(imgUrl, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(destPath);
        res.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        reject(new Error(`Failed with status ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

function formatNum(num) {
  if (num === undefined || num === null) return '0';
  const n = typeof num === 'string' ? parseInt(num, 10) : num;
  if (isNaN(n)) return '0';
  if (n >= 1000000) {
    return (n / 1000000).toFixed(1).replace('.0', '') + 'M';
  }
  if (n >= 1000) {
    return (n / 1000).toFixed(1).replace('.0', '') + 'K';
  }
  return n.toLocaleString('vi-VN');
}

async function main() {
  const thumbsDir = path.resolve('public/tiktok-thumbs');
  if (!fs.existsSync(thumbsDir)) {
    fs.mkdirSync(thumbsDir, { recursive: true });
  }

  const results = [];

  for (let i = 0; i < videos.length; i++) {
    const item = videos[i];
    const videoIdMatch = item.url.match(/video\/(\d+)/);
    const videoId = videoIdMatch ? videoIdMatch[1] : `video_${i}`;
    console.log(`[${i + 1}/${videos.length}] Fetching ${videoId} (${item.url})...`);

    try {
      const html = await fetchPage(item.url);
      const match = html.match(/<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__"[^>]*>(.*?)<\/script>/s) ||
                    html.match(/<script id="SIGI_STATE"[^>]*>(.*?)<\/script>/s);

      let itemStruct = null;
      if (match) {
        try {
          const data = JSON.parse(match[1]);
          const defaultScope = data['__DEFAULT_SCOPE__'] || data;
          itemStruct = defaultScope['webapp.video-detail']?.itemInfo?.itemStruct;
        } catch (e) {
          console.error(`  JSON parse error for ${videoId}`);
        }
      }

      let playCount = 0;
      let diggCount = 0;
      let commentCount = 0;
      let shareCount = 0;
      let desc = '';
      let cover = '';

      if (itemStruct) {
        const stats = itemStruct.stats || {};
        playCount = stats.playCount || 0;
        diggCount = stats.diggCount || 0;
        commentCount = stats.commentCount || 0;
        shareCount = stats.shareCount || 0;
        desc = itemStruct.desc || '';
        cover = itemStruct.video?.cover || itemStruct.video?.dynamicCover || '';
      } else {
        // Fallback regex
        const p = html.match(/"playCount":(\d+)/);
        const d = html.match(/"diggCount":(\d+)/);
        const c = html.match(/"commentCount":(\d+)/);
        const de = html.match(/"desc":"([^"]+)"/);
        playCount = p ? parseInt(p[1], 10) : 0;
        diggCount = d ? parseInt(d[1], 10) : 0;
        commentCount = c ? parseInt(c[1], 10) : 0;
        desc = de ? de[1] : '';
      }

      // Download cover if available
      const localCoverPath = path.join(thumbsDir, `${videoId}.jpg`);
      if (cover) {
        try {
          await downloadImage(cover, localCoverPath);
          console.log(`  Downloaded cover to ${videoId}.jpg`);
        } catch (err) {
          console.log(`  Failed to download cover: ${err.message}`);
        }
      }

      const resultItem = {
        id: videoId,
        channelId: item.channelId,
        type: item.type,
        url: item.url,
        title: desc.split('#')[0].trim() || 'Video TikTok',
        desc: desc,
        rawStats: {
          playCount,
          diggCount,
          commentCount,
          shareCount
        },
        views: formatNum(playCount),
        likes: formatNum(diggCount),
        comments: formatNum(commentCount),
        thumbnail: `/tiktok-thumbs/${videoId}.jpg`
      };

      console.log(`  => Stats: 👁️ ${resultItem.views} | ❤️ ${resultItem.likes} | 💬 ${resultItem.comments}`);
      results.push(resultItem);

      // Brief delay to be polite to TikTok servers
      await new Promise(r => setTimeout(r, 600));
    } catch (err) {
      console.error(`  Error fetching ${videoId}:`, err.message);
      results.push({
        id: videoId,
        channelId: item.channelId,
        type: item.type,
        url: item.url,
        title: 'Video TikTok',
        rawStats: {},
        views: 'N/A',
        likes: 'N/A',
        comments: 'N/A',
        thumbnail: `/tiktok-thumbs/${videoId}.jpg`
      });
    }
  }

  fs.writeFileSync('scripts/tiktok_real_stats.json', JSON.stringify(results, null, 2), 'utf-8');
  console.log('Saved all real stats to scripts/tiktok_real_stats.json!');
}

main();
