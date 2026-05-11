import {
    clearProgress,
    setSelectedLanguage,
    markVideoCompleted,
    unmarkVideoCompleted,
    isVideoCompleted,
  } from "@/lib/storage";
  
  describe("Progress handling", () => {
    beforeEach(() => {
      clearProgress();
    });
  
    test("should remove completed video progress correctly", () => {
      const videoId = "2fe0de6e-bee7-478b-8624-f1b494b128cf";
  
      setSelectedLanguage("no");
  
      markVideoCompleted(videoId);
  
      expect(isVideoCompleted(videoId)).toBe(true);
  
      unmarkVideoCompleted(videoId);
  
      expect(isVideoCompleted(videoId)).toBe(false);
    });
  });