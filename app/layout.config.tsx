import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BrandingComponent } from '@/components/branding';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <BrandingComponent />,
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: 'Academy',
      url: '/blog',
      active: 'nested-url',
    },
  ],
  githubUrl: 'https://github.com/tonkeeper/tonconsole-docs',
};
