'use client';

import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const savedTheme = useRef<string | undefined>(undefined);

  // Force dark theme on homepage
  useEffect(() => {
    // Save the current theme when component mounts
    const currentTheme = theme || resolvedTheme;
    if (currentTheme) {
      savedTheme.current = currentTheme;
    }

    // Force dark theme
    setTheme('dark');

    // Restore previous theme when component unmounts (leaving homepage)
    return () => {
      if (savedTheme.current && savedTheme.current !== 'dark') {
        setTheme(savedTheme.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty deps - only run on mount/unmount

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
