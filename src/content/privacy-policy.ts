import type { LegalPageContent } from './types';
import { siteConfig } from '../config/site';

export const privacyPolicyPage: LegalPageContent = {
  filename: 'privacy-policy.html',
  path: '/privacy-policy.html',
  documentTitle: 'Privacy Policy | Damas Technologies',
  mascot: '🔒',
  heading: 'Privacy Policy',
  subtitle: 'Your privacy matters to us. Here’s how we handle your information.',
  sections: [
    {
      title: '1. Information We Collect',
      paragraphs: ['We may collect information you provide directly, such as:'],
      list: [
        'Responses submitted through surveys or forms',
        'Contact details you choose to share with us',
        'Basic technical data like browser type and device information',
      ],
    },
    {
      title: '2. How We Use Information',
      paragraphs: ['We use collected information to:'],
      list: [
        'Operate and improve our website and services',
        'Understand user feedback and product interest',
        'Respond to support requests and inquiries',
      ],
    },
    {
      title: '3. Third-Party Services',
      paragraphs: [
        'Our site may use third-party tools (such as embedded forms) that collect information according to their own privacy policies. We encourage you to review those policies when using external services.',
      ],
    },
    {
      title: '4. Data Retention and Security',
      paragraphs: [
        'We retain information only as long as needed for the purposes described in this policy and apply reasonable safeguards to protect it. No method of transmission or storage is 100% secure.',
      ],
    },
    {
      title: '5. Your Choices',
      paragraphs: [
        'You may contact us to ask questions about your information or request updates where applicable. We will respond in line with applicable privacy laws.',
      ],
    },
    {
      title: '6. Contact Us',
      paragraphs: [
        `For privacy-related questions, email us at <a href="mailto:${siteConfig.contactEmail}">${siteConfig.contactEmail}</a>.`,
      ],
    },
  ],
};
