"use client";

import { useState } from "react";
import Image from "next/image";

export default function Screenshots() {
  const screenshots = [
    {
      id: 1,
      title: "業務總覽",
      description: "一目瞭然的業務儀表板，追蹤本月營收與報價單狀態",
      image: "/screenshots/dashboard.png",
    },
    {
      id: 2,
      title: "報價單列表",
      description: "輕鬆管理所有報價單，支援狀態篩選與搜尋",
      image: "/screenshots/invoices.png",
    },
    {
      id: 3,
      title: "報價單詳情",
      description: "詳細的報價項目管理，自動計算小計與稅額",
      image: "/screenshots/detail.png",
    },
    {
      id: 4,
      title: "PDF 預覽",
      description: "專業 A4 格式，完美支援繁體中文輸出",
      image: "/screenshots/pdf.png",
    },
    {
      id: 5,
      title: "客戶管理",
      description: "建立客戶資料庫，快速查看交易歷史",
      image: "/screenshots/clients.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="screenshots" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0B1426]" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/20 text-[#D4A853] text-sm font-medium mb-4">
            應用預覽
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient-white">簡潔直覺的</span>
            <span className="text-gradient-gold">使用介面</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            精心設計的深色主題，讓長時間使用也不疲勞
          </p>
        </div>

        {/* Screenshot Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <div className="relative flex justify-center order-2 lg:order-1">
            {/* Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 bg-[#D4A853]/15 rounded-full blur-[100px]" />
            </div>

            {/* Phone */}
            <div className="relative">
              <div className="phone-mockup glow-gold">
                <div className="phone-screen">
                  <Image
                    src={screenshots[activeIndex].image}
                    alt={screenshots[activeIndex].title}
                    width={280}
                    height={580}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot List */}
          <div className="space-y-4 order-1 lg:order-2">
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.id}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  activeIndex === index
                    ? "glass-card-gold"
                    : "glass-card hover:border-white/10"
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Number */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-colors ${
                      activeIndex === index
                        ? "bg-[#D4A853] text-[#0B1426]"
                        : "bg-white/5 text-[#64748B]"
                    }`}
                  >
                    {screenshot.id}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className={`font-semibold mb-1 transition-colors ${
                        activeIndex === index ? "text-[#D4A853]" : "text-white"
                      }`}
                    >
                      {screenshot.title}
                    </h3>
                    <p className="text-sm text-[#64748B]">
                      {screenshot.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <svg
                    className={`w-5 h-5 transition-all ${
                      activeIndex === index
                        ? "text-[#D4A853] translate-x-1"
                        : "text-[#64748B]"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
