// Aggregate export for video topic mappings.
// This module combines all per-category video lists so callers can
// iterate over `topics` without importing each category separately.
import { healthVideos } from "./health_videos";
import { careerVideos } from "./career_videos";

export const topics = [...healthVideos, ...careerVideos];