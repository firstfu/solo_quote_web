import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "使用條款 - 接案神器 SoloQuote",
  description: "SoloQuote 接案神器的服務使用條款，說明使用本應用程式的權利與義務。",
};

export default function TermsPage() {
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
            使用條款
          </h1>
          <p className="text-[#64748B]">最後更新日期：2024 年 12 月</p>
        </div>

        {/* Terms Content */}
        <div className="legal-content">
          <p>
            歡迎使用 SoloQuote 接案神器（以下簡稱「本應用程式」或「服務」）。請在使用本應用程式前仔細閱讀以下使用條款。下載、安裝或使用本應用程式即表示您同意遵守本條款。
          </p>

          <h2>1. 服務說明</h2>
          <p>
            SoloQuote 接案神器是一款報價單管理應用程式，專為台灣自由工作者設計。本應用程式提供以下功能：
          </p>
          <ul>
            <li>報價單建立、編輯、管理和刪除</li>
            <li>客戶資料管理</li>
            <li>PDF 報價單生成和匯出</li>
            <li>賣方資訊設定（Logo、簽名、印章等）</li>
            <li>報價單狀態追蹤</li>
          </ul>

          <h2>2. 使用資格</h2>
          <p>使用本應用程式，您必須：</p>
          <ul>
            <li>年滿 18 歲或在您所在司法管轄區達到法定成年年齡</li>
            <li>具有與我們訂立具有法律約束力合約的法律能力</li>
            <li>遵守所有適用的法律法規</li>
          </ul>

          <h2>3. 帳戶與購買</h2>

          <h3>3.1 免費版</h3>
          <p>
            本應用程式提供免費版本，具有基本功能但有使用限制（如報價單數量限制、PDF 含浮水印等）。
          </p>

          <h3>3.2 Pro 專業版</h3>
          <p>
            Pro 專業版採用一次買斷制，購買後可永久使用完整功能。購買透過 Apple App Store 的應用程式內購買功能進行，須遵守 Apple 的條款與條件。
          </p>

          <h3>3.3 退款政策</h3>
          <p>
            所有購買均透過 Apple App Store 處理。退款請求須依照 Apple 的退款政策處理。我們無法直接處理退款。
          </p>

          <h2>4. 使用規範</h2>
          <p>使用本應用程式時，您同意：</p>
          <ul>
            <li>僅將本應用程式用於合法目的</li>
            <li>不嘗試對應用程式進行逆向工程、反編譯或反組譯</li>
            <li>不規避或嘗試規避任何技術保護措施</li>
            <li>不將本應用程式用於任何非法或詐欺活動</li>
            <li>對您在應用程式中輸入的所有資料負責</li>
          </ul>

          <h2>5. 智慧財產權</h2>

          <h3>5.1 應用程式所有權</h3>
          <p>
            本應用程式及其所有內容、功能和設計均為我們或我們的授權人的財產，受著作權、商標和其他智慧財產權法律保護。
          </p>

          <h3>5.2 您的內容</h3>
          <p>
            您在應用程式中建立的報價單、上傳的圖片（Logo、簽名、印章）及輸入的資料均歸您所有。我們不主張對您的內容擁有任何所有權。
          </p>

          <h2>6. 免責聲明</h2>

          <h3>6.1 服務「現況」提供</h3>
          <p>
            本應用程式按「現況」和「可用」基礎提供。我們不對服務的適用性、可靠性、可用性、及時性或準確性作任何明示或暗示的保證。
          </p>

          <h3>6.2 業務決策</h3>
          <p>
            本應用程式是報價單管理工具，不提供法律、稅務或會計建議。您應自行確保報價單內容符合相關法規要求，並就重要業務決策諮詢專業人士。
          </p>

          <h3>6.3 資料責任</h3>
          <p>
            您有責任備份您的資料。我們不對因裝置故障、應用程式錯誤或其他原因導致的資料遺失負責。
          </p>

          <h2>7. 責任限制</h2>
          <p>
            在適用法律允許的最大範圍內，我們及我們的關聯方、董事、員工或代理人不對任何間接、附帶、特殊、衍生性或懲罰性損害負責，包括但不限於：
          </p>
          <ul>
            <li>利潤損失</li>
            <li>資料遺失</li>
            <li>業務中斷</li>
            <li>商譽損失</li>
          </ul>

          <h2>8. 服務變更與終止</h2>

          <h3>8.1 服務變更</h3>
          <p>
            我們保留隨時修改、暫停或終止本應用程式全部或部分功能的權利，恕不另行通知。
          </p>

          <h3>8.2 終止</h3>
          <p>
            如果您違反本條款，我們可能會終止或暫停您使用本應用程式的權利，且無需退款。
          </p>

          <h2>9. 條款修改</h2>
          <p>
            我們可能會不時更新本使用條款。任何變更將在本頁面公布，並更新「最後更新日期」。繼續使用本應用程式即表示您接受修改後的條款。
          </p>

          <h2>10. 準據法與管轄</h2>
          <p>
            本條款受中華民國（台灣）法律管轄。任何因本條款引起的爭議，雙方同意以台灣台北地方法院為第一審管轄法院。
          </p>

          <h2>11. 可分割性</h2>
          <p>
            如果本條款的任何條款被認定為無效或不可執行，該條款將被修改至必要的最小程度，其餘條款仍具有完整效力。
          </p>

          <h2>12. 完整協議</h2>
          <p>
            本條款連同我們的隱私權政策構成您與我們之間關於本應用程式使用的完整協議。
          </p>

          <h2>13. 聯絡資訊</h2>
          <p>
            如果您對本使用條款有任何疑問，請透過以下方式聯繫我們：
          </p>
          <ul>
            <li>電子郵件：support@soloquote.app</li>
          </ul>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4">
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
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-white transition-colors"
            >
              查看隱私權政策
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
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
