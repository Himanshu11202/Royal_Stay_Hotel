import React from "react";
import CinematicLoader from "@/sections/cinematic-loader";
import HeroVideo from "@/sections/hero-video";
import WelcomeSection from "@/sections/welcome-section";
import RoomPreview from "@/sections/room-preview";
import ExperiencesPreview from "@/sections/experiences-preview";
import DiningPreview from "@/sections/dining-preview";
import InfinityPool from "@/sections/infinity-pool";
import WeddingDestination from "@/sections/wedding-destination";
import GallerySection from "@/sections/gallery-section";
import Awards from "@/sections/awards";
import Testimonials from "@/sections/testimonials";
import NearbyAttractions from "@/sections/nearby-attractions";
import FAQSection from "@/sections/faq-section";
import Newsletter from "@/sections/newsletter";
import InstagramGallery from "@/sections/instagram-gallery";

export default function Home() {
  return (
    <>
      {/* Preloader */}
      <CinematicLoader />

      {/* SECTION 1: Fullscreen Hero */}
      <HeroVideo />

      {/* SECTION 2: Luxury Welcome */}
      <WelcomeSection />

      {/* SECTION 3: Signature Rooms */}
      <RoomPreview />

      {/* SECTION 4: Luxury Experience */}
      <ExperiencesPreview />

      {/* SECTION 5: Restaurant Preview */}
      <DiningPreview />

      {/* SECTION 6: Infinity Pool */}
      <InfinityPool />

      {/* SECTION 7: Wedding Destination */}
      <WeddingDestination />

      {/* SECTION 8: Luxury Gallery */}
      <GallerySection />

      {/* SECTION 9: Awards */}
      <Awards />

      {/* SECTION 10: Guest Testimonials */}
      <Testimonials />

      {/* SECTION 11: Nearby Attractions */}
      <NearbyAttractions />

      {/* SECTION 12: FAQ */}
      <FAQSection />

      {/* SECTION 13: Newsletter */}
      <Newsletter />

      {/* SECTION 14: Instagram Gallery */}
      <InstagramGallery />
    </>
  );
}
