import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "隱私權政策 - 接案神器 SoloQuote",
  description: "SoloQuote 接案神器的隱私權政策，說明我們如何收集、使用和保護您的個人資料。",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#060D18]">
      {/* Header */}
      <header className="border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link href="/" className="flex items-center gap-3 w-fit group">
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
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Title */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            隱私權政策
          </h1>
          <p className="text-[#64748B]">最後更新日期：2024 年 12 月</p>
        </div>

        {/* Policy Content */}
        <div className="legal-content">
          <p>
            歡迎使用 SoloQuote 接案神器（以下簡稱「本應用程式」或「我們」）。我們非常重視您的隱私權，並致力於保護您的個人資料。本隱私權政策說明我們如何收集、使用、儲存和保護您在使用本應用程式時提供的資訊。
          </p>

          <h2>1. 資料收集</h2>

          <h3>1.1 您提供的資料</h3>
          <p>當您使用本應用程式時，您可能會提供以下資訊：</p>
          <ul>
            <li>賣方資訊：公司名稱、統一編號、地址、電話、電子郵件、銀行帳戶資訊</li>
            <li>客戶資訊：客戶公司名稱、統一編號、聯絡資訊</li>
            <li>報價單內容：項目名稱、價格、數量等報價相關資料</li>
            <li>自訂元素：Logo 圖片、數位簽名、印章圖片</li>
          </ul>

          <h3>1.2 自動收集的資料</h3>
          <p>我們可能會自動收集以下技術資訊：</p>
          <ul>
            <li>裝置類型和作業系統版本</li>
            <li>應用程式版本</li>
            <li>基本使用統計（如功能使用頻率）</li>
            <li>錯誤報告和診斷資訊</li>
          </ul>

          <h2>2. 資料使用方式</h2>
          <p>我們使用收集的資料用於：</p>
          <ul>
            <li>提供報價單建立、管理和輸出功能</li>
            <li>生成 PDF 報價單文件</li>
            <li>儲存您的設定和偏好</li>
            <li>改善應用程式功能和使用者體驗</li>
            <li>診斷技術問題和提供客戶支援</li>
          </ul>

          <h2>3. 資料儲存</h2>

          <h3>3.1 本地儲存</h3>
          <p>
            您的所有業務資料（報價單、客戶資訊、賣方設定等）均儲存在您的裝置本機上。我們不會將您的業務資料上傳至任何伺服器。這意味著：
          </p>
          <ul>
            <li>您的資料完全由您控制</li>
            <li>資料不會透過網路傳輸</li>
            <li>刪除應用程式將同時刪除所有本地資料</li>
          </ul>

          <h3>3.2 iCloud 同步（選用）</h3>
          <p>
            如果您啟用 iCloud 備份功能，您的應用程式資料可能會透過 Apple 的 iCloud 服務進行備份。此備份受 Apple 的隱私權政策約束。
          </p>

          <h2>4. 資料分享</h2>
          <p>我們不會出售、交易或轉讓您的個人資料給第三方。但在以下情況下，我們可能會分享資訊：</p>
          <ul>
            <li>當您使用分享功能（LINE、Email、AirDrop 等）主動分享報價單 PDF 時</li>
            <li>應法律要求或為保護我們的合法權益時</li>
            <li>在您明確同意的情況下</li>
          </ul>

          <h2>5. 內購與付款</h2>
          <p>
            本應用程式使用 Apple App Store 的內購功能。所有付款交易由 Apple 處理，我們不會收集或儲存您的信用卡或付款資訊。付款相關的隱私事項請參閱 Apple 的隱私權政策。
          </p>

          <h2>6. 資料安全</h2>
          <p>我們採取合理的技術和組織措施來保護您的資料：</p>
          <ul>
            <li>所有資料儲存在您裝置的受保護區域</li>
            <li>應用程式遵循 Apple 的安全最佳實踐</li>
            <li>我們定期更新應用程式以修復安全漏洞</li>
          </ul>

          <h2>7. 您的權利</h2>
          <p>您對您的資料擁有以下權利：</p>
          <ul>
            <li>存取權：您可以隨時在應用程式中查看您的所有資料</li>
            <li>更正權：您可以編輯或更新任何資料</li>
            <li>刪除權：您可以刪除任何報價單、客戶資料或設定</li>
            <li>匯出權：您可以將報價單匯出為 PDF 格式</li>
          </ul>

          <h2>8. 兒童隱私</h2>
          <p>
            本應用程式不針對 13 歲以下的兒童，我們不會故意收集兒童的個人資料。如果您發現有未成年人使用本應用程式，請聯繫我們。
          </p>

          <h2>9. 政策變更</h2>
          <p>
            我們可能會不時更新本隱私權政策。任何變更將在本頁面公布，並更新「最後更新日期」。我們建議您定期查閱本政策以了解最新資訊。
          </p>

          <h2>10. 聯絡我們</h2>
          <p>
            如果您對本隱私權政策有任何疑問或意見，請透過以下方式聯繫我們：
          </p>
          <ul>
            <li>電子郵件：support@soloquote.app</li>
          </ul>

          <div className="mt-12 pt-8 border-t border-white/10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#D4A853] hover:text-[#E8C455] transition-colors"
            >
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              返回首頁
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-[#64748B]">
          &copy; {new Date().getFullYear()} SoloQuote 接案神器. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
