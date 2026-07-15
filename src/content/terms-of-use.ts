import type { LegalPageContent } from './types';
import { siteConfig } from '../config/site';

export const termsOfUsePage: LegalPageContent = {
  filename: 'terms-of-use.html',
  path: '/terms-of-use.html',
  documentTitle: 'Terms of Use | Damas Technologies',
  mascot: '📜',
  heading: 'Terms of Use',
  subtitle: 'Welcome! Here are the friendly rules for using our website and services.',
  sections: [
    {
      title: '1. Acceptance of Terms',
      paragraphs: [
        'By accessing or using this website, you agree to these Terms of Use. If you do not agree, please do not use the site.',
      ],
    },
    {
      title: '2. Use of the Website',
      paragraphs: ['You may use this website for lawful purposes only. You agree not to:'],
      list: [
        'Interfere with the website’s operation or security',
        'Attempt to access data or systems without authorization',
        'Use the site in a way that harms other users or Damas Technologies',
      ],
    },
    {
      title: '3. Surveys and Submissions',
      paragraphs: [
        'Information you submit through our forms or surveys should be accurate to the best of your knowledge. We may use submissions to improve our products and services.',
      ],
    },
    {
      title: '4. Intellectual Property',
      paragraphs: [
        'All content on this website, including text, branding, and design, is owned by Damas Technologies or its licensors and is protected by applicable intellectual property laws.',
      ],
    },
    {
      title: '5. Disclaimer',
      paragraphs: [
        'This website is provided on an “as is” basis. We do not guarantee uninterrupted or error-free access and are not liable for damages arising from your use of the site, to the extent permitted by law.',
      ],
    },
    {
      title: '6. Changes and Contact',
      paragraphs: [
        `We may update these Terms of Use from time to time. Continued use of the website after changes means you accept the updated terms. Questions? Reach us at <a href="mailto:${siteConfig.contactEmail}">${siteConfig.contactEmail}</a>.`,
      ],
    },
  ],
};
