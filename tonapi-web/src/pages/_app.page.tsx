import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { canUseDOM } from 'tonapi-web/utils/canUseDom';
import 'tonapi-web/styles/globals.css';
import 'tonapi-web/styles/swagger-main.css';
import 'tonapi-web/styles/swagger-dark.css';
import 'tonapi-web/styles/swagger-fix.css';

export const sendYandexEvent = (url: string) => {
  if (process.env.NODE_ENV === 'production') {
    ym(99465214, 'hit', url);
  }
};

const Metrics = React.memo(() => {
  const router = useRouter();

  React.useEffect(() => {
    if (!canUseDOM) {
      return;
    }
    const handleRouteChange = (url: URL): void => {
      sendYandexEvent(url.toString());
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      {process.env.NODE_ENV !== 'development' && (
        <>
          <Script
            async={true}
            src="https://www.googletagmanager.com/gtag/js?id=G-2V7LWLCTQE"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'G-2V7LWLCTQE');`}
          </Script>
          <Script id="yandex-metrika" strategy="afterInteractive">
            {`
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(99465214, "init", {
          defer: true,
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
        });    
      `}
          </Script>
        </>
      )}
    </>
  );
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  React.useEffect(() => {
    const isAccount = router.asPath.includes('/account/');
    if (isAccount) {
      const address = router.asPath.split('/account/')[1];
      if (!address) return;
      window.location.replace(`https://tonviewer.com/${address}`);
    }
  }, [router]);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="google-site-verification" content="3723oM3P_A6N3-GW-6asAKwiD0ro0nd4hpx6lGC4-Lw" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/lp-image.png" />
        <meta property="og:title" content="TON API" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tonapi.io" />
        <meta property="og:image" content="/images/lp-image.png" />
        <meta property="og:image:width" content="1200" data-vmid="og:image:width" />
        <meta property="og:image:height" content="500" data-vmid="og:image:height" />
      </Head>
      <Metrics />
      <Component {...pageProps} />
    </>
  );
}
