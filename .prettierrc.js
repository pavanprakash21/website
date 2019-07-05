module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  overrides: [
      {
          files: '*.mdx',
          options: {
              parser: 'markdown'
          }
      }
  ],
  printWidth: 120,
  singleQuote: true,
  tabWidth: 2
};
