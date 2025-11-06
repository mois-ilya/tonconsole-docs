import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-[120px] md:gap-[80px]">

          {/* Hero / Title Section */}
          <section className="flex flex-col items-center gap-8 text-center md:items-start md:text-left">
            <div className="flex flex-col items-center gap-3 md:items-start">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold max-w-[800px] leading-tight">
                TON Developer Tools — Power your blockchain solutions with TON API
              </h1>
              <p className="text-lg md:text-xl text-fd-muted-foreground max-w-[600px]">
                Leverage TON API to build dApps, streamline blockchain development, and explore cutting-edge technologies on TON.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Link
                href="https://tonconsole.com?utm_source=docs.tonconsole.com"
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-fd-primary text-fd-primary-foreground font-medium hover:opacity-90 transition-opacity">
                Connect and Try
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-fd-border bg-fd-card hover:bg-fd-accent transition-colors">
                Documentation
              </Link>
            </div>
          </section>

          {/* Documentation Section */}
          <section className="flex flex-col-reverse md:flex-row justify-between gap-6">
            <div className="flex flex-col justify-between gap-10 md:gap-6">
              <div className="flex flex-col gap-3 max-w-[660px]">
                <h2 className="text-3xl md:text-4xl font-semibold">Powerful SaaS service</h2>
                <p className="text-base md:text-lg text-fd-muted-foreground max-w-[600px]">
                  Our API service helps developers build dApps, create custom blockchain solutions, and leverage robust tools
                  for development on the TON blockchain.
                </p>
              </div>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-fd-border bg-fd-card hover:bg-fd-accent transition-colors self-start">
                Documentation
              </Link>
            </div>
            <div className="flex flex-col min-w-[300px] md:min-w-[412px] max-h-[227px] rounded-2xl overflow-hidden border border-fd-border bg-gradient-to-br from-fd-secondary/50 to-transparent"
              style={{ maskImage: 'radial-gradient(circle at top left, #fff 0%, #fff 40%, transparent 80%, transparent 100%)' }}>
              <div className="flex flex-col border border-fd-border/50 rounded-2xl bg-gradient-to-b from-fd-secondary/30 to-fd-secondary/10 divide-y divide-fd-border/50">
                {[
                  { type: 'GET', route: '/v2/blockchain/transactions/{transaction_id}' },
                  { type: 'POST', route: '/v2/blockchain/message' },
                  { type: 'GET', route: '/v2/blockchain/config' },
                  { type: 'POST', route: '/v2/accounts/_bulk' },
                  { type: 'GET', route: '/v2/wallet/emulate' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-row items-center gap-3 px-3 py-3 md:px-4 md:py-3">
                    <div className={`flex items-center justify-center px-2.5 py-0.5 rounded-md text-xs font-mono min-w-[40px] ${
                      item.type === 'GET'
                        ? 'bg-fd-primary/20 text-fd-primary border border-fd-primary/30'
                        : 'bg-emerald-500/20 text-emerald-500 border border-emerald-500/30'
                    }`}>
                      {item.type}
                    </div>
                    <div className="text-xs md:text-sm font-mono truncate">{item.route}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          <section id="keyFeatures" className="flex flex-col gap-6 scroll-mt-10">
            <h2 className="text-3xl md:text-4xl font-semibold">Key Features</h2>
            <div
              style={{
                gridTemplateAreas: `
                  'streaming streaming streaming streaming rest rest rest rest webhooks webhooks webhooks webhooks'
                  'sdk sdk sdk sdk sdk sdk sdk sdk liteservers liteservers liteservers liteservers'
                  'applications applications applications rps rps rps graphql graphql graphql opensource opensource opensource'
                `,
                gridTemplateColumns: 'repeat(12, 1fr)'
              }}
              className="grid gap-4 md:gap-4 max-[850px]:grid-cols-2 max-[850px]:grid-rows-[auto] max-[660px]:flex max-[660px]:flex-col">

              {/* Streaming API */}
              <Link href="/docs/tonapi/streaming-api"
                className="flex flex-col justify-between p-5 md:p-6 gap-4 rounded-xl border border-fd-border bg-gradient-to-br from-fd-secondary/50 to-transparent hover:from-fd-secondary/70 transition-all"
                style={{ gridArea: 'streaming' }}>
                <div className="w-12 h-12 md:w-14 md:h-14">
                  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full text-fd-primary">
                    <path d="M24 8v32M8 24h32M14 14l20 20M34 14L14 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg md:text-xl font-semibold">Streaming API</h3>
                  <p className="text-sm text-fd-muted-foreground">Real-time blockchain data via WebSocket</p>
                </div>
                <div className="flex gap-3 text-sm text-fd-primary flex-wrap">
                  <span>Docs →</span>
                </div>
              </Link>

              {/* REST API */}
              <Link href="/docs/tonapi/rest-api"
                className="flex flex-col justify-between p-5 md:p-6 gap-4 rounded-xl border border-fd-border bg-gradient-to-br from-fd-secondary/50 to-transparent hover:from-fd-secondary/70 transition-all"
                style={{ gridArea: 'rest' }}>
                <div className="w-12 h-12 md:w-14 md:h-14">
                  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full text-fd-primary">
                    <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 20h16M16 24h12M16 28h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg md:text-xl font-semibold">REST API</h3>
                  <p className="text-sm text-fd-muted-foreground">Fast and reliable HTTP API</p>
                </div>
                <div className="flex gap-3 text-sm text-fd-primary flex-wrap">
                  <span>Docs →</span>
                  <span>Swagger →</span>
                </div>
              </Link>

              {/* Webhooks */}
              <Link href="/docs/tonapi/webhooks-api"
                className="flex flex-col justify-between p-5 md:p-6 gap-4 rounded-xl border border-fd-border bg-gradient-to-br from-fd-secondary/50 to-transparent hover:from-fd-secondary/70 transition-all"
                style={{ gridArea: 'webhooks' }}>
                <div className="w-12 h-12 md:w-14 md:h-14">
                  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full text-fd-primary">
                    <path d="M24 8v12m0 8v12M8 24h12m8 0h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="24" cy="24" r="4" fill="currentColor"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg md:text-xl font-semibold">Webhooks</h3>
                  <p className="text-sm text-fd-muted-foreground">Get instant event notifications</p>
                </div>
                <div className="flex gap-3 text-sm text-fd-primary">
                  <span>Docs →</span>
                </div>
              </Link>

              {/* SDKs */}
              <div className="flex flex-row md:flex-col p-5 md:p-6 gap-6 rounded-xl border border-fd-border bg-gradient-to-br from-fd-secondary/50 to-transparent"
                style={{ gridArea: 'sdk' }}>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-row gap-4">
                    <div className="w-14 h-14 flex items-center justify-center">
                      <svg viewBox="0 0 48 48" className="w-full h-full text-yellow-400">
                        <rect x="6" y="6" width="36" height="36" rx="4" fill="currentColor"/>
                        <text x="24" y="32" textAnchor="middle" className="text-2xl font-bold fill-black">JS</text>
                      </svg>
                    </div>
                    <div className="w-14 h-14 flex items-center justify-center">
                      <svg viewBox="0 0 48 48" className="w-full h-full text-blue-400">
                        <path d="M8 8h20l12 12v20H8z" fill="currentColor"/>
                        <text x="24" y="32" textAnchor="middle" className="text-xl font-bold fill-white">Go</text>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <div className="w-14 h-14 flex items-center justify-center">
                      <svg viewBox="0 0 48 48" className="w-full h-full text-blue-500">
                        <circle cx="24" cy="18" r="8" fill="currentColor"/>
                        <circle cx="12" cy="32" r="6" fill="currentColor"/>
                        <circle cx="36" cy="32" r="6" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="w-14 h-14 flex items-center justify-center">
                      <svg viewBox="0 0 48 48" className="w-full h-full text-orange-500">
                        <path d="M10 10l8 28 12-28z" fill="currentColor"/>
                        <path d="M30 10l8 28" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg md:text-xl font-semibold">SDKs</h3>
                  <p className="text-sm text-fd-muted-foreground">Official libraries for TypeScript, Golang, Python, Java</p>
                </div>
              </div>

              {/* Liteservers */}
              <Link href="/docs/tonconsole/liteservers"
                className="flex flex-col justify-between p-5 md:p-6 gap-4 rounded-xl border border-fd-border bg-gradient-to-br from-fd-secondary/50 to-transparent hover:from-fd-secondary/70 transition-all"
                style={{ gridArea: 'liteservers' }}>
                <div className="w-12 h-12 md:w-14 md:h-14">
                  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full text-fd-primary">
                    <rect x="8" y="12" width="32" height="6" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <rect x="8" y="22" width="32" height="6" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <rect x="8" y="32" width="32" height="6" rx="2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg md:text-xl font-semibold">Liteservers</h3>
                  <p className="text-sm text-fd-muted-foreground">Direct access to TON infrastructure</p>
                </div>
              </Link>

              {/* Applications */}
              <div className="flex flex-row items-center justify-between p-6 rounded-xl border border-fd-border bg-gradient-to-br from-fd-secondary/50 to-transparent"
                style={{ gridArea: 'applications' }}>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold">100+</h3>
                  <p className="text-sm text-fd-muted-foreground">Applications</p>
                </div>
                <div className="w-10 h-10 text-fd-primary">
                  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                    <rect x="8" y="8" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <rect x="26" y="8" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <rect x="8" y="26" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <rect x="26" y="26" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>

              {/* RPS */}
              <div className="flex flex-row items-center justify-between p-6 rounded-xl border border-fd-border bg-gradient-to-br from-fd-secondary/50 to-transparent"
                style={{ gridArea: 'rps' }}>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold">10K+</h3>
                  <p className="text-sm text-fd-muted-foreground">RPS</p>
                </div>
                <div className="w-10 h-10 text-fd-primary">
                  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                    <path d="M8 32L24 12L40 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 28h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>

              {/* GraphQL */}
              <Link href="/docs/tonapi/graphql"
                className="flex flex-row items-center justify-between p-6 rounded-xl border border-fd-border bg-gradient-to-br from-fd-secondary/50 to-transparent hover:from-fd-secondary/70 transition-all"
                style={{ gridArea: 'graphql' }}>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold">GraphQL</h3>
                  <p className="text-sm text-fd-muted-foreground">Flexible queries</p>
                </div>
                <div className="w-10 h-10 text-fd-primary">
                  <svg viewBox="0 0 48 48" className="w-full h-full">
                    <path d="M24 6L38 15v18L24 42L10 33V15z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </Link>

              {/* Open Source */}
              <a href="https://github.com/tonkeeper"
                target="_blank"
                className="flex flex-row items-center justify-between p-6 rounded-xl border border-fd-border bg-gradient-to-br from-fd-secondary/50 to-transparent hover:from-fd-secondary/70 transition-all"
                style={{ gridArea: 'opensource' }}>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold">Open Source</h3>
                  <p className="text-sm text-fd-muted-foreground">On GitHub</p>
                </div>
                <div className="w-10 h-10">
                  <svg viewBox="0 0 48 48" className="w-full h-full">
                    <circle cx="24" cy="24" r="20" fill="currentColor" opacity="0.2"/>
                    <path d="M24 8C15.163 8 8 15.163 8 24c0 7.069 4.584 13.066 10.942 15.183.8.148 1.094-.347 1.094-.771 0-.38-.014-1.387-.022-2.722-4.451.967-5.39-2.146-5.39-2.146-.728-1.849-1.778-2.341-1.778-2.341-1.454-.994.11-.973.11-.973 1.607.113 2.452 1.649 2.452 1.649 1.427 2.446 3.744 1.739 4.656 1.329.146-1.034.559-1.739 1.016-2.139-3.553-.404-7.288-1.776-7.288-7.907 0-1.747.624-3.174 1.649-4.293-.165-.405-.715-2.032.157-4.234 0 0 1.344-.43 4.401 1.64a15.353 15.353 0 0 1 4.005-.539c1.359.006 2.729.184 4.005.539 3.055-2.07 4.396-1.64 4.396-1.64.875 2.202.325 3.829.161 4.234 1.028 1.119 1.647 2.546 1.647 4.293 0 6.147-3.743 7.498-7.306 7.893.574.494 1.086 1.47 1.086 2.963 0 2.139-.019 3.865-.019 4.389 0 .428.289.927 1.1.77C35.422 37.062 40 31.068 40 24c0-8.837-7.163-16-16-16z" fill="currentColor"/>
                  </svg>
                </div>
              </a>
            </div>
          </section>

          {/* Clients Section */}
          <section id="clients" className="flex flex-col gap-10 scroll-mt-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl md:text-4xl font-semibold text-center">Trusted by Leading TON Projects</h2>
              <p className="text-center text-fd-muted-foreground max-w-2xl mx-auto">
                Join hundreds of projects building on TON with our API
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              {['Bitget', 'OKX', 'DeDust', 'STON.fi', 'Getgems', 'Trust Wallet', 'Mercuryo', 'Moonpay'].map((name) => (
                <span key={name} className="text-lg md:text-xl font-semibold">{name}</span>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="flex flex-col gap-6 scroll-mt-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl md:text-4xl font-semibold">Pricing</h2>
              <p className="text-base md:text-lg text-fd-muted-foreground max-w-[700px]">
                Charging money for API usage helps cover operational costs, ensures service quality and reliability, supports
                ongoing development and improvement.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider">API</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: 'Start', price: 'Free', rps: '1' },
                  { title: 'Lite', price: '$ 9.9', rps: '10' },
                  { title: 'Standard', price: '$ 95', rps: '100' },
                  { title: 'Plus', price: '$ 290', rps: '300' },
                  { title: 'Heavy', price: '$ 890', rps: '1 000' },
                  { title: 'Custom', price: 'Unlimited', rps: null },
                ].map((plan) => (
                  <a
                    key={plan.title}
                    href={plan.title === 'Custom' ? 'https://t.me/tonrostislav' : 'https://tonconsole.com?utm_source=docs.tonconsole.com'}
                    target="_blank"
                    className="relative flex flex-row items-center justify-between p-4 md:p-6 rounded-xl border border-fd-border bg-gradient-to-br from-fd-secondary/50 to-transparent hover:from-fd-primary/10 transition-all group">
                    <div className="flex flex-col">
                      <div className="text-sm text-fd-muted-foreground">{plan.title}</div>
                      <div className="text-2xl md:text-3xl font-semibold">{plan.price}</div>
                    </div>
                    {plan.rps && (
                      <div className="flex flex-col items-end opacity-100 group-hover:opacity-0 transition-opacity">
                        <div className="text-sm text-fd-muted-foreground">RPS</div>
                        <div className="text-2xl md:text-3xl font-semibold">{plan.rps}</div>
                      </div>
                    )}
                    <button className="absolute right-5 opacity-0 group-hover:opacity-100 transition-opacity px-6 py-2 rounded-full bg-fd-primary text-fd-primary-foreground font-medium">
                      {plan.title === 'Custom' ? 'Contact Support' : 'Buy'}
                    </button>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="flex flex-col md:flex-row border border-fd-border rounded-xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-fd-border">
            {[
              { title: 'Tonviewer', text: 'Explore transactions, contracts, NFTs, Jettons, etc.', href: 'https://tonviewer.com?utm_source=docs.tonconsole.com' },
              { title: 'Console', text: 'Console offers reliable, scalable TON blockchain services.', href: 'https://tonconsole.com?utm_source=docs.tonconsole.com' },
              { title: 'Documentation', text: 'The technical documentation and guides', href: '/docs' },
            ].map((service) => (
              <a
                key={service.title}
                href={service.href}
                target={service.href.startsWith('http') ? '_blank' : undefined}
                className="flex flex-row items-center justify-between p-4 md:p-6 bg-gradient-to-r from-fd-secondary/30 to-transparent hover:from-fd-secondary/50 transition-all flex-1 gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm text-fd-muted-foreground">{service.text}</p>
                </div>
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-12 bg-fd-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-6 justify-center text-sm text-fd-muted-foreground">
            <a href="https://ton.org/terms" target="_blank" rel="noopener noreferrer" className="hover:text-fd-primary transition-colors">Terms</a>
            <a href="https://t.me/tonRocketChat" target="_blank" rel="noopener noreferrer" className="hover:text-fd-primary transition-colors">Support</a>
            <a href="mailto:support@tonkeeper.com" className="hover:text-fd-primary transition-colors">Contact us</a>
            <a href="https://tonconsole.com/" target="_blank" rel="noopener noreferrer" className="hover:text-fd-primary transition-colors">tonconsole.com</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
