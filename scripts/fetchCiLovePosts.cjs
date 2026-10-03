const https = require('https');
const fs = require('fs');

const urls = [
  { url: 'https://www.facebook.com/cilovebridal/posts/pfbid0H79yxLAVSv9MHy3Rd1GhwY9uyTq8HpHTk6a69gUSU4QXmEZBttFSBxe99GBBjmgFl', name: 'cilove-post-2.jpg' },
  { url: 'https://www.facebook.com/cilovebridal/posts/pfbid097n2iQpkNu2ZmSoDV8k8G4noxaesSZt5SjrGffsCPmWaWezeGcGDvVJXMqbp8RRNl', name: 'cilove-post-3.jpg' },
  { url: 'https://www.facebook.com/cilovebridal/posts/pfbid0TnNpTTWdJcnX1abaz4yKAURCyqHKgxXHypUvZaLtfe6gG8GiRgoG6bWPAd3a8UiXl', name: 'cilove-post-4.jpg' },
];

function fetchAndDownload(item) {
  return new Promise((resolve) => {
    https.get(item.url, { headers: { 'User-Agent': 'facebookexternalhit/1.1' } }, (res) => {
      let html = '';
      res.on('data', c => html += c);
      res.on('end', () => {
        const m = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["']/i) ||
                  html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*property=["']og:image["']/i);
        const imgUrl = m ? m[1].replace(/&amp;/g, '&') : '';
        console.log('Got imgUrl for', item.name, imgUrl ? imgUrl.substring(0, 80) : 'none');
        if (!imgUrl) return resolve();
        https.get(imgUrl, { headers: { 'User-Agent': 'facebookexternalhit/1.1' } }, (r2) => {
          if (r2.statusCode >= 300 && r2.statusCode < 400 && r2.headers.location) {
            https.get(r2.headers.location, (r3) => {
              const fileStream = fs.createWriteStream('public/facebook-posts/' + item.name);
              r3.pipe(fileStream);
              fileStream.on('finish', () => { console.log('Saved', item.name); resolve(); });
            }).on('error', () => resolve());
          } else {
            const fileStream = fs.createWriteStream('public/facebook-posts/' + item.name);
            r2.pipe(fileStream);
            fileStream.on('finish', () => { console.log('Saved', item.name); resolve(); });
          }
        }).on('error', () => resolve());
      });
    }).on('error', () => resolve());
  });
}

async function main() {
  for (const item of urls) await fetchAndDownload(item);
  console.log('CiLove posts done!');
}
main();
