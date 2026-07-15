import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { privacyPolicyPage } from '../src/content/privacy-policy.ts';
import { supportPage } from '../src/content/support.ts';
import { termsOfUsePage } from '../src/content/terms-of-use.ts';
import { renderLegalPage } from '../src/templates/legal-page.ts';

const rootDir = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');

const pages = [termsOfUsePage, privacyPolicyPage, supportPage];

for (const page of pages) {
  const outputPath = resolve(rootDir, page.filename);
  writeFileSync(outputPath, renderLegalPage(page));
  console.log(`Generated ${page.filename}`);
}
