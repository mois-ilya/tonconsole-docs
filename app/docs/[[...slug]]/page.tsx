import { docsSource } from '@/source';
import type { Metadata } from 'next';
import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import { LLMCopyButton, ViewOptions } from '@/components/ai/page-actions';
import { Feedback } from '@/components/feedback';
import { onRateAction, owner, repo } from '@/lib/github';

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = docsSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  // Build path from URL for GitHub and markdown URL
  const path = params.slug ? `docs/${params.slug.join('/')}.mdx` : 'docs/index.mdx';
  const githubUrl = `https://github.com/${owner}/${repo}/blob/main/${path}`;
  // Use raw GitHub URL for markdown content
  const markdownUrl = `https://raw.githubusercontent.com/${owner}/${repo}/main/${path}`;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      lastUpdate={page.data.lastModified ? new Date(page.data.lastModified) : undefined}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <div className="flex flex-row gap-2 items-center border-b pb-6">
        <LLMCopyButton markdownUrl={markdownUrl} />
        <ViewOptions markdownUrl={markdownUrl} githubUrl={githubUrl} />
      </div>
      <DocsBody>
        <MDX components={getMDXComponents()} />
      </DocsBody>
      <Feedback onRateAction={onRateAction} />
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return docsSource.getPages().map((page) => ({
    slug: page.slugs,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = docsSource.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
