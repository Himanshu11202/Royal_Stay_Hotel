"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Check if device supports hover and has desktop resolution
    const isDesktop = window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches;
    if (!isDesktop) return;

    setIsVisible(true);

    // GSAP quickTo for smooth low-latency movement
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.35, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.35, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      // Offset cursor by half of width (40px / 2 = 20px)
      xTo(e.clientX - 20);
      yTo(e.clientY - 20);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Interactive Hover Listeners
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactive = target.closest("a, button, select, input, textarea, [role='button'], .interactive-hover");
      const dragHover = target.closest(".drag-hover");
      const viewHover = target.closest(".view-hover");

      if (dragHover) {
        gsap.to(cursor, {
          scale: 2.2,
          borderColor: "#D4AF37",
          backgroundColor: "rgba(212, 175, 55, 0.08)",
          duration: 0.25,
        });
        if (cursorTextRef.current) {
          cursorTextRef.current.innerText = "DRAG";
          gsap.to(cursorTextRef.current, { opacity: 1, duration: 0.2 });
        }
      } else if (viewHover) {
        gsap.to(cursor, {
          scale: 2.2,
          borderColor: "#D4AF37",
          backgroundColor: "rgba(212, 175, 55, 0.08)",
          duration: 0.25,
        });
        if (cursorTextRef.current) {
          cursorTextRef.current.innerText = "VIEW";
          gsap.to(cursorTextRef.current, { opacity: 1, duration: 0.2 });
        }
      } else if (interactive) {
        gsap.to(cursor, {
          scale: 1.6,
          borderColor: "#D4AF37",
          backgroundColor: "rgba(212, 175, 55, 0.04)",
          duration: 0.25,
        });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactive = target.closest("a, button, select, input, textarea, [role='button'], .interactive-hover");
      const dragHover = target.closest(".drag-hover");
      const viewHover = target.closest(".view-hover");

      if (interactive || dragHover || viewHover) {
        gsap.to(cursor, {
          scale: 1,
          borderColor: "rgba(255, 255, 255, 0.25)",
          backgroundColor: "transparent",
          duration: 0.25,
        });
        if (cursorTextRef.current) {
          gsap.to(cursorTextRef.current, {
            opacity: 0,
            duration: 0.15,
            onComplete: () => {
              if (cursorTextRef.current) cursorTextRef.current.innerText = "";
            },
          });
        }
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-10 h-10 border border-white/25 rounded-full pointer-events-none z-[999] flex items-center justify-center transition-all duration-300"
      style={{
        transform: "translate3d(0,0,0)",
        willChange: "transform",
      }}
    >
      <span
        ref={cursorTextRef}
        className="font-sans text-[7px] font-bold tracking-widest text-primary opacity-0 uppercase"
      />
    </div>
  );
}
export default CustomCursor;
