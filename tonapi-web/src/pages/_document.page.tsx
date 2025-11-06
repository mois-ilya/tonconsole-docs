import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="htmlpage">
      <Head />
      <body>
        <Main />
        <div style={{ display: 'none' }}>
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
