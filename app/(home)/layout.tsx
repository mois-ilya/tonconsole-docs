'use client';

import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  // Force dark theme on homepage
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';

    return () => {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = '';
    };
  }, []);

  return (
    <HomeLayout
      {...baseOptions}
      themeSwitch={{
        enabled: false,
      }}
    >
      {children}
    </HomeLayout>
  );
}
