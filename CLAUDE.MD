# Claude Development Guidelines for TONAPI Documentation

This document outlines the key principles and best practices established during the migration from Nextra to Fumadocs for the TONAPI documentation project.

## Core Principles

### 1. Fumadocs First Approach

**Always check Fumadocs native solutions before creating custom components or removing existing functionality.**

- Before removing any component or feature, consult [Fumadocs documentation](https://fumadocs.dev/docs)
- Fumadocs provides many built-in components: Steps, Tabs, Cards, Callouts, etc.
- Use `import { Step, Steps } from 'fumadocs-ui/components/steps';` for step-by-step guides
- Leverage Fumadocs' native features for best performance and maintainability

**Example:**
```mdx
---
title: SDK Guide
---

import { Step, Steps } from 'fumadocs-ui/components/steps';

<Steps>
<Step>

### Install the tool

Install using npm...

</Step>
<Step>

### Generate the SDK

Run the generator...

</Step>
</Steps>
```

### 2. Component Import Requirements

**All React components used in MDX files MUST have corresponding import statements.**

- Never use JSX components without importing them first
- Common imports:
  - `import { Step, Steps } from 'fumadocs-ui/components/steps';`
  - `import { Tab, Tabs } from 'fumadocs-ui/components/tabs';`
  - `import { Card, Cards } from 'fumadocs-ui/components/card';`
  - `import { Callout } from 'fumadocs-ui/components/callout';`

**Error Prevention:**
Missing imports will cause 500 errors: `Expected component 'Steps' to be defined`

### 3. Sidebar Structure and Organization

**Use meta.json files to control sidebar structure with section separators.**

**Key concepts:**
- `"---Section Name---"` creates non-collapsible section headers
- Explicit page listing maintains order and visibility
- Nested meta.json files control subdirectory structure
- Empty `pages: []` array hides all pages in that directory

**Example structure:**
```json
{
  "title": "Documentation",
  "pages": [
    "---Introduction---",
    "introduction/quick-start",
    "introduction/what-is-tonapi",
    "---APIs---",
    "tonapi/rest-api",
    "tonapi/webhooks-api",
    "tonapi/streaming-api",
    "tonapi/sdk",
    "---Console---",
    "tonconsole/analytics",
    "tonconsole/invoices"
  ]
}
```

### 4. Hidden Pages Pattern

**Pages can be hidden from sidebar while remaining accessible via direct URL.**

**Methods:**
1. Remove page from parent meta.json `pages` array
2. Use empty `pages: []` in subdirectory meta.json to hide all children
3. Pages remain accessible at their URL paths

**Use cases:**
- Legal/Terms pages that should be linked but not prominently displayed
- Legacy documentation that must remain accessible
- API reference pages accessed via search or direct links

### 5. Title vs Description Frontmatter

**Understanding the distinction between title and description:**

- **`title`**: Short name displayed in sidebar navigation
- **`description`**: Full description for SEO, meta tags, and search results

**Example:**
```mdx
---
title: Tonkeeper Messages
description: Push Notifications for Decentralized Apps
---
```

This shows "Tonkeeper Messages" in sidebar (better readability) while maintaining SEO with full description.

### 6. Branding Guidelines

**TONAPI branding must follow specific styling:**

- **TON**: font-bold
- **API**: font-normal with ml-0.5 (2px offset)

**Implementation:**
```tsx
<span className="text-[15px]">
  <span className="font-bold">TON</span>
  <span className="font-normal ml-0.5">API</span>
</span>
```

### 7. Minimal Header Navigation

**Keep header navigation clean and purposeful.**

- Remove redundant navigation links (e.g., "Documentation" link when already in docs)
- Keep only essential links: GitHub, external resources
- Header should focus on branding and essential navigation

**Configure in `app/layout.config.tsx`:**
```tsx
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <BrandingComponent />
  },
  githubUrl: 'https://github.com/tonkeeper/tonconsole-docs',
  // Minimal or no links array
};
```

### 8. MDX Best Practices

**Follow these patterns for consistent documentation:**

1. **Use Steps component** for procedural instructions
2. **Use Callout component** for notes, warnings, tips
3. **Use proper heading hierarchy** (h2 for main sections, h3 for subsections)
4. **Include code language tags** for syntax highlighting
5. **Use relative links** for internal navigation
6. **Keep paragraphs concise** for better readability

### 9. File Organization

**Maintain clean project structure:**

- Place page-specific content in MDX files
- Use index.mdx for directory landing pages OR single .mdx file at parent level
- Group related pages in directories with meta.json control
- Avoid deep nesting (max 2-3 levels)

**Prefer flat structure:**
```
docs/
  payment-processing.mdx        ← Single page, no directory
  payment-processing-embed.mdx  ← Related page, same level
```

**Over nested structure:**
```
docs/
  payment-processing/
    index.mdx
    embed.mdx
```

### 10. Git Workflow

**Follow consistent commit and push practices:**

1. **Commit frequently** with clear, descriptive messages
2. **Test before committing** - verify pages load correctly
3. **Push to designated branch** after completing tasks
4. **Use conventional commit format** when appropriate

**Example commit message:**
```
Restore Steps component and clean up header navigation

- Restore Fumadocs Steps component in SDK page with proper import
- Remove unnecessary Documentation and Academy links from header
- SDK page now uses native Steps/Step components for better UX
```

### 11. Testing Requirements

**Always verify changes before committing:**

1. **Start dev server**: `npm run dev`
2. **Test affected pages**: Check HTTP 200 status
3. **Verify hidden pages**: Ensure they're accessible by URL but not in sidebar
4. **Check component rendering**: Confirm no 500 errors
5. **Validate navigation**: Test sidebar structure and links

**Quick test commands:**
```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:3003/docs/page-path
```

## Common Patterns

### Creating New Documentation Pages

1. Create MDX file with frontmatter
2. Add necessary component imports
3. Add page to appropriate meta.json
4. Test page loads correctly
5. Commit and push changes

### Hiding Pages from Sidebar

1. Locate page in meta.json hierarchy
2. Remove from `pages` array
3. Verify page still accessible via URL
4. Update any navigation that relied on sidebar visibility

### Adding Step-by-Step Guides

1. Import Steps and Step components
2. Wrap instructions in `<Steps>` container
3. Use `<Step>` for each major step
4. Include heading (h3) for each step
5. Keep steps focused and actionable

### Restructuring Sections

1. Review current meta.json structure
2. Plan new section organization
3. Update meta.json with "---Section---" separators
4. Move/rename files if needed
5. Test navigation thoroughly
6. Commit with clear description of changes

## Troubleshooting

### 500 Error: Component Not Defined

**Problem:** `Expected component 'ComponentName' to be defined`

**Solution:** Add import statement at top of MDX file after frontmatter

### Page Not Appearing in Sidebar

**Problem:** New page doesn't show in navigation

**Solution:** Add page path to meta.json `pages` array

### Incorrect Sidebar Order

**Problem:** Pages appear in wrong order

**Solution:** Reorder entries in meta.json `pages` array

### Section Not Collapsing

**Problem:** Section header still has collapse toggle

**Solution:** Use "---Section Name---" format instead of regular page entry

## Reference Links

- [Fumadocs Documentation](https://fumadocs.dev/docs)
- [Fumadocs UI Components](https://fumadocs.dev/docs/ui/components)
- [Fumadocs Configuration](https://fumadocs.dev/docs/ui/layouts)
- [Next.js App Router](https://nextjs.org/docs/app)

## Project-Specific Notes

### Current Structure

- **Introduction**: Quick Start, What is TONAPI
- **APIs**: REST API, Webhooks, Streaming, SDK, Cookbook
- **Console**: Analytics, Invoices, Jettons, NFT, Liteservers, Tonkeeper Messages
- **Tonkeeper**: Deep Linking, Signer
- **Payment**: About Payment Processing, TonAPI Embed

### Hidden Pages (Accessible by URL Only)

- `/docs/tonapi/graphql` - GraphQL API Documentation
- `/docs/tonconsole/jettons/airdrop` - Jetton Airdrop T&C Terms
- `/docs/tonconsole/jettons/airdrop/terms` - Airdrop Terms of Use

### Development Server

- **Port**: 3003
- **Start**: `npm run dev`
- **Local URL**: http://localhost:3003

---

**Last Updated**: 2025-11-06
**Framework**: Fumadocs v16.0.7
**Next.js**: 16.0.1
