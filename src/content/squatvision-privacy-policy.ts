import type { LegalPageContent } from './types';

export const squatvisionPrivacyPage: LegalPageContent = {
  filename: 'squatvision-privacy-policy.html',
  path: '/squatvision-privacy-policy.html',
  documentTitle: 'SquatVision Privacy Policy',
  mascot: '',
  heading: 'SquatVision Privacy Policy',
  subtitle: 'On-device squat coaching, optional Game Center competition, and Apple subscriptions.',
  layout: 'long-form',
  meta: { lastUpdated: 'October 17, 2026', effectiveDate: 'October 17, 2026' },
  navigation: [
    { href: '/squatvision-privacy-policy.html', label: 'SquatVision Privacy Policy' },
    { href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/', label: 'Terms of Use (Apple EULA)' },
    { href: '/support.html', label: 'Support' },
  ],
  sections: [
    { title: 'About this policy', paragraphs: [
      'This policy applies to SquatVision for iPhone and iPad (com.mahmutaoata.squatvision). It describes the app’s actual processing and optional Apple-operated services. It does not describe other apps on this website.',
      'Questions or privacy requests: <a href="mailto:hi@damastechnologies.com">hi@damastechnologies.com</a>.',
    ] },
    { title: 'Camera and movement analysis', paragraphs: [
      'SquatVision uses the camera only during a workout to detect body positions, count repetitions, and show form feedback. Camera frames and pose landmarks are processed in memory on your device. The app does not record or upload camera footage, photographs, pose landmarks, or detailed form measurements.',
      'You control camera permission in iOS Settings. Without that permission, camera-counted workouts cannot run; your saved history remains accessible.',
    ] },
    { title: 'Data stored on your device', paragraphs: [
      'Workout summaries, rep totals, durations, movement statistics, workout dates and their recorded time zones, achievement progress, preferences, and pending Game Center submissions are stored locally. Online workout summaries can also include the opponent’s Game Center display name, match preset, rep scores, and result.',
      'SquatVision does not operate a workout-storage backend or enable iCloud synchronization for this history. Separate devices do not combine their rep totals or streaks. Static demo mode uses fictional data in a separate in-memory store.',
    ] },
    { title: 'Optional Game Center rankings and achievements', paragraphs: [
      'Solo training and history do not require an app account. Apple operates Game Center authentication, player profiles, friend controls, leaderboards, achievements, and matchmaking.',
      'If you explicitly join ranked challenges, integer challenge rep totals are sent to Game Center and associated with your Game Center profile. Published rankings show your display name, profile picture, rank, and score. Friends is an audience filter; a published score may also appear in Everyone rankings. Ordinary solo workouts do not submit leaderboard scores.',
      'Achievement synchronization is a separate optional setting for each Game Center account. Enabling it sends achievement identifiers and percentage progress to Apple, including eligible progress from solo training. Existing unowned history is credited once to the first account enabling this option.',
      'Apple’s service is governed by <a href="https://www.apple.com/legal/privacy/data/en/game-center/">Apple’s Game Center privacy information</a>.',
    ] },
    { title: 'Live online squat duels', paragraphs: [
      'When you start or accept a duel, Game Center connects you with another player. The app exchanges player profiles, match rules, readiness, clock synchronization information, rep events, accepted scores, and match results with that opponent. Camera frames, body landmarks, depth measurements, and form feedback remain on your device. SquatVision does not provide camera streaming or audio/video chat.',
      'Genuine online reps can be saved to local workout history and contribute to eligible squat and streak achievements. They are not added to daily or weekly leaderboard totals.',
    ] },
    { title: 'Subscriptions and purchases', paragraphs: [
      'Apple processes weekly and monthly SquatVision Pro subscriptions through the App Store. The app uses StoreKit on your device to verify subscription access, eligibility for introductory offers, renewals, expiration, refunds, and restoration. The app does not receive payment card details and does not send transaction payloads to a custom subscription server.',
      'Restore Purchases contacts Apple when you explicitly request it and may prompt for Apple Account authentication. Manage or cancel a subscription in your Apple subscription settings. Clearing workout data or deleting the app does not cancel a subscription.',
    ] },
    { title: 'Advertising, analytics, and tracking', paragraphs: [
      'SquatVision has no advertising, third-party analytics SDK, cross-app tracking, or developer-operated collection endpoint. It does not request your contacts, precise location, or photo library. Information you voluntarily send to support is used to answer your request.',
      'Apple may process information to operate its App Store and Game Center services under its own policies. This policy page is hosted using GitHub Pages; the hosting provider may process ordinary website request information when you visit it. This page contains no advertising or analytics scripts.',
    ] },
    { title: 'Retention, deletion, and your choices', paragraphs: [
      'Use Settings → Privacy and local data → Clear Local Data to remove locally stored workout history, local achievement progress, milestones, and pending submissions. This action is irreversible. Turning off static demo mode returns you to your separate real history.',
      'Previously published Game Center scores remain until their competition period resets; clearing local history cannot retract them. Previously reported Game Center achievements remain with Apple and may be restored when you synchronize the same account. Turning off achievement sync stops further app-initiated reports. Signing out of Game Center prevents new ranked participation; pending reports can resume if the same account reconnects.',
      'Use Apple’s account and Game Center settings for Apple-held information. For support correspondence or questions about your rights, contact the support address above. We do not sell personal information.',
    ] },
    { title: 'Updates', paragraphs: [
      'This page will be updated if SquatVision’s data practices change. The dates above identify the current policy. If a future version adds a backend, analytics, or new data sharing, its policy and relevant in-app disclosures must be updated before that processing begins.',
    ] },
  ],
};
