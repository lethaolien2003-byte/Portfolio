const https = require('https');
const fs = require('fs');

const urls = [
  { url: 'https://www.facebook.com/cilovebridal/posts/pfbid02as2i82AGzZ7m4E2kvFyg2FG6EpnhKBZE6F3A8kTrh6p93FuTidN1m7wcoquKKo9Ul', id: 'ads-post-1' },
  { url: 'https://www.facebook.com/cilovebridal/posts/pfbid0ouK2wxEqDswmymu49kj2JeRPaJHr7AsfJn9Es4U1wsFv2QCPVM53rURqKBQNQj9gl', id: 'ads-post-2' },
  { url: 'https://www.facebook.com/share/p/1CvwYn3wGG/', id: 'ads-post-3' },
  { url: 'https://www.facebook.com/share/p/1EqiDXFRMW/', id: 'ads-post-4' },
];

function fetchMeta(item) {
  return new Promise((resolve) => {
    https.get(item.url, { headers: { 'User-Agent': 'facebookexternalhit/1.1' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          redirectUrl = new URL(redirectUrl, item.url).href;
        }
        item.resolvedUrl = redirectUrl;
        https.get(redirectUrl, { headers: { 'User-Agent': 'facebookexternalhit/1.1' } }, (res2) => {
          let data = '';
          res2.on('data', chunk => data += chunk);
          res2.on('end', () => extract(data, item, resolve));
        }).on('error', () => resolve(item));
        return;
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => extract(data, item, resolve));
    }).on('error', () => resolve(item));
  });
}

function extract(html, item, resolve) {
  const getOg = (prop) => {
    const m = html.match(new RegExp(`<meta[^>]*property=["']og:${prop}["'][^>]*content=["']([^"']*)["']`, 'i')) ||
              html.match(new RegExp(`<meta[^>]*content=["']([^"']*)["'][^>]*property=["']og:${prop}["']`, 'i'));
    return m ? m[1] : '';
  };
  const getDesc = () => {
    const m = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
    return m ? m[1] : '';
  };

  item.title = getOg('title') || '';
  item.description = getOg('description') || getDesc();
  item.image = getOg('image') || '';
  
  if (item.image) {
    const cleanImgUrl = item.image.replace(/&amp;/g, '&');
    https.get(cleanImgUrl, { headers: { 'User-Agent': 'facebookexternalhit/1.1' } }, (imgRes) => {
      if (imgRes.statusCode >= 300 && imgRes.statusCode < 400 && imgRes.headers.location) {
        https.get(imgRes.headers.location, (imgRes2) => {
          const stream = fs.createWriteStream(`public/ads/${item.id}.jpg`);
          imgRes2.pipe(stream);
          stream.on('finish', () => {
            item.localImage = `/ads/${item.id}.jpg`;
            resolve(item);
          });
        }).on('error', () => resolve(item));
      } else {
        const stream = fs.createWriteStream(`public/ads/${item.id}.jpg`);
        imgRes.pipe(stream);
        stream.on('finish', () => {
          item.localImage = `/ads/${item.id}.jpg`;
          resolve(item);
        });
      }
    }).on('error', () => resolve(item));
  } else {
    resolve(item);
  }
}

async function main() {
  const results = [];
  for (const item of urls) {
    console.log('Fetching', item.url);
    const r = await fetchMeta(item);
    results.push(r);
  }
  fs.writeFileSync('src/data/adsScrapedMeta.json', JSON.stringify(results, null, 2), 'utf-8');
  console.log('Done! Saved to src/data/adsScrapedMeta.json');
}

main();
