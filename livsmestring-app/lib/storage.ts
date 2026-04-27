const STORAGE_KEY = "livsmestring-progress";

export type LanguageProgress = {
  category?: string;
  theme?: string;
  subtopicId?: string;
  synthesiaId?: string;
  completedThemes?: string[];
  completedVideos?: string[];
};

export type Progress = {
  selectedLanguage?: string;
  languages: Record<string, LanguageProgress>;
};

const defaultProgress: Progress = {
  selectedLanguage: undefined,
  languages: {},
};

export const setProgress = (progress: Progress) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

export function getProgress(): Progress {
  if (typeof window === "undefined") {
    return defaultProgress;
  }

  try {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
      return defaultProgress;
    }

    const parsed = JSON.parse(data);

    return {
      selectedLanguage: parsed.selectedLanguage,
      languages: parsed.languages ?? {},
    };
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
  const languages = progress.languages ?? {};

  saveProgress({
    ...progress,
    selectedLanguage: language,
    languages: {
      ...languages,
      [language]: languages[language] || {},
    },
  });
}

export function setCategory(category: string) {
  const progress = getProgress();
  const language = progress.selectedLanguage;
  const languages = progress.languages ?? {};

  if (!language) return;

  saveProgress({
    ...progress,
    languages: {
      ...languages,
      [language]: {
        ...(languages[language] || {}),
        category,
      },
    },
  });
}

export function setTheme(theme: string) {
  const progress = getProgress();
  const language = progress.selectedLanguage;
  const languages = progress.languages ?? {};

  if (!language) return;

  saveProgress({
    ...progress,
    languages: {
      ...languages,
      [language]: {
        ...(languages[language] || {}),
        theme,
      },
    },
  });
}

export function setSubtopic(subtopicId: string) {
  const progress = getProgress();
  const language = progress.selectedLanguage;
  const languages = progress.languages ?? {};

  if (!language) return;

  saveProgress({
    ...progress,
    languages: {
      ...languages,
      [language]: {
        ...(languages[language] || {}),
        subtopicId,
      },
    },
  });
}

export function setCurrentVideo(synthesiaId: string) {
  const progress = getProgress();
  const language = progress.selectedLanguage;
  const languages = progress.languages ?? {};

  if (!language) return;

  saveProgress({
    ...progress,
    languages: {
      ...languages,
      [language]: {
        ...(languages[language] || {}),
        synthesiaId,
      },
    },
  });
}

export function markThemeCompleted(themeId: string) {
  const progress = getProgress();
  const language = progress.selectedLanguage;
  const languages = progress.languages ?? {};

  if (!language) return;

  const currentLanguageProgress = languages[language] || {};
  const completedThemes = currentLanguageProgress.completedThemes ?? [];

  if (completedThemes.includes(themeId)) return;

  saveProgress({
    ...progress,
    languages: {
      ...languages,
      [language]: {
        ...currentLanguageProgress,
        completedThemes: [...completedThemes, themeId],
      },
    },
  });
}

export function isThemeCompleted(themeId: string): boolean {
  const progress = getProgress();
  const language = progress.selectedLanguage;

  if (!language) return false;

  const completedThemes =
    progress.languages?.[language]?.completedThemes ?? [];

  return completedThemes.includes(themeId);
}

export function getThemeProgress(totalThemes: number): number {
  const progress = getProgress();
  const language = progress.selectedLanguage;

  if (!language || totalThemes === 0) return 0;

  const completedThemes =
    progress.languages?.[language]?.completedThemes ?? [];

  return Math.round((completedThemes.length / totalThemes) * 100);
}

export function getCurrentLanguageProgress(): LanguageProgress | undefined {
  const progress = getProgress();
  const language = progress.selectedLanguage;

  if (!language) return undefined;

  return progress.languages?.[language];
}

export function clearProgress() {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
}

export function clearSelectedLanguage() {
  const progress = getProgress();

  saveProgress({
    ...progress,
    selectedLanguage: undefined,
  });
}

export function markVideoCompleted(synthesiaId: string) {
  const progress = getProgress();
  const language = progress.selectedLanguage;
  const languages = progress.languages ?? {};

  if (!language) return;

  const currentLanguageProgress = languages[language] || {};
  const completedVideos = currentLanguageProgress.completedVideos ?? [];

  if (completedVideos.includes(synthesiaId)) return;

  saveProgress({
    ...progress,
    languages: {
      ...languages,
      [language]: {
        ...currentLanguageProgress,
        completedVideos: [...completedVideos, synthesiaId],
      },
    },
  });
}
export function unmarkVideoCompleted(synthesiaId: string) {
  const progress = getProgress();
  const language = progress.selectedLanguage;
  const languages = progress.languages ?? {};

  if (!language) return;

  const currentLanguageProgress = languages[language] || {};
  const completedVideos = currentLanguageProgress.completedVideos ?? [];

  saveProgress({
    ...progress,
    languages: {
      ...languages,
      [language]: {
        ...currentLanguageProgress,
        completedVideos: completedVideos.filter((id) => id !== synthesiaId),
      },
    },
  });
}

export function isVideoCompleted(synthesiaId: string): boolean {
  const progress = getProgress();
  const language = progress.selectedLanguage;

  if (!language) return false;

  const completedVideos =
    progress.languages?.[language]?.completedVideos ?? [];

  return completedVideos.includes(synthesiaId);
}

export function getCompletedVideos(): string[] {
  const progress = getProgress();
  const language = progress.selectedLanguage;

  if (!language) return [];

  return progress.languages?.[language]?.completedVideos ?? [];
}