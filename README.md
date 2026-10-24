# ⚡ Davyran — Developer Portfolio

Website personal dan portfolio pengembang dengan tema **Google Antigravity Aesthetic** — monokromatik modern, clean, dan presisi tinggi berstandar developer kelas dunia.

## 📁 Struktur File

```
├── index.html    # Halaman utama dengan komponen semantik & SVG icons
├── style.css     # Sistem desain lengkap dengan token Google Antigravity
├── script.js     # Interaktivitas (ScrollSpy, animasi scroll, floating particles)
├── DESIGN.md     # Spesifikasi desain visual Google Antigravity
└── README.md     # Dokumentasi proyek
```

## 🎨 Design Tokens & Customization

Berdasarkan [DESIGN.md](DESIGN.md), seluruh variabel desain diatur pada `:root` di [style.css](style.css):

```css
:root {
  --bg-canvas: #FFFFFF;
  --bg-surface: #F8F9FA;
  --color-primary: #121317;
  --text-primary: #121317;
  --text-secondary: #45474D;
  --border-color: #E2E4E8;
  --radius-pill: 9999px;
  --radius-card: 22px;
}
```

### Karakteristik Desain:
1. **Typography**: Menggunakan font Google Sans / Plus Jakarta Sans dengan bobot terukur (400, 500, 600, 700) dan JetBrains Mono untuk angka/kode.
2. **Surface & Palette**: Kontras bersih `#121317` di atas latar kanvas putih `#FFFFFF` dan permukaan kartu `#F8F9FA`.
3. **Pill Buttons & Badges**: Radius penuh `9999px` khas Google Antigravity dengan transisi interaktif lembut.
4. **Developer Code Card**: Widget preview visual bergaya terminal modern.

## 🚀 Deployment

Website ini di-hosting menggunakan GitHub Pages.
Push ke branch `main` untuk auto-deploy.
