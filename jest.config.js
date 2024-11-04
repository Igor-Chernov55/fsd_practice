const {resolve} = require("node:path");
module.exports = {
  collectCoverage: false,
  collectCoverageFrom: [],
  coverageDirectory: '',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!ol|color-space|color-rgba|color-parse|color-name|quick-lru|geotiff)',
    // '\\.svg$',
  ],
  modulePaths: [
      '<rootDir>src'
  ]
  ,
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.svg': resolve(__dirname, 'jestEmptyComponent.tsx'),
  }
};