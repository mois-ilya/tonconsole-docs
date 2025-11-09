import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Mermaid } from '@/components/mermaid';
import { Accordion, Accordions, Tabs, Tab } from '@/components/mdx-components';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Mermaid,
    Accordion,
    Accordions,
    Tabs,
    Tab,
    ...components,
  };
}
