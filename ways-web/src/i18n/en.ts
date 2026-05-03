import type { T } from './cs';

const en: T = {
  meta: {
    title: 'Ways — Navigation that knows your ride',
    description:
      'Community hazard data, sub-400ms hazard alerts, and motorcycle-aware routing. Join the closed beta.',
    ogTitle: 'Ways — Navigation that knows',
    ogDescription:
      'Motorcycle navigation. Community hazards. Flow Score. Join the beta.',
  },
  nav: {
    problem: 'Problem',
    solution: 'Solution',
    team: 'Team',
    signup: 'Join beta',
    langSwitch: 'CZ',
    langSwitchHref: '/',
  },
  hero: {
    overline: 'Closed beta — applications now open',
    headline: 'Navigation that knows\nyour ride…',
    subline:
      'Community hazard data. Motorcycle-aware routing. Flow score for every journey.',
    cta: 'Join the beta',
    ctaHref: '#signup',
    scrollLabel: 'Learn more',
  },
  problem: {
    overline: 'Problem',
    headline: "Google Maps doesn't know us.",
    body: "Navigation built for cars sends us down highways, ignores gravel in corners and doesn't understand the flow of motorcycle riding.",
    items: [
      {
        title: 'Hazardous surfaces',
        desc: 'Gravel, broken asphalt, oil patches. No car navigation knows or shares these hazards.',
      },
      {
        title: 'Wrong routes',
        desc: "Fastest ≠ best motorcycle route. Scenic curves, elevation, flow — cars don't consider these.",
      },
      {
        title: 'Weather ignored',
        desc: 'Rain, fog, morning dew. Navigation sends you anyway, even when conditions are wrong for a motorcycle.',
      },
      {
        title: 'No community',
        desc: 'Thousands of riders know the best routes. But this knowledge lives nowhere — that data simply does not exist.',
      },
    ],
  },
  solution: {
    overline: 'Solution',
    headline: "Ways knows what other navigation doesn't.",
    items: [
      {
        title: 'Community hazards',
        desc: 'Real-time data from riders. Gravel, accidents, speed cameras, closures — community-verified in real time.',
      },
      {
        title: 'Sub-400ms hazard alert',
        desc: 'Warned before you arrive at the problem. Technical limit: latency ≤ 400 ms from report to alert.',
      },
      {
        title: 'Motorcycle-aware routing',
        desc: "Algorithm designed for motorcycles: scenic preference, flow score, surface type, your bike's performance.",
      },
      {
        title: 'Flow Score',
        desc: 'Every route has a riding flow score. Find your perfect balance of speed, enjoyment and safety.',
      },
    ],
  },
  team: {
    overline: 'Team + traction',
    headline: 'Who is building it.',
    body: 'Pitland s.r.o. — AI-first startup from Prague. We build Ways with a model where agents write code, design and test — humans direct the product and community.',
    stats: [
      { value: '≤400ms', label: 'Hazard alert technical limit' },
      { value: 'AI-first', label: 'Execution model' },
      { value: '2026', label: 'Founded' },
    ],
    memo: 'Investor memo v3 available on request.',
    memoContact: 'Contact us',
  },
  signup: {
    overline: 'Join the beta',
    headline: 'Be first on the road.',
    subline:
      'Closed beta — selection from applications. We will notify you by email with double opt-in confirmation.',
    form: {
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      bikeType: 'Bike type',
      bikeTypes: [
        { value: 'touring', label: 'Touring' },
        { value: 'sport', label: 'Sport' },
        { value: 'enduro', label: 'Enduro / Adventure' },
        { value: 'naked', label: 'Naked / Streetfighter' },
        { value: 'scooter', label: 'Scooter' },
        { value: 'other', label: 'Other' },
      ],
      city: 'City',
      cityPlaceholder: 'Prague',
      gdpr: 'I agree to the processing of personal data for the purposes of the Ways beta programme (Pitland s.r.o.). Data will not be shared with third parties.',
      submit: 'Apply for beta',
      submitting: 'Submitting…',
      successTitle: 'Application received!',
      successBody:
        'Check your email — we will send you a confirmation link. We will let you know about the selection result soon.',
      errorGeneric: 'Submission error. Please try again.',
      errorRateLimit: 'Too many attempts. Please try again shortly.',
    },
  },
  footer: {
    legal: '© 2026 Pitland s.r.o. Ways is a standalone brand of Pitland s.r.o.',
    privacy: 'Privacy policy',
    privacyHref: '/en/privacy',
    contact: 'Contact',
    contactHref: 'mailto:hello@ways.cz',
  },
};

export default en;
