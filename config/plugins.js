const configure = require("../data/config");

module.exports = [
  "@docusaurus/theme-live-codeblock",
  "docusaurus-plugin-less",
  "@docusaurus/plugin-ideal-image",
  function tailwind() {
    return {
      name: "postcss-tailwindcss-loader",
      configurePostCss(postcssOptions) {
        postcssOptions.plugins = {
          "postcss-import": {},
          "postcss-nesting": {},
          "tailwindcss/nesting": {},
          tailwindcss: {},
          autoprefixer: {},
          "postcss-mixins": {},
        };
        return postcssOptions;
      },
    };
  },
];
