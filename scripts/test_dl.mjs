import fs from 'fs';
import https from 'https';

async function testDownload() {
  const url = 'https://www.tiktok.com/@happybook.visatrungquoc/video/7509492482032323847';
  const html = await new Promise((resolve) => {
    https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve(d));
    });
  });

  const match = html.match(/<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__"[^>]*>(.*?)<\/script>/s);
  const data = JSON.parse(match[1]);
  const playAddr = data['__DEFAULT_SCOPE__']?.['webapp.video-detail']?.itemInfo?.itemStruct?.video?.playAddr;
  console.log('Got playAddr:', playAddr ? playAddr.substring(0, 80) : null);

  if (playAddr) {
    const file = fs.createWriteStream('public/tiktok-thumbs/test_video.mp4');
    https.get(playAddr, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://www.tiktok.com/'
      }
    }, res => {
      console.log('Video download status:', res.statusCode, res.headers['content-type'], res.headers['content-length']);
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        console.log('Redirect to:', res.headers.location);
        https.get(res.headers.location, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'Referer': 'https://www.tiktok.com/'
          }
        }, res2 => {
          console.log('Redirect status:', res2.statusCode, res2.headers['content-type'], res2.headers['content-length']);
          res2.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log('Saved test_video.mp4 with size:', fs.statSync('public/tiktok-thumbs/test_video.mp4').size);
          });
        });
      } else {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('Saved test_video.mp4 with size:', fs.statSync('public/tiktok-thumbs/test_video.mp4').size);
        });
      }
    });
  }
}

testDownload();
