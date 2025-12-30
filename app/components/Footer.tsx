import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#060D18] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4A853] to-[#A67C32] flex items-center justify-center">
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
            <p className="text-[#64748B] max-w-sm mb-6">
              專為台灣自由工作者打造的報價單管理工具。一次買斷、終身使用，讓接案更輕鬆。
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://apps.apple.com/app/id6756793871"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white hover:bg-white/10 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">快速連結</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-[#64748B] hover:text-[#D4A853] transition-colors">
                  功能特色
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-[#64748B] hover:text-[#D4A853] transition-colors">
                  價格方案
                </a>
              </li>
              <li>
                <a href="#screenshots" className="text-[#64748B] hover:text-[#D4A853] transition-colors">
                  應用預覽
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">法律資訊</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-[#64748B] hover:text-[#D4A853] transition-colors">
                  隱私權政策
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#64748B] hover:text-[#D4A853] transition-colors">
                  使用條款
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#64748B]">
            &copy; {currentYear} SoloQuote 接案神器. All rights reserved.
          </p>
          <p className="text-sm text-[#64748B] flex items-center gap-1">
            Made with
            <span className="text-red-500">&#10084;</span>
            in Taiwan
          </p>
        </div>
      </div>
    </footer>
  );
}
