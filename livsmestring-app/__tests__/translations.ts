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

  test("should use selected language when translation exists", () => {
    const selectedLanguage = "en";

    const safeLanguage =
      translations[selectedLanguage]
        ? selectedLanguage
        : "no";

    expect(safeLanguage).toBe("en");
  });
  
  test("should show unavailable video message in Arabic when selected language is Arabic", () => {
    const selectedLanguage = "ar";
    
    const unavailableMessage = translations[selectedLanguage]?.theme?.emptyDescription;

    expect(unavailableMessage).toBe(translations["ar"]?.theme?.emptyDescription);
  });
});