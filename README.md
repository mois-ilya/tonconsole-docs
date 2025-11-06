# TON Console Documentation

Migrated to Fumadocs v16 with Next.js 16.

## What's Done

- ✅ Moved old Nextra project to `old/` directory
- ✅ Installed latest Fumadocs, Next.js 16, Tailwind v4, React 19
- ✅ Created new project structure with Fumadocs
- ✅ Copied all MDX files from old project:
  - `/docs/tonapi/` - TonAPI documentation
  - `/docs/tonconsole/` - TON Console documentation
  - `/docs/tonkeeper/` - Tonkeeper documentation
  - `/docs/payment-processing/` - Payment Processing docs
  - `/blog/` - Academy articles (sign-data, transaction-tracking)
- ✅ Copied public assets (logos, icons, og-image)
- ✅ Created layouts and page templates
- ✅ Added search API endpoint
- ✅ Created navigation metadata files

## What Needs to be Fixed

1. **MDX Rendering**: The MDX content rendering needs to be configured properly for Fumadocs v16. Currently pages show placeholders.
   - Need to configure `source.config.ts` correctly
   - Need to fix `page.data.body` access for MDX components

2. **Blog Frontmatter**: Blog posts need proper frontmatter schema with date and author fields

3. **Static Export**: Re-enable `output: 'export'` in next.config.mjs once MDX rendering works

4. **Content Migration**: Some MDX files still reference old Nextra components:
   - Replace Callout components with Fumadocs equivalents
   - Update component imports in Academy articles

## Structure

```
/app
  /api/search - Search API endpoint
  /blog - Academy blog section
  /docs - Main documentation
  /page.tsx - Homepage
  /layout.tsx - Root layout with metadata

/docs - Documentation MDX files
/blog - Academy blog MDX files
/public - Static assets
/old - Old Nextra project (backup)
```

## Development

```bash
pnpm install
pnpm dev
```

## Build

Currently build fails at TypeScript check due to MDX rendering issues. This needs to be fixed first.

```bash
pnpm build
```
