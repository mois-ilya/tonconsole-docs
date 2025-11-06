'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

// Code examples data
const codeExamples = [
  { key: 'account', title: 'Account', path: 'https://tonapi.io/v2/accounts/{account_id}', json: `{\n  "address": "0:cdce587...",\n  "balance": 375813296426,\n  "status": "active"\n}` },
  { key: 'jettons', title: 'Jettons', path: 'https://tonapi.io/v2/accounts/{account_id}/jettons', json: `{\n  "balances": [{\n    "balance": "2000000000",\n    "jetton": {\n      "name": "Tether USD"\n    }\n  }]\n}` },
  { key: 'nfts', title: 'NFTs', path: 'https://tonapi.io/v2/accounts/{account_id}/nfts', json: `{\n  "nft_items": [{\n    "address": "0:3562bc...",\n    "metadata": {\n      "name": "Duck"\n    }\n  }]\n}` }
];

// Clients data
const clients = [
  { name: 'dedust', href: 'https://dedust.io' },
  { name: 'trust', href: 'https://trustwallet.com' },
  { name: 'tonhub', href: 'https://tonhub.com' },
  { name: 'stonfi', href: 'https://ston.fi' },
  { name: 'getgems', href: 'https://getgems.io' },
  { name: 'okx', href: 'https://okx.com' },
  { name: 'tonscan', href: 'https://tonscan.org' },
  { name: 'tonstarter', href: 'https://tonstarter.com' },
  { name: 'neocrypto', href: 'https://neocrypto.net' },
  { name: 'bitget', href: 'https://bitget.com' },
  { name: 'mercuryo', href: 'https://mercuryo.io' },
  { name: 'changelly', href: 'https://changelly.com' },
  { name: 'moonpay', href: 'https://moonpay.com' },
  { name: 'mtw', href: 'https://mytonwallet.io' },
  { name: 'avanchange', href: 'https://avanchange.com' },
  { name: 'coingecko', href: 'https://coingecko.com' },
  { name: 'unstoppable', href: 'https://unstoppable.money' }
];

// Component for typing animation
function CodeTypingAnimation({ code }: { code: typeof codeExamples[0] }) {
  const [displayedCode, setDisplayedCode] = useState(code.json.slice(0, 1));

  useEffect(() => {
    let i = 1;
    const timer = setInterval(() => {
      if (i > code.json.length) {
        clearInterval(timer);
      }
      setDisplayedCode(code.json.slice(0, i));
      i += 3;
    }, 10);

    return () => clearInterval(timer);
  }, [code]);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px', minWidth: '60%', maxWidth: '60%', height: '330px', maxHeight: '330px' }} className="code-container">
      <div style={{ position: 'absolute', content: '', width: '101%', height: '101%', background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0) 40%, var(--backgroundPrimary) 80%, var(--backgroundPrimary) 100%)', zIndex: 1, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', content: '', width: '101%', height: '101%', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 80%, var(--backgroundPrimary) 100%)', zIndex: 1, pointerEvents: 'none' }} />
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', background: 'var(--linearPrimary)', border: '0.5px solid var(--borderPrimary)', borderRadius: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px', padding: '20px 12px 0 20px' }}>
          <div className="api2 text-mono" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1px 10px', borderRadius: '6px', width: '40px', border: '0.5px solid var(--backgroundBlue)', background: 'var(--backgroundBlue)', color: 'var(--accentBlue)' }}>GET</div>
          <div className="api1 text-mono">{code.path}</div>
        </div>
        <pre className="body3 text-mono" style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', overflow: 'auto', padding: '20px', margin: 0, color: 'var(--constantWhite)' }}><code>{displayedCode}</code></pre>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [selectedCode, setSelectedCode] = useState(codeExamples[0]);
  const [codeIndex, setCodeIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCodeIndex(prev => {
        const next = (prev + 1) % codeExamples.length;
        setSelectedCode(codeExamples[next]);
        return next;
      });
    }, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const handleCodeSelect = (example: typeof codeExamples[0], index: number) => {
    setSelectedCode(example);
    setCodeIndex(index);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCodeIndex(prev => {
        const next = (prev + 1) % codeExamples.length;
        setSelectedCode(codeExamples[next]);
        return next;
      });
    }, 5000);
  };

  return (
    <main style={{ flex: 1, background: 'hsl(var(--background))', color: 'hsl(var(--foreground))', position: 'relative', overflow: 'hidden' }}>
      {/* Gradient Background */}
      <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '100%', height: '80%', top: 0, transform: 'translateY(-55%)', background: 'radial-gradient(circle, #001dc2 0, #001dc2 15%, transparent 65%, transparent 100%)' }} />
        <div style={{ position: 'absolute', width: '100%', height: '80%', bottom: 0, transform: 'translateY(55%)', background: 'radial-gradient(circle, #001dc2 0, #001dc2 15%, transparent 65%, transparent 100%)' }} />
      </div>

      <div className="container mx-auto px-4 py-16 sm:py-24" style={{ maxWidth: '1280px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '120px' }} className="main-sections">

          {/* 1. Title Section */}
          <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }} className="title-section">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '12px' }}>
              <h1 className="title1" style={{ maxWidth: '800px' }}>
                TON Developer Tools — Power your blockchain solutions with TON API
              </h1>
              <p className="body1" style={{ color: 'var(--foregroundSecondary)', maxWidth: '600px' }}>
                Leverage TON API to build dApps, streamline blockchain development, and explore cutting-edge technologies on TON.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
              <Link href="https://tonconsole.com?utm_source=tonapi.io" target="_blank" className="button-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '40px', background: 'var(--accentBlue)', color: 'var(--constantWhite)', fontWeight: 500, fontSize: '16px', lineHeight: '24px', border: 'none', cursor: 'pointer', textDecoration: 'none' }}>
                <Image src="/icons/ic-telegram-16.svg" alt="" width={16} height={16} />
                Connect and Try
              </Link>
              <Link href="/docs" className="button-secondary"
                style={{ display: 'inline-flex', alignItems: 'center', padding: '12px 24px', borderRadius: '40px', background: 'var(--linearPrimary)', color: 'hsl(var(--foreground))', fontWeight: 500, fontSize: '16px', lineHeight: '24px', border: '0.5px solid var(--borderPrimary)', cursor: 'pointer', textDecoration: 'none' }}>
                Documentation
              </Link>
            </div>
          </section>

          {/* 2. Documentation Section */}
          <section style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '24px' }} className="doc-section">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '40px' }} className="doc-content">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '660px' }}>
                <h2 className="title2">Powerful SaaS service</h2>
                <p className="body1" style={{ color: 'var(--foregroundSecondary)', maxWidth: '600px' }}>
                  Our API service helps developers build dApps, create custom blockchain solutions, and leverage robust tools for development on the TON blockchain.
                </p>
              </div>
              <Link href="/docs" className="button-secondary"
                style={{ display: 'inline-flex', alignItems: 'center', padding: '12px 24px', borderRadius: '40px', background: 'var(--linearPrimary)', color: 'hsl(var(--foreground))', fontWeight: 500, fontSize: '16px', border: '0.5px solid var(--borderPrimary)', alignSelf: 'flex-start', textDecoration: 'none' }}>
                Documentation
              </Link>
            </div>
            <div style={{ position: 'relative', overflow: 'hidden', minWidth: '412px', maxHeight: '227px', borderRadius: '16px', maskImage: 'radial-gradient(circle at top left, #fff 0%, #fff 40%, transparent 80%, transparent 100%)', backgroundColor: 'rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', background: 'var(--linearPrimary)', border: '0.5px solid var(--borderPrimary)', borderRadius: '16px' }}>
                {[
                  { type: 'GET', route: '/v2/blockchain/transactions/{transaction_id}' },
                  { type: 'POST', route: '/v2/blockchain/message' },
                  { type: 'GET', route: '/v2/blockchain/config' },
                  { type: 'POST', route: '/v2/accounts/_bulk' },
                  { type: 'GET', route: '/v2/wallet/emulate' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px', padding: '12px', borderBottom: i < 4 ? '0.5px solid var(--borderPrimary)' : 'none' }}>
                    <div className="api2 text-mono" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1px 10px', borderRadius: '6px', width: '40px', border: `0.5px solid ${item.type === 'GET' ? 'var(--backgroundBlue)' : 'var(--backgroundGreen)'}`, background: item.type === 'GET' ? 'var(--backgroundBlue)' : 'var(--backgroundGreen)', color: item.type === 'GET' ? 'var(--accentBlue)' : 'var(--accentGreen)' }}>
                      {item.type}
                    </div>
                    <div className="api1 text-mono">{item.route}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. Key Features Section */}
          <section id="keyFeatures" style={{ display: 'flex', flexDirection: 'column', scrollMarginTop: '40px', gap: '24px' }}>
            <h2 className="title2">Key Features</h2>
            <div className="features-grid" style={{ display: 'grid', gridTemplateAreas: `'streaming streaming streaming streaming rest rest rest rest webhooks webhooks webhooks webhooks' 'sdk sdk sdk sdk sdk sdk sdk sdk liteservers liteservers liteservers liteservers' 'aplications aplications aplications rps rps rps graphql graphql graphql opensource opensource opensource'`, gap: '16px', gridAutoColumns: '1fr' }}>

              {/* Streaming API */}
              <Link href="/docs/tonapi/streaming-api" className="card-base"
                style={{ gridArea: 'streaming', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px 24px 18px 24px', gap: '16px', borderRadius: '12px', background: 'var(--linearPrimary)', border: '0.5px solid var(--borderPrimary)', textDecoration: 'none' }}>
                <Image src="/icons/ic-streaming.svg" alt="" width={64} height={64} />
                <div>
                  <h3 className="label1" style={{ color: 'hsl(var(--foreground))' }}>Streaming API</h3>
                  <p className="body2" style={{ color: 'var(--foregroundSecondary)' }}>Deliver dynamic, real-time data with our Streaming API — essential for applications where up-to-the-second updates matter most.</p>
                  <div className="label2" style={{ color: 'var(--accentBlue)', marginTop: '8px' }}>Explore Options</div>
                </div>
              </Link>

              {/* REST API */}
              <div className="card-base" style={{ gridArea: 'rest', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px 24px 18px 24px', gap: '16px', borderRadius: '12px', background: 'var(--linearPrimary)', border: '0.5px solid var(--borderPrimary)' }}>
                <Link href="/docs/tonapi/rest-api" style={{ position: 'absolute', inset: 0, zIndex: 0, borderRadius: 'inherit', textIndent: '-9999px' }} aria-label="REST API">REST API</Link>
                <Image src="/icons/ic-rest.svg" alt="" width={64} height={64} />
                <div>
                  <h3 className="label1" style={{ color: 'hsl(var(--foreground))' }}>REST API</h3>
                  <p className="body2" style={{ color: 'var(--foregroundSecondary)' }}>The core API for interacting with the TON blockchain. Manage accounts, jettons, NFTs, emulate transactions, gasless, and more.</p>
                  <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', position: 'relative', zIndex: 1, marginTop: '8px' }} className="rest-links">
                    <Link href="/docs/tonapi/rest-api" className="label2" style={{ color: 'var(--accentBlue)', textDecoration: 'none' }}>Explore Options</Link>
                    <Link href="/api-v2" className="label2" style={{ color: 'var(--accentBlue)', textDecoration: 'none' }}>Swagger UI</Link>
                  </div>
                </div>
              </div>

              {/* Webhooks */}
              <div className="card-base" style={{ gridArea: 'webhooks', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px 24px 18px 24px', gap: '16px', borderRadius: '12px', background: 'var(--linearPrimary)', border: '0.5px solid var(--borderPrimary)' }}>
                <Link href="/docs/tonapi/webhooks-api" style={{ position: 'absolute', inset: 0, zIndex: 0, borderRadius: 'inherit', textIndent: '-9999px' }} aria-label="Webhooks">Webhooks</Link>
                <Image src="/icons/ic-hooks.svg" alt="" width={64} height={64} />
                <div>
                  <h3 className="label1" style={{ color: 'hsl(var(--foreground))' }}>Webhooks</h3>
                  <p className="body2" style={{ color: 'var(--foregroundSecondary)' }}>Subscribe to blockchain events and react instantly using our webhook methods. Stay in sync with what matters in real time.</p>
                  <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', position: 'relative', zIndex: 1, marginTop: '8px' }} className="rest-links">
                    <Link href="/docs/tonapi/webhooks-api" className="label2" style={{ color: 'var(--accentBlue)', textDecoration: 'none' }}>Explore Options</Link>
                    <Link href="/webhooks-api" className="label2" style={{ color: 'var(--accentBlue)', textDecoration: 'none' }}>Swagger UI</Link>
                  </div>
                </div>
              </div>

              {/* SDK */}
              <div className="card-base card-sdk" style={{ gridArea: 'sdk', position: 'relative', display: 'flex', flexDirection: 'row', padding: '20px 24px 24px 24px', gap: '24px', borderRadius: '12px', background: 'var(--linearPrimary)', border: '0.5px solid var(--borderPrimary)' }}>
                <Link href="/docs/tonapi/sdk" style={{ position: 'absolute', inset: 0, zIndex: 0, borderRadius: 'inherit', textIndent: '-9999px' }} aria-label="SDK">SDK</Link>
                <div>
                  <h2 className="title2" style={{ color: 'hsl(var(--foreground))' }}>SDK</h2>
                  <p className="body2" style={{ color: 'var(--foregroundSecondary)' }}>Our SDK is designed to empower developers, streamline workflows, and supercharge your application's capabilities.</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} className="sdk-icons">
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
                    <Link href="https://www.npmjs.com/package/@ton-api/client" target="_blank" className="sdk-icon" style={{ position: 'relative', display: 'flex', zIndex: 1 }}>
                      <Image src="/icons/ic-js-gray.svg" alt="JavaScript" width={72} height={72} />
                      <Image src="/icons/ic-js-color.svg" alt="JavaScript" width={72} height={72} style={{ position: 'absolute', opacity: 0 }} className="sdk-icon-color" />
                    </Link>
                    <Link href="https://github.com/tonkeeper/tonapi-go" target="_blank" className="sdk-icon" style={{ position: 'relative', display: 'flex', zIndex: 1 }}>
                      <Image src="/icons/ic-go-gray.svg" alt="Go" width={72} height={72} />
                      <Image src="/icons/ic-go-color.svg" alt="Go" width={72} height={72} style={{ position: 'absolute', opacity: 0 }} className="sdk-icon-color" />
                    </Link>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p className="body3" style={{ color: 'var(--foregroundSecondary)' }}>Maintained by the community</p>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <Link href="https://github.com/h6x0r/tonapi4j/" target="_blank" className="sdk-icon" style={{ position: 'relative', display: 'flex', zIndex: 1 }}>
                        <Image src="/icons/ic-java-gray.svg" alt="Java" width={48} height={48} />
                        <Image src="/icons/ic-java-color.svg" alt="Java" width={48} height={48} style={{ position: 'absolute', opacity: 0 }} className="sdk-icon-color" />
                      </Link>
                      <Link href="https://pypi.org/project/pytonapi/" target="_blank" className="sdk-icon" style={{ position: 'relative', display: 'flex', zIndex: 1 }}>
                        <Image src="/icons/ic-python-gray.svg" alt="Python" width={48} height={48} />
                        <Image src="/icons/ic-python-color.svg" alt="Python" width={48} height={48} style={{ position: 'absolute', opacity: 0 }} className="sdk-icon-color" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Liteservers */}
              <Link href="/docs/tonapi/liteservers" className="card-base"
                style={{ gridArea: 'liteservers', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px 24px 18px 24px', gap: '16px', borderRadius: '12px', background: 'var(--linearPrimary)', border: '0.5px solid var(--borderPrimary)', textDecoration: 'none' }}>
                <Image src="/icons/ic-liteservers.svg" alt="" width={64} height={64} />
                <div>
                  <h3 className="label1" style={{ color: 'hsl(var(--foreground))' }}>Liteservers</h3>
                  <p className="body2" style={{ color: 'var(--foregroundSecondary)' }}>Retrieve raw data from the blockchain in a trustless way with proof verification.</p>
                  <div className="label2" style={{ color: 'var(--accentBlue)', marginTop: '8px' }}>Explore Options</div>
                </div>
              </Link>

              {/* Applications */}
              <div className="card-small" style={{ gridArea: 'aplications', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '24px', borderRadius: '12px', background: 'var(--linearPrimary)', border: '0.5px solid var(--borderPrimary)' }}>
                <div>
                  <div className="label2" style={{ color: 'var(--foregroundSecondary)' }}>Applications</div>
                  <div className="num1">1 456</div>
                </div>
                <Image src="/icons/ic-applications.svg" alt="" width={48} height={48} />
              </div>

              {/* RPS */}
              <div className="card-small" style={{ gridArea: 'rps', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '24px', borderRadius: '12px', background: 'var(--linearPrimary)', border: '0.5px solid var(--borderPrimary)' }}>
                <div>
                  <div className="label2" style={{ color: 'var(--foregroundSecondary)' }}>RPS</div>
                  <div className="num1">120 000</div>
                </div>
                <Image src="/icons/ic-rps.svg" alt="" width={48} height={48} />
              </div>

              {/* GraphQL */}
              <Link href="/docs/tonapi/graphql" className="card-small"
                style={{ gridArea: 'graphql', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '24px', borderRadius: '12px', background: 'var(--linearPrimary)', border: '0.5px solid var(--borderPrimary)', textDecoration: 'none' }}>
                <div className="num1" style={{ color: 'hsl(var(--foreground))' }}>GraphQL</div>
                <Image src="/icons/ic-graphql.svg" alt="" width={48} height={48} />
              </Link>

              {/* Opensource */}
              <Link href="https://github.com/tonkeeper/opentonapi" target="_blank" className="card-small"
                style={{ gridArea: 'opensource', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '24px', borderRadius: '12px', background: 'var(--linearPrimary)', border: '0.5px solid var(--borderPrimary)', textDecoration: 'none' }}>
                <div>
                  <div className="label2" style={{ color: 'hsl(var(--foreground))' }}>Opensource</div>
                  <div className="body3" style={{ color: 'var(--foregroundSecondary)' }}>Limited version</div>
                </div>
                <Image src="/icons/ic-github-circle.svg" alt="" width={48} height={48} />
              </Link>

            </div>
          </section>

          {/* 4. Example Section */}
          <section style={{ display: 'flex', flexDirection: 'row', width: '100%', maxWidth: '100%', gap: '20px' }} className="example-section">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }} className="example-left">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h2 className="title2">Request Examples</h2>
                <p className="body1" style={{ color: 'var(--foregroundSecondary)' }}>
                  Examples are provided in various formats that will be useful for work. More information in the{' '}
                  <Link href="/docs/tonapi/rest-api" style={{ color: 'var(--accentBlue)' }}>documentation</Link>.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                {codeExamples.map((example, i) => (
                  <button
                    key={example.key}
                    onClick={() => handleCodeSelect(example, i)}
                    className="body2"
                    style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '10px 16px', borderRadius: '40px', cursor: 'pointer', background: selectedCode.key === example.key ? 'var(--linearSecondary)' : 'var(--linearPrimary)', color: selectedCode.key === example.key ? 'hsl(var(--foreground))' : 'var(--foregroundSecondary)', border: '0.5px solid var(--borderPrimary)' }}>
                    {example.title}
                  </button>
                ))}
              </div>
            </div>
            <CodeTypingAnimation key={selectedCode.key} code={selectedCode} />
          </section>

          {/* 5. Console Section */}
          <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h2 className="title2">TON Console</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} className="console-content">

              {/* Tonkeeper Messages - large card */}
              <Link href="/docs/tonconsole/tonkeeper-messages" className="console-card-row"
                style={{ display: 'flex', flexDirection: 'row', borderRadius: '12px', background: 'var(--linearPrimary)', border: '0.5px solid var(--borderPrimary)', position: 'relative', textDecoration: 'none', overflow: 'hidden' }}>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '20px 24px 18px 24px', gap: '24px', zIndex: 2 }} className="console-card-text">
                  <div>
                    <div className="label1" style={{ color: 'hsl(var(--foreground))' }}>Tonkeeper Messages</div>
                    <div className="body2" style={{ color: 'var(--foregroundSecondary)', maxWidth: '490px' }}>Push notifications for users who have connected to your dApp via Tonkeeper. Notifications can help triple your DAU and double your Daily Revenue.</div>
                  </div>
                  <div className="label2" style={{ color: 'var(--accentBlue)' }}>Explore Options</div>
                </div>
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center', flex: 1, minWidth: '50%' }} className="image-container">
                  <Image src="/images/console/messages.png" alt="Tonkeeper Messages" width={540} height={320} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="hide-mobile" />
                  <Image src="/images/console/messages2.png" alt="Tonkeeper Messages" width={358} height={332} style={{ width: '100%', height: 'auto' }} className="hide-desktop" />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'absolute', left: '20%', zIndex: 3 }} className="blur-container">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3px', width: '122px', height: '122px', border: '1px solid var(--borderPrimary)', background: 'var(--linearTertiary)', backdropFilter: 'blur(20px)', borderRadius: '12px' }}>
                      <div style={{ fontWeight: 400, fontSize: '42px', lineHeight: '42px', color: 'var(--constantWhite)' }}>х2</div>
                      <div style={{ fontWeight: 300, fontSize: '21px', lineHeight: '30px', color: 'var(--foregroundSecondary)' }}>revenue</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3px', width: '122px', height: '122px', border: '1px solid var(--borderPrimary)', background: 'var(--linearTertiary)', backdropFilter: 'blur(20px)', borderRadius: '12px' }}>
                      <div style={{ fontWeight: 400, fontSize: '42px', lineHeight: '42px', color: 'var(--constantWhite)' }}>х3</div>
                      <div style={{ fontWeight: 300, fontSize: '21px', lineHeight: '30px', color: 'var(--foregroundSecondary)' }}>DAU</div>
                    </div>
                  </div>
                </div>
              </Link>

              <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }} className="console-row">
                {/* Airdrop */}
                <div className="console-card" style={{ display: 'flex', flexDirection: 'column', borderRadius: '12px', background: 'var(--linearPrimary)', border: '0.5px solid var(--borderPrimary)', position: 'relative', flex: 1 }}>
                  <Link href="https://tonapi.io/airdrop" target="_blank" style={{ position: 'absolute', inset: 0, zIndex: 0, borderRadius: 'inherit', textIndent: '-9999px' }} aria-label="Airdrop">Airdrop</Link>
                  <Image src="/images/console/airdrop.png" alt="Airdrop" width={540} height={148} style={{ width: '100%', height: 'auto' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', padding: '20px 24px 18px 24px', gap: '24px' }} className="console-card-text">
                    <div>
                      <div className="label1" style={{ color: 'hsl(var(--foreground))' }}>TONAPI Airdrop</div>
                      <div className="body2" style={{ color: 'var(--foregroundSecondary)' }}>Simplify airdrop with our solution on the TON Blockchain. Distribute Jettons to millions of users quickly, without the need for coding. Without extra fees for you.</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px', position: 'relative', zIndex: 1 }}>
                      <Link href="/docs/tonconsole/jettons/airdrop" className="label2" style={{ color: 'var(--accentBlue)', textDecoration: 'none' }}>Documentation</Link>
                      <Link href="https://tonapi.io/airdrop" className="label2" style={{ color: 'var(--accentBlue)', textDecoration: 'none' }}>Learn more</Link>
                    </div>
                  </div>
                </div>

                {/* Jetton Minter */}
                <Link href="https://tonconsole.com/jetton/new-jetton?utm_source=tonapi.io" target="_blank" className="console-card"
                  style={{ display: 'flex', flexDirection: 'column', borderRadius: '12px', background: 'var(--linearPrimary)', border: '0.5px solid var(--borderPrimary)', textDecoration: 'none', flex: 1 }}>
                  <Image src="/images/console/minter.png" alt="Jetton Minter" width={540} height={148} style={{ width: '100%', height: 'auto' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', padding: '20px 24px 18px 24px', gap: '24px' }} className="console-card-text">
                    <div>
                      <div className="label1" style={{ color: 'hsl(var(--foreground))' }}>Jetton Minter</div>
                      <div className="body2" style={{ color: 'var(--foregroundSecondary)' }}>Create tokens quickly and easily. A simple tool designed for token creation, giving you full control over the issuance and management of your jettons.</div>
                    </div>
                    <div className="label2" style={{ color: 'var(--accentBlue)' }}>Explore Options</div>
                  </div>
                </Link>
              </div>

              <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }} className="console-row">
                {/* cNFT */}
                <Link href="/docs/tonconsole/nft/cnft" className="console-card"
                  style={{ display: 'flex', flexDirection: 'column', borderRadius: '12px', background: 'var(--linearPrimary)', border: '0.5px solid var(--borderPrimary)', textDecoration: 'none', flex: 1 }}>
                  <Image src="/images/console/cnft.png" alt="cNFT" width={540} height={148} style={{ width: '100%', height: 'auto' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', padding: '20px 24px 18px 24px', gap: '24px' }} className="console-card-text">
                    <div>
                      <div className="label1" style={{ color: 'hsl(var(--foreground))' }}>cNFT</div>
                      <div className="body2" style={{ color: 'var(--foregroundSecondary)' }}>Simplify the process to index mintless NFTs with our cNFT indexer. This powerful tool allows you to build large-scale NFT collections quickly and at a lower cost, giving you more flexibility for your NFT projects.</div>
                    </div>
                    <div className="label2" style={{ color: 'var(--accentBlue)' }}>Explore Options</div>
                  </div>
                </Link>

                {/* TON Analytics */}
                <Link href="/docs/tonconsole/analytics/examples" className="console-card"
                  style={{ display: 'flex', flexDirection: 'column', borderRadius: '12px', background: 'var(--linearPrimary)', border: '0.5px solid var(--borderPrimary)', textDecoration: 'none', flex: 1 }}>
                  <Image src="/images/console/query.png" alt="TON Analytics" width={540} height={148} style={{ width: '100%', height: 'auto' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', padding: '20px 24px 18px 24px', gap: '24px' }} className="console-card-text">
                    <div>
                      <div className="label1" style={{ color: 'hsl(var(--foreground))' }}>TON Analytics</div>
                      <div className="body2" style={{ color: 'var(--foregroundSecondary)' }}>Unlock the power of Blockchain analysis with TonAnalytics. Run SQL queries on the TonAPI indexer database to analyze blockchain data effortlessly.</div>
                    </div>
                    <div className="label2" style={{ color: 'var(--accentBlue)' }}>Explore Options</div>
                  </div>
                </Link>
              </div>

            </div>
          </section>

          {/* 6. Clients Section */}
          <section id="clients" style={{ display: 'flex', flexDirection: 'column', scrollMarginTop: '40px', gap: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '620px' }}>
              <h2 className="title2">Our Clients</h2>
              <p className="body1" style={{ color: 'var(--foregroundSecondary)' }}>
                We take pride in these partnerships and are committed to continually providing exceptional services and solutions tailored to their success.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: '28px', maxWidth: '1050px' }}>
              {clients.map(client => (
                <Link key={client.name} href={client.href} target="_blank" className="client-icon"
                  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'relative', cursor: 'pointer' }}>
                  <Image src={`/clients/grey/ic-${client.name}.svg`} alt={client.name} width={120} height={40} className="client-icon-gray" style={{ transition: 'opacity 0.2s ease-in-out' }} />
                  <Image src={`/clients/color/ic-${client.name}.svg`} alt={client.name} width={120} height={40} className="client-icon-color" style={{ position: 'absolute', opacity: 0, transition: 'opacity 0.2s ease-in-out' }} />
                </Link>
              ))}
            </div>
          </section>

          {/* 7. Pricing Section */}
          <section id="pricing" style={{ display: 'flex', flexDirection: 'column', scrollMarginTop: '40px', gap: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h2 className="title2">Pricing</h2>
              <p className="body1" style={{ color: 'var(--foregroundSecondary)', maxWidth: '700px' }}>
                Charging money for API usage helps cover operational costs, ensures service quality and reliability, supports ongoing development and improvement.
              </p>
            </div>

            {/* API Pricing */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div className="label1">API</div>
              <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '16px' }}>
                {[
                  { title: 'Start', price: 'Free', rps: '1' },
                  { title: 'Lite', price: '$ 9.9', rps: '10' },
                  { title: 'Standart', price: '$ 95', rps: '100' },
                  { title: 'Plus', price: '$ 290', rps: '300' },
                  { title: 'Heavy', price: '$ 890', rps: '1 000' },
                  { title: 'Custom', price: 'Unlimited', rps: '' }
                ].map((plan) => (
                  <Link
                    key={plan.title}
                    href={plan.title === 'Custom' ? 'https://t.me/tonrostislav' : 'https://tonconsole.com?utm_source=tonapi.io'}
                    target="_blank"
                    className="pricing-card"
                    style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', position: 'relative', background: 'var(--linearPrimary)', border: '0.5px solid var(--borderPrimary)', color: 'hsl(var(--foreground))', borderRadius: '12px', padding: '16px 24px', textDecoration: 'none' }}>
                    <div>
                      <div className="body2" style={{ color: 'var(--foregroundSecondary)' }}>{plan.title}</div>
                      <div className="num1">{plan.price}</div>
                    </div>
                    {plan.rps && (
                      <div className="pricing-rps" style={{ opacity: 1, transition: 'all 0.1s ease-in-out' }}>
                        <div className="body2" style={{ color: 'var(--foregroundSecondary)' }}>RPS</div>
                        <div className="num1">{plan.rps}</div>
                      </div>
                    )}
                    <div className="pricing-button body2" style={{ position: 'absolute', right: '20px', opacity: 0, transition: 'all 0.1s ease-in-out', padding: '10px 20px', borderRadius: '40px', background: 'var(--accentBlue)', color: 'var(--constantWhite)' }}>
                      {plan.title === 'Custom' ? 'Contact Support' : 'Buy'}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Liteservers Pricing */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div className="label1">Liteservers</div>
              <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '16px' }}>
                {[
                  { title: 'Start', price: 'Free', rps: '1' },
                  { title: 'Lite', price: '$ 50', rps: '10' },
                  { title: 'Standart', price: '$ 200', rps: '50' },
                  { title: 'Custom', price: 'Unlimited', rps: '' }
                ].map((plan) => (
                  <Link
                    key={plan.title}
                    href={plan.title === 'Custom' ? 'https://t.me/tonrostislav' : 'https://tonconsole.com?utm_source=tonapi.io'}
                    target="_blank"
                    className="pricing-card"
                    style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', position: 'relative', background: 'var(--linearPrimary)', border: '0.5px solid var(--borderPrimary)', color: 'hsl(var(--foreground))', borderRadius: '12px', padding: '16px 24px', textDecoration: 'none' }}>
                    <div>
                      <div className="body2" style={{ color: 'var(--foregroundSecondary)' }}>{plan.title}</div>
                      <div className="num1">{plan.price}</div>
                    </div>
                    {plan.rps && (
                      <div className="pricing-rps" style={{ opacity: 1, transition: 'all 0.1s ease-in-out' }}>
                        <div className="body2" style={{ color: 'var(--foregroundSecondary)' }}>RPS</div>
                        <div className="num1">{plan.rps}</div>
                      </div>
                    )}
                    <div className="pricing-button body2" style={{ position: 'absolute', right: '20px', opacity: 0, transition: 'all 0.1s ease-in-out', padding: '10px 20px', borderRadius: '40px', background: 'var(--accentBlue)', color: 'var(--constantWhite)' }}>
                      {plan.title === 'Custom' ? 'Contact Support' : 'Buy'}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* 8. Services Section */}
          <section style={{ display: 'flex', flexDirection: 'row', border: '0.5px solid var(--borderPrimary)', borderRadius: '12px', overflow: 'hidden' }} className="services-container">
            {[
              { title: 'Tonviewer', text: 'Explore transactions, contracts, NFTs, Jettons, etc.', href: 'https://tonviewer.com?utm_source=tonapi.io', icon: 'ic-tonviewer.svg' },
              { title: 'Console', text: 'Console offers reliable, scalable TON blockchain services.', href: 'https://tonconsole.com?utm_source=tonapi.io', icon: 'ic-console.svg' },
              { title: 'Documentation', text: 'The technical documentation and guides', href: '/docs', icon: 'ic-docs.svg' }
            ].map((service, i) => (
              <Link
                key={service.title}
                href={service.href}
                target={service.href.startsWith('/') ? undefined : '_blank'}
                className="service-item"
                style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '15px 24px 15px 28px', background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)', flex: 1, borderRight: i < 2 ? '0.5px solid var(--borderPrimary)' : 'none', textDecoration: 'none' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
                  <Image src={`/icons/${service.icon}`} alt="" width={48} height={48} style={{ flexShrink: 0 }} />
                  <div>
                    <div className="label2" style={{ color: 'hsl(var(--foreground))' }}>{service.title}</div>
                    <div className="body3" style={{ color: 'var(--foregroundSecondary)' }}>{service.text}</div>
                  </div>
                </div>
                <Image src="/icons/ic-chevron-right-16.svg" alt="" width={16} height={16} style={{ flexShrink: 0 }} />
              </Link>
            ))}
          </section>

        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .doc-section { flex-direction: column-reverse !important; }
          .doc-content { gap: 24px !important; }
          .title-section { align-items: flex-start !important; text-align: left !important; }
          .main-sections { gap: 80px !important; }
          .example-section { flex-direction: column !important; }
          .example-left { gap: 24px !important; }
          .code-container { min-width: 100% !important; max-width: 100% !important; }
          .console-row { flex-direction: column !important; gap: 8px !important; }
          .console-card-row { flex-direction: column !important; }
          .blur-container { left: 5% !important; }
          .console-card-text { padding: 20px 20px 16px 20px !important; gap: 8px !important; }
          .pricing-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 8px !important; }
          .services-container { flex-direction: column !important; }
          .service-item { border-right: none !important; border-bottom: 0.5px solid var(--borderPrimary) !important; padding: 16px 20px !important; gap: 12px !important; background: linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%) !important; }
          .service-item:last-child { border-bottom: none !important; }
          .hide-mobile { display: none !important; }
          .hide-desktop { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hide-mobile { display: flex !important; }
          .hide-desktop { display: none !important; }
        }
        @media (max-width: 1100px) {
          .features-grid { grid-template-areas: 'streaming streaming streaming streaming rest rest rest rest webhooks webhooks webhooks webhooks' 'sdk sdk sdk sdk sdk sdk sdk sdk liteservers liteservers liteservers liteservers' 'aplications aplications aplications aplications aplications aplications rps rps rps rps rps rps' 'graphql graphql graphql graphql graphql graphql opensource opensource opensource opensource opensource opensource' !important; }
        }
        @media (max-width: 1000px) {
          .pricing-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 1050px) {
          .service-item { padding: 15px 12px !important; }
        }
        @media (max-width: 950px) {
          .services-container { flex-direction: column !important; padding: 0 !important; }
          .service-item { border-right: none !important; border-bottom: 0.5px solid var(--borderPrimary) !important; padding: 16px 20px !important; gap: 12px !important; background: linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%) !important; }
          .service-item:last-child { border-bottom: none !important; }
          .rest-links { flex-direction: column !important; gap: 4px !important; }
        }
        @media (max-width: 850px) {
          .features-grid { grid-template-areas: 'streaming rest' 'webhooks liteservers' 'sdk sdk' 'aplications rps' 'graphql opensource' !important; }
          .rest-links { flex-direction: row !important; gap: 12px !important; }
        }
        @media (max-width: 660px) {
          .features-grid { display: flex !important; flex-direction: column !important; }
        }
        @media (max-width: 600px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 550px) {
          .console-card-row { flex-direction: column !important; }
          .blur-container { left: 5% !important; }
        }
        .button-primary:hover { opacity: 0.9; }
        .button-secondary:hover { background: var(--linearSecondary); }
        .card-base:hover { background: var(--linearSecondary); }
        .card-small:hover { background: var(--linearSecondary); }
        .console-card:hover { background: var(--linearSecondary); }
        .console-card-row:hover { background: var(--linearSecondary); }
        .pricing-card:hover .pricing-rps { opacity: 0; }
        .pricing-card:hover .pricing-button { opacity: 1; }
        .client-icon:hover .client-icon-gray { opacity: 0; }
        .client-icon:hover .client-icon-color { opacity: 1; }
        .sdk-icon:hover .sdk-icon-color { opacity: 1 !important; }
        .service-item:hover { background: var(--backgroundHoverOpacity) !important; }
      `}</style>
    </main>
  );
}
