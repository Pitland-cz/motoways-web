const cs = {
  meta: {
    title: 'Ways — Navigace pro motorkáře, která ví',
    description:
      'Community hazardová data, sub-400ms hazard alerts a motorcycle-aware routing. Přidej se do uzavřené bety.',
    ogTitle: 'Ways — Navigace, která ví',
    ogDescription:
      'Navigace pro motorkáře. Community hazardy. Flow Score. Vstup do bety.',
  },
  nav: {
    problem: 'Problém',
    solution: 'Řešení',
    team: 'Tým',
    signup: 'Do bety',
    langSwitch: 'EN',
    langSwitchHref: '/en',
  },
  hero: {
    overline: 'Uzavřená beta — přihlášky nyní otevřeny',
    headline: 'Navigace pro motorkáře,\nkterá ví…',
    subline:
      'Community hazardová data. Motorcycle-aware routing. Flow score pro každou jízdu.',
    cta: 'Vstup do bety',
    ctaHref: '#signup',
    scrollLabel: 'Zjistit více',
  },
  problem: {
    overline: 'Problém',
    headline: 'Google Maps nás nezná.',
    body: 'Navigace navržená pro auta nás posílá dálnicemi, ignoruje gravel v zatáčkách a nezná flow motorkářské jízdy.',
    items: [
      {
        title: 'Nebezpečné povrchy',
        desc: 'Gravel, rozbitý asfalt, olejové skvrny. Žádná auto-navigace tyhle hazardy nezná ani nesdílí.',
      },
      {
        title: 'Špatné trasy',
        desc: 'Nejrychlejší trasa ≠ nejlepší moto trasa. Scenic zatáčky, převýšení, flow — to auto neřeší.',
      },
      {
        title: 'Počasí ignorováno',
        desc: 'Déšť, mlha, ranní rosa. Navigace tě pošle dál, i když podmínky nejsou pro motorku.',
      },
      {
        title: 'Žádná komunita',
        desc: 'Tisíce motorkářů znají nejlepší trasy. Ale tuhle znalost nikde nenajdeš — ta data neexistují.',
      },
    ],
  },
  solution: {
    overline: 'Řešení',
    headline: 'Ways ví, co ostatní navigace nevědí.',
    items: [
      {
        title: 'Community hazardy',
        desc: 'Real-time data od motorkářů. Gravel, nehody, radary, uzavírky — ověřené komunitou v reálném čase.',
      },
      {
        title: 'Sub-400ms hazard alert',
        desc: 'Upozornění dřív než dojedeme k problému. Technický limit: latence ≤ 400 ms od reportu k alertu.',
      },
      {
        title: 'Motorcycle-aware routing',
        desc: 'Algoritmus navržený pro motorky: scenic preference, flow score, preferovaný povrch, tvá motorka.',
      },
      {
        title: 'Flow Score',
        desc: 'Každá trasa má skóre plynulosti jízdy. Najdi svůj ideální kompromis rychlosti, zábavy a bezpečí.',
      },
    ],
  },
  team: {
    overline: 'Tým + trakce',
    headline: 'Kdo to staví.',
    body: 'Pitland s.r.o. — AI-first startup z Prahy. Stavíme Ways s modelem kde agenti píší kód, designují a testují — lidé řídí produkt a komunitu.',
    stats: [
      { value: '≤400ms', label: 'Technický limit hazard alertu' },
      { value: 'AI-first', label: 'Execution model' },
      { value: '2026', label: 'Rok vzniku' },
    ],
    memo: 'Investor memo v3 k dispozici na vyžádání.',
    memoContact: 'Kontaktujte nás',
  },
  signup: {
    overline: 'Vstup do bety',
    headline: 'Buď první na silnici.',
    subline:
      'Uzavřená beta — výběr z přihlášek. Informujeme emailem s double opt-in potvrzením.',
    form: {
      email: 'Email',
      emailPlaceholder: 'tvuj@email.cz',
      bikeType: 'Typ motorky',
      bikeTypes: [
        { value: 'touring', label: 'Cestovní / Touring' },
        { value: 'sport', label: 'Sport' },
        { value: 'enduro', label: 'Enduro / Adventure' },
        { value: 'naked', label: 'Naked / Streetfighter' },
        { value: 'scooter', label: 'Skútr' },
        { value: 'other', label: 'Jiné' },
      ],
      city: 'Město',
      cityPlaceholder: 'Praha',
      gdpr: 'Souhlasím se zpracováním osobních údajů pro účely beta programu Ways (Pitland s.r.o.). Data nebudou sdílena se třetími stranami.',
      submit: 'Přihlásit se do bety',
      submitting: 'Odesílám…',
      successTitle: 'Přihláška přijata!',
      successBody:
        'Zkontroluj svůj email — pošleme ti potvrzovací odkaz. Brzy ti dáme vědět o výsledku výběru.',
      errorGeneric: 'Chyba při odesílání. Zkus to prosím znovu.',
      errorRateLimit: 'Příliš mnoho pokusů. Zkus to za chvíli.',
    },
  },
  footer: {
    legal: '© 2026 Pitland s.r.o. Ways je standalone brand Pitland s.r.o.',
    privacy: 'Zásady ochrany osobních údajů',
    privacyHref: '/privacy',
    contact: 'Kontakt',
    contactHref: 'mailto:hello@ways.cz',
  },
} as const;

export type T = typeof cs;
export default cs;
