import { legalPages, siteConfig } from '../config/site';
import type { LegalPageContent, PageSection, PageSubsection, PolicyTable } from '../content/types';
import { supportContactEmail } from '../content/support';

function renderParagraphs(paragraphs: readonly string[]): string {
  return paragraphs.map((paragraph) => `        <p>${paragraph}</p>`).join('\n');
}

function renderList(items: readonly string[]): string {
  const listItems = items.map((item) => `          <li>${item}</li>`).join('\n');
  return `        <ul>\n${listItems}\n        </ul>`;
}

function renderOrderedList(items: readonly string[]): string {
  const listItems = items.map((item) => `          <li>${item}</li>`).join('\n');
  return `        <ol>\n${listItems}\n        </ol>`;
}

function renderSubsection(subsection: PageSubsection): string {
  const title = subsection.title ? `        <h3>${subsection.title}</h3>\n` : '';
  const paragraphs = subsection.paragraphs ? `${renderParagraphs(subsection.paragraphs)}\n` : '';
  const list = subsection.list ? `${renderList(subsection.list)}\n` : '';
  const orderedList = subsection.orderedList ? `${renderOrderedList(subsection.orderedList)}\n` : '';

  return `${title}${paragraphs}${list}${orderedList}`.trimEnd();
}

function renderTable(table: PolicyTable): string {
  const headers = table.headers.map((header) => `            <th>${header}</th>`).join('\n');
  const rows = table.rows
    .map((row) => {
      const cells = row.map((cell) => `            <td>${cell}</td>`).join('\n');
      return `          <tr>\n${cells}\n          </tr>`;
    })
    .join('\n');

  return `        <div class="policy-table-wrap">
          <table class="policy-table">
            <thead>
              <tr>
${headers}
              </tr>
            </thead>
            <tbody>
${rows}
            </tbody>
          </table>
        </div>`;
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
  const orderedList = section.orderedList ? `\n${renderOrderedList(section.orderedList)}` : '';
  const subsections = section.subsections
    ? section.subsections.map(renderSubsection).join('\n')
    : '';
  const table = section.table ? `\n${renderTable(section.table)}` : '';

  return `      <section class="cartoon-card policy-section">
        <h2>${section.title}</h2>${paragraphs}${list}${orderedList}${subsections}${table}
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

function renderMeta(meta: NonNullable<LegalPageContent['meta']>): string {
  return `      <div class="policy-meta">
        <p><strong>Last updated:</strong> ${meta.lastUpdated}</p>
        <p><strong>Effective date:</strong> ${meta.effectiveDate}</p>
      </div>`;
}

export function renderLegalPage(page: LegalPageContent): string {
  const pageClass = page.layout === 'long-form' ? 'page long-form' : 'page';
  const sections = page.sections.map(renderSection).join('\n\n');
  const meta = page.meta ? `\n${renderMeta(page.meta)}\n` : '\n';

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${page.documentTitle}</title>
    <link rel="stylesheet" href="/src/styles/cartoon.css" />
  </head>
  <body>
    <main class="${pageClass}">
      <header class="cartoon-header">
        <div class="mascot" aria-hidden="true">${page.mascot}</div>
        <h1>${page.heading}</h1>
        <p>${page.subtitle}</p>
      </header>
${meta}
${sections}

${renderNav(page.path)}
      <a class="home-link" href="/">← Back to Home</a>
${renderFooter()}
    </main>
  </body>
</html>
`;
}
