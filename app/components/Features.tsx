export default function Features() {
  const features = [
    {
      title: "報價單管理",
      description: "建立、編輯、複製、刪除報價單，自動流水號格式 INV-YYYYMM-XXX",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      gradient: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400",
    },
    {
      title: "專業 PDF 輸出",
      description: "A4 格式專業排版，內嵌繁體中文字體，支援 Logo、簽名、印章",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400",
    },
    {
      title: "客戶管理 CRM",
      description: "建立客戶資料庫，開立報價單時一鍵帶入，查看歷史記錄",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: "from-emerald-500/20 to-emerald-600/20",
      borderColor: "border-emerald-500/30",
      iconColor: "text-emerald-400",
    },
    {
      title: "狀態追蹤",
      description: "草稿 → 已發送 → 已收款，即時追蹤每筆報價單進度",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      gradient: "from-amber-500/20 to-amber-600/20",
      borderColor: "border-amber-500/30",
      iconColor: "text-amber-400",
    },
    {
      title: "即時計算",
      description: "小計、稅額 (5%)、總計自動計算，支援多項目報價",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-rose-500/20 to-rose-600/20",
      borderColor: "border-rose-500/30",
      iconColor: "text-rose-400",
    },
    {
      title: "一鍵分享",
      description: "支援 LINE、Email、AirDrop 多種分享方式，快速傳送給客戶",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
      gradient: "from-cyan-500/20 to-cyan-600/20",
      borderColor: "border-cyan-500/30",
      iconColor: "text-cyan-400",
    },
  ];

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0B1426]" />
      <div className="absolute inset-0 bg-radial-gold opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/20 text-[#D4A853] text-sm font-medium mb-4">
            核心功能
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient-white">專業報價，</span>
            <span className="text-gradient-gold">輕鬆搞定</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            從建立報價單到收款追蹤，一個 App 完成所有流程
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative glass-card p-8 hover:border-[#D4A853]/30 transition-all duration-500 hover:-translate-y-1`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} border ${feature.borderColor} flex items-center justify-center ${feature.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-[#94A3B8] leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-[#D4A853]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
