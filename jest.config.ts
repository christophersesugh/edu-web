import nextJest from "next/jest";

const createJestConfig = nextJest({ dir: "." });

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
};

export default createJestConfig(customJestConfig);
