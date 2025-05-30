module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        'root': [
          './',
        ],
        'extensions': [
          '.tsx',
          '.jsx',
          '.js',
          '.ts',
        ],
        alias: {
          '@components': './src/components',
          '@constants': './src/constants',
          '@navigation': './src/navigation',
          '@store': './src/store',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@types': './src/types',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
