// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require("path");
const options = require("./data/config");

const { copyright, logo, ...siteOptions } = options.site;

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...siteOptions,
  presets: require(path.join(__dirname, "./config/presets")),
  themeConfig: require(path.join(__dirname, "./config/theme")),
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans", "en"],
    localeConfigs: {
      "zh-Hans": {
        htmlLang: "zh-CN",
      },
    },
  },
};

module.exports = config;
