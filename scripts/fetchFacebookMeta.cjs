const https = require('https');
const fs = require('fs');

const urls = [
  // Wilson Reels
  { brand: 'wilson', type: 'reel', url: 'https://www.facebook.com/reel/1081079129816071' },
  { brand: 'wilson', type: 'reel', url: 'https://www.facebook.com/reel/1348835589111645' },
  { brand: 'wilson', type: 'reel', url: 'https://www.facebook.com/reel/1478697306338116' },
  { brand: 'wilson', type: 'reel', url: 'https://www.facebook.com/reel/485705944058855' },
  // Wilson Posts
  { brand: 'wilson', type: 'post', url: 'https://www.facebook.com/nhakhoawilson/posts/pfbid0myUP7s23FymsWP7zsY5dNTawctwwniruJNnqgTTxrzTo9RQz5Nm5nRtQdNjdC67cl' },
  { brand: 'wilson', type: 'post', url: 'https://www.facebook.com/nhakhoawilson/posts/pfbid02jBjp7p68PJwPTsDB7hYzPU5GbqsmPj8Dwn8ihefknNDKcfxYwq8RvaoWdK93VbUGl' },
  { brand: 'wilson', type: 'post', url: 'https://www.facebook.com/nhakhoawilson/posts/pfbid02brNBXf34EA8MiVCxJkJGhZEi5bjonMDGKUiZDBA95stTzHP9XAXt1najZFPxH5Utl' },

  // Colorbook Reels
  { brand: 'colorbook', type: 'reel', url: 'https://www.facebook.com/reel/1138963877139965' },
  { brand: 'colorbook', type: 'reel', url: 'https://www.facebook.com/reel/2175264512807015' },
  { brand: 'colorbook', type: 'reel', url: 'https://www.facebook.com/reel/26151428594448072' },
  { brand: 'colorbook', type: 'reel', url: 'https://www.facebook.com/reel/1382261839106616' },

  // CiLove Bridal Reels
  { brand: 'cilove', type: 'reel', url: 'https://www.facebook.com/reel/1028113658588698' },
  { brand: 'cilove', type: 'reel', url: 'https://www.facebook.com/reel/8676782289006818' },
  { brand: 'cilove', type: 'reel', url: 'https://www.facebook.com/share/r/19SAyGFq3j/' },
  { brand: 'cilove', type: 'reel', url: 'https://www.facebook.com/reel/1577929242790918' },
  // CiLove Bridal Posts
  { brand: 'cilove', type: 'post', url: 'https://www.facebook.com/cilovebridal/posts/pfbid09s8hgsTGwRGQtxF2G5eUQpABRYUS2Yb3HC4ybHW6WN6HCeZboW7U4wFqYC4d38oLl' },
  { brand: 'cilove', type: 'post', url: 'https://www.facebook.com/share/p/18nFB8FCZp/' },
  { brand: 'cilove', type: 'post', url: 'https://www.facebook.com/share/p/1EikNK75Jg/' },
  { brand: 'cilove', type: 'post', url: 'https://www.facebook.com/share/p/1GxJFTdCij/' },

  // Yến Huỳnh Reel
  { brand: 'yenhuynh', type: 'reel', url: 'https://www.facebook.com/reel/1144096304159588' },
  // Yến Huỳnh Posts
  { brand: 'yenhuynh', type: 'post', url: 'https://www.facebook.com/yensaoyenhuynh/posts/pfbid02xq5NnpBH2gAtjJgJ1zAFVjQ2APf9n4THmiga1tV73EhSRMv7Gw1eyzNq1srvJByAl' },
  { brand: 'yenhuynh', type: 'post', url: 'https://www.facebook.com/yensaoyenhuynh/posts/pfbid0g2GVM2K7qN29rPBipVRCrvYXVQtcj72BKm2wh6L62rDArsMUGfuEZHpCJRqw5qYAl' },
  { brand: 'yenhuynh', type: 'post', url: 'https://www.facebook.com/yensaoyenhuynh/posts/pfbid028fGDtAYmUpAV8PeMZ96uKV7EQtBDo7JDEpx1D3Ch5NzzbWmEKcd66Vf2cj8DN857l' },
];

function fetchMeta(item) {
  return new Promise((resolve) => {
    https.get(item.url, { headers: { 'User-Agent': 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)' } }, (res) => {
      // Follow redirect if 301/302
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          redirectUrl = new URL(redirectUrl, item.url).href;
        }
        item.resolvedUrl = redirectUrl;
        https.get(redirectUrl, { headers: { 'User-Agent': 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)' } }, (res2) => {
          let data = '';
          res2.on('data', chunk => data += chunk);
          res2.on('end', () => {
            extract(data, item, resolve);
          });
        }).on('error', () => resolve(item));
        return;
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        extract(data, item, resolve);
      });
    }).on('error', (err) => {
      resolve(item);
    });
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
  resolve(item);
}

async function main() {
  const results = [];
  for (const item of urls) {
    console.log('Fetching', item.url);
    const r = await fetchMeta(item);
    results.push(r);
  }
  fs.writeFileSync('src/data/facebookScrapedMeta.json', JSON.stringify(results, null, 2), 'utf-8');
  console.log('Done! Saved to src/data/facebookScrapedMeta.json');
}

main();
