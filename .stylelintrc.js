module.exports = {
  processors: [
    [
      "stylelint-processor-styled-components",
      {
        moduleName: "@emotion/core",
        importName: "css",
        strict: true,
        ignoreFiles: [],
        parserPlugins: ["jsx"],
      },
    ],
  ],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-styled-components",
    "stylelint-config-prettier",
  ],
  plugins: ["stylelint-order"],
  rules: {
    "custom-property-empty-line-before": null,
    "selector-max-compound-selectors": null,
  },
};
