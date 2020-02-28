const { extensions, aliases } = require("./alias.config");

module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "eslint:recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  plugins: [
    "@typescript-eslint",
    "react",
    "import",
    "react-hooks",
    "prettier",
    "graphql",
    "filenames",
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/extensions": extensions,
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      "eslint-import-resolver-custom-alias": {
        alias: aliases,
        extensions,
      },
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    before: true,
    after: true,
    spyOn: true,
    __PATH_PREFIX__: true,
    __BASE_PATH__: true,
    __ASSET_PREFIX__: true,
  },
  rules: {
    // "graphql/template-strings": [
    //   "error",
    //   {
    //     env: "relay",
    //     tagName: "graphql",
    //     schemaJsonFilepath: "./src/__generated__gatsby-introspection.json",
    //   },
    // ],
    "arrow-body-style": [
      "error",
      "as-needed",
      { requireReturnForObjectLiteral: true },
    ],
    "no-unused-expressions": [
      "error",
      {
        allowTaggedTemplates: true,
      },
    ],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: extensions,
      },
    ],
    "no-unused-vars": "warn", // for typescript
    "consistent-return": ["error"],
    "filenames/match-regex": ["error", "^[a-zA-Z-0-9\\.]+$", true],
    "no-console": "warn",
    "no-inner-declarations": "off",
    "no-nested-ternary": "off",
    "prettier/prettier": "error",
    "react/display-name": "off",
    "react/jsx-key": "warn",
    "react/no-unescaped-entities": "off",
    "react/prop-types": "warn",
    "react/no-unused-prop-types": "off",
    "react/require-default-props": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-props-no-spreading": "off",
    "react/default-props-match-prop-types": [
      "error",
      { allowRequiredDefaults: true },
    ],
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "require-jsdoc": "off",
    "valid-jsdoc": "off",
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        alphabetize: { order: "desc", caseInsensitive: true },
      },
    ],
    "import/no-unresolved": ["error", { commonjs: true }],
    "import/extensions": ["error", "never", { css: "always" }],
  },
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-function-return-type": "off", //
      },
    },
    {
      files: [
        "packages/**/gatsby-browser.js",
        "packages/gatsby/cache-dir/**/*",
      ],
      env: {
        browser: true,
      },
      globals: {
        ___loader: false,
        ___emitter: false,
      },
    },
    {
      files: ["**/cypress/integration/**/*", "**/cypress/support/**/*"],
      globals: {
        cy: false,
        Cypress: false,
      },
    },
  ],
};
