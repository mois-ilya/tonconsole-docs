import { blogLoader } from '@/source';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function Page(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params;
  const page = blogLoader.getPage(params.slug);
  if (!page) notFound();

  return (
    <main className="container py-12">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Academy
        </Link>

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <h1>{page.data.title}</h1>
          {page.data.description && (
            <p className="text-xl text-muted-foreground">{page.data.description}</p>
          )}
          <div className="border-b pb-4 mb-8"></div>
          <div>
            <p className="text-muted-foreground">
              Blog content will be rendered here. MDX rendering is being configured.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return blogLoader.getPages().map((page) => ({
    slug: page.slugs,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = blogLoader.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
