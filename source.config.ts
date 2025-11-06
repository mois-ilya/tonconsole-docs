import { defineConfig, defineDocs } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'docs',
});

export const blog = defineDocs({
  dir: 'blog',
});

export default defineConfig();
