module.exports = {
  trailingComma: 'all',
  singleQuote: true,
  plugins: [
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports',
  ],
  importOrder: [
    'react',
    '^react-.*$',
    '^next',
    '^next-.*$',
    '^next/.*$',
    '^.*/hooks/.*$',
    '^.*/services/.*$',
    '^.*/utils/.*$',
    '^.*/types/.*$',
    '^.*/pages/.*$',
    '^.*/components/.*$',
    '^[./]',
    '.*',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
