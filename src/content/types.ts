export type PageSection = {
  title: string;
  paragraphs?: readonly string[];
  list?: readonly string[];
  variant?: 'contact-box';
};

export type LegalPageContent = {
  filename: string;
  path: string;
  documentTitle: string;
  mascot: string;
  heading: string;
  subtitle: string;
  sections: readonly PageSection[];
};
