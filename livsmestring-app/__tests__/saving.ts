
import { getProgress } from "@/lib/storage";

// Invalid input
describe("Storage error handling", () => {
  test("should return default progress when localStorage contains invalid JSON", () => {
    localStorage.setItem("livsmestring-progress", "{bad json");

    const progress = getProgress();

    expect(progress).toEqual({
      selectedLanguage: undefined,
      languages: {},
    });
  });

  test("should return default progress when window is undefined", () => {
    const originalWindow = global.window;

    // @ts-ignore
    delete global.window;

    const progress = getProgress();

    expect(progress).toEqual({
      selectedLanguage: undefined,
      languages: {},
    });

    global.window = originalWindow;
  });

  test("should start with empty progress when no data in localStorage", () => {
    localStorage.removeItem("livsmestring-progress");

    const progress = getProgress();

    expect(progress).toEqual({
      selectedLanguage: undefined,
      languages: {},
    });
  });
});