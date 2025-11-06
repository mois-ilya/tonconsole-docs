import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2.5">
        <Image
          src="/icon.svg"
          alt="TON Console"
          width={28}
          height={28}
          className="shrink-0"
        />
        <span className="font-semibold text-[15px]">TON Console Docs</span>
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
