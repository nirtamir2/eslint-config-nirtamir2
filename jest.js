module.exports = {
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
};
