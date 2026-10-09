# PicoPine website (React + Tailwind CSS + JavaScript)

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
npm run preview
```

## Structure
- `src/data.js`        all page content (from the business plan PDF): nav, ecosystem nodes, numbers, roadmap, FAQ
- `src/hooks.js`       `useInView`, `useCountUp`
- `src/components/`    Nav, Hero (+ PineCanvas), Technology, Model, Ecosystem, Products (carousel), Vision (roadmap), Faq, FinalCta, Footer
- `src/index.css`      Tailwind layers + custom animation CSS
- `tailwind.config.js` brand colours (bg, pine, ac, vi...) and fonts (Sora, Manrope)

## Tips
- Hero animation speed: `SPEED` at the top of `components/PineCanvas.jsx`.
- Change copy or numbers only in `src/data.js` (FAQ, roadmap, key numbers, ecosystem nodes).
- Carousel slides are in the `SLIDES` array in `components/Products.jsx`.
- Replace the placeholder P-monogram with your official logo in `components/Logo.jsx`.
- No partners are named in the "Built to connect" slide. Only add real partners with permission.
