# Coocoobay Limited — Premium Kids Fashion (Next.js)

Ultra-modern marketing + eCommerce UI for **Coocoobay Limited** (Ghana), built with **Next.js (App Router)**, **Tailwind CSS v4**, **Framer Motion**, and **Zustand** (cart + wishlist persistence).

### Prerequisites

- Node.js **20+** recommended
- npm (bundled with Node)

### Setup

```bash
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

### Deploy on Vercel

Import this Git repository with **Framework Preset: Next.js** and leave **Root Directory** empty (repo root). Vercel auto-detects `package.json` and `next.config.ts` here.

If the site shows **403 Forbidden** (plain error page, not your UI), open [Deployment Protection](https://vercel.com/docs/security/deployment-protection) for the project:

1. **Vercel Dashboard** → your project → **Settings** → **Deployment Protection**
2. For a **public store**, turn **off** protection for the deployment type you’re opening (often **Preview** URLs require login while **Production** does not — or **Production** may be protected on paid plans).
3. **Settings** → **Security** → **Firewall**: temporarily disable rules or add an exception while testing.

Then **Redeploy** and open the **Production** domain from the latest successful deployment.

### Project structure (high level)

- `src/app/*`: routes (Home, Customize, Shop, PDP, Photography, About, Contact, Checkout, etc.)
- `src/components/*`: reusable UI + sections
- `src/lib/*`: constants + catalog data + helpers (`cn`)
- `src/store/*`: client stores (`cart`, `wishlist`, `studio`)

### Notes for integrating real payments / auth

- Checkout UI is **ready for wiring** to Paystack + MoMo providers (keys via env vars).
- Customer accounts page is a **placeholder** until you connect your preferred auth.

### Images

Remote images are loaded from Unsplash via `next/image` allowlist in `next.config.ts`.
