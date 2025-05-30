module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
    '|@react-native' +
    '|@react-navigation' +
    '|react-native-reanimated' +
    ')/)',
  ],
  setupFiles: [
    './jest.setup.js',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
};
