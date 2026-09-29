# [Opensource UI](https://opensourceui.in)

[![Live site](https://img.shields.io/badge/live-opensourceui.in-000000?style=flat-square)](https://opensourceui.in)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-149ECA?style=flat-square&logo=react&logoColor=white)](https://react.dev)

Free React and Next.js UI you copy into your project. **200+ components** across **30 categories**, TypeScript, Tailwind CSS v4, and live previews. MIT for personal and commercial use — no package to install, and no paywall later.

[![Vercel OSS Program](https://vercel.com/oss/program-badge-2026.svg)](https://vercel.com/oss)

[![Sentry for Open Source](https://img.shields.io/badge/Sentry-for%20Open%20Source-362D59?style=flat&logo=sentry&logoColor=white)](https://sentry.io/for/open-source/)

Browse the catalog at [opensourceui.in/components](https://opensourceui.in/components).

## Why copy-paste

Most kits ask you to learn a system before one button is usable. These pieces are meant to be copied, not installed: find a component, paste the file, tweak props, and ship. No provider setup and no theme config.

## Quick start

Node.js **22.x**.

```bash
git clone https://github.com/bidyut10/opensourceui.git
cd opensourceui
npm install
npm run dev
```

- Homepage: [http://localhost:3000](http://localhost:3000)
- Catalog: [http://localhost:3000/components](http://localhost:3000/components)

| Command                | What it does                                                              |
| ---------------------- | ------------------------------------------------------------------------- |
| `npm run dev`          | Dev server                                                                |
| `npm run build`        | Static export to `out/` (runs `check:showcase` first)                     |
| `npm run lint`         | ESLint                                                                    |
| `npm run typecheck`    | `tsc --noEmit`                                                            |
| `npm run format`       | Prettier, with Tailwind class sorting                                     |
| `npm run test`         | Vitest unit tests                                                         |
| `npm run verify`       | Full gate: format, lint, types, catalog, design, tests, build, Playwright |
| `npm run verify:quick` | Same gate without build and end-to-end tests                              |

Husky runs Prettier and ESLint on commit, then `npm run verify` on push. GitHub CI runs the same checks.

## Use a component

There is no `opensourceui` npm package. Copy the file from `components/`, then bring along whatever that file imports:

- `lib/cn.ts`, plus `clsx` and `tailwind-merge`
- Matching files from `icons/`
- `lucide-react`, when the source imports it
- `next/image`, when the source uses images

Keep `"use client"` when the source has it. Each detail page at `/components/[slug]` shows a live preview and the copy-ready source.

### Register a new showcase entry

Edit `lib/showcase/showcase.tsx` and add the component to `showcaseRows`:

```tsx
import { MyNewCard } from "@/components/text/my-new-card";

c(
  "my-new-card",
  <MyNewCard />,
  "components/text/my-new-card.tsx",
  "MyNewCard",
  {
    title: "My New Card",
    description: "Shown on the detail page.",
    usage: "<MyNewCard />",
  },
),
```

Also update `skills/opensource-ui/references/source_inventory.txt`, and `catalog.md` when the listing should appear in the agent catalog.

## AI coding agents

Works with Cursor, Claude Code, Codex, Copilot, Grok, ChatGPT, and other agents. Point the agent at `skills/opensource-ui/`. Setup notes are in [AGENTS.md](./AGENTS.md).

```text
Read skills/opensource-ui/SKILL.md and add the Opensource UI Login Form to my Next.js app.
```

In Cursor, `@skills/opensource-ui/SKILL.md` is enough. You do not need a second copy under `.cursor/skills/`.

## Stack

- Next.js 16 — App Router, static export (`output: "export"`)
- React 19, TypeScript, Tailwind CSS v4
- `cn()` from `clsx` and `tailwind-merge`
- Optional [PostHog](https://posthog.com) analytics (`NEXT_PUBLIC_POSTHOG_KEY`)

Copy-pasted components are React, Tailwind, and SVG. They do not depend on shadcn, MUI, or Radix, and copying one does not require PostHog or Sentry.

## Design

Paper white, ink text, hairline borders. Accents only for state. The catalog stays light so you can add dark mode after the file is yours.

- `forwardRef`, native HTML props, and `cn()` for classes
- `"use client"` only when the browser is required
- Responsive styles use base plus `md:` — not `sm:`
- Focus changes the border. No colored focus rings
- Icons: kebab-case files, PascalCase exports, under `icons/`

```tsx
import { ArrowRight } from "@/icons/actions/arrow-right";
import { Bell } from "@/icons/elements/bell";

<ArrowRight size={16} />
<Bell size={20} color="#171717" className="opacity-60" />
```

## Repository

| Path                    | What it is                                      |
| ----------------------- | ----------------------------------------------- |
| `app/(marketing)/`      | Home, about, contact, careers, sponsor, legal   |
| `app/(docs)/`           | Catalog, category, search, and detail pages     |
| `app/_shared/`          | Navigation and scroll helpers                   |
| `components/`           | Copy-paste library                              |
| `icons/`                | SVG icon components                             |
| `lib/cn.ts`             | Class merge                                     |
| `lib/site.ts`           | Site config, author, sponsorship tiers          |
| `lib/showcase/`         | Registry — edit `showcase.tsx` to add a preview |
| `lib/seo/`              | Metadata and JSON-LD                            |
| `skills/opensource-ui/` | Agent kit                                       |
| `tests/unit/`           | Vitest                                          |
| `tests/e2e/`            | Playwright smoke and accessibility              |
| `scripts/checks/`       | Catalog and design gates                        |
| `scripts/deploy/`       | Build cleanup and Cloudflare deploy             |

`(marketing)` and `(docs)` are route groups. They do not appear in the URL.

| Route                          | Page                         |
| ------------------------------ | ---------------------------- |
| `/`                            | Homepage                     |
| `/components`                  | Full catalog                 |
| `/components?q=iphone`         | Search                       |
| `/components/category/mockups` | Category browse              |
| `/components/[slug]`           | Preview, setup, and source   |
| `/about`                       | Story                        |
| `/contact`                     | Support, bugs, pull requests |
| `/careers`                     | Open roles                   |
| `/sponsor`                     | Brand placement              |
| `/privacy` · `/terms`          | Legal                        |

More detail: [tests/README.md](./tests/README.md), [scripts/README.md](./scripts/README.md), [CONTRIBUTING.md](./CONTRIBUTING.md).

## Deploy

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bidyut10/opensourceui)

1. Import [github.com/bidyut10/opensourceui](https://github.com/bidyut10/opensourceui) in [Vercel](https://vercel.com/new). Framework preset: **Next.js**.
2. Build command: `npm run build`. Output: `out/` (static export).
3. Copy variables from `.env.example` only if you want PostHog, Search Console, or Sentry source-map uploads.

`vercel.json` sets security headers and optional `/ingest` rewrites for PostHog.

### Cloudflare

This project deploys as a Worker with static assets, configured in `wrangler.toml`. It is not a Cloudflare Pages site.

| Dashboard field  | Value               |
| ---------------- | ------------------- |
| Build command    | `npm run build`     |
| Deploy command   | `npm run cf:deploy` |
| Output directory | `out`               |

Local preview: `npm run cf:dev`. Security headers come from `public/_headers`, copied into `out/` at build time. On Workers, PostHog uses the direct API host. The `functions/ingest/` folder is unused on this path.

## Sponsors

Components stay free either way. Sponsoring is optional.

- [GitHub Sponsors](https://github.com/sponsors/bidyut10) — support the maintainer
- [opensourceui.in/sponsor](https://opensourceui.in/sponsor) — brand placement on the homepage, docs, and this README

## Contributing

[CONTRIBUTING.md](./CONTRIBUTING.md) covers setup and pull requests. Questions and sponsorships go to [opensourceui.in/contact](https://opensourceui.in/contact).

This project follows the [Contributor Covenant](./CODE_OF_CONDUCT.md).

## Security

Report sensitive issues using [SECURITY.md](./SECURITY.md). Do not file a public issue for those.

## License

[MIT](./LICENSE) — personal and commercial use. Credit is welcome and not required.

Maintained by [Bidyut](https://bidyut.cc) · [X](https://x.com/BidyutKundu12) · [GitHub](https://github.com/bidyut10/opensourceui)

Something broken? Open an issue on [GitHub](https://github.com/bidyut10/opensourceui/issues).
