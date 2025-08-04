module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapping: {
    '^react-native$': 'react-native-web',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  testMatch: [
    '<rootDir>/**/__tests__/**/*.(js|jsx|ts|tsx)',
    '<rootDir>/**/?(*.)(spec|test).(js|jsx|ts|tsx)',
  ],
  collectCoverageFrom: [
    '**/*.(js|jsx|ts|tsx)',
    '!**/*.d.ts',
    '!node_modules/**',
    '!web-build/**',
  ],
};
