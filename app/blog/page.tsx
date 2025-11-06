import { blogSource } from '@/source';
import Link from 'next/link';

export default function BlogIndex() {
  const posts = blogSource.getPages();

  return (
    <main className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Academy</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Learn from tutorials and best practices for TON blockchain development
        </p>

        <div className="grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.url}
              href={post.url}
              className="block p-6 border rounded-lg hover:border-primary transition-colors">
              <h2 className="text-2xl font-semibold mb-2">{post.data.title}</h2>
              {post.data.description && (
                <p className="text-muted-foreground mb-3">{post.data.description}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
