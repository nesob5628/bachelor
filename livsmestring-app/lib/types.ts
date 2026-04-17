export interface Topic {
  language: string;
  category: string;
  theme: string;
  groupId?: string;
  groupTitle?: string;
  subtopicId?: string;
  subtopicTitle?: string;
  title: string;
  synthesiaId: string;
  order: number | "";
}