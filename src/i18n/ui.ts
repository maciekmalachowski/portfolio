// Short UI strings (nav, buttons, section labels). Long-form content
// (bios, project/experience copy) lives in src/data/*.

export const languages = { en: 'EN', pl: 'PL' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'nav.work': 'Work',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    'hero.status': 'Available for AI engineering work',
    'hero.tagline': 'I build production LLM systems and agentic workflows.',
    'hero.intro':
      'AI Engineer specializing in LLM-based systems, agentic architectures, and business-process automation — shipping solutions that connect language models to real platforms, data, and APIs.',
    'hero.cta.work': 'View work',
    'hero.cta.cv': 'Download CV',

    'about.label': 'About',
    'about.title': 'Engineer, not enthusiast',
    'about.education': 'Education',
    'about.languages': 'Languages',
    'about.based': 'Based in',
    'about.basedValue': 'Gdańsk, Poland',
    'about.langValue': 'Polish (native) · English (B2)',

    'work.label': 'Experience',
    'work.title': 'Where I’ve shipped',
    'work.present': 'Present',
    'work.stack': 'Stack',

    'projects.label': 'Selected work',
    'projects.title': 'Things I’ve built',
    'projects.code': 'Source',
    'projects.demo': 'Live',

    'skills.label': 'Toolkit',
    'skills.title': 'What I work with',

    'contact.label': 'Contact',
    'contact.title': 'Let’s build something',
    'contact.intro':
      'Open to AI engineering roles and collaborations on agentic and LLM-powered products. The fastest way to reach me is email.',
    'contact.email': 'Email me',

    'footer.built': 'Built with Astro & Tailwind.',
    'footer.rights': 'All rights reserved.',
  },
  pl: {
    'nav.work': 'Doświadczenie',
    'nav.projects': 'Projekty',
    'nav.about': 'O mnie',
    'nav.contact': 'Kontakt',

    'hero.status': 'Otwarty na pracę w obszarze AI',
    'hero.tagline': 'Tworzę produkcyjne systemy LLM i agentowe workflow.',
    'hero.intro':
      'AI Engineer specjalizujący się w systemach opartych na LLM, architekturach agentowych i automatyzacji procesów biznesowych — dostarczam rozwiązania łączące modele językowe z realnymi platformami, danymi i API.',
    'hero.cta.work': 'Zobacz projekty',
    'hero.cta.cv': 'Pobierz CV',

    'about.label': 'O mnie',
    'about.title': 'Inżynier, nie hobbysta',
    'about.education': 'Edukacja',
    'about.languages': 'Języki',
    'about.based': 'Lokalizacja',
    'about.basedValue': 'Gdańsk, Polska',
    'about.langValue': 'Polski (ojczysty) · Angielski (B2)',

    'work.label': 'Doświadczenie',
    'work.title': 'Gdzie dostarczałem',
    'work.present': 'Obecnie',
    'work.stack': 'Technologie',

    'projects.label': 'Wybrane projekty',
    'projects.title': 'Co zbudowałem',
    'projects.code': 'Kod',
    'projects.demo': 'Demo',

    'skills.label': 'Narzędzia',
    'skills.title': 'Z czym pracuję',

    'contact.label': 'Kontakt',
    'contact.title': 'Zbudujmy coś razem',
    'contact.intro':
      'Otwarty na role w inżynierii AI oraz współpracę przy produktach agentowych i opartych na LLM. Najszybciej złapiesz mnie mailowo.',
    'contact.email': 'Napisz do mnie',

    'footer.built': 'Zbudowane z Astro i Tailwind.',
    'footer.rights': 'Wszelkie prawa zastrzeżone.',
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['en']): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
