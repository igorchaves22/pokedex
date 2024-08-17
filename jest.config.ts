import type { Config } from "jest";

const config: Config = {
    clearMocks: true,
    collectCoverage: false,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    moduleNameMapper: {
        "\\.(svg|png)$": "<rootDir>/src/tests/fileMock.ts",
        "^~assets/(.*)$": "<rootDir>/src/assets/$1",
        "^~components/(.*)$": "<rootDir>/src/components/$1",
        "^~contexts/(.*)$": "<rootDir>/src/contexts/$1",
        "^~contexts$": "<rootDir>/src/contexts",
        "^~hooks/(.*)$": "<rootDir>/src/hooks/$1",
        "^~hooks$": "<rootDir>/src/hooks",
        "^~pages/(.*)$": "<rootDir>/src/pages/$1",
        "^~pages$": "<rootDir>/src/pages",
        "^~services/(.*)$": "<rootDir>/src/services/$1",
        "^~services$": "<rootDir>/src/services",
        "^~styles/(.*)$": "<rootDir>/src/styles/$1",
        "^~styles$": "<rootDir>/src/styles",
        "^~tests/(.*)$": "<rootDir>/src/tests/$1",
        "^~tests$": "<rootDir>/src/tests",
        "^~types/(.*)$": "<rootDir>/src/types/$1",
        "^~types$": "<rootDir>/src/types",
        "^~utils/(.*)$": "<rootDir>/src/utils/$1",
        "^~utils$": "<rootDir>/src/utils"
    },
    preset: "ts-jest",
    setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
    testEnvironment: "jest-environment-jsdom",
    testMatch: ["<rootDir>/src/components/**/*.spec.(ts|tsx)"],
    transform: {
        "^.+\\.(ts|tsx)$": [
            "ts-jest",
            {
                tsconfig: "tsconfig.app.json"
            }
        ]
    },
    transformIgnorePatterns: ["/node_modules/"]
};

export default config;
