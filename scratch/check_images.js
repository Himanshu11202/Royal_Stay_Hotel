const fs = require('fs');
const path = require('path');
const https = require('https');

const projectDir = "C:\\Users\\Himanshu patidar\\OneDrive\\Desktop\\Hotel";
const imageUrls = new Set();
const urlPattern = /https?:\/\/(?:[a-zA-Z0-9\-]+\.)+(?:unsplash|pexels)\.com\/[^\s"'}]+/g;

function walkDir(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      if (file !== '.next' && file !== 'node_modules') {
        walkDir(filePath);
      }
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.json') || file.endsWith('.js')) {
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          let match;
          while ((match = urlPattern.exec(content)) !== null) {
            let cleanUrl = match[0].split('?')[0]; // check base URL or full match
            // clean up trailing chars
            let fullUrl = match[0].replace(/[)'",};]+$/, '');
            imageUrls.add(fullUrl);
          }
        } catch (e) {}
      }
    }
  });
}

walkDir(projectDir);
console.log(`Found ${imageUrls.size} unique image URLs. Pinging them now...`);

const urls = Array.from(imageUrls).sort();
const brokenUrls = [];
let pending = urls.length;

if (pending === 0) {
  console.log("\n--- Summary ---");
  console.log("No remote images found.");
  process.exit(0);
}

urls.forEach(url => {
  if (!url.includes('unsplash.com') && !url.includes('pexels.com')) {
    pending--;
    return;
  }
  
  const options = {
    method: 'HEAD',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    },
    timeout: 5000
  };

  const req = https.request(url, options, (res) => {
    if (res.statusCode !== 200 && res.statusCode !== 301 && res.statusCode !== 302) {
      console.log(`[FAIL] ${url} returned status code ${res.statusCode}`);
      brokenUrls.push({ url, err: `HTTP ${res.statusCode}` });
    } else {
      console.log(`[OK] ${url} (HTTP ${res.statusCode})`);
    }
    checkDone();
  });

  req.on('error', (e) => {
    console.log(`[FAIL] ${url} failed with error: ${e.message}`);
    brokenUrls.push({ url, err: e.message });
    checkDone();
  });

  req.on('timeout', () => {
    req.destroy();
    console.log(`[FAIL] ${url} timed out`);
    brokenUrls.push({ url, err: 'Timeout' });
    checkDone();
  });

  req.end();
});

function checkDone() {
  pending--;
  if (pending === 0) {
    console.log("\n--- Summary ---");
    if (brokenUrls.length === 0) {
      console.log("All image URLs are 100% valid and return HTTP 200/3xx!");
    } else {
      console.log(`Found ${brokenUrls.length} broken URLs:`);
      brokenUrls.forEach(item => {
        console.log(`- ${item.url} (${item.err})`);
      });
    }
    process.exit(brokenUrls.length > 0 ? 1 : 0);
  }
}
