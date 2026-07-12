"use client";

import React, { useState } from "react";
import roomsData from "@/data/rooms.json";
import { useBooking } from "@/hooks/use-booking";
import { siteConfig } from "@/config/site";
import { Calendar, Users, Send, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";

export function BookingWidget({ embedded = false }: { embedded?: boolean }) {
  const { closeBooking } = useBooking();
  const [rooms] = useState(roomsData);

  // Enquiry Form State
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [selectedRoomSlug, setSelectedRoomSlug] = useState(rooms[0].slug);
  const [specialRequest, setSpecialRequest] = useState("");

  const activeRoom = rooms.find((r) => r.slug === selectedRoomSlug) || rooms[0];

  const buildMessageString = () => {
    return `Hello ${siteConfig.hotelName},

I would like to book a room.

Name: ${fullName}
Phone: ${mobileNumber}
Email: ${email}
Check-In: ${checkIn}
Check-Out: ${checkOut}
Adults: ${adults}
Children: ${children}
Room Type: ${activeRoom.name}
Special Request: ${specialRequest || "None"}

Please contact me regarding availability.`;
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !mobileNumber || !email || !checkIn || !checkOut) {
      alert("Please fill in all required fields.");
      return;
    }
    const text = encodeURIComponent(buildMessageString());
    const url = `https://wa.me/${siteConfig.whatsAppNumber}?text=${text}`;
    window.open(url, "_blank");
    closeBooking();
  };

  const handleEmailSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !mobileNumber || !email || !checkIn || !checkOut) {
      alert("Please fill in all required fields.");
      return;
    }
    const subject = encodeURIComponent(`Room Booking Enquiry - ${fullName}`);
    const body = encodeURIComponent(buildMessageString());
    const mailtoUrl = `mailto:${siteConfig.emailAddress}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    closeBooking();
  };

  return (
    <div className={`bg-luxury-charcoal border border-white/5 p-6 md:p-8 text-white ${!embedded ? "max-w-md w-full shadow-2xl" : "w-full"}`}>
      <div className="flex flex-col space-y-5">
        <div>
          <div className="flex items-center space-x-1.5 mb-1">
            <Sparkles size={12} className="text-primary" />
            <span className="font-sans text-[7px] tracking-[0.3em] text-primary uppercase font-bold">REGAL ENQUIRIES</span>
          </div>
          <h3 className="font-serif text-2xl text-white tracking-wide uppercase font-light">Booking Enquiry</h3>
        </div>

        <form className="flex flex-col space-y-4">
          {/* Full Name */}
          <div className="flex flex-col space-y-1">
            <label className="font-sans text-[0.6rem] tracking-[0.2em] text-white/50 uppercase">Full Name *</label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Maharana Singh"
              className="w-full bg-luxury-black/60 border border-white/10 text-white font-sans text-xs px-4 py-2.5 rounded-none focus:outline-none focus:border-primary placeholder-white/10"
            />
          </div>

          {/* Contact coordinates */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-1">
              <label className="font-sans text-[0.6rem] tracking-[0.2em] text-white/50 uppercase">Mobile Number *</label>
              <input
                type="tel"
                required
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="e.g. +91 9876543210"
                className="w-full bg-luxury-black/60 border border-white/10 text-white font-sans text-xs px-4 py-2.5 rounded-none focus:outline-none focus:border-primary placeholder-white/10"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label className="font-sans text-[0.6rem] tracking-[0.2em] text-white/50 uppercase">Email Address *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. guest@domain.com"
                className="w-full bg-luxury-black/60 border border-white/10 text-white font-sans text-xs px-4 py-2.5 rounded-none focus:outline-none focus:border-primary placeholder-white/10"
              />
            </div>
          </div>

          {/* Suite Select */}
          <div className="flex flex-col space-y-1">
            <label className="font-sans text-[0.6rem] tracking-[0.2em] text-white/50 uppercase">Suite Type *</label>
            <select
              value={selectedRoomSlug}
              onChange={(e) => setSelectedRoomSlug(e.target.value)}
              className="w-full bg-luxury-black/60 border border-white/10 text-white font-sans text-xs px-4 py-2.5 rounded-none focus:outline-none focus:border-primary uppercase tracking-widest cursor-pointer"
            >
              {rooms.map((room) => (
                <option key={room.slug} value={room.slug} className="bg-luxury-charcoal text-white">
                  {room.name}
                </option>
              ))}
            </select>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-1">
              <label className="font-sans text-[0.6rem] tracking-[0.2em] text-white/50 uppercase">Check-In *</label>
              <input
                type="date"
                required
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full bg-luxury-black/60 border border-white/10 text-white font-sans text-xs px-4 py-2.5 rounded-none focus:outline-none focus:border-primary uppercase"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label className="font-sans text-[0.6rem] tracking-[0.2em] text-white/50 uppercase">Check-Out *</label>
              <input
                type="date"
                required
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn || new Date().toISOString().split("T")[0]}
                className="w-full bg-luxury-black/60 border border-white/10 text-white font-sans text-xs px-4 py-2.5 rounded-none focus:outline-none focus:border-primary uppercase"
              />
            </div>
          </div>

          {/* Adults / Children selectors */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-1">
              <label className="font-sans text-[0.6rem] tracking-[0.2em] text-white/50 uppercase">Adults</label>
              <div className="flex items-center justify-between border border-white/10 bg-luxury-black/60 px-3 py-1">
                <span className="font-sans text-xs">{adults}</span>
                <div className="flex space-x-1.5">
                  <button
                    type="button"
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-6 h-6 border border-white/10 flex items-center justify-center hover:border-primary transition-colors text-xs"
                  >
                    -
                  </button>
                  <button
                    type="button"
                    onClick={() => setAdults(Math.min(6, adults + 1))}
                    className="w-6 h-6 border border-white/10 flex items-center justify-center hover:border-primary transition-colors text-xs"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="font-sans text-[0.6rem] tracking-[0.2em] text-white/50 uppercase">Children</label>
              <div className="flex items-center justify-between border border-white/10 bg-luxury-black/60 px-3 py-1">
                <span className="font-sans text-xs">{children}</span>
                <div className="flex space-x-1.5">
                  <button
                    type="button"
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="w-6 h-6 border border-white/10 flex items-center justify-center hover:border-primary transition-colors text-xs"
                  >
                    -
                  </button>
                  <button
                    type="button"
                    onClick={() => setChildren(Math.min(6, children + 1))}
                    className="w-6 h-6 border border-white/10 flex items-center justify-center hover:border-primary transition-colors text-xs"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Special Requests */}
          <div className="flex flex-col space-y-1">
            <label className="font-sans text-[0.6rem] tracking-[0.2em] text-white/50 uppercase">Special Request</label>
            <textarea
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              placeholder="e.g. Lake view, late arrival, diet requirements..."
              rows={2}
              className="w-full bg-luxury-black/60 border border-white/10 text-white font-sans text-xs px-4 py-2.5 rounded-none focus:outline-none focus:border-primary placeholder-white/10 resize-none"
            />
          </div>

          {/* Submission CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            <button
              onClick={handleWhatsAppSend}
              className="flex-1 py-3.5 bg-[#25D366] text-white hover:bg-[#20ba5a] text-xs font-sans font-semibold uppercase tracking-[0.15em] flex items-center justify-center space-x-2 transition-all duration-300 interactive-hover"
            >
              <MessageSquare size={13} />
              <span>Send on WhatsApp</span>
            </button>
            <button
              onClick={handleEmailSend}
              className="flex-1 py-3.5 bg-primary text-luxury-black hover:bg-white hover:text-black text-xs font-sans font-semibold uppercase tracking-[0.15em] flex items-center justify-center space-x-2 transition-all duration-300 interactive-hover"
            >
              <Send size={13} />
              <span>Send Enquiry</span>
            </button>
          </div>

          <div className="flex items-center justify-center space-x-1.5 text-[8px] font-sans tracking-widest text-white/30 uppercase pt-2">
            <ShieldCheck size={11} className="text-primary/70" />
            <span>Enquiry securely processed by Concierge Desk</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingWidget;
