export default function Pricing() {
  const freeFeatures = [
    "基本報價單功能",
    "最多建立 3 筆報價單",
    "PDF 輸出（含浮水印）",
    "客戶管理基礎功能",
  ];

  const proFeatures = [
    "無限報價單數量",
    "PDF 無浮水印輸出",
    "自訂 Logo / 簽名 / 印章",
    "完整客戶管理 CRM",
    "自動流水號管理",
    "資料匯出功能",
    "優先技術支援",
    "未來更新永久免費",
  ];

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#060D18]" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4A853]/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/20 text-[#D4A853] text-sm font-medium mb-4">
            價格方案
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient-gold">一次買斷</span>
            <span className="text-gradient-white">，終身使用</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            告別訂閱制的無止境付費，用合理價格擁有完整功能
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="glass-card p-8 relative overflow-hidden">
            <div className="relative">
              <h3 className="text-xl font-semibold text-white mb-2">免費版</h3>
              <p className="text-[#64748B] text-sm mb-6">適合剛開始接案的新手</p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-white">$0</span>
                <span className="text-[#64748B]">/ 永久</span>
              </div>

              <ul className="space-y-4 mb-8">
                {freeFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#64748B] mt-0.5 flex-shrink-0"
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
                    <span className="text-[#94A3B8]">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://apps.apple.com/app/id6756793871"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full justify-center inline-flex"
              >
                免費下載
              </a>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="glass-card-gold p-8 relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-6 right-6">
              <span className="pricing-badge">推薦</span>
            </div>

            <div className="relative">
              <h3 className="text-xl font-semibold text-white mb-2">Pro 專業版</h3>
              <p className="text-[#64748B] text-sm mb-6">專業接案者的最佳選擇</p>

              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold text-gradient-gold">$490</span>
                <span className="text-[#64748B]">/ 一次買斷</span>
              </div>
              <p className="text-[#10B981] text-sm mb-8 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                終身使用，永久更新
              </p>

              <ul className="space-y-4 mb-8">
                {proFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#D4A853] mt-0.5 flex-shrink-0"
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
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://apps.apple.com/app/id6756793871"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full justify-center inline-flex"
              >
                立即購買
              </a>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#D4A853]/10 rounded-full blur-[60px]" />
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-[#64748B]">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm">安全付款</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span className="text-sm">App Store 退款保障</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#D4A853]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm">即買即用</span>
          </div>
        </div>
      </div>
    </section>
  );
}
