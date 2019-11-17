module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: {
        pathRegex: /\.(spec|test)\.ts$/,
      },
    },
    'window': true,
  },
  preset: 'jest-puppeteer',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
}
