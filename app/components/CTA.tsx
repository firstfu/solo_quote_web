export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#060D18]" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#D4A853]/15 rounded-full blur-[150px]" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-[#D4A853] to-[#A67C32] mb-8 glow-gold">
          <svg
            className="w-10 h-10 text-[#0B1426]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          <span className="text-gradient-white">開始使用</span>
          <br className="sm:hidden" />
          <span className="text-gradient-gold">接案神器</span>
        </h2>

        {/* Subheadline */}
        <p className="text-lg text-[#94A3B8] mb-10 max-w-2xl mx-auto">
          立即下載，免費體驗基礎功能。
          <br className="hidden sm:block" />
          喜歡再升級 Pro 版，一次買斷、終身使用。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

          {/* Android Coming Soon */}
          <div className="flex items-center gap-3 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-[#64748B]">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.523 15.341a.796.796 0 0 0-.798.795c0 .438.357.795.798.795a.796.796 0 0 0 .797-.795.796.796 0 0 0-.797-.795m-11.046 0a.796.796 0 0 0-.798.795c0 .438.357.795.798.795a.796.796 0 0 0 .797-.795.796.796 0 0 0-.797-.795M17.834 8.72l1.604-2.782c.09-.155.038-.354-.117-.443-.156-.09-.356-.037-.445.117l-1.624 2.816a9.33 9.33 0 0 0-3.752-.776 9.33 9.33 0 0 0-3.752.776L8.124 5.612c-.09-.154-.29-.207-.445-.117-.155.09-.207.288-.117.443l1.604 2.782C6.51 10.065 4.636 12.635 4.5 15.68h15c-.135-3.044-2.009-5.615-4.666-6.96" />
            </svg>
            <span>Android 開發中</span>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div>
            <div className="text-3xl font-bold text-[#D4A853] mb-1">$490</div>
            <div className="text-sm text-[#64748B]">買斷價格</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">5%</div>
            <div className="text-sm text-[#64748B]">自動稅額計算</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">A4</div>
            <div className="text-sm text-[#64748B]">專業 PDF 輸出</div>
          </div>
        </div>
      </div>
    </section>
  );
}
