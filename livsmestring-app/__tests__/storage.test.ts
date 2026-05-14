import {
  clearProgress,
  clearSelectedLanguage,
  getCompletedVideos,
  getCurrentLanguageProgress,
  getProgress,
  getThemeProgress,
  isThemeCompleted,
  isVideoCompleted,
  markThemeCompleted,
  markVideoCompleted,
  saveProgress,
  setCategory,
  setCurrentVideo,
  setProgress,
  setSelectedLanguage,
  setSubtopic,
  setTheme,
  unmarkVideoCompleted,
} from "@/lib/storage";

describe("storage progress helpers", () => {
  beforeEach(() => {
    clearProgress();
    jest.restoreAllMocks();
  });

  test("getProgress returns defaults when storage key is missing", () => {
    expect(getProgress()).toEqual({
      selectedLanguage: undefined,
      languages: {},
    });
  });

  test("setProgress writes directly to localStorage", () => {
    const progress = {
      selectedLanguage: "en",
      languages: {
        en: { category: "health" },
      },
    };

    setProgress(progress);

    expect(getProgress()).toEqual(progress);
  });

  test("getProgress normalizes missing languages in persisted data", () => {
    localStorage.setItem(
      "livsmestring-progress",
      JSON.stringify({ selectedLanguage: "no" })
    );

    expect(getProgress()).toEqual({
      selectedLanguage: "no",
      languages: {},
    });
  });

  test("saveProgress handles storage write failures", () => {
    const errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("disk full");
    });

    saveProgress({ selectedLanguage: "no", languages: {} });

    expect(errorSpy).toHaveBeenCalledWith(
      "Error saving progress:",
      expect.any(Error)
    );
  });

  test("language selection creates a language entry and can be cleared", () => {
    setSelectedLanguage("ar");

    expect(getProgress()).toEqual({
      selectedLanguage: "ar",
      languages: { ar: {} },
    });

    clearSelectedLanguage();

    expect(getProgress()).toEqual({
      selectedLanguage: undefined,
      languages: { ar: {} },
    });
  });

  test("category, theme, subtopic and current video update selected language progress", () => {
    setSelectedLanguage("uk");
    setCategory("health");
    setTheme("anxiety");
    setSubtopic("sub-1");
    setCurrentVideo("video-1");

    expect(getCurrentLanguageProgress()).toEqual({
      category: "health",
      theme: "anxiety",
      subtopicId: "sub-1",
      synthesiaId: "video-1",
    });
  });

  test("setters requiring selected language are no-ops when no language is selected", () => {
    setCategory("health");
    setTheme("anxiety");
    setSubtopic("sub-1");
    setCurrentVideo("video-1");

    expect(getProgress()).toEqual({
      selectedLanguage: undefined,
      languages: {},
    });
    expect(getCurrentLanguageProgress()).toBeUndefined();
  });

  test("theme completion helpers avoid duplicates and compute progress", () => {
    setSelectedLanguage("no");

    markThemeCompleted("theme-1");
    markThemeCompleted("theme-2");
    markThemeCompleted("theme-1");

    expect(isThemeCompleted("theme-1")).toBe(true);
    expect(isThemeCompleted("theme-3")).toBe(false);
    expect(getThemeProgress(3)).toBe(67);
    expect(getThemeProgress(0)).toBe(0);
  });

  test("isThemeCompleted returns false without selected language", () => {
    expect(isThemeCompleted("theme-1")).toBe(false);
  });

  test("video completion helpers mark, unmark and list completed videos", () => {
    setSelectedLanguage("en");

    markVideoCompleted("video-1");
    markVideoCompleted("video-2");
    markVideoCompleted("video-1");

    expect(isVideoCompleted("video-1")).toBe(true);
    expect(getCompletedVideos()).toEqual(["video-1", "video-2"]);

    unmarkVideoCompleted("video-1");

    expect(isVideoCompleted("video-1")).toBe(false);
    expect(getCompletedVideos()).toEqual(["video-2"]);
  });

  test("video helpers return defaults when language is not selected", () => {
    expect(isVideoCompleted("video-1")).toBe(false);
    expect(getCompletedVideos()).toEqual([]);

    unmarkVideoCompleted("video-1");

    expect(getProgress()).toEqual({
      selectedLanguage: undefined,
      languages: {},
    });
  });
});
