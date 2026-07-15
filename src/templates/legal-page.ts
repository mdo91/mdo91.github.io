import { legalPages, siteConfig } from '../config/site';
import type { LegalPageContent, PageSection } from '../content/types';
import { supportContactEmail } from '../content/support';

function renderParagraphs(paragraphs: readonly string[]): string {
  return paragraphs.map((paragraph) => `        <p>${paragraph}</p>`).join('\n');
}

function renderList(items: readonly string[]): string {
  const listItems = items.map((item) => `          <li>${item}</li>`).join('\n');
  return `        <ul>\n${listItems}\n        </ul>`;
}

function renderSection(section: PageSection): string {
  if (section.variant === 'contact-box') {
    return `      <section class="cartoon-card contact-box">
        <div class="envelope" aria-hidden="true">✉️</div>
        <h2>${section.title}</h2>
${renderParagraphs(section.paragraphs ?? [])}
        <a href="mailto:${supportContactEmail}">${supportContactEmail}</a>
      </section>`;
  }

  const paragraphs = section.paragraphs ? `\n${renderParagraphs(section.paragraphs)}` : '';
  const list = section.list ? `\n${renderList(section.list)}` : '';

  return `      <section class="cartoon-card">
        <h2>${section.title}</h2>${paragraphs}${list}
      </section>`;
}

function renderNav(activePath: string): string {
  const links = legalPages
    .map((page) => {
      const activeClass = page.href === activePath ? ' class="is-active"' : '';
      return `        <a href="${page.href}"${activeClass}>${page.label}</a>`;
    })
    .join('\n');

  return `      <nav class="cartoon-nav" aria-label="Legal pages">\n${links}\n      </nav>`;
}

function renderFooter(): string {
  return `      <footer><p>© ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.</p></footer>`;
}

export function renderLegalPage(page: LegalPageContent): string {
  const sections = page.sections.map(renderSection).join('\n\n');

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${page.documentTitle}</title>
    <link rel="stylesheet" href="/src/styles/cartoon.css" />
  </head>
  <body>
    <main class="page">
      <header class="cartoon-header">
        <div class="mascot" aria-hidden="true">${page.mascot}</div>
        <h1>${page.heading}</h1>
        <p>${page.subtitle}</p>
      </header>

${sections}

${renderNav(page.path)}
      <a class="home-link" href="/">← Back to Home</a>
${renderFooter()}
    </main>
  </body>
</html>
`;
}
