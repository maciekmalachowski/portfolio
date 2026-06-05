import type { Lang } from '@/i18n/ui';

export interface SkillGroup {
  label: Record<Lang, string>;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: { en: 'Languages', pl: 'Języki programowania' },
    items: ['Python', 'JavaScript', 'TypeScript'],
  },
  {
    label: { en: 'AI & LLM Systems', pl: 'Systemy AI i LLM' },
    items: ['Agentic AI', 'RAG', 'Prompt Engineering', 'LangChain', 'LlamaIndex', 'OpenAI API', 'Claude', 'Gemini', 'Hugging Face'],
  },
  {
    label: { en: 'ML & Data', pl: 'ML i dane' },
    items: ['Scikit-learn', 'mljar-supervised', 'Pandas', 'NumPy'],
  },
  {
    label: { en: 'Automation & Integrations', pl: 'Automatyzacja i integracje' },
    items: ['REST API', 'Webhooks', 'n8n', 'Zapier', 'GoHighLevel', 'Voiceflow'],
  },
  {
    label: { en: 'Backend & Apps', pl: 'Backend i aplikacje' },
    items: ['Next.js', 'Flask', 'Streamlit', 'Supabase', 'Docker', 'Playwright'],
  },
  {
    label: { en: 'Tools', pl: 'Narzędzia' },
    items: ['Git', 'GitHub', 'Linux', 'Claude Code'],
  },
];
