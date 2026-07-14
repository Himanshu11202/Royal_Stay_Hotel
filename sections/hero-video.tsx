"use client";

import React, { useRef } from "react";
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
  const midShotRef = useRef<HTMLDivElement>(null);
  const gateShotRef = useRef<HTMLDivElement>(null);
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
      const midShot = midShotRef.current;
      const gateShot = gateShotRef.current;
      const gateLeft = gateLeftRef.current;
      const gateRight = gateRightRef.current;
      const gateContainer = gateContainerRef.current;
      const goldenLight = goldenLightRef.current;
      const lobby = lobbyRef.current;
      const ui = uiRef.current;

      if (
        hero && viewport && farShot && midShot && gateShot && gateLeft && gateRight && 
        gateContainer && goldenLight && lobby && ui
      ) {
        // Create ScrollTrigger timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2, // Smooth scrubbing index
            pin: viewport,
            pinSpacing: true,
            invalidateOnRefresh: true,
          }
        });

        // Step 1: Camera slowly moves toward the hotel (farShot)
        tl.to(farShot, {
          scale: 1.08,
          duration: 2.0,
          ease: "power1.out",
        });

        // Step 2: Switch (crossfade) to closer image (hero-mid)
        tl.to(farShot, {
          opacity: 0,
          duration: 1.2,
          ease: "power2.inOut",
        }, "-=0.4");

        tl.fromTo(midShot, {
          opacity: 0,
          scale: 1.0,
        }, {
          opacity: 1,
          scale: 1.06,
          duration: 2.0,
          ease: "power2.inOut",
        }, "-=1.2");

        // Step 3: Switch (crossfade) to entrance image (hero-gate)
        tl.to(midShot, {
          opacity: 0,
          duration: 1.2,
          ease: "power2.inOut",
        }, "-=0.4");

        tl.fromTo(gateShot, {
          opacity: 0,
          scale: 1.0,
        }, {
          opacity: 1,
          scale: 1.05,
          duration: 2.0,
          ease: "power2.inOut",
        }, "-=1.2");

        // Step 4: Play gate opening animation
        tl.fromTo(gateContainer, {
          opacity: 0,
        }, {
          opacity: 1,
          duration: 0.4,
          ease: "none",
        });

        tl.to(gateLeft, {
          xPercent: -100,
          duration: 1.8,
          ease: "power3.inOut",
        }, "-=0.2");

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

        // Fade in lobby behind opening gates
        tl.fromTo(lobby, {
          opacity: 0,
        }, {
          opacity: 1,
          duration: 1.8,
          ease: "power2.out",
        }, "-=1.8");

        // Reveal the UI typography text
        tl.fromTo(ui, {
          y: 30,
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

        // Step 5: Fade into the actual homepage by autoAlpha viewport out
        tl.to(viewport, {
          autoAlpha: 0,
          duration: 1.0,
          ease: "power2.inOut",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative w-full h-[400vh] bg-luxury-black overflow-x-hidden">
      {/* Pinned viewport screen */}
      <div 
        ref={viewportRef} 
        className="absolute top-0 left-0 w-full h-screen overflow-hidden bg-[#030303] flex flex-col justify-between py-10 z-20"
      >
        {/* Cinematic Animated Fog Particles Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-luxury-black to-[#050505] overflow-hidden pointer-events-none">
          <div className="fog-particle absolute w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] top-[10%] left-[-10%] animate-fog-1" />
          <div className="fog-particle absolute w-[500px] h-[500px] bg-white/3 rounded-full blur-[150px] bottom-[20%] right-[-10%] animate-fog-2" />
          <div className="fog-particle absolute w-[300px] h-[300px] bg-primary/3 rounded-full blur-[100px] top-[40%] left-[60%] animate-fog-3" />
        </div>

        {/* CSS styles for animated fog */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes fog-move-1 {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(5vw, 3vh) scale(1.1); }
            100% { transform: translate(0, 0) scale(1); }
          }
          @keyframes fog-move-2 {
            0% { transform: translate(0, 0) scale(1.1); }
            50% { transform: translate(-3vw, -4vh) scale(0.95); }
            100% { transform: translate(0, 0) scale(1.1); }
          }
          @keyframes fog-move-3 {
            0% { transform: translate(0, 0) scale(0.95); }
            50% { transform: translate(4vw, -2vh) scale(1.05); }
            100% { transform: translate(0, 0) scale(0.95); }
          }
          .animate-fog-1 { animation: fog-move-1 25s ease-in-out infinite; }
          .animate-fog-2 { animation: fog-move-2 30s ease-in-out infinite; }
          .animate-fog-3 { animation: fog-move-3 20s ease-in-out infinite; }
        `}} />

        {/* Center Image Container: max-width: 1500px; width: 82%; height: 58% of viewport height */}
        <div className="relative max-w-[1500px] w-[82vw] h-[58vh] mx-auto bg-[#070707]/80 border border-white/5 shadow-2xl overflow-hidden flex items-center justify-center mt-12 z-10">
          
          {/* IMAGE 1: hero-far.jpg */}
          <div
            ref={farShotRef}
            className="absolute inset-0 w-full h-full z-10 pointer-events-none select-none overflow-hidden flex items-center justify-center"
          >
            <LuxuryImage
              ref={hotelImgRef}
              src="/hero-far.jpg"
              alt="Palace Far View"
              fill
              priority
              className="w-full h-full object-contain object-center scale-100"
              style={{
                objectPosition: "center center",
                willChange: "transform",
              }}
            />
            {/* Dark luxury overlays */}
            <div className="absolute inset-0 bg-black/45 z-15" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/85 z-15" />
          </div>

          {/* IMAGE 2: hero-mid.jpg */}
          <div
            ref={midShotRef}
            className="absolute inset-0 w-full h-full z-11 pointer-events-none select-none overflow-hidden flex items-center justify-center opacity-0"
          >
            <LuxuryImage
              src="/hero-mid.jpg"
              alt="Palace Mid View"
              fill
              className="w-full h-full object-contain object-center scale-100"
              style={{
                objectPosition: "center center",
                willChange: "transform",
              }}
            />
            {/* Dark luxury overlays */}
            <div className="absolute inset-0 bg-black/45 z-15" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/85 z-15" />
          </div>

          {/* IMAGE 3: hero-gate.jpg */}
          <div
            ref={gateShotRef}
            className="absolute inset-0 w-full h-full z-12 pointer-events-none select-none overflow-hidden flex items-center justify-center opacity-0"
          >
            <LuxuryImage
              src="/hero-gate.jpg"
              alt="Palace Gate View"
              fill
              className="w-full h-full object-contain object-center scale-100"
              style={{
                objectPosition: "center center",
                willChange: "transform",
              }}
            />
            {/* Dark luxury overlays */}
            <div className="absolute inset-0 bg-black/45 z-15" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/85 z-15" />
          </div>

          {/* LAYER 2: PALACE GATES OVERLAY (Splits open during scroll) */}
          <div
            ref={gateContainerRef}
            className="absolute inset-0 z-20 w-full h-full opacity-0 pointer-events-none select-none flex"
          >
            {/* Left Gate Panel */}
            <div
              ref={gateLeftRef}
              className="w-1/2 h-full bg-transparent border-r-2 border-primary/50 flex items-center justify-end relative"
            >
              <div className="w-[15vw] h-[45vh] border border-primary/10 mr-8 flex items-center justify-center bg-black/40 backdrop-blur-[1px]">
                <span className="text-primary/10 text-8xl font-serif">R</span>
              </div>
            </div>

            {/* Right Gate Panel */}
            <div
              ref={gateRightRef}
              className="w-1/2 h-full bg-transparent border-l-2 border-primary/50 flex items-center justify-start relative"
            >
              <div className="w-[15vw] h-[45vh] border border-primary/10 ml-8 flex items-center justify-center bg-black/40 backdrop-blur-[1px]">
                <span className="text-primary/10 text-8xl font-serif">S</span>
              </div>
            </div>
          </div>

          {/* WARM GOLDEN DOOR LIGHT GLOW */}
          <div
            ref={goldenLightRef}
            className="absolute inset-0 z-15 bg-gradient-to-r from-transparent via-primary/10 to-transparent mix-blend-color-dodge opacity-0 pointer-events-none"
          />

          {/* LAYER 3: LOBBY INTERIOR PANEL (Chandelier Reception Hall) */}
          <div
            ref={lobbyRef}
            className="absolute inset-0 w-full h-full z-25 opacity-0 pointer-events-none select-none"
          >
            <div className="absolute inset-0 bg-black/55 z-10" />
            <LuxuryImage
              src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1600"
              alt="Lobby Chandelier Room"
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 right-1/4 w-[400px] h-full bg-gradient-to-b from-primary/10 via-primary/2 to-transparent -rotate-12 blur-3xl z-15" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/50 z-20" />
          </div>

        </div>

        {/* WELCOME TYPOGRAPHY & CTAs */}
        <div
          ref={uiRef}
          className="relative z-30 max-w-[1200px] w-[82vw] mx-auto text-center flex flex-col items-center justify-center space-y-4 my-auto"
        >
          {/* Stars */}
          <div className="flex flex-col items-center space-y-1">
            <span className="font-sans text-[10px] tracking-[0.3em] text-primary flex items-center justify-center space-x-1">
              <Star size={10} fill="#D4AF37" className="text-primary" />
              <Star size={10} fill="#D4AF37" className="text-primary" />
              <Star size={10} fill="#D4AF37" className="text-primary" />
              <Star size={10} fill="#D4AF37" className="text-primary" />
              <Star size={10} fill="#D4AF37" className="text-primary" />
            </span>
          </div>

          <h1 
            className="font-serif text-white font-light uppercase tracking-wide leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 5.5rem)" }}
          >
            {"Royal Stay"}
          </h1>
          <span 
            className="font-sans text-white/50 uppercase tracking-[0.3em]"
            style={{ fontSize: "clamp(0.7rem, 1.2vw, 1rem)" }}
          >
            Luxury Heritage Resort
          </span>

          <p 
            className="font-sans text-primary/80 tracking-[0.25em] uppercase leading-relaxed mt-2"
            style={{ fontSize: "clamp(0.65rem, 1vw, 0.85rem)" }}
          >
            {"Experience Royal Hospitality"}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4 w-full max-w-sm sm:max-w-none">
            <button
              onClick={openBooking}
              className="w-full sm:w-auto px-10 py-4 bg-primary text-luxury-black text-[10px] font-sans font-semibold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors duration-300 interactive-hover"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="relative z-30 flex flex-col items-center cursor-pointer interactive-hover pb-2"
          onClick={handleScrollDown}
        >
          <span className="font-sans text-[8px] tracking-[0.3em] uppercase text-white/20 mb-1">Scroll To Discover</span>
          <ArrowDown size={12} className="text-primary animate-bounce" />
        </div>

      </div>
    </div>
  );
}
export default HeroVideo;
