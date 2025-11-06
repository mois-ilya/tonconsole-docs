#!/usr/bin/env python3
import re
from pathlib import Path

def fix_example_tabs(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # Pattern to match <ExampleTabs>...</ExampleTabs> blocks
    pattern = r'<ExampleTabs>(.*?)</ExampleTabs>'

    def replace_tabs(match):
        tabs_content = match.group(1)

        # Extract all ExampleTab blocks
        tab_pattern = r'<ExampleTab label="([^"]+)">\s*<([^/>]+)\s*/>\s*</ExampleTab>'
        tabs = re.findall(tab_pattern, tabs_content)

        if not tabs:
            return '> **Note**: Code examples for multiple programming languages are available. Please refer to the source code repository.'

        # Build markdown sections
        result = []
        for label, component in tabs:
            result.append(f'### {label}\n\n> Code example for {label} implementation\n')

        return '\n'.join(result)

    content = re.sub(pattern, replace_tabs, content, flags=re.DOTALL)

    # Also remove standalone component references
    content = re.sub(r'<[A-Z][a-zA-Z]+\s*/>', '', content)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed: {filepath}")
        return True
    return False

# Process all files
files_with_tabs = [
    'docs/tonconsole/jettons/airdrop.mdx',
    'docs/tonapi/cookbook/emulation.mdx',
    'docs/tonapi/cookbook/gasless-transfer.mdx',
    'docs/tonapi/cookbook/transaction-tracking.mdx',
    'docs/tonapi/cookbook/jetton-transfer.mdx',
    'docs/tonapi/cookbook/working-with-jettons.mdx',
    'docs/tonapi/cookbook/ton-transfer.mdx',
    'docs/tonapi/cookbook/working-with-nfts.mdx',
]

fixed_count = 0
for filepath in files_with_tabs:
    path = Path(filepath)
    if path.exists():
        if fix_example_tabs(path):
            fixed_count += 1

print(f"\nTotal files fixed: {fixed_count}")
