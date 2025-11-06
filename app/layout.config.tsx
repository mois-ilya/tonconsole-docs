import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-3">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M14 14L4 14L14 4L14 14Z" fill="currentColor" />
          <path opacity="0.8" d="M14 14L4 28L4 14L14 14Z" fill="currentColor" />
          <path opacity="0.8" d="M28 4L14 4L14 14L28 4Z" fill="currentColor" />
          <path opacity="0.4" d="M14 14L28 28L4 28L14 14Z" fill="currentColor" />
          <path opacity="0.6" d="M28 28L28 4L14 14L28 28Z" fill="currentColor" />
        </svg>
        <span className="font-bold text-2xl max-md:hidden">Documentation</span>
      </div>
    ),
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
