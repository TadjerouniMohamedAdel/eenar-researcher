const path = require('path');

module.exports = {
  "stories": [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../layouts/**/*.stories.mdx",
    "../layouts/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-actions',
    '@pxblue/storybook-rtl-addon/register'
  ],
  presets: [path.resolve(__dirname, './next-preset.js')]

}