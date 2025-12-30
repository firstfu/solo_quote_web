export default function PainPoints() {
  const painPoints = [
    {
      problem: "訂閱疲勞",
      solution: "一次買斷 $490，終身使用",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      problem: "PDF 中文亂碼",
      solution: "內嵌 Noto Sans TC 字體",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      problem: "缺少統編欄位",
      solution: "完整支援台灣統一編號",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      problem: "操作複雜",
      solution: "30 秒內完成報價單開立",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#060D18]" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient-white">解決接案者的</span>
            <span className="text-gradient-gold">報價痛點</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            市面上的報價工具不是太貴就是不支援繁體中文，我們為台灣自由工作者量身打造解決方案
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((item, index) => (
            <div
              key={item.problem}
              className="group relative glass-card p-6 hover:border-[#D4A853]/30 transition-all duration-300"
            >
              {/* Problem Icon */}
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              {/* Problem */}
              <div className="mb-4">
                <span className="text-xs text-red-400 font-medium uppercase tracking-wider">
                  痛點
                </span>
                <h3 className="text-lg font-semibold text-white mt-1 line-through decoration-red-400/50">
                  {item.problem}
                </h3>
              </div>

              {/* Arrow */}
              <div className="flex justify-center my-3">
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
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>

              {/* Solution */}
              <div>
                <span className="text-xs text-[#10B981] font-medium uppercase tracking-wider">
                  解決方案
                </span>
                <p className="text-[#D4A853] font-semibold mt-1">
                  {item.solution}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-[20px] bg-[#D4A853]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
