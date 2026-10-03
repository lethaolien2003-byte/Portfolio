import https from 'https';

const url = 'https://www.tiktok.com/@happybook.visatrungquoc/video/7509492482032323847';

function fetchPage(targetUrl) {
  return new Promise((resolve, reject) => {
    https.get(targetUrl, {
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
    }).on('error', reject);
  });
}

async function run() {
  const html = await fetchPage(url);
  console.log('HTML length:', html.length);
  
  const match = html.match(/<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__"[^>]*>(.*?)<\/script>/s) ||
                html.match(/<script id="SIGI_STATE"[^>]*>(.*?)<\/script>/s);
                
  if (match) {
    try {
      const data = JSON.parse(match[1]);
      const defaultScope = data['__DEFAULT_SCOPE__'] || data;
      const videoDetail = defaultScope['webapp.video-detail'];
      console.log('Video stats:', videoDetail?.itemInfo?.itemStruct?.stats);
      console.log('Video desc:', videoDetail?.itemInfo?.itemStruct?.desc);
      console.log('Video cover:', videoDetail?.itemInfo?.itemStruct?.video?.cover);
    } catch (e) {
      console.error('JSON parse error:', e);
    }
  } else {
    // Try regex on raw html
    const play = html.match(/"playCount":(\d+)/);
    const digg = html.match(/"diggCount":(\d+)/);
    const comment = html.match(/"commentCount":(\d+)/);
    console.log('Regex stats:', { play: play?.[1], digg: digg?.[1], comment: comment?.[1] });
  }
}

run();
