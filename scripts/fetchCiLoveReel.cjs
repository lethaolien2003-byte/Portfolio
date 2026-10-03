const https = require('https');
const fs = require('fs');

https.get('https://www.facebook.com/reel/496043716652570/', { headers: { 'User-Agent': 'facebookexternalhit/1.1' } }, (res) => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    const m = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["']/i);
    const tm = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["']/i);
    console.log('CiLove Reel Title:', tm ? tm[1] : 'none');
    const imgUrl = m ? m[1].replace(/&amp;/g, '&') : '';
    console.log('CiLove Reel Img:', imgUrl ? imgUrl.substring(0, 80) : 'none');
    if (!imgUrl) return;
    https.get(imgUrl, { headers: { 'User-Agent': 'facebookexternalhit/1.1' } }, (r2) => {
      const s = fs.createWriteStream('public/facebook-posts/cilove-reel-3.jpg');
      r2.pipe(s);
      s.on('finish', () => console.log('Saved cilove-reel-3.jpg'));
    });
  });
});
