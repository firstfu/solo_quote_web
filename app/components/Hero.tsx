import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-radial-gold" />
      <div className="absolute inset-0 bg-radial-blue" />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#D4A853]/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[120px] animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/20 mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-sm text-[#D4A853] font-medium">
                iOS 版本正式上架
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 animate-fade-in-up animate-delay-100">
              <span className="text-gradient-white">自由接案者的</span>
              <br />
              <span className="text-gradient-gold">報價單神器</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#94A3B8] max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-in-up animate-delay-200">
              專為台灣自由工作者打造，
              <span className="text-white font-medium">30 秒完成專業報價</span>
              。告別訂閱制，
              <span className="text-[#D4A853] font-semibold">
                一次買斷、終身使用
              </span>
              。
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10 animate-fade-in-up animate-delay-300">
              {["繁體中文 PDF", "統一編號", "自動流水號", "狀態追蹤"].map(
                (tag, i) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-lg bg-[#111D36] border border-white/5 text-sm text-[#94A3B8]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up animate-delay-400">
              <a
                href="https://apps.apple.com/app/id6756793871"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center gap-3 text-base"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store 下載
              </a>
              <a href="#features" className="btn-outline flex items-center gap-2">
                <span>了解更多</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>

            {/* Social Proof */}
            <div className="mt-12 pt-8 border-t border-white/5 animate-fade-in-up animate-delay-500">
              <div className="flex items-center justify-center lg:justify-start gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#D4A853]">$490</div>
                  <div className="text-xs text-[#64748B]">一次買斷價</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">30 秒</div>
                  <div className="text-xs text-[#64748B]">快速開立報價單</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-xs text-[#64748B]">繁中支援</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Glow Effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-[#D4A853]/20 rounded-full blur-[100px]" />
            </div>

            {/* Phone */}
            <div className="relative animate-float">
              <div className="phone-mockup glow-gold-lg">
                <div className="phone-screen">
                  <Image
                    src="/screenshots/dashboard.png"
                    alt="接案神器 Dashboard"
                    width={280}
                    height={580}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-16 top-1/4 glass-card p-4 animate-fade-in-up animate-delay-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#10B981]/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#10B981]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B]">已收款</div>
                    <div className="text-sm font-semibold text-white">
                      $60,750
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-12 bottom-1/3 glass-card-gold p-4 animate-fade-in-up animate-delay-400">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D4A853]/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#D4A853]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B]">本月報價單</div>
                    <div className="text-sm font-semibold text-[#D4A853]">
                      5 筆
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060D18] to-transparent" />
    </section>
  );
}
