import { docs, meta, blog } from '@/source.config';
import { loader } from 'fumadocs-core/source';
import { icons } from 'lucide-react';
import { createElement } from 'react';

export const docsSource = loader({
  baseUrl: '/docs',
  source: docs,
  icon(icon) {
    if (!icon) return;
    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});

export const blogSource = loader({
  baseUrl: '/blog',
  source: blog,
});
