import { writeFileSync } from 'fs';

// Download OpenAPI spec from TonAPI
console.log('📥 Downloading OpenAPI spec from https://tonapi.io/v2/openapi.yml...');
const response = await fetch('https://tonapi.io/v2/openapi.yml');
const spec = await response.text();
writeFileSync('./tonapi-openapi.yml', spec);
console.log('✅ OpenAPI spec downloaded successfully!');
console.log('💡 Spec will be used by fumadocs-openapi at build time');
