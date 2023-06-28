module.exports = {
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    [
      'module-resolver',
      {
        alias: {
          '@app': './src/app',
          '@entities': './src/entities',
          '@features': './src/features',
          '@pages': './src/pages',
          '@processes': './src/processes',
          '@shared': './src/shared',
          '@widgets': './src/widgets',
        },
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['./src'],
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
}
