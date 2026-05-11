import {
    clearProgress,
    setSelectedLanguage,
    markVideoCompleted,
    isVideoCompleted,
  } from "@/lib/storage";
  
  describe("Progress handling", () => {
    beforeEach(() => {
      clearProgress();
    });
  
    test("should save completed video progress correctly", () => {
      const videoId = "2fe0de6e-bee7-478b-8624-f1b494b128cf";
  
      setSelectedLanguage("no");
      markVideoCompleted(videoId);
  
      expect(isVideoCompleted(videoId)).toBe(true);
    });
  });