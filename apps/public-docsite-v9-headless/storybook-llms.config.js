/** @type {import('@fluentui/storybook-llms-extractor').Config} */
module.exports = {
  distPath: './dist/storybook',
  summaryBaseUrl: process.env.STORYBOOK_SUMMARY_BASE_URL ?? 'https://storybooks.fluentui.dev/headless/',
  summaryTitle: 'Fluent UI React Headless Components',
  summaryDescription:
    'Fluent UI React headless components provide unstyled, accessible component primitives that can be styled with any CSS approach.',
};
