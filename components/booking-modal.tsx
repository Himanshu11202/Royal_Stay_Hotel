"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useBooking } from "@/hooks/use-booking";
import BookingWidget from "./booking-widget";

export function BookingModal() {
  const { isBookingOpen, closeBooking } = useBooking();
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBooking();
    };
    if (isBookingOpen) {
      window.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // disable background scroll
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = ""; // restore background scroll
    };
  }, [isBookingOpen, closeBooking]);

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeBooking();
    }
  };

  return (
    <AnimatePresence>
      {isBookingOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleOutsideClick}
          className="fixed inset-0 z-[90] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ duration: 0.4, cubicBezier: [0.16, 1, 0.3, 1] }}
            ref={modalRef}
            className="relative max-w-md w-full bg-luxury-charcoal border border-white/5 shadow-2xl overflow-hidden mt-8 mb-8"
          >
            {/* Close Button */}
            <button
              onClick={closeBooking}
              className="absolute top-4 right-4 z-20 p-2 border border-white/10 text-white/50 hover:text-primary hover:border-primary transition-all duration-300 focus:outline-none"
            >
              <X size={16} />
            </button>

            {/* Embed Booking Widget */}
            <BookingWidget embedded={true} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default BookingModal;
