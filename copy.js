const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\Himanshu patidar\\.gemini\\antigravity-ide\\brain\\3a94e51b-8dbc-4b92-9709-579722a928ef\\media__1783787601437.jpg';
const dest = 'C:\\Users\\Himanshu patidar\\OneDrive\\Desktop\\Hotel\\public\\hotel-hero.jpg';

try {
  // Ensure destination directory exists
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  fs.copyFileSync(src, dest);
  console.log('SUCCESS: Asset copied successfully');
} catch (e) {
  console.error('ERROR: Copy failed:', e.message);
}
