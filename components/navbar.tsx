"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useBooking } from "@/hooks/use-booking";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openBooking } = useBooking();

  // Track scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on pathname change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Suites", href: "/rooms" },
    { name: "Dining", href: "/dining" },
    { name: "Wellness & Spa", href: "/spa" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Our Story", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6",
          isScrolled 
            ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" 
            : "bg-transparent"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col select-none">
            <span className="font-serif text-xl md:text-2xl tracking-[0.25em] uppercase text-white hover:text-primary transition-colors duration-300">
              ROYAL STAY
            </span>
            <span className="font-sans text-[0.55rem] md:text-[0.6rem] tracking-[0.4em] uppercase text-primary -mt-1 pl-0.5">
              Luxury Hotel & Resort
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "font-sans text-[0.7rem] uppercase tracking-[0.2em] transition-all duration-300 relative py-1",
                    isActive ? "text-primary" : "text-white/70 hover:text-white"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.span 
                      layoutId="activeNavIndicator" 
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-primary"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center space-x-6">
            <button
              onClick={openBooking}
              className="px-6 py-2.5 bg-transparent border border-primary text-primary hover:bg-primary hover:text-luxury-black text-[0.65rem] font-sans font-semibold uppercase tracking-[0.2em] transition-all duration-300 active:scale-[0.97]"
            >
              Book Royal Stay
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-primary transition-colors focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-background z-40 lg:hidden flex flex-col justify-between pt-28 pb-12 px-8"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    className="font-serif text-3xl tracking-[0.05em] uppercase text-white hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col space-y-6">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openBooking();
                }}
                className="w-full py-4 bg-primary text-luxury-black text-xs font-semibold uppercase tracking-[0.2em] text-center flex items-center justify-center space-x-2"
              >
                <span>Book Royal Stay</span>
                <ArrowRight size={16} />
              </button>
              
              <div className="text-center">
                <p className="text-[0.65rem] tracking-[0.2em] text-white/40 uppercase">Reservations & Inquiries</p>
                <p className="text-sm text-primary tracking-[0.05em] mt-1">+91 294 123 4567</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
export default Navbar;
