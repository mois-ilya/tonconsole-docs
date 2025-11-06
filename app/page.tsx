import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-foreground">
            <path d="M14 14L4 14L14 4L14 14Z" fill="currentColor" />
            <path opacity="0.8" d="M14 14L4 28L4 14L14 14Z" fill="currentColor" />
            <path opacity="0.8" d="M28 4L14 4L14 14L28 4Z" fill="currentColor" />
            <path opacity="0.4" d="M14 14L28 28L4 28L14 14Z" fill="currentColor" />
            <path opacity="0.6" d="M28 28L28 4L14 14L28 28Z" fill="currentColor" />
          </svg>
          <span className="font-bold text-2xl">Documentation</span>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to Documentation</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Find the technical documentation and guides for Ton API, Ton Console, Tonkeeper and more.
            Launch projects, use network, enhance your business in the ecosystem of TON blockchain.
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <Link
              href="/docs"
              className="block p-6 border rounded-lg hover:border-primary transition-colors">
              <h2 className="text-xl font-semibold mb-2">Documentation</h2>
              <p className="text-muted-foreground">
                Explore our comprehensive guides and API references
              </p>
            </Link>

            <Link
              href="/blog"
              className="block p-6 border rounded-lg hover:border-primary transition-colors">
              <h2 className="text-xl font-semibold mb-2">Academy</h2>
              <p className="text-muted-foreground">
                Learn from tutorials and best practices
              </p>
            </Link>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Value proposal</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="https://tonconsole.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline">
                  <strong>Tonconsole</strong> — B2B platform for developers and product managers.
                  Create new features, manage your business on TON, use TON API.
                </a>
              </li>
              <li>
                <a
                  href="https://tonviewer.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline">
                  <strong>Tonviewer</strong> — observe transactions on TON blockchain.
                </a>
              </li>
              <li>
                <a
                  href="https://tonkeeper.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline">
                  <strong>Tonkeeper</strong> — B2C app with 12M+ MAU and dapp browser. Get the
                  traffic for your products.
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <h3 className="text-xl font-bold mb-2">Additional services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="https://github.com/tonkeeper/ton-assets/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline">
                    Jettons whitelist
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container mx-auto px-4 flex flex-wrap gap-4 justify-between text-sm text-muted-foreground">
          <a
            href="https://ton.org/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline">
            Terms
          </a>
          <a
            href="https://t.me/tonRocketChat"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline">
            Support
          </a>
          <a href="mailto:support@tonkeeper.com" className="hover:underline">
            Contact us
          </a>
          <a
            href="https://tonconsole.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline ml-auto">
            tonconsole.com
          </a>
        </div>
      </footer>
    </div>
  );
}
