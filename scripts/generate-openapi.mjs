import { generateFiles } from 'fumadocs-openapi';
import { writeFileSync } from 'fs';

// Download OpenAPI spec from TonAPI
console.log('📥 Downloading OpenAPI spec from https://tonapi.io/v2/openapi.yml...');
const response = await fetch('https://tonapi.io/v2/openapi.yml');
const spec = await response.text();
writeFileSync('./tonapi-openapi.yml', spec);
console.log('✅ OpenAPI spec downloaded successfully!');

// Generate interactive API documentation
console.log('📝 Generating interactive API documentation...');
await generateFiles({
  input: ['./tonapi-openapi.yml'],
  output: './docs/tonapi/api-reference',
  per: 'tag',
  groupBy: 'tag',
});

console.log('✅ OpenAPI documentation generated successfully!');
