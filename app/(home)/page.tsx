import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-br from-fd-foreground to-fd-foreground/70 bg-clip-text text-transparent">
            TON Console Docs
          </h1>
          <p className="text-xl sm:text-2xl text-fd-muted-foreground mb-12 max-w-2xl mx-auto">
            Find the technical documentation and guides for TonAPI, TON Console, Tonkeeper and more.
            Launch projects, use network, enhance your business in the ecosystem of TON blockchain.
          </p>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-16 max-w-3xl mx-auto">
            <Link
              href="/docs"
              className="group relative block p-8 border rounded-xl hover:shadow-lg hover:border-fd-primary transition-all bg-fd-card">
              <div className="absolute inset-0 bg-gradient-to-br from-fd-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative">
                <h2 className="text-2xl font-bold mb-3 group-hover:text-fd-primary transition-colors">
                  Documentation
                </h2>
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
                <h2 className="text-2xl font-bold mb-3 group-hover:text-fd-primary transition-colors">
                  Academy
                </h2>
                <p className="text-fd-muted-foreground text-base">
                  Learn from tutorials and best practices
                </p>
              </div>
            </Link>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto text-left">
            <h2 className="text-3xl font-bold text-center">Products & Services</h2>
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
