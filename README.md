# React Project
โปรเจกต์พัฒนาด้วย **React**, **Vite**, และ **TailwindCSS**

## โครงสร้างโปรเจกต์
project-root/
├─ node_modules/            # ไฟล์ dependencies ของ npm
├─ public/                  # ไฟล์ static (favicon, images)
├─ src/                     # โค้ด React ของคุณ
│  ├─ App.jsx
│  ├─ main.jsx              # entry point
│  └─ pages/                # แยกหน้า เช่น Dashboard.jsx, Customers.jsx
├─ index.html               # HTML template
├─ package.json             # ข้อมูลโปรเจกต์ + dependencies
├─ package-lock.json        # ล็อคเวอร์ชัน dependencies
├─ postcss.config.cjs       # config สำหรับ PostCSS (Tailwind ใช้)
├─ tailwind.config.js       # config TailwindCSS
└─ vite.config.js           # config Vite


## การติดตั้ง
```bash
# ติดตั้ง dependencies
npm install

# รันโปรเจกต์ (localhost:5173)
npm run dev

# ล้าง cache ของ npm
npm cache clean --force

# สร้าง build production
npm run build
