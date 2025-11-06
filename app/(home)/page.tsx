import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Logo and Title */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/tonapi-logo.svg"
                alt="TonAPI Logo"
                width={56}
                height={56}
                className="opacity-90"
              />
              <h1 className="text-5xl sm:text-6xl font-bold">
                <span className="font-extrabold">TON</span>
                <span className="font-bold ml-1">API</span>
              </h1>
            </div>
            <h2 className="text-2xl sm:text-3xl mb-4 font-semibold max-w-3xl">
              TON Developer Tools — Power your blockchain solutions with TON API
            </h2>
            <p className="text-lg sm:text-xl text-fd-muted-foreground max-w-2xl">
              Leverage TON API to build dApps, streamline blockchain development, and explore cutting-edge technologies on TON.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-20 max-w-3xl mx-auto">
            <Link
              href="/docs"
              className="group relative block p-8 border rounded-xl hover:shadow-lg hover:border-fd-primary transition-all bg-fd-card">
              <div className="absolute inset-0 bg-gradient-to-br from-fd-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-fd-primary transition-colors">
                  Documentation
                </h3>
                <p className="text-fd-muted-foreground text-base">
                  Explore our comprehensive guides and API references
                </p>
              </div>
            </Link>

            <Link
              href="/blog"
              className="group relative block p-8 border rounded-xl hover:shadow-lg hover:border-fd-primary transition-all bg-fd-card">
              <div className="absolute inset-0 bg-gradient-to-br from-fd-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-fd-primary transition-colors">
                  Academy
                </h3>
                <p className="text-fd-muted-foreground text-base">
                  Learn from tutorials and best practices
                </p>
              </div>
            </Link>
          </div>

          {/* Key Features Section */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 border rounded-xl bg-fd-card hover:border-fd-primary transition-colors">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-2">REST API</h3>
                <p className="text-fd-muted-foreground">
                  Fast and reliable REST API for TON blockchain data access
                </p>
              </div>

              <div className="p-6 border rounded-xl bg-fd-card hover:border-fd-primary transition-colors">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">Streaming API</h3>
                <p className="text-fd-muted-foreground">
                  Real-time blockchain events via WebSocket connections
                </p>
              </div>

              <div className="p-6 border rounded-xl bg-fd-card hover:border-fd-primary transition-colors">
                <div className="text-4xl mb-4">🔔</div>
                <h3 className="text-xl font-bold mb-2">Webhooks</h3>
                <p className="text-fd-muted-foreground">
                  Get instant notifications for blockchain events
                </p>
              </div>

              <div className="p-6 border rounded-xl bg-fd-card hover:border-fd-primary transition-colors">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold mb-2">SDKs</h3>
                <p className="text-fd-muted-foreground">
                  Official SDKs for JavaScript, Python, Go, and Java
                </p>
              </div>

              <div className="p-6 border rounded-xl bg-fd-card hover:border-fd-primary transition-colors">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-xl font-bold mb-2">GraphQL</h3>
                <p className="text-fd-muted-foreground">
                  Flexible data querying with GraphQL endpoint
                </p>
              </div>

              <div className="p-6 border rounded-xl bg-fd-card hover:border-fd-primary transition-colors">
                <div className="text-4xl mb-4">📡</div>
                <h3 className="text-xl font-bold mb-2">Liteservers</h3>
                <p className="text-fd-muted-foreground">
                  Direct access to TON liteserver infrastructure
                </p>
              </div>
            </div>
          </div>

          {/* Trusted By Section */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Trusted by Leading TON Projects</h2>
            <p className="text-center text-fd-muted-foreground mb-12 max-w-2xl mx-auto">
              Join hundreds of projects building on TON with our API
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="text-lg font-semibold">Bitget</span>
              <span className="text-lg font-semibold">OKX</span>
              <span className="text-lg font-semibold">DeDust</span>
              <span className="text-lg font-semibold">STON.fi</span>
              <span className="text-lg font-semibold">Getgems</span>
              <span className="text-lg font-semibold">Trust Wallet</span>
              <span className="text-lg font-semibold">Mercuryo</span>
              <span className="text-lg font-semibold">Moonpay</span>
            </div>
          </div>

          {/* Products & Services Section */}
          <div className="space-y-8 max-w-3xl mx-auto text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-center">Products & Services</h2>
            <div className="grid gap-4 sm:grid-cols-1">
              <a
                href="https://tonconsole.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 border rounded-lg hover:border-fd-primary hover:shadow-md transition-all bg-fd-card">
                <h3 className="text-xl font-bold mb-2">TON Console</h3>
                <p className="text-fd-muted-foreground">
                  B2B platform for developers and product managers. Create new features, manage your business on TON, use TON API.
                </p>
              </a>

              <a
                href="https://tonviewer.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 border rounded-lg hover:border-fd-primary hover:shadow-md transition-all bg-fd-card">
                <h3 className="text-xl font-bold mb-2">TON Viewer</h3>
                <p className="text-fd-muted-foreground">
                  Observe transactions on TON blockchain with comprehensive explorer.
                </p>
              </a>

              <a
                href="https://tonkeeper.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 border rounded-lg hover:border-fd-primary hover:shadow-md transition-all bg-fd-card">
                <h3 className="text-xl font-bold mb-2">Tonkeeper</h3>
                <p className="text-fd-muted-foreground">
                  B2C app with 12M+ MAU and dapp browser. Get the traffic for your products.
                </p>
              </a>

              <a
                href="https://github.com/tonkeeper/ton-assets/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 border rounded-lg hover:border-fd-primary hover:shadow-md transition-all bg-fd-card">
                <h3 className="text-xl font-bold mb-2">Jettons Whitelist</h3>
                <p className="text-fd-muted-foreground">
                  Verified list of jettons and tokens on TON blockchain.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t py-12 bg-fd-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-6 justify-center text-sm text-fd-muted-foreground">
            <a
              href="https://ton.org/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fd-primary transition-colors">
              Terms
            </a>
            <a
              href="https://t.me/tonRocketChat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fd-primary transition-colors">
              Support
            </a>
            <a
              href="mailto:support@tonkeeper.com"
              className="hover:text-fd-primary transition-colors">
              Contact us
            </a>
            <a
              href="https://tonconsole.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fd-primary transition-colors">
              tonconsole.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
