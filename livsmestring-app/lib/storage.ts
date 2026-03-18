const STORAGE_KEY = "livsmestring-progress";

export type Progress = {
  language?: string;
  category?: string;
  currentThemeId?: string;
  currentVideoId?: string;
};

const defaultProgress: Progress = {};

export function getProgress(): Progress {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : defaultProgress;
  } catch (error) {
    console.error("Error reading progress:", error);
    return defaultProgress;
  }
}

export function saveProgress(progress: Progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error("Error saving progress:", error);
  }
}