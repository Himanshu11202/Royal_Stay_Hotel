import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import CustomCursor from "@/components/custom-cursor";
import Footer from "@/components/footer";
import BookingModal from "@/components/booking-modal";
import LenisProvider from "@/components/lenis-provider";
import { BookingProvider } from "@/hooks/use-booking";

// Load Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Patidar Palace | Luxury Heritage Resort Udaipur",
  description: "Experience the majestic royalty of heritage hospitality. Restored 19th-century palace offering regal suites, private infinity pools, and signature dining along Lake Pichola, Udaipur.",
  keywords: ["luxury hotel", "heritage resort", "Udaipur resort", "palace stay India", "royal wedding venue", "lakeside suites"],
  metadataBase: new URL("https://patidarpalace.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Patidar Palace | Luxury Heritage Resort Udaipur",
    description: "Experience majestic royalty and fine-dining along the shimmering waters of Lake Pichola.",
    url: "https://patidarpalace.com",
    siteName: "Patidar Palace",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Patidar Palace Widescreen Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patidar Palace | Luxury Heritage Resort Udaipur",
    description: "Experience majestic royalty and fine-dining along the shimmering waters of Lake Pichola.",
    images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Hotel Schema Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Patidar Palace",
    "description": "Experience the majestic royalty of heritage hospitality at Patidar Palace, Udaipur's premier lakeside luxury resort.",
    "telephone": "+91 294 123 4567",
    "email": "reservations@patidarpalace.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Heritage Valley, Royal Hill Road",
      "addressLocality": "Udaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "313001",
      "addressCountry": "IN"
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "image": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <BookingProvider>
          <LenisProvider>
            <CustomCursor />
            <Navbar />
            <main className="min-h-screen relative">{children}</main>
            <Footer />
            <BookingModal />
          </LenisProvider>
        </BookingProvider>
      </body>
    </html>
  );
}
