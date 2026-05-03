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
      'Knows about gravel in the corner, a speed camera over the hill, and the weather ahead. Community data, Flow Score, routing built for motorcycles — not cars.',
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
        desc: "Gravel, broken asphalt, oil patches. Car navigation doesn't see or share these hazards — you find out on the spot.",
      },
      {
        title: 'Wrong routes',
        desc: "Fastest ≠ best motorcycle route. Car routing doesn't understand scenic curves, surface quality, or riding flow.",
      },
      {
        title: 'Weather ignored',
        desc: 'Rain, fog, morning dew on asphalt. Navigation sends you on without warning — motorcycle conditions simply do not exist.',
      },
      {
        title: 'No community',
        desc: "Thousands of riders know the best routes and the worst stretches. But their knowledge exists nowhere — that data simply isn't there.",
      },
    ],
  },
  solution: {
    overline: 'Solution',
    headline: "Ways knows what other navigation doesn't.",
    items: [
      {
        title: 'Community hazards',
        desc: 'Data from riders who came before you. Gravel, accidents, speed cameras, closures — community-verified in real time.',
      },
      {
        title: 'Sub-400ms hazard alert',
        desc: 'Alert arrives before you reach the hazard. Measured limit: ≤ 400 ms from report to alert.',
      },
      {
        title: 'Motorcycle-aware routing',
        desc: "Routing designed for motorcycles: scenic preference, Flow Score, surface type, your bike's performance.",
      },
      {
        title: 'Flow Score',
        desc: 'Every route gets a riding flow score. Find your ideal balance of speed, enjoyment and safety at a glance.',
      },
    ],
  },
  team: {
    overline: 'Team + traction',
    headline: 'Who is building it.',
    body: 'Pitland s.r.o. — a Prague startup, AI-first from day one. We build Ways with a model where agents write code, test and iterate — humans direct the product, community and vision.',
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
      'Closed beta — selection from applications. We notify by email with double opt-in confirmation.',
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
      gdpr: 'I consent to processing my email, bike type and city for the Ways beta selection (controller: Pitland s.r.o.). <a href="/en/privacy">Privacy policy</a>.',
      submit: 'Apply for beta',
      submitting: 'Submitting…',
      successTitle: 'Application received!',
      successBody:
        "Check your email — we'll send you a confirmation link. We'll let you know the selection result soon.",
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
