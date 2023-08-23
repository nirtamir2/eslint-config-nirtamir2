const path = require("node:path");

module.exports = {
  extends: ["plugin:i18n-prefix/recommended", "plugin:i18next/recommended"],
  plugins: ["@naturacosmeticos/i18n-checker"],
  rules: {
    /**
     * This will error if `t` function called with a translation key
     * that does not exist in translation files
     */
    "@naturacosmeticos/i18n-checker/path-in-locales": [
      "error",
      {
        localesPath: "locales/",
        messagesBasePath: "translations",
        translationFunctionName: "t",
      },
    ],
    /**
     * i18n translation should be the same as component name
     */
    "i18n-prefix/i18n-prefix": [
      "error",
      {
        translationFunctionName: "t",
        delimiter: ".",
        ignorePrefixes: ["enum"],
      },
    ],
  },
  overrides: [
    {
      files: ["**/locales/**/*.json"],
      extends: ["plugin:i18n-json/recommended"],
      rules: {
        "i18n-json/valid-message-syntax": [
          "error",
          {
            /**
             * This allows using the i18next format with {param} syntax
             * @see https://github.com/godaddy/eslint-plugin-i18n-json/issues/40#issuecomment-842474651
             */
            syntax: path.resolve("./_i18next-syntax-validator.js"),
          },
        ],
      },
    },
    {
      files: ["**.stories.tsx"],
      rules: {
        "i18next/no-string-literal": "off",
      },
    },
  ],
};
