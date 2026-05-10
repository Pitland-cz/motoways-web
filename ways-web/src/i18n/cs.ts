const cs = {
  meta: {
    title: 'Motoways — Navigace pro motorkáře, která ví',
    description:
      'Community hazardová data, sub-400ms hazard alerts a motorcycle-aware routing. Přidej se do uzavřené bety.',
    ogTitle: 'Motoways — Navigace, která ví',
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
      'Ví o gravel v zatáčce, radaru za kopcem a počasí na příští hodinu. Komunitní data, Flow Score, routing navržený pro motorku — ne auto.',
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
        desc: 'Gravel, rozbitý asfalt, olejová skvrna. Auto-navigace tyto hazardy nevidí ani nesdílí — zjistíš to až na místě.',
      },
      {
        title: 'Špatné trasy',
        desc: 'Nejrychlejší ≠ nejlepší moto trasa. Auto-routing nezná scenic zatáčky, kvalitu povrchu ani flow jízdy.',
      },
      {
        title: 'Počasí ignorováno',
        desc: 'Déšť, mlha, ranní rosa na asfaltu. Navigace tě pošle dál bez varování — moto podmínky prostě neexistují.',
      },
      {
        title: 'Žádná komunita',
        desc: 'Tisíce motorkářů znají nejlepší trasy a nejhorší úseky. Ale jejich znalost nikde neexistuje — ta data prostě nejsou.',
      },
    ],
  },
  solution: {
    overline: 'Řešení',
    headline: 'Motoways ví, co ostatní navigace nevědí.',
    items: [
      {
        title: 'Community hazardy',
        desc: 'Data od motorkářů, kteří jeli před tebou. Gravel, nehody, radary, uzavírky — ověřené komunitou v reálném čase.',
      },
      {
        title: 'Sub-400ms hazard alert',
        desc: 'Upozornění přijde dřív, než hazard dosáhneš. Měřený limit: ≤ 400 ms od reportu k alertu.',
      },
      {
        title: 'Motorcycle-aware routing',
        desc: 'Routing navržený pro motorky: scenic preference, Flow Score, typ povrchu, výkon tvé motorky.',
      },
      {
        title: 'Flow Score',
        desc: 'Každá trasa dostane skóre plynulosti jízdy. Najdi svůj ideální balans rychlosti, zábavy a bezpečí na první pohled.',
      },
    ],
  },
  team: {
    overline: 'Tým + trakce',
    headline: 'Kdo to staví.',
    body: 'Pitland s.r.o. — startup z Prahy, AI-first od prvního dne. Motoways stavíme modelem kde agenti píší kód, testují a iterují — lidé řídí produkt, komunitu a směr.',
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
      'Uzavřená beta — výběr z přihlášek. Oznámení posíláme emailem s double opt-in potvrzením.',
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
      gdpr: 'Souhlasím se zpracováním e-mailu, typu motorky a města za účelem beta výběru Motoways (správce: Pitland s.r.o.). <a href="/privacy">Zásady ochrany osobních údajů</a>.',
      submit: 'Přihlásit se do bety',
      submitting: 'Odesílám…',
      successTitle: 'Přihláška přijata!',
      successBody:
        'Zkontroluj svůj email — pošleme ti potvrzovací odkaz. O výsledku výběru tě informujeme brzy.',
      errorGeneric: 'Chyba při odesílání. Zkus to prosím znovu.',
      errorRateLimit: 'Příliš mnoho pokusů. Zkus to za chvíli.',
    },
  },
  footer: {
    legal: '© 2026 Pitland s.r.o. Motoways je standalone brand Pitland s.r.o.',
    privacy: 'Zásady ochrany osobních údajů',
    privacyHref: '/privacy',
    contact: 'Kontakt',
    contactHref: 'mailto:hello@motoways.cz',
  },
} as const;

export type T = typeof cs;
export default cs;
