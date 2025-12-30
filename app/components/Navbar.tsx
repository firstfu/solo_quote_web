"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060D18]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4A853] to-[#A67C32] flex items-center justify-center shadow-lg group-hover:shadow-[#D4A853]/30 transition-shadow">
              <svg
                className="w-6 h-6 text-[#0B1426]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">
              接案<span className="text-[#D4A853]">神器</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-[#94A3B8] hover:text-white transition-colors text-sm font-medium"
            >
              功能特色
            </a>
            <a
              href="#pricing"
              className="text-[#94A3B8] hover:text-white transition-colors text-sm font-medium"
            >
              價格方案
            </a>
            <a
              href="#screenshots"
              className="text-[#94A3B8] hover:text-white transition-colors text-sm font-medium"
            >
              應用預覽
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="https://apps.apple.com/app/id6756793871"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm !py-3 !px-6"
          >
            免費下載
          </a>
        </div>
      </div>
    </nav>
  );
}
