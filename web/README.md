## Coocoobay Limited — Premium Kids Fashion (Next.js)

Ultra-modern marketing + eCommerce UI for **Coocoobay Limited** (Ghana), built with **Next.js (App Router)**, **Tailwind CSS v4**, **Framer Motion**, and **Zustand** (cart + wishlist persistence).

### Prerequisites

- Node.js **20+** recommended
- npm (bundled with Node)

### Setup

```bash
cd web
npm install
```

### Development

```bash
npm run dev
```

Open `http://localhost:3000`.

### Production build

```bash
npm run build
npm start
```

### Project structure (high level)

- `src/app/*`: routes (Home, Customize, Shop, PDP, Photography, About, Contact, Checkout, etc.)
- `src/components/*`: reusable UI + sections (layout, home, shop, product, customize, checkout…)
- `src/lib/*`: constants + catalog data + helpers (`cn`)
- `src/store/*`: client stores (`cart`, `wishlist`, `studio`)

### Notes for integrating real payments / auth

- Checkout UI is **ready for wiring** to Paystack + MoMo providers (keys via env vars).
- Customer accounts page is a **placeholder** until you connect your preferred auth.

### Images

Remote images are loaded from Unsplash via `next/image` allowlist in `next.config.ts`.

### Folder location

This app lives in `COOCOOBAY/web/` because npm package names must be lowercase (your desktop folder name uses capitals).
