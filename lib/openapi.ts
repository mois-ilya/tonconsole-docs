import { createOpenAPI } from 'fumadocs-openapi/server';
import { join } from 'path';

export const tonapi = createOpenAPI({
  // Local file will be downloaded during build
  input: [join(process.cwd(), 'tonapi-openapi.yml')],
});
