"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function useGsapReveal(
  animationType: "fade" | "slide-up" | "scale" | "text-reveal" = "fade",
  delay: number = 0,
  duration: number = 1
) {
  const elementRef = useRef<any>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (animationType === "fade") {
        gsap.set(el, { opacity: 0 });
        gsap.to(el, {
          opacity: 1,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      } else if (animationType === "slide-up") {
        gsap.set(el, { opacity: 0, y: 50 });
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      } else if (animationType === "scale") {
        gsap.set(el, { opacity: 0, scale: 0.95 });
        gsap.to(el, {
          opacity: 1,
          scale: 1,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      } else if (animationType === "text-reveal") {
        gsap.set(el, { 
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", 
          y: 30 
        });
        gsap.to(el, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          y: 0,
          duration,
          delay,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      }
    });

    return () => ctx.revert();
  }, [animationType, delay, duration]);

  return elementRef;
}
