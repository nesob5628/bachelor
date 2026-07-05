// Shared shape for a video topic used throughout the app.
export interface Topic {
  language: string;
  category: "helse" | "karriere";
  theme: string;
  groupId: string | null;
  groupTitle?: string;
  subtopicId: string;
  subtopicTitle?: string;
  synthesiaId: string;
  order: number;
}