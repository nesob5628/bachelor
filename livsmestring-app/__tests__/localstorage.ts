import { getProgress } from "@/lib/storage";

describe("Error handling for localStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("should return default progress when localStorage contains invalid JSON", () => {
    localStorage.setItem(
      "livsmestring-progress",
      "{invalid json}"
    );

    const progress = getProgress();

    expect(progress).toEqual({
      selectedLanguage: undefined,
      languages: {},
    });
  });
});