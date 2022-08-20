const path = require("node:path");

module.exports = {
  extends: ["plugin:i18n-json/recommended"],
  rules: {
    "i18n-json/valid-message-syntax": [
      "error",
      {
        /**
         * This allow to use the i18next format with {param} syntax
         * @see https://github.com/godaddy/eslint-plugin-i18n-json/issues/40#issuecomment-842474651
         */
        syntax: path.resolve("./_i18next-syntax-validator.js"),
      },
    ],
  },
};
