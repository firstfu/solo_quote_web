# 接案神器 SoloQuote - 官方網站

<p align="center">
  <strong>專為台灣自由工作者打造的報價單管理工具官方網站</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss" alt="Tailwind CSS">
</p>

---

## 簡介

這是 **接案神器 SoloQuote** iOS App 的官方 Landing Page 網站，採用現代化的深色主題設計（Midnight Gold），提供產品介紹、功能展示、價格方案及法律文件頁面。

### 網站頁面

| 頁面 | 路徑 | 說明 |
|------|------|------|
| 首頁 | `/` | 產品 Landing Page |
| 隱私權政策 | `/privacy` | 繁體中文隱私權政策 |
| 使用條款 | `/terms` | 繁體中文服務條款 |

---

## 技術架構

### 核心技術
- **Next.js 16** - App Router 架構
- **React 19** - 預設使用 Server Components
- **TypeScript** - 嚴格模式
- **Tailwind CSS v4** - 透過 @tailwindcss/postcss 整合

### 字體
- **Noto Sans TC** - 繁體中文內文
- **Outfit** - 英文標題與數字

### 設計系統
採用 **「Midnight Gold」** 深色主題：
- 深海軍藍背景 (`#060D18`, `#0B1426`)
- 金色強調色 (`#D4A853`)
- 玻璃擬態卡片效果
- 漸層文字與光暈動效

---

## 快速開始

### 環境需求
- Node.js 18+
- Bun（推薦）或 npm/yarn/pnpm

### 安裝與執行

```bash
# 1. 安裝依賴
bun install

# 2. 啟動開發伺服器
bun dev

# 3. 開啟瀏覽器
open http://localhost:3000
```

### 其他指令

```bash
# 建置生產版本
bun run build

# 啟動生產伺服器
bun start

# 程式碼檢查
bun run lint
```

---

## 專案結構

```
solo_quote_web/
├── app/
│   ├── page.tsx              # 首頁 Landing Page
│   ├── layout.tsx            # 根佈局（字體、SEO Metadata）
│   ├── globals.css           # 設計系統（顏色、元件、動畫）
│   ├── components/           # 頁面區塊元件
│   │   ├── Navbar.tsx        # 導覽列（固定置頂）
│   │   ├── Hero.tsx          # 主視覺區（手機模型）
│   │   ├── PainPoints.tsx    # 痛點解決方案
│   │   ├── Features.tsx      # 功能特色（6 張卡片）
│   │   ├── Screenshots.tsx   # App 截圖展示（互動式）
│   │   ├── Pricing.tsx       # 價格方案比較
│   │   ├── CTA.tsx           # 行動呼籲區
│   │   └── Footer.tsx        # 頁尾
│   ├── privacy/
│   │   └── page.tsx          # 隱私權政策
│   └── terms/
│       └── page.tsx          # 使用條款
├── public/
│   └── screenshots/          # App 截圖素材
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── CLAUDE.md                 # Claude Code 開發指引
```

---

## 設計系統

### 顏色變數（CSS Custom Properties）

```css
/* 背景色 */
--color-bg-deep: #060D18;
--color-bg-primary: #0B1426;
--color-bg-card: #111D36;

/* 金色系 */
--color-gold-400: #D4A853;  /* 主要強調色 */
--color-gold-300: #E8C455;
--color-gold-500: #C49A47;

/* 文字色 */
--color-text-primary: #FFFFFF;
--color-text-secondary: #94A3B8;
--color-text-muted: #64748B;
```

### 預定義樣式類別

| 類別 | 用途 |
|------|------|
| `.glass-card` | 玻璃擬態卡片 |
| `.glass-card-gold` | 金色邊框玻璃卡片 |
| `.btn-gold` | 金色主要按鈕 |
| `.btn-outline` | 透明外框按鈕 |
| `.text-gradient-gold` | 金色漸層文字 |
| `.phone-mockup` | iPhone 手機外框 |
| `.glow-gold` | 金色光暈效果 |
| `.animate-float` | 浮動動畫 |

---

## 部署

### Vercel（推薦）

```bash
# 安裝 Vercel CLI
bun add -g vercel

# 部署
vercel
```

### 其他平台

本專案為標準 Next.js 應用程式，可部署至：
- Vercel
- Netlify
- Cloudflare Pages
- AWS Amplify
- 自架 Node.js 伺服器

---

## 相關連結

- **App Store**: [接案神器 SoloQuote](https://apps.apple.com/app/id6756793871)
- **iOS App 原始碼**: `/Users/firstfu/Desktop/solo_quote`

---

## 授權

本專案為私有專案，保留所有權利。

---

<p align="center">
  <sub>Made with ❤️ in Taiwan</sub>
</p>
