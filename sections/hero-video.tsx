"use client";

import React, { useRef, useEffect } from "react";
import { ArrowDown, Mail, Phone, Star } from "lucide-react";
import { gsap, useIsomorphicLayoutEffect } from "@/lib/gsap";
import { useBooking } from "@/hooks/use-booking";
import LuxuryImage from "@/components/luxury-image";

export function HeroVideo() {
  const { openBooking } = useBooking();
  const heroRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  
  // Transition Refs
  const farShotRef = useRef<HTMLDivElement>(null);
  const hotelImgRef = useRef<HTMLImageElement>(null);
  const gateLeftRef = useRef<HTMLDivElement>(null);
  const gateRightRef = useRef<HTMLDivElement>(null);
  const gateContainerRef = useRef<HTMLDivElement>(null);
  const goldenLightRef = useRef<HTMLDivElement>(null);
  const lobbyRef = useRef<HTMLDivElement>(null);
  const uiRef = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    const welcomeSec = document.getElementById("welcome-section");
    if (welcomeSec) {
      welcomeSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const hero = heroRef.current;
      const viewport = viewportRef.current;
      const farShot = farShotRef.current;
      const hotelImg = hotelImgRef.current;
      const gateLeft = gateLeftRef.current;
      const gateRight = gateRightRef.current;
      const gateContainer = gateContainerRef.current;
      const goldenLight = goldenLightRef.current;
      const lobby = lobbyRef.current;
      const ui = uiRef.current;

      if (
        hero && viewport && farShot && hotelImg && gateLeft && gateRight && 
        gateContainer && goldenLight && lobby && ui
      ) {
        // Calculate responsive scale based on screen width
        const getResponsiveScale = () => {
          if (typeof window === "undefined") return 8;
          const width = window.innerWidth;
          if (width >= 2560) return 4.5;
          if (width >= 1920) return 5.5;
          if (width >= 1600) return 6.5;
          if (width >= 1440) return 7.5;
          return 8.5;
        };

        const responsiveScale = getResponsiveScale();

        // Create ScrollTrigger timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2, // Smooth scrolling scrubbing index
            pin: viewport,
            pinSpacing: true,
            invalidateOnRefresh: true,
          }
        });

        // 1. Zoom into the hotel building (targeting the central entrance doors)
        tl.to(hotelImg, {
          scale: responsiveScale, // Safe, responsive zoom scale factor
          duration: 3.5,
          ease: "power2.inOut",
        });

        // 2. As we reach the gates, the gate overlays fade in
        tl.fromTo(gateContainer, {
          opacity: 0,
        }, {
          opacity: 1,
          duration: 0.3,
          ease: "none",
        }, "-=1.2");

        // 3. Doors split open, Lobby fades in, and UI text appears simultaneously
        tl.to(gateLeft, {
          xPercent: -100,
          duration: 1.8,
          ease: "power3.inOut",
        }, "-=0.8");

        tl.to(gateRight, {
          xPercent: 100,
          duration: 1.8,
          ease: "power3.inOut",
        }, "-=1.8");

        tl.fromTo(goldenLight, {
          opacity: 0,
        }, {
          opacity: 0.85,
          duration: 1.2,
          ease: "power2.in",
        }, "-=1.8");

        // Lobby fades in at the same time
        tl.fromTo(lobby, {
          scale: 0.9,
          opacity: 0,
        }, {
          scale: 1,
          opacity: 1,
          duration: 1.8,
          ease: "power2.out",
        }, "-=1.8");

        // Reveal the Typography text UI immediately as gates open
        tl.fromTo(ui, {
          y: 40,
          opacity: 0,
        }, {
          y: 0,
          opacity: 1,
          duration: 1.8,
          ease: "power3.out",
        }, "-=1.8");

        // Fade out gates at the end
        tl.to(gateContainer, {
          opacity: 0,
          duration: 0.3,
        }, "-=0.3");
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative w-full h-[300vh] bg-luxury-black">
      {/* Pinned viewport screen */}
      <div ref={viewportRef} className="absolute top-0 left-0 w-full h-screen overflow-hidden bg-luxury-black flex items-center justify-center">
        
        {/* ========================================================
            LAYER 1: FULLSCREEN FAR SHOT
            ======================================================== */}
        <div
          ref={farShotRef}
          className="absolute inset-0 w-full h-full z-10 pointer-events-none select-none overflow-hidden"
        >
          {/* Main Palace Drone Shot (Full viewport coverage, hotel is far away inside photo) */}
          <LuxuryImage
            ref={hotelImgRef}
            src="/hotel-hero.jpg"
            alt="ROYAL STAY Far Palace View"
            fill
            priority
            className="w-full h-full object-cover object-center scale-[1.02]"
            style={{
              objectPosition: "center center",
              transformOrigin: "49.5% 53.5%", // Pinpoint camera zoom directly to grand double doors behind fountain
              willChange: "transform",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black/60 z-15" />
          <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        </div>

        {/* ========================================================
            LAYER 2: PALACE GATES OVERLAY (Splits open during zoom)
            ======================================================== */}
        <div
          ref={gateContainerRef}
          className="absolute inset-0 z-20 w-full h-full opacity-0 pointer-events-none select-none flex"
        >
          {/* Left Gate Panel */}
          <div
            ref={gateLeftRef}
            className="w-1/2 h-full bg-transparent border-r-4 border-primary/80 flex items-center justify-end relative"
          >
            <div className="w-[15vw] h-[55vh] border border-primary/20 mr-16 flex items-center justify-center bg-black/30 backdrop-blur-[1px]">
              <span className="text-primary/10 text-9xl font-serif">R</span>
            </div>
          </div>

          {/* Right Gate Panel */}
          <div
            ref={gateRightRef}
            className="w-1/2 h-full bg-transparent border-l-4 border-primary/80 flex items-center justify-start relative"
          >
            <div className="w-[15vw] h-[55vh] border border-primary/20 ml-16 flex items-center justify-center bg-black/30 backdrop-blur-[1px]">
              <span className="text-primary/10 text-9xl font-serif">S</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            WARM GOLDEN DOOR LIGHT GLOW
            ======================================================== */}
        <div
          ref={goldenLightRef}
          className="absolute inset-0 z-15 bg-gradient-to-r from-transparent via-primary/20 to-transparent mix-blend-color-dodge opacity-0 pointer-events-none"
        />

        {/* ========================================================
            LAYER 3: LOBBY INTERIOR PANEL (Chandelier Reception Hall)
            ======================================================== */}
        <div
          ref={lobbyRef}
          className="absolute inset-0 w-full h-full z-25 opacity-0 pointer-events-none select-none"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <LuxuryImage
            src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1600"
            alt="Lobby Chandelier Room"
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 right-1/4 w-[400px] h-full bg-gradient-to-b from-primary/15 via-primary/2 to-transparent -rotate-12 blur-3xl z-15" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 z-20" />
        </div>

        {/* ========================================================
            WELCOME TYPOGRAPHY & CTAs
            ======================================================== */}
        <div
          ref={uiRef}
          className="absolute inset-0 z-40 opacity-0 flex flex-col justify-center items-center text-center px-6 pt-28 pb-16"
        >
          <div className="max-w-[1200px] w-full mx-auto my-auto flex flex-col items-center justify-center space-y-6">
            {/* Stars */}
            <div className="flex flex-col items-center space-y-2">
              <span className="font-sans text-[9px] tracking-[0.3em] text-primary flex items-center justify-center space-x-1">
                <Star size={10} fill="#D4AF37" className="text-primary" />
                <Star size={10} fill="#D4AF37" className="text-primary" />
                <Star size={10} fill="#D4AF37" className="text-primary" />
                <Star size={10} fill="#D4AF37" className="text-primary" />
                <Star size={10} className="text-primary" />
              </span>
            </div>

            <h2 
              className="font-sans tracking-[0.35em] text-primary uppercase"
              style={{ fontSize: "clamp(0.6rem, 1.2vw, 0.85rem)" }}
            >
              WELCOME TO
            </h2>
            <h1 
              className="font-serif text-white font-light uppercase tracking-wide leading-tight max-w-6xl"
              style={{ fontSize: "clamp(3rem, 7vw, 8rem)" }}
            >
              {"ROYAL STAY"}
            </h1>
            <span 
              className="font-sans text-white/40 uppercase mt-1"
              style={{ fontSize: "clamp(0.55rem, 1vw, 0.75rem)", letterSpacing: "0.4em" }}
            >
              Luxury Hotel & Resort
            </span>

            <p 
              className="font-sans text-white/70 font-light tracking-[0.25em] uppercase max-w-2xl mt-4 leading-relaxed"
              style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
            >
              {"Experience Luxury Beyond Expectations"}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 w-full max-w-sm sm:max-w-none">
              <button
                onClick={openBooking}
                className="w-full sm:w-auto px-10 py-4 bg-primary text-luxury-black text-xs font-sans font-semibold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors duration-300 interactive-hover"
              >
                Book Now
              </button>
              <button
                onClick={handleScrollDown}
                className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white hover:border-primary hover:text-primary text-xs font-sans font-semibold uppercase tracking-[0.2em] transition-colors duration-300 interactive-hover"
              >
                Explore
              </button>
            </div>
          </div>

          {/* Coordinate bars */}
          <div className="absolute bottom-16 w-full flex items-center justify-center space-x-6 text-[9px] font-sans tracking-widest text-white/30 uppercase">
            <span className="flex items-center space-x-2">
              <Phone size={10} className="text-primary/70" />
              <span>+91 98765 43210</span>
            </span>
            <span className="text-white/10">|</span>
            <span className="flex items-center space-x-2">
              <Mail size={10} className="text-primary/70" />
              <span>info@royalstay.com</span>
            </span>
          </div>

          {/* Micro-scroll indicator */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer interactive-hover"
            onClick={handleScrollDown}
          >
            <span className="font-sans text-[8px] tracking-[0.3em] uppercase text-white/20 mb-1">Scroll To Discover</span>
            <ArrowDown size={12} className="text-primary animate-bounce" />
          </div>
        </div>

        {/* Initial Scroll helper */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-45 flex flex-col items-center select-none pointer-events-none">
          <span className="font-sans text-[8px] tracking-[0.4em] uppercase text-white/40 mb-2">Scroll to Travel</span>
          <ArrowDown size={14} className="text-primary animate-bounce" />
        </div>

      </div>
    </div>
  );
}
export default HeroVideo;
