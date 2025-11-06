'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import type mermaid from 'mermaid';

const cachePromise = <T,>(promise: () => Promise<T>): (() => Promise<T>) => {
  const cache = new Map<string, Promise<T>>();
  const key = 'mermaid';

  return () => {
    if (!cache.has(key)) {
      cache.set(key, promise());
    }
    return cache.get(key)!;
  };
};

const loadMermaid = cachePromise(() => import('mermaid'));

function MermaidContent({ chart }: { chart: string }): React.ReactElement {
  const { resolvedTheme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>();

  useEffect(() => {
    let cancelled = false;
    void loadMermaid().then(async (mod: { default: typeof mermaid }) => {
      mod.default.initialize({
        startOnLoad: false,
        theme: resolvedTheme === 'dark' ? 'dark' : 'default',
      });

      if (ref.current) {
        const { svg } = await mod.default.render(
          `mermaid-svg-${Math.random().toString(36)}`,
          chart
        );

        if (!cancelled) {
          setSvg(svg);
        }
      }
    });

    return () => {
      cancelled = true;
    };
  }, [chart, resolvedTheme]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center"
      dangerouslySetInnerHTML={{ __html: svg || '' }}
    />
  );
}

export function Mermaid({ chart }: { chart: string }): React.ReactElement {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading diagram...</div>;
  }

  return <MermaidContent chart={chart} />;
}
