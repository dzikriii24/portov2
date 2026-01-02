# Portov2 – React + Vite + TypeScript

Project ini adalah website portfolio berbasis **React**, **Vite**, dan **TypeScript**. Cocok buat belajar, modif, atau langsung dipakai sebagai personal portfolio.

Repo: [https://github.com/dzikriii24/portov2.git](https://github.com/dzikriii24/portov2.git)

---

## Cara Dapetin Project

Ada **2 cara** buat dapetin project ini:

### 1. Cara Clone (Rekomendasi kalau udah familiar Git)

```bash
git clone https://github.com/dzikriii24/portov2.git
```

### 2. Cara Download (Aman buat yang masih awam)

1. Buka repo GitHub: [https://github.com/dzikriii24/portov2](https://github.com/dzikriii24/portov2)
2. Klik tombol **Code**
3. Pilih **Download ZIP**
4. Setelah selesai, **extract ZIP** ke folder yang kamu mau

---

## Software Wajib yang Harus Disiapin

Sebelum jalanin project, pastiin hal-hal ini udah keinstall:

### 1. Node.js (WAJIB)

Digunakan buat jalanin React & npm.

* Download: [https://nodejs.org/](https://nodejs.org/)
* Disarankan versi **LTS**
* Cek instalasi:

```bash
node -v
npm -v
```

### 2. Git (Opsional tapi kepake banget)

Kalau mau clone repo atau update code.

* Download: [https://git-scm.com/](https://git-scm.com/)
* Cek instalasi:

```bash
git --version
```

### 3. Code Editor

Rekomendasi:

* VS Code: [https://code.visualstudio.com/](https://code.visualstudio.com/)

Extension VS Code yang kepake:

* ES7+ React Snippets
* Tailwind CSS IntelliSense
* Prettier

---

## Cara Jalanin Project (Step by Step, Super Basic)

### 1. Buka Folder Project

Masuk ke folder hasil clone atau extract ZIP.

```bash
cd portov2
```

### 2. Install Dependency

Ini wajib, jangan skip.

```bash
npm install
```

Kalau error, biasanya karena:

* Node belum keinstall
* Versi Node terlalu lama

### 3. Jalanin Project

```bash
npm run dev
```

Nanti bakal muncul info kayak:

```
Local: http://localhost:5173/
```

Buka link itu di browser.

---

## Struktur Folder (Penting Biar Gak Bingung)

```text
portov2/
├── public/               # Asset publik (favicon, dll)
├── src/
│   ├── assets/           # Gambar, icon, font, dll
│   ├── components/       # Reusable component (Navbar, Button, Card, dll)
│   ├── pages/            # Halaman utama (Home, About, Project, dll)
│   ├── styles/           # CSS / Tailwind custom
│   ├── App.tsx           # Root component
│   ├── main.tsx          # Entry point React
│   └── vite-env.d.ts
├── index.html            # HTML utama
├── package.json          # Dependency & script
├── tsconfig.json         # Config TypeScript
├── vite.config.ts        # Config Vite
└── README.md
```

Penjelasan singkat:

* **components/**: isi UI kecil-kecil, reusable
* **pages/**: layout halaman
* **assets/**: gambar, icon, svg
* **App.tsx**: tempat ngatur routing / layout utama

---

## Styling & UI Library (Opsional tapi Disarankan)

Kalau mau layoutnya mirip tapi pengen beda vibe:

### UI / Styling Tools:

* DaisyUI → [https://daisyui.com/](https://daisyui.com/)
* Tailwind CSS → [https://tailwindcss.com/](https://tailwindcss.com/)
* Lightswind → [https://lightswind.com/](https://lightswind.com/)
* React Bits → [https://reactbits.dev/](https://reactbits.dev/)

Cara pakai biasanya:

1. Install library
2. Import component
3. Masukin ke folder `components/`

Simple plug & play.

---

## Gambar / Foto

Disarankan **jangan simpan foto lokal**, tapi pakai link external.

Sumber rekomendasi:

* Pexels → [https://www.pexels.com/](https://www.pexels.com/)
* Unsplash → [https://unsplash.com/](https://unsplash.com/)
* Pinterest (ambil link langsung)

Tinggal copy URL gambar dan paste ke code JSX.

---

## Kustomisasi

* Mau ubah **theme** → edit config Tailwind / DaisyUI
* Mau ubah **background** → edit di component / CSS
* Mau ubah **layout** → mainin folder `pages/` dan `components/`

Kalau mau layout sama persis, tinggal ganti konten aja.
Kalau mau beda total, bebas eksplor component.

---

## Troubleshooting

* `npm install` error → cek Node.js
* `npm run dev` gagal → hapus `node_modules` lalu install ulang

```bash
rm -rf node_modules
npm install
```

---

Kalau masih pusing atau bingung setup:
DM aja via Instagram
**@sweswoz**

Santai, project ini beginner friendly kok.
