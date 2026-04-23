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