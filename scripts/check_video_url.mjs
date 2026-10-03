import https from 'https';

const url = 'https://www.tiktok.com/@happybook.visatrungquoc/video/7509492482032323847';

https.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
  }
}, res => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    const match = html.match(/<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__"[^>]*>(.*?)<\/script>/s);
    if (match) {
      const data = JSON.parse(match[1]);
      const itemStruct = data['__DEFAULT_SCOPE__']?.['webapp.video-detail']?.itemInfo?.itemStruct;
      console.log('video keys:', Object.keys(itemStruct.video || {}));
      console.log('playAddr:', itemStruct.video?.playAddr);
      console.log('downloadAddr:', itemStruct.video?.downloadAddr);
      console.log('format:', itemStruct.video?.format);
      console.log('bitrateInfo:', itemStruct.video?.bitrateInfo?.map(b => ({ quality: b.GearName, url: b.PlayAddr?.UrlList?.[0] })));
    }
  });
});
