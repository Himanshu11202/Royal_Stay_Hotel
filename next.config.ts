import type { NextConfig } from "next";
import * as fs from "fs";
import * as path from "path";
import * as https from "https";

// Helper to download image asset
const downloadImage = (url: string, dest: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Status code ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

// Provision hero assets
try {
  const publicDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const assets = [
    { name: "hero-far.jpg", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200" },
    { name: "hero-mid.jpg", url: "https://images.unsplash.com/photo-1598977123418-45f04b01fe1e?auto=format&fit=crop&q=80&w=1200" },
    { name: "hero-gate.jpg", url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200" }
  ];

  assets.forEach(async (asset) => {
    const dest = path.join(publicDir, asset.name);
    if (!fs.existsSync(dest)) {
      try {
        await downloadImage(asset.url, dest);
        console.log(`SUCCESS: Provisioned ${asset.name}`);
      } catch (err) {
        console.warn(`WARNING: Failed download for ${asset.name}, falling back to copies:`, err.message);
        const fallback = path.join(publicDir, "hotel-hero.jpg");
        if (fs.existsSync(fallback)) {
          fs.copyFileSync(fallback, dest);
        }
      }
    }
  });
} catch (err) {
  console.error("Asset provision failed:", err);
}

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;
