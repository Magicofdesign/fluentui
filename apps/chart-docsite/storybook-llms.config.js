/** @type {import('@fluentui/storybook-llms-extractor').Config} */
module.exports = {
  distPath: './dist/storybook',
  summaryBaseUrl: process.env.STORYBOOK_SUMMARY_BASE_URL ?? 'https://storybooks.fluentui.dev/charts/',
  summaryTitle: 'Fluent UI Charts v9',
  summaryDescription:
    'Fluent UI React charts is a set of modern, accessible, interactive, lightweight and highly customizable visualization library representing the Microsoft design system. These charts are used across 100s of projects inside Microsoft across Microsoft 365, Copilot and Azure.',
};
