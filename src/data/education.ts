import type { Lang } from '@/i18n/ui';

export interface Education {
  school: string;
  url?: string;
  field: Record<Lang, string>;
  period: Record<Lang, string>;
}

export const education: Education[] = [
  {
    school: 'University of Gdańsk',
    url: 'https://ug.edu.pl',
    field: {
      en: 'BSc, Mathematical Modeling & Data Analysis',
      pl: 'Modelowanie matematyczne i analiza danych',
    },
    period: { en: '2023 — 2026 (expected)', pl: '2023 — 2026 (oczekiwane)' },
  },
  {
    school: 'ZSE im. prof. J. Groszkowskiego',
    field: {
      en: 'Programming Technician',
      pl: 'Technik Programista',
    },
    period: { en: '2019 — 2023', pl: '2019 — 2023' },
  },
];
