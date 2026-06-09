import type { Lang } from '@/i18n/ui';

export interface Experience {
  company: string;
  url?: string;
  role: Record<Lang, string>;
  period: Record<Lang, string>;
  current?: boolean;
  summary: Record<Lang, string>;
  highlights: Record<Lang, string[]>;
  stack: string[];
}

export const experience: Experience[] = [
  {
    company: 'autoMEE',
    url: 'https://automee.pl',
    role: { en: 'AI Developer', pl: 'AI Developer' },
    period: { en: 'Mar 2025 — Present', pl: '03.2025 — obecnie' },
    current: true,
    summary: {
      en: 'Designing and shipping production AI: an accounting-document workflow platform and tailor-made agentic automations integrating LLMs with ERP systems and external APIs.',
      pl: 'Projektowanie i wdrażanie produkcyjnego AI: platformy workflow dla dokumentów księgowych oraz szytych na miarę automatyzacji agentowych łączących LLM z systemami ERP i zewnętrznymi API.',
    },
    highlights: {
      en: [
        'Build core document-processing logic for Flowmee, the accounting workflow platform — extraction, validation, and handling of data from invoices, CMR, and accounting documents.',
        'Design and ship client ERP integrations end-to-end: technical client contact, process analysis, data mapping, and integration logic.',
        'Build tailor-made agentic workflows integrating OpenAI and Claude with ERP systems, tools, and external APIs — largely on n8n.',
        'Design AI logic that validates accounting values and reconciles source documents against data entered into ERP systems.',
        'Use Claude Code and Codex for iterative delivery — prompt → generate → validate → refactor — to accelerate production features.',
        'Manage model context and sessions: task decomposition, token control, and structured prompting for complex business workflows.',
      ],
      pl: [
        'Tworzę kluczową logikę przetwarzania dokumentów w Flowmee — platformie workflow dla księgowości — ekstrakcję, walidację i obsługę danych z faktur, CMR i dokumentów księgowych.',
        'Projektuję i wdrażam integracje z systemami ERP klientów end-to-end: kontakt techniczny z klientem, analizę procesu, mapowanie danych i logikę integracyjną.',
        'Buduję szyte na miarę workflow agentowe integrujące OpenAI i Claude z systemami ERP, narzędziami i zewnętrznymi API — głównie w n8n.',
        'Projektuję logikę AI walidującą wartości księgowe i porównującą dokumenty źródłowe z danymi wprowadzanymi do systemów ERP.',
        'Wykorzystuję Claude Code i Codex do iteracyjnej pracy — prompt → kod → walidacja → refaktor — przyspieszając dostarczanie funkcji produkcyjnych.',
        'Zarządzam kontekstem i sesjami modeli: dekompozycja zadań, kontrola tokenów i ustrukturyzowane prompty dla złożonych workflow biznesowych.',
      ],
    },
    stack: ['Python', 'TypeScript', 'OpenAI API', 'Claude', 'Claude Code', 'Codex', 'n8n', 'REST API', 'Playwright', 'Docker'],
  },
  {
    company: 'MLJAR',
    url: 'https://mljar.com',
    role: { en: 'Junior Data Scientist', pl: 'Junior Data Scientist' },
    period: { en: 'Jun 2024 — Oct 2024', pl: '06.2024 — 10.2024' },
    summary: {
      en: 'Contributed to mljar-supervised, the open-source AutoML library — improving reliability of core modules and authoring developer-facing documentation.',
      pl: 'Współtworzyłem mljar-supervised, otwartoźródłową bibliotekę AutoML — poprawiając niezawodność kluczowych modułów i tworząc dokumentację techniczną.',
    },
    highlights: {
      en: [
        'Co-developed the mljar-supervised AutoML library: training-pipeline optimization and stabilization of core components.',
        'Diagnosed and fixed bugs in core modules, improving reliability of the open-source software.',
        'Authored technical documentation and real-world AutoML use-case examples.',
        'Published technical articles on AutoML and modeling best practices.',
      ],
      pl: [
        'Współtworzyłem bibliotekę AutoML mljar-supervised: optymalizacja pipeline’u treningowego i stabilizacja kluczowych komponentów.',
        'Diagnozowałem i naprawiałem błędy w głównych modułach, podnosząc niezawodność oprogramowania open-source.',
        'Tworzyłem dokumentację techniczną i przykłady zastosowań AutoML na realnych danych.',
        'Publikowałem artykuły techniczne o AutoML i dobrych praktykach modelowania.',
      ],
    },
    stack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'mljar-supervised', 'Git'],
  },
];
