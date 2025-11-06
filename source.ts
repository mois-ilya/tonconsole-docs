import { docs, blog } from './source.config';
import { loader } from 'fumadocs-core/source';
import { icons } from 'lucide-react';
import { createElement } from 'react';

export { docs, blog };

// Create loaders
export const docsLoader = loader({
  baseUrl: '/docs',
  source: docs,
  icon(icon) {
    if (!icon) return;
    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});

export const blogLoader = loader({
  baseUrl: '/blog',
  source: blog,
});
