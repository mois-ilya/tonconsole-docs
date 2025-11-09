import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Mermaid } from '@/components/mermaid';
import { Accordion, Accordions, Tabs, Tab } from '@/components/mdx-components';
import { APIPage as FumadocsAPIPage } from 'fumadocs-openapi/ui';
import { FullAPIPage } from '@/components/full-api-page';
import type { MDXComponents } from 'mdx/types';

// Wrapper for APIPage to handle openapi instance
function APIPage({ openapi, ...props }: any) {
  if (openapi) {
    return <FumadocsAPIPage {...openapi.getAPIPageProps(props)} />;
  }
  return <FumadocsAPIPage {...props} />;
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Mermaid,
    Accordion,
    Accordions,
    Tabs,
    Tab,
    APIPage,
    FullAPIPage,
    ...components,
  };
}
