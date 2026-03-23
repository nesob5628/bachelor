const STORAGE_KEY = "livsmestring-progress";

export type LanguageProgress = {
  category?: string;
  theme?: string;
  subtopicId?: string;
  synthesiaId?: string;
};

export type Progress = {
  selectedLanguage?: string;
  languages: Record<string, LanguageProgress>;
};

const defaultProgress: Progress = {
  selectedLanguage: undefined,
  languages: {},
};

export function getProgress(): Progress {
  if (typeof window === "undefined") {
    return defaultProgress;
  }

  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : defaultProgress;
  } catch (error) {
    console.error("Error reading progress:", error);
    return defaultProgress;
  }
}

export function saveProgress(progress: Progress) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error("Error saving progress:", error);
  }
}

export function setSelectedLanguage(language: string) {
  const progress = getProgress();

  saveProgress({
    ...progress,
    selectedLanguage: language,
    languages: {
      ...progress.languages,
      [language]: progress.languages[language] || {},
    },
  });
}

export function setCategory(category: string) {
  const progress = getProgress();
  const language = progress.selectedLanguage;

  if (!language) return;

  saveProgress({
    ...progress,
    languages: {
      ...progress.languages,
      [language]: {
        ...progress.languages[language],
        category,
      },
    },
  });
}

export function setTheme(theme: string) {
  const progress = getProgress();
  const language = progress.selectedLanguage;

  if (!language) return;

  saveProgress({
    ...progress,
    languages: {
      ...progress.languages,
      [language]: {
        ...progress.languages[language],
        theme,
      },
    },
  });
}

export function setSubtopic(subtopicId: string) {
  const progress = getProgress();
  const language = progress.selectedLanguage;

  if (!language) return;

  saveProgress({
    ...progress,
    languages: {
      ...progress.languages,
      [language]: {
        ...progress.languages[language],
        subtopicId,
      },
    },
  });
}

export function setCurrentVideo(synthesiaId: string) {
  const progress = getProgress();
  const language = progress.selectedLanguage;

  if (!language) return;

  saveProgress({
    ...progress,
    languages: {
      ...progress.languages,
      [language]: {
        ...progress.languages[language],
        synthesiaId,
      },
    },
  });
}

export function getCurrentLanguageProgress(): LanguageProgress | undefined {
  const progress = getProgress();
  const language = progress.selectedLanguage;

  if (!language) return undefined;

  return progress.languages[language];
}

export function clearProgress() {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
}