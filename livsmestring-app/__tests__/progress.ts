// Unit tests for progress helpers in `lib/storage`.
// These tests exercise marking/unmarking videos as completed and simple
// progress percentage calculations.
import {
  clearProgress,
  setSelectedLanguage,
  markVideoCompleted,
  isVideoCompleted,
  unmarkVideoCompleted,
} from "@/lib/storage";
import test, { expect } from "@playwright/test";
import { describe, beforeEach } from "node:test";

describe("Progress handling", () => {
  beforeEach(() => {
    clearProgress();
  });

  // Normal case
  test("should save completed video progress correctly", () => {
    const videoId = "2fe0de6e-bee7-478b-8624-f1b494b128cf";

    setSelectedLanguage("no");
    markVideoCompleted(videoId);

    expect(isVideoCompleted(videoId)).toBe(true);
  });

  // Normal case
  test("2 out of 4 videoes should give 50% progress", () => {
    const videoIds = [
      "46623012-eb25-4ed7-abd0-2600205c214c",
      "2d37ce0f-b99d-4739-a76f-4bc5f967a98c",
      "d4959ea3-d3dc-4e0b-906e-514489265c28",
      "d68a8ba6-4e56-44a8-8d43-3150d99fb5bc",
    ];

    setSelectedLanguage("no");
    markVideoCompleted(videoIds[0]);
    markVideoCompleted(videoIds[1]);

    const completedVideos = videoIds.filter(isVideoCompleted);
    const progress = (completedVideos.length / videoIds.length) * 100;

    expect(progress).toBe(50);
  });

  test("should remove completed video progress correctly", () => {
    const videoId = "2fe0de6e-bee7-478b-8624-f1b494b128cf";

    setSelectedLanguage("no");

    markVideoCompleted(videoId);

    expect(isVideoCompleted(videoId)).toBe(true);

    unmarkVideoCompleted(videoId);

    expect(isVideoCompleted(videoId)).toBe(false);
  });

  test("should remove only the seleted completed video", () => {
    const firstVideoId = "2fe0de6e-bee7-478b-8624-f1b494b128cf";
    const secondVideoId = "46623012-eb25-4ed7-abd0-2600205c214c";

    setSelectedLanguage("no");

    markVideoCompleted(firstVideoId);
    markVideoCompleted(secondVideoId);
    unmarkVideoCompleted(firstVideoId);

    expect(isVideoCompleted(firstVideoId)).toBe(false);
    expect(isVideoCompleted(secondVideoId)).toBe(true);
  });

  test("should calculate 100% progress under one theme when all videos are completed", () => {
    const videoIds = [
      "46623012-eb25-4ed7-abd0-2600205c214c",
      "2d37ce0f-b99d-4739-a76f-4bc5f967a98c",
      "d4959ea3-d3dc-4e0b-906e-514489265c28",
      "d68a8ba6-4e56-44a8-8d43-3150d99fb5bc",
    ];

    setSelectedLanguage("no");

    videoIds.forEach(markVideoCompleted);

    const completedVideos = videoIds.filter(isVideoCompleted);
    const progress = (completedVideos.length / videoIds.length) * 100;

    expect(progress).toBe(100);
  });
});