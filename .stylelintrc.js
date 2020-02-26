module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-styled-components",
    "stylelint-order",
    "stylelint-config-rational-order",
    "stylelint-config-prettier",
  ],
  plugins: [
    "stylelint-prettier",
    "stylelint-order",
    "stylelint-config-rational-order/plugin",
  ],
  rules: {
    "custom-property-empty-line-before": null,
    "selector-max-compound-selectors": null,
    "order/properties-order": [[], { severity: "warning" }],
    "plugin/rational-order": [
      true,
      {
        "border-in-box-model": false,
        "empty-line-between-groups": false,
        severity: "warning",
      },
    ],
  },
};
