import { APIPage } from 'fumadocs-openapi/ui';
import { readFileSync } from 'fs';
import { join } from 'path';
import YAML from 'yaml';
import type { OpenAPIV3, OpenAPIV3_1 } from 'openapi-types';

interface OperationItem {
  path: string;
  method: OpenAPIV3_1.HttpMethods;
}

export async function FullAPIPage() {
  // Read and parse the OpenAPI spec
  const specPath = join(process.cwd(), 'tonapi-openapi.yml');
  const specContent = readFileSync(specPath, 'utf-8');
  const spec = YAML.parse(specContent) as OpenAPIV3.Document | OpenAPIV3_1.Document;

  // Extract all operations from the spec
  const operations: OperationItem[] = [];

  if (spec.paths) {
    for (const [path, pathItem] of Object.entries(spec.paths)) {
      if (!pathItem) continue;

      const methods = ['get', 'post', 'put', 'patch', 'delete', 'head', 'options', 'trace'] as const;
      for (const method of methods) {
        if (pathItem[method]) {
          operations.push({
            path,
            method: method as OpenAPIV3_1.HttpMethods
          });
        }
      }
    }
  }

  console.log(`[FullAPIPage] Found ${operations.length} operations`);

  // Pass the spec file path and all operations to APIPage
  return (
    <APIPage
      document={specPath}
      operations={operations}
      hasHead={false}
    />
  );
}
