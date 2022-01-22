require("@rushstack/eslint-patch/modern-module-resolution");
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: [
    "plugin:jest/recommended",
    "plugin:jest/style",
    // "plugin:cypress/recommended",
    // plugin:testing-library/react
  ],
  plugins: ["jest-async"],
  settings: {
    jest: {
      version: require("jest/package.json").version,
    },
  },
  rules: {
    //#region jest-async
    "jest-async/expect-return": "error",
    //#endregion jest-async
  },
});
