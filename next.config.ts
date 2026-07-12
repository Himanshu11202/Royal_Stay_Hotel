import type { NextConfig } from "next";
import * as fs from "fs";
import * as path from "path";

// Auto-copy palace image asset from brain folder on dev server start
try {
  const src = "C:\\Users\\Himanshu patidar\\.gemini\\antigravity-ide\\brain\\3a94e51b-8dbc-4b92-9709-579722a928ef\\media__1783787601437.jpg";
  const dest = path.join(process.cwd(), "public", "hotel-hero.jpg");
  if (!fs.existsSync(dest) && fs.existsSync(src)) {
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(src, dest);
    console.log("SUCCESS: Hotel image asset provisioned successfully.");
  }
} catch (err) {
  console.error("Asset copy pre-compilation check failed:", err);
}

const nextConfig: NextConfig = {
  images: {
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
      }
    ],
  },
};

export default nextConfig;
