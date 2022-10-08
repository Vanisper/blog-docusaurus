const path = require("path");

const configure = require("../data/config");
/** @type {import('@docusaurus/types').PresetConfig[]} */
module.exports = [
  [
    "classic",
    /** @type {import('@docusaurus/preset-classic').Options} */
    ({
      docs: {
        ...configure.docs,
        breadcrumbs: false,
        sidebarPath: require.resolve(path.resolve(__dirname, "./sidebars.js")),
        editUrl:
          "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
      },
      blog: {
        ...configure.blog,
        showReadingTime: true,
        editUrl:
          "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
      },
      theme: {
        customCss: path.resolve(__dirname, "../src/css/custom.css"),
      },
    }),
  ],
];
