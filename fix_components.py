#!/usr/bin/env python3
import re
import os
from pathlib import Path

def fix_mdx_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # Remove <SchemaLoader> self-closing tags
    content = re.sub(r'<SchemaLoader[^/>]*\/>', '', content)

    # Remove <SwaggerLink> tags (both opening and closing)
    content = re.sub(r'<SwaggerLink[^>]*>', '', content)
    content = re.sub(r'<\/SwaggerLink>', '', content)

    # Convert <ExternalLink href={...}> to markdown links
    # Pattern: <ExternalLink href={CONSTANT}>text</ExternalLink>
    content = re.sub(
        r'<ExternalLink href=\{[^}]+\}>([^<]+)</ExternalLink>',
        r'[\1]',
        content
    )

    # Convert <ExternalLink href="..."> to markdown links
    content = re.sub(
        r'<ExternalLink href="([^"]+)">([^<]+)</ExternalLink>',
        r'[\2](\1)',
        content
    )

    # Convert simple <Callout> to markdown blockquotes
    # First, handle Callout with type and emoji attributes
    def replace_callout(match):
        inner_content = match.group(1).strip()
        return f'> **Note**: {inner_content}'

    content = re.sub(
        r'<Callout[^>]*>\s*(.*?)\s*</Callout>',
        replace_callout,
        content,
        flags=re.DOTALL
    )

    # Only write if content changed
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed: {filepath}")
        return True
    return False

# Find all MDX files
docs_dir = Path('docs')
fixed_count = 0

for mdx_file in docs_dir.rglob('*.mdx'):
    if fix_mdx_file(mdx_file):
        fixed_count += 1

print(f"\nTotal files fixed: {fixed_count}")
