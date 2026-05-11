import { translations } from "@/lib/translations";

describe("Translation fallback", () => {
  test("should fallback to norwegian when translation is missing", () => {
    const selectedLanguage = "ar";

    const safeLanguage =
      translations[selectedLanguage]
        ? selectedLanguage
        : "no";

    expect(safeLanguage).toBe("no");
  });
});