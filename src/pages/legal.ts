import { legalPages, siteConfig } from '../config/site';

function renderNav(activePath: string): void {
  const nav = document.querySelector<HTMLElement>('[data-legal-nav]');
  if (!nav) return;

  nav.innerHTML = legalPages
    .map(
      (page) =>
        `<a href="${page.href}" class="${page.href === activePath ? 'is-active' : ''}">${page.label}</a>`,
    )
    .join('');
}

function renderFooter(): void {
  const footer = document.querySelector<HTMLElement>('[data-legal-footer]');
  if (!footer) return;

  footer.innerHTML = `<p>© ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.</p>`;
}

export function initLegalPage(activePath: string): void {
  renderNav(activePath);
  renderFooter();
}
