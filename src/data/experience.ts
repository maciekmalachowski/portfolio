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
        'Developing the core of Flowmee, an accounting document workflow platform — document-processing logic, process automation, and handling of data extracted from invoices, CMR and accounting documents.',
        'Designing and delivering integrations with client ERP systems — technical client communication, implementation analysis, data mapping, integration logic, and workflow construction primarily in n8n.',
        'Building tailor-made solutions fit to clients’ operational, document and accounting processes — automating data flow between systems, validating documents, and streamlining business teams’ work.',
        'Designing AI logic for document processing and data extraction, validating accounting values, and reconciling data from source documents against entries in ERP systems.',
        'Using AI-assisted development tools like Claude Code and Codex to speed up prototyping, refactoring, testing, and shipping production features.',
        'Implementing advanced automations across document handling, systems integration, data processing, client communication, and operational process optimization.',
        'Managing context when working with LLMs — structuring prompts, breaking tasks into stages, and designing stable flows for complex business processes.',
      ],
      pl: [
        'Rozwój rdzenia Flowmee — platformy obiegu dokumentów księgowych: projektowanie logiki przetwarzania dokumentów, automatyzacja procesów oraz obsługa danych wyciąganych z faktur, CMR i dokumentów księgowych.',
        'Projektowanie i wdrażanie integracji z systemami ERP klientów — kontakt techniczny z klientem, analiza procesu wdrożeniowego, mapowanie danych, logika integracyjna oraz budowa workflow głównie w n8n.',
        'Tworzenie rozwiązań tailor-made dopasowanych do procesów operacyjnych, dokumentowych i księgowych klientów — automatyzacja przepływu danych między systemami, walidacja dokumentów oraz usprawnianie pracy zespołów biznesowych.',
        'Projektowanie logiki AI do przetwarzania dokumentów i ekstrakcji danych, walidacji wartości księgowych oraz porównywania danych z dokumentów źródłowych z danymi wprowadzanymi do systemów ERP.',
        'Korzystanie z narzędzi wspierających development AI, takich jak Claude Code i Codex, do szybszego prototypowania, refaktoryzacji, testowania i rozwijania funkcjonalności produkcyjnych.',
        'Wdrażanie zaawansowanych automatyzacji: obsługa dokumentów, integracje systemowe, przetwarzanie danych, komunikacja z klientem oraz optymalizacja procesów operacyjnych.',
        'Zarządzanie kontekstem pracy z modelami LLM — strukturyzowanie promptów, dzielenie zadań na etapy oraz projektowanie stabilnych przepływów dla złożonych procesów biznesowych.',
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
        'Co-developing the MLJAR-supervised library (AutoML) — optimizing training pipelines and stabilizing system components.',
        'Diagnosing and fixing bugs in the library’s core modules, improving the reliability of the open-source software.',
        'Authoring and maintaining technical documentation for users and developers.',
        'Building AutoML use-case examples on real-world datasets.',
        'Writing technical articles on AutoML and modeling best practices.',
      ],
      pl: [
        'Współtworzenie i rozwój biblioteki MLJAR-supervised (AutoML) — optymalizacja pipeline’ów treningowych oraz stabilizacja komponentów systemu.',
        'Diagnozowanie i usuwanie błędów w kluczowych modułach biblioteki, zwiększające niezawodność oprogramowania open-source.',
        'Tworzenie i utrzymywanie dokumentacji technicznej dla użytkowników i deweloperów.',
        'Przygotowywanie przykładów zastosowań AutoML na rzeczywistych zbiorach danych.',
        'Publikowanie artykułów technicznych z zakresu AutoML i praktyk modelowania.',
      ],
    },
    stack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'mljar-supervised', 'Git'],
  },
];
