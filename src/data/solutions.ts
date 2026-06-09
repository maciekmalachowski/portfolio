import type { Lang } from '@/i18n/ui';

// Production solutions delivered for clients at autoMEE. No public repos —
// these are confidential client engagements, so cards carry no source links.
export interface Solution {
  name: Record<Lang, string>;
  context: string;
  tagline: Record<Lang, string>;
  highlights: Record<Lang, string[]>;
  tech: string[];
}

export const solutions: Solution[] = [
  {
    name: {
      en: 'Sea-Freight Rate Search & Comparison Platform',
      pl: 'Platforma do wyszukiwania i porównywania stawek frachtu morskiego',
    },
    context: 'autoMEE',
    tagline: {
      en: 'Scraping agents and an AI layer that automate finding, comparing, and sharing sea-freight rates across carriers.',
      pl: 'Agenci scrapujący i warstwa AI automatyzują wyszukiwanie, porównywanie i udostępnianie stawek frachtu morskiego od wielu armatorów.',
    },
    highlights: {
      en: [
        'Designed a multi-carrier platform that scrapes, normalizes, and stores freight rates in a database.',
        'Built scraping agents that pull rates from carrier sources and persist them for downstream querying.',
        'Created an AI layer for searching, analyzing, and presenting rates across a large volume of offers.',
        'Replaced manual, multi-source rate checking with an automated pipeline.',
      ],
      pl: [
        'Zaprojektowałem platformę obsługującą wielu armatorów, która scrapuje, normalizuje i zapisuje stawki frachtu w bazie danych.',
        'Zbudowałem agentów scrapujących, którzy pobierają stawki ze źródeł armatorów i utrwalają je do dalszego odpytywania.',
        'Stworzyłem warstwę AI do wyszukiwania, analizy i prezentacji stawek przy dużej liczbie ofert.',
        'Zastąpiłem ręczne sprawdzanie wielu źródeł zautomatyzowanym procesem.',
      ],
    },
    tech: ['Python', 'Playwright', 'Claude', 'OpenAI', 'n8n', 'Supabase'],
  },
  {
    name: {
      en: 'Invoice & CMR → Excel Extraction System',
      pl: 'System AI: faktury i CMR → szablony Excel',
    },
    context: 'autoMEE',
    tagline: {
      en: 'Extracts data from carrier invoices and CMR documents into structured Excel templates.',
      pl: 'Wyciąga dane z faktur przewoźników i dokumentów CMR do ustrukturyzowanych szablonów Excel.',
    },
    highlights: {
      en: [
        'Built a system that extracts data from carrier invoices and CMR documents and transforms it into structured Excel templates.',
        'Designed extraction, mapping, and normalization logic to feed downstream operational and accounting processing.',
        'Extended it with a foreign-invoice module handling varied document formats and data structures.',
        'Cut manual data re-entry and accelerated file preparation for the client.',
      ],
      pl: [
        'Zbudowałem system wyciągający dane z faktur przewoźników i dokumentów CMR i przekształcający je w ustrukturyzowane szablony Excel.',
        'Zaprojektowałem logikę ekstrakcji, mapowania i normalizacji danych pod dalsze przetwarzanie operacyjne i księgowe.',
        'Rozszerzyłem rozwiązanie o moduł faktur zagranicznych obsługujący różne formaty i struktury dokumentów.',
        'Ograniczyłem ręczne przepisywanie danych i przyspieszyłem przygotowanie plików dla klienta.',
      ],
    },
    tech: ['Python', 'OpenAI', 'n8n'],
  },
  {
    name: {
      en: 'Accounting Data Validator for ERP',
      pl: 'Walidator danych księgowych dla ERP',
    },
    context: 'autoMEE',
    tagline: {
      en: 'AI validation that cross-checks hundreds of accounting rows against source documents before ERP import.',
      pl: 'Walidacja AI porównująca setki wierszy danych księgowych z dokumentami źródłowymi przed importem do ERP.',
    },
    highlights: {
      en: [
        'Designed and shipped AI logic that validates client-submitted accounting data against its source attachments.',
        'Compares hundreds of rows of accounting data against values on invoices and source documents.',
        'Automatically flags discrepancies between ERP entries and source documents, reducing human error.',
        'Surfaces potential mismatches to operational teams before the final import into the system.',
      ],
      pl: [
        'Zaprojektowałem i wdrożyłem logikę AI walidującą dane księgowe przesłane przez klienta względem załączonych dokumentów źródłowych.',
        'Porównuje setki wierszy danych księgowych z wartościami na fakturach i dokumentach źródłowych.',
        'Automatycznie wykrywa rozbieżności między danymi w ERP a dokumentami, ograniczając błędy ludzkie.',
        'Wskazuje zespołom operacyjnym potencjalne niezgodności przed finalnym importem do systemu.',
      ],
    },
    tech: ['Python', 'OpenAI', 'n8n'],
  },
];
