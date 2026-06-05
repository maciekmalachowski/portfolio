import type { Lang } from '@/i18n/ui';

export interface Project {
  name: string;
  year: string;
  tagline: Record<Lang, string>;
  description: Record<Lang, string>;
  tech: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    name: 'AI Budget Assistant',
    year: '2026',
    tagline: {
      en: 'Bank-statement CSVs → categorized, queryable spending — powered by Claude.',
      pl: 'CSV z wyciągów bankowych → skategoryzowane, odpytywalne wydatki — napędzane przez Claude.',
    },
    description: {
      en: 'A full-stack personal finance app. A headerless, position-based CSV importer auto-detects each bank’s layout; categorization is rules-first (learned merchant map) with Claude Haiku batched only for unknowns. A plain-language Q&A panel answers questions via tool-calling over read-only query functions executed through a SELECT-only database role — the LLM never writes SQL. Built with strict TypeScript, pure I/O-free domain logic, and a Vitest suite.',
      pl: 'Pełnostackowa aplikacja do finansów osobistych. Beznagłówkowy, pozycyjny importer CSV automatycznie wykrywa układ każdego banku; kategoryzacja działa najpierw na regułach (uczona mapa sprzedawców), a Claude Haiku jest wsadowo wołany tylko dla nieznanych. Panel Q&A w języku naturalnym odpowiada przez tool-calling po funkcjach tylko-do-odczytu wykonywanych przez rolę bazy SELECT-only — model nigdy nie pisze SQL. Ścisły TypeScript, czysta logika domenowa bez I/O i testy Vitest.',
    },
    tech: ['Next.js 15', 'React 19', 'TypeScript', 'Supabase', 'Claude (Anthropic SDK)', 'Tailwind v4', 'Zod', 'Vitest'],
    github: 'https://github.com/maciekmalachowski/ai-budget-assistant',
  },
  {
    name: 'SmartMailer',
    year: '2025',
    tagline: {
      en: 'A multi-LLM agent that automates email, data retrieval, and record-keeping.',
      pl: 'Agent multi-LLM automatyzujący e-maile, pozyskiwanie danych i prowadzenie rekordów.',
    },
    description: {
      en: 'A Python agent that sends personalized emails, queries company data, and manages records. GPT-4 Turbo drives decision-making while a local Ollama Llama model handles data analysis; LlamaIndex provides natural-language access over the data, with Pandas, smtplib and PyYAML wiring the automation together for minimal-touch workflows.',
      pl: 'Agent w Pythonie wysyłający spersonalizowane e-maile, odpytujący dane firmowe i zarządzający rekordami. GPT-4 Turbo odpowiada za decyzje, a lokalny model Ollama Llama za analizę danych; LlamaIndex zapewnia dostęp w języku naturalnym, a Pandas, smtplib i PyYAML spinają automatyzację w workflow z minimalną interwencją.',
    },
    tech: ['Python', 'OpenAI API', 'Ollama / Llama', 'LlamaIndex', 'Pandas'],
    github: 'https://github.com/maciekmalachowski/SmartMailer',
  },
  {
    name: 'Docs AI Chatbot',
    year: '2024',
    tagline: {
      en: 'Chat with your PDF and CSV files using a fully local LLM stack.',
      pl: 'Rozmawiaj ze swoimi plikami PDF i CSV przy użyciu w pełni lokalnego stacku LLM.',
    },
    description: {
      en: 'A retrieval-augmented chatbot for contextual interaction with documents. GPT4All (via LangChain) reads PDF and CSV content and a Mistral 7B model answers questions over it — all served through a clean Streamlit interface and packaged with Docker for reproducible local deployment.',
      pl: 'Chatbot z rozszerzonym wyszukiwaniem (RAG) do kontekstowej pracy z dokumentami. GPT4All (przez LangChain) czyta treść plików PDF i CSV, a model Mistral 7B odpowiada na pytania — wszystko w przejrzystym interfejsie Streamlit i spakowane w Dockerze dla powtarzalnego lokalnego wdrożenia.',
    },
    tech: ['Python', 'LangChain', 'GPT4All', 'Mistral 7B', 'Streamlit', 'Docker'],
    github: 'https://github.com/maciekmalachowski/Docs-ai-chatbot',
  },
];
