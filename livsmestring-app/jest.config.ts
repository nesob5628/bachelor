import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  // Use the browser-like DOM environment expected by React tests.
  testEnvironment: "jsdom",
};

export default createJestConfig(config);