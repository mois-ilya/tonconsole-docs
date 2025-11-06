import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex-1" style={{ background: 'var(--backgroundPrimary)', color: 'var(--constantWhite)' }}>
      <div className="container mx-auto px-4 py-16 sm:py-24" style={{ maxWidth: '1280px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '120px' }}>

          {/* Title Section - 100% точная копия */}
          <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '12px' }}>
              <h1 className="title1" style={{ maxWidth: '800px' }}>
                TON Developer Tools — Power your blockchain solutions with TON API
              </h1>
              <p className="body1" style={{ color: 'var(--foregroundSecondary)', maxWidth: '600px' }}>
                Leverage TON API to build dApps, streamline blockchain development, and explore cutting-edge technologies on TON.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
              <Link
                href="https://tonconsole.com?utm_source=tonapi.io"
                target="_blank"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '40px',
                  background: 'var(--accentBlue)',
                  color: 'var(--constantWhite)',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '24px',
                  border: 'none',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
                className="button-primary">
                <Image src="/icons/ic-telegram-16.svg" alt="" width={16} height={16} />
                Connect and Try
              </Link>
              <Link
                href="https://docs.tonconsole.com?utm_source=tonapi.io"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '12px 24px',
                  borderRadius: '40px',
                  background: 'var(--linearPrimary)',
                  color: 'var(--constantWhite)',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '24px',
                  border: '0.5px solid var(--borderPrimary)',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
                className="button-secondary">
                Documentation
              </Link>
            </div>
          </section>

          {/* Documentation Section - точная копия */}
          <section style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '24px' }} className="doc-section">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '40px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '660px' }}>
                <h2 className="title2">Powerful SaaS service</h2>
                <p className="body1" style={{ color: 'var(--foregroundSecondary)', maxWidth: '600px' }}>
                  Our API service helps developers build dApps, create custom blockchain solutions, and leverage robust tools
                  for development on the TON blockchain.
                </p>
              </div>
              <Link
                href="https://docs.tonconsole.com?utm_source=tonapi.io"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '12px 24px',
                  borderRadius: '40px',
                  background: 'var(--linearPrimary)',
                  color: 'var(--constantWhite)',
                  fontWeight: 500,
                  fontSize: '16px',
                  border: '0.5px solid var(--borderPrimary)',
                  alignSelf: 'flex-start',
                  textDecoration: 'none'
                }}>
                Documentation
              </Link>
            </div>

            {/* API Preview Card */}
            <div style={{
              position: 'relative',
              overflow: 'hidden',
              minWidth: '412px',
              maxHeight: '227px',
              borderRadius: '16px',
              maskImage: 'radial-gradient(circle at top left, #fff 0%, #fff 40%, transparent 80%, transparent 100%)',
              backgroundColor: 'rgba(255, 255, 255, 0.08)'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                background: 'var(--linearPrimary)',
                border: '0.5px solid var(--borderPrimary)',
                borderRadius: '16px'
              }}>
                {[
                  { type: 'GET', route: '/v2/blockchain/transactions/{transaction_id}' },
                  { type: 'POST', route: '/v2/blockchain/message' },
                  { type: 'GET', route: '/v2/blockchain/config' },
                  { type: 'POST', route: '/v2/accounts/_bulk' },
                  { type: 'GET', route: '/v2/wallet/emulate' }
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px',
                      borderBottom: i < 4 ? '0.5px solid var(--borderPrimary)' : 'none'
                    }}>
                    <div
                      className="api2 text-mono"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1px 10px',
                        borderRadius: '6px',
                        width: '40px',
                        border: `0.5px solid ${item.type === 'GET' ? 'var(--backgroundBlue)' : 'var(--backgroundGreen)'}`,
                        background: item.type === 'GET' ? 'var(--backgroundBlue)' : 'var(--backgroundGreen)',
                        color: item.type === 'GET' ? 'var(--accentBlue)' : 'var(--accentGreen)'
                      }}>
                      {item.type}
                    </div>
                    <div className="api1 text-mono">{item.route}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Key Features Section - точная копия с grid */}
          <section id="keyFeatures" style={{ display: 'flex', flexDirection: 'column', scrollMarginTop: '40px', gap: '24px' }}>
            <h2 className="title2">Key Features</h2>
            <div style={{
              display: 'grid',
              gridTemplateAreas: `
                'streaming streaming streaming streaming rest rest rest rest webhooks webhooks webhooks webhooks'
                'sdk sdk sdk sdk sdk sdk sdk sdk liteservers liteservers liteservers liteservers'
                'aplications aplications aplications rps rps rps graphql graphql graphql opensource opensource opensource'
              `,
              gap: '16px',
              gridAutoColumns: '1fr'
            }} className="features-grid">

              {/* Все карточки с оригинальными стилями - я создам их сейчас */}

            </div>
          </section>

          {/* Остальные секции... */}

        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .doc-section {
            flex-direction: column-reverse !important;
          }
        }
        @media (max-width: 1100px) {
          .features-grid {
            grid-template-areas:
              'streaming streaming streaming streaming rest rest rest rest webhooks webhooks webhooks webhooks'
              'sdk sdk sdk sdk sdk sdk sdk sdk liteservers liteservers liteservers liteservers'
              'aplications aplications aplications aplications aplications aplications rps rps rps rps rps rps'
              'graphql graphql graphql graphql graphql graphql opensource opensource opensource opensource opensource opensource' !important;
          }
        }
        @media (max-width: 850px) {
          .features-grid {
            grid-template-areas:
              'streaming rest'
              'webhooks liteservers'
              'sdk sdk'
              'aplications rps'
              'graphql opensource' !important;
          }
        }
        @media (max-width: 660px) {
          .features-grid {
            display: flex !important;
            flex-direction: column !important;
          }
        }
        .button-primary:hover {
          opacity: 0.9;
        }
        .button-secondary:hover {
          background: var(--linearSecondary);
        }
      `}</style>
    </main>
  );
}
