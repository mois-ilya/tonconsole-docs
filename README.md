# TonConsole Documentation

Official documentation for TonConsole and TonAPI, built with Fumadocs v16 and Next.js 16.

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## OpenAPI Documentation

The REST API documentation uses an interactive OpenAPI playground. The spec is automatically managed.

### How It Works

The OpenAPI spec (`tonapi-openapi.yml`) is automatically checked and downloaded:
- ✅ **Before dev**: `pnpm dev` runs `predev` hook
- ✅ **Before build**: `pnpm build` runs `prebuild` hook
- ✅ **Auto-download**: If file doesn't exist, downloads from `https://tonapi.io/v2/openapi.yml`

### Manual Operations

Update OpenAPI spec manually:
```bash
pnpm generate:openapi
```

Or download directly:
```bash
wget -O tonapi-openapi.yml https://tonapi.io/v2/openapi.yml
curl -o tonapi-openapi.yml https://tonapi.io/v2/openapi.yml
```

### Update Strategies

**Option 1: Manual updates**
```bash
pnpm generate:openapi  # Get latest spec
pnpm build             # Rebuild with new spec
```

**Option 2: CI/CD auto-update**
```yaml
# .github/workflows/build.yml
- run: pnpm generate:openapi
- run: pnpm build
```

**Option 3: Scheduled rebuilds** (recommended)
```yaml
# .github/workflows/update-api-docs.yml
on:
  schedule:
    - cron: '0 0 * * *'  # Daily at midnight
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
      - run: pnpm install
      - run: pnpm generate:openapi
      - run: pnpm build
```

## Project Structure

```
.
├── app/
│   ├── (home)/              # Homepage (always dark theme)
│   ├── blog/                # Academy articles
│   ├── docs/                # Documentation pages
│   └── api/search/          # Search API (static)
├── docs/                    # Documentation MDX files
│   ├── tonapi/
│   │   └── rest-api.mdx    # Uses <FullAPIPage> component
│   ├── payment-processing/
│   └── introduction/
├── blog/                    # Academy articles MDX
├── components/
│   ├── mermaid.tsx         # Mermaid diagram support
│   ├── full-api-page.tsx   # Custom OpenAPI component (renders all endpoints)
│   └── mdx-components.tsx  # Custom MDX components
├── lib/
│   └── openapi.ts          # OpenAPI config
└── scripts/
    ├── check-openapi.mjs   # Pre-hook (ensures spec exists)
    └── generate-openapi.mjs # Manual download script
```

## Features

- 🎮 **Interactive API Playground** - Test API calls with Bearer auth
- 🎨 **Custom Theming** - Dark homepage, toggle for docs/blog
- 🔍 **Full-text Search** - Client-side Orama search (2.1MB index)
- 📊 **Mermaid Diagrams** - Flowcharts and diagrams support
- 📱 **Responsive** - Mobile-friendly design
- ⚡ **Static Export** - Pre-rendered HTML for fast loading

## Tech Stack

- **Framework**: Next.js 16 (Turbopack)
- **Docs**: Fumadocs 16 (MDX-based)
- **OpenAPI**: fumadocs-openapi (interactive playground)
- **Styling**: Tailwind CSS v4
- **Theme**: next-themes
- **Search**: Orama (static client-side search)
- **Diagrams**: Mermaid
- **Deployment**: Static export (`output: 'export'`)

## Development

### Adding Documentation

1. Create MDX files in `docs/` or `blog/`
2. Update `meta.json` in the directory
3. Use available components:
   - `<Accordions>` / `<Accordion>`
   - `<Tabs>` / `<Tab>`
   - `<Mermaid>`
   - `<FullAPIPage>` (for complete OpenAPI docs)
   - `<APIPage>` (for individual OpenAPI endpoints)

Example:
```mdx
---
title: My Page
description: Page description
---

## Content

<Accordions>
<Accordion title="Click me">
Hidden content here
</Accordion>
</Accordions>
```

### Updating API Docs

The REST API page uses a custom `<FullAPIPage>` component that automatically renders all 108 endpoints:

```mdx
<!-- docs/tonapi/rest-api.mdx -->
<FullAPIPage />
```

The `FullAPIPage` component (in `components/full-api-page.tsx`):
- Reads the OpenAPI spec from `tonapi-openapi.yml`
- Extracts all operations (paths + methods)
- Passes them to fumadocs-openapi's `APIPage` component
- Renders complete interactive documentation for all endpoints

To update:
1. `pnpm generate:openapi` - Download latest spec
2. Restart dev server or rebuild
3. All endpoints/schemas update automatically

**Note:** First load takes ~70s (19.5s compile + 52s render) due to processing 108 endpoints. Subsequent loads are cached and much faster.

### Theme System

- **Homepage** (`app/(home)/`): Forced dark theme
- **Docs/Blog**: Light/dark toggle available
- **Colors**: TonAPI brand colors in `app/global.css`

## Build & Deployment

### Local Build
```bash
pnpm build
```

Output: `out/` directory with static HTML

### Environment

No environment variables required. All configuration is in code.

### Deployment

Deploy the `out/` directory to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting

## Scripts Reference

| Command | Description |
|---------|-------------|
| `pnpm dev` | Development server (auto-downloads spec) |
| `pnpm build` | Production build (auto-downloads spec) |
| `pnpm start` | Start production server |
| `pnpm generate:openapi` | Manually update OpenAPI spec |

## Migration Notes

Migrated from Nextra to Fumadocs v16 with:
- ✅ All documentation pages
- ✅ Academy blog articles
- ✅ Interactive OpenAPI docs
- ✅ Full-text search
- ✅ Mermaid diagram support
- ✅ Custom theme system
- ✅ Static site generation

## License

See [TonConsole](https://tonconsole.com) for license information.
