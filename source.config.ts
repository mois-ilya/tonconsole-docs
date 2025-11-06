import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'docs',
});

export const blog = defineDocs({
  dir: 'blog',
});

export default defineConfig({
  lastModifiedTime: 'git',
});
