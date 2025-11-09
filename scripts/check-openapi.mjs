import { existsSync, writeFileSync, copyFileSync, mkdirSync } from 'fs';

// Check if OpenAPI spec exists
if (!existsSync('./tonapi-openapi.yml')) {
  console.log('📥 OpenAPI spec not found. Downloading from https://tonapi.io/v2/openapi.yml...');

  try {
    const response = await fetch('https://tonapi.io/v2/openapi.yml');
    const spec = await response.text();
    writeFileSync('./tonapi-openapi.yml', spec);
    console.log('✅ OpenAPI spec downloaded successfully!');
  } catch (error) {
    console.error('❌ Failed to download OpenAPI spec:', error.message);
    console.log('\n⚠️  Please download it manually:');
    console.log('   wget -O tonapi-openapi.yml https://tonapi.io/v2/openapi.yml');
    console.log('   or');
    console.log('   curl -o tonapi-openapi.yml https://tonapi.io/v2/openapi.yml\n');
    process.exit(1);
  }
} else {
  console.log('✅ OpenAPI spec found');
}

// Copy to public directory for client-side access
try {
  mkdirSync('./public', { recursive: true });
  copyFileSync('./tonapi-openapi.yml', './public/tonapi-openapi.yml');
  console.log('📁 OpenAPI spec copied to public/');
} catch (error) {
  console.warn('⚠️  Failed to copy spec to public/:', error.message);
}
