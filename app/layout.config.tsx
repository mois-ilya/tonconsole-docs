import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2.5">
        <Image
          src="/icon.svg"
          alt="TONAPI"
          width={28}
          height={28}
          className="shrink-0"
        />
        <span className="text-[15px]">
          <span className="font-bold">TON</span>
          <span className="font-normal ml-0.5">API</span>
        </span>
      </div>
    ),
  },
  githubUrl: 'https://github.com/tonkeeper/tonconsole-docs',
};
