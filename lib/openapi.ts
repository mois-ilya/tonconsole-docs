import { createOpenAPI } from 'fumadocs-openapi/server';

export const tonapi = createOpenAPI({
  // Local file will be downloaded during build
  input: ['./tonapi-openapi.yml'],
});
