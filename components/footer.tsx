"use client";

import React, { useState } from "react";
import Link from "next/link";
import hotelData from "@/data/hotel.json";
import { ArrowRight, Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-luxury-black text-white pt-24 pb-12 border-t border-white/5 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16">
        
        {/* Brand & Story */}
        <div className="flex flex-col space-y-6">
          <Link href="/" className="flex flex-col select-none">
            <span className="font-serif text-2xl tracking-[0.25em] uppercase text-white">
              ROYAL STAY
            </span>
            <span className="font-sans text-[0.6rem] tracking-[0.4em] uppercase text-primary -mt-1 pl-0.5">
              Luxury Hotel & Resort
            </span>
          </Link>
          <p className="font-sans text-xs text-white/50 leading-relaxed font-light pr-4">
            {hotelData.description}
          </p>
          <div className="flex items-center space-x-4 pt-2">
            <a href={hotelData.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 hover:border-primary hover:text-primary transition-colors duration-300">
              <Instagram size={16} />
            </a>
            <a href={hotelData.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 hover:border-primary hover:text-primary transition-colors duration-300">
              <Facebook size={16} />
            </a>
            <a href={hotelData.socials.youtube} target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 hover:border-primary hover:text-primary transition-colors duration-300">
              <Youtube size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-6 lg:pl-12">
          <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-primary font-medium">Explore</h4>
          <ul className="flex flex-col space-y-3 font-sans text-xs text-white/60 font-light">
            <li>
              <Link href="/rooms" className="hover:text-primary transition-colors duration-300">Royal Suites</Link>
            </li>
            <li>
              <Link href="/dining" className="hover:text-primary transition-colors duration-300">Imperial Dining</Link>
            </li>
            <li>
              <Link href="/spa" className="hover:text-primary transition-colors duration-300">Wellness Sanctuary</Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-primary transition-colors duration-300">Weddings & Banquets</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-primary transition-colors duration-300">Visual Gallery</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition-colors duration-300">Our Heritage Story</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-6">
          <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-primary font-medium">Contact Details</h4>
          <ul className="flex flex-col space-y-4 font-sans text-xs text-white/60 font-light">
            <li className="flex items-start space-x-3">
              <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
              <span>{hotelData.address}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={16} className="text-primary shrink-0" />
              <span>{hotelData.phone}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={16} className="text-primary shrink-0" />
              <span>{hotelData.email}</span>
            </li>
          </ul>
        </div>

        {/* Newsletter subscription */}
        <div className="flex flex-col space-y-6">
          <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-primary font-medium">Imperial Gazette</h4>
          <p className="font-sans text-xs text-white/50 leading-relaxed font-light">
            Subscribe to receive private offers, seasonal event invitations, and resort chronicles.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
            <div className="flex border-b border-white/20 pb-2 relative group focus-within:border-primary transition-colors duration-300">
              <input
                type="email"
                placeholder="YOUR EMAIL ADDRESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent text-xs font-sans tracking-widest text-white border-none focus:outline-none placeholder-white/30 uppercase"
              />
              <button type="submit" className="text-white hover:text-primary transition-colors duration-300">
                <ArrowRight size={18} />
              </button>
            </div>
            {subscribed && (
              <p className="text-[10px] text-primary tracking-widest font-sans uppercase">
                Welcome to the Palace Circle.
              </p>
            )}
          </form>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[10px] font-sans tracking-[0.2em] text-white/30 uppercase space-y-4 md:space-y-0">
        <div>
          © {new Date().getFullYear()} ROYAL STAY. All Rights Reserved.
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Stay</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
