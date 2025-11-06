import { docsSource } from '@/source';
import { createSearchAPI } from 'fumadocs-core/search/server';

export const { GET } = createSearchAPI('simple', {
  indexes: docsSource.getPages().map((page) => ({
    title: page.data.title || '',
    description: page.data.description || '',
    content: '',
    id: page.url,
    url: page.url,
  })),
});
