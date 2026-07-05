import { healthVideos } from "@/lib/videos/health_videos";

test("should return empty list for unavailable theme", () => {
    const videoes = healthVideos.filter(
        video => video.theme === "unknown_theme"
    );
    expect(videoes).toEqual([]);
    });

test("should return all videoes for a valid theme", () => {
    const videoes = healthVideos.filter(
        video => video.theme === "fysisk_aktivitet"
    );
    expect(videoes.length).toBeGreaterThan(0);
    expect(videoes.every(video => video.theme === "fysisk_aktivitet")).toBe(true);
    });

test("health should contain correct subtopics", () => {
