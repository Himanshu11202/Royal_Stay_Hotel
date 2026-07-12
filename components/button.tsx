"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { gsap } from "@/lib/gsap";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "text";
  isMagnetic?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  isMagnetic = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isMagnetic || !btnRef.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    
    // Calculate relative distance
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Magnetic pull strength (offset by 0.3)
    gsap.to(btnRef.current, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!isMagnetic || !btnRef.current) return;
    
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative px-8 py-3.5 text-xs font-sans font-medium uppercase tracking-[0.2em] transition-all duration-300 rounded-none overflow-hidden",
        
        // Primary variant (luxury gold fill)
        variant === "primary" && 
        "bg-primary text-luxury-black border border-primary hover:bg-transparent hover:text-primary active:scale-[0.98]",
        
        // Outline variant (transparent with luxury gold border)
        variant === "outline" && 
        "bg-transparent text-primary border border-primary/40 hover:border-primary hover:bg-primary hover:text-luxury-black active:scale-[0.98]",
        
        // Text variant (minimal text with underline reveal)
        variant === "text" && 
        "px-0 py-1 bg-transparent text-white border-b border-white/20 hover:border-primary hover:text-primary",
        
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
export default Button;
