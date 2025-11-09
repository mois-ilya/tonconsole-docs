import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s - Console Docs',
    default: 'Console Docs',
  },
  description:
    'Knowledge base for Ton Console users and partners: manage dapps, tokens and payments in one place with powerful API and deep commercial integrations',
  keywords:
    'tonconsole, tonapi, documentation, dapps, business, TON, API, blockchain, Web3, console, B2B, development',
  metadataBase: new URL('https://docs.tonconsole.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://docs.tonconsole.com',
    siteName: 'Documentation',
    title: 'Console Docs',
    description:
      'Knowledge base for Ton Console users and partners: manage dapps, tokens and payments in one place with powerful API and deep commercial integrations',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Console Docs',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@tonappshq',
    title: 'Console Docs',
    description:
      'Service with business tools for TON blockchain. All to easy launching Web3 apps, API calls and transactions control in few clicks',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta data-cd-check="1cb6adb6d4b631b9" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              ym(99489400, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
              });
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/99489400"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
      </head>
      <body className="flex min-h-screen flex-col">
        <RootProvider
          search={{
            options: {
              type: 'static',
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
