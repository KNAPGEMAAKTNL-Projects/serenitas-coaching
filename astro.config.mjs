// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// NOTE: @astrojs/cloudflare adapter temporarily disabled due to Astro #16029
// (Vite version mismatch between Astro 6.1 and @cloudflare/vite-plugin).
// All pages are prerendered (static). Re-enable when fix ships.
// import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // ── Site ──────────────────────────────────────────────
  site: 'https://serenitas.me',
  build: { format: 'file' },
  trailingSlash: 'never',

  // ── Cloudflare adapter — re-enable when #16029 is fixed ──
  // adapter: cloudflare({
  //   imageService: 'compile',
  //   prerenderEnvironment: 'node',
  // }),

  // ── Security ──────────────────────────────────────────
  // CSP disabled: Astro's CSP implementation hashes <style> blocks but
  // cannot handle style="" attributes. This site uses inline styles
  // extensively for design tokens. Re-evaluate if migrating to class-only.
  // security: { csp: true },

  // ── Fonts (self-hosted at build time, GDPR-compliant) ─
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Lora',
      cssVariable: '--font-heading',
    },
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Sans',
      cssVariable: '--font-body',
    },
  ],

  // ── Images ───────────────────────────────────────────��
  image: { layout: 'constrained' },

  // ── i18n ──────────────────────────────────────────────
  i18n: {
    locales: ['nl'],
    defaultLocale: 'nl',
  },

  // ── Integrations ──────────────────────────────────────
  integrations: [
    sitemap({ namespaces: { news: false, video: false } }),
  ],

  // ── Vite ──────────────────────────────────────────────
  vite: { plugins: [tailwindcss()] },
});
