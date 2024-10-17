module.exports = {
  collectCoverage: false,
  collectCoverageFrom: [],
  coverageDirectory: '',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!ol|color-space|color-rgba|color-parse|color-name|quick-lru|geotiff)',
    '\\.svg$',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/src/mocks/fileMock.js',
  },
};