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

If you see **403 Forbidden** with an **`Error:`** header and **plain HTML** (not your Coocoobay layout), **Vercel is blocking the request before Next.js runs** — nothing in this repo can override that. Fix it in the Vercel dashboard:

1. **Use the right URL**  
   Links like `https://<name>-<id>.vercel.app` are [generated deployment URLs](https://vercel.com/docs/deployments/generated-urls). With [Deployment Protection](https://vercel.com/docs/security/deployment-protection) enabled (e.g. **Vercel Authentication** / **Standard Protection**), those URLs often **require you to be logged into Vercel**, which looks like **403** in some browsers.  
   Prefer **Project → Settings → Domains**: open your **Production** domain (e.g. `your-project.vercel.app` or your custom domain). From **Deployments**, use **Visit** on the Production deployment’s primary alias — not an old bookmark to a random `-xxxx.vercel.app` preview URL.

2. **Turn off protection for public sites**  
   **Dashboard → Project → Settings → [Deployment Protection](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fdeployment-protection&title=Deployment+Protection)**  
   - Set protection scope/method so strangers can load the site (often **None** / disable **Vercel Authentication**, depending on your plan UI).  
   - **Teams**: check **Team Settings → Deployment Protection** for defaults that override each project — switch project to **Use team default** off or set **None** for this repo.

3. **Firewall**  
   **Settings → Security → Firewall**: disable strict rules / Attack Mode while testing if requests still fail.

4. **Redeploy**  
   After saving settings: **Deployments → ⋯ → Redeploy** the latest Production build.

There is **no `middleware` or server rule** in this app returning 403; fixing access is entirely **Vercel account/project configuration**.

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
