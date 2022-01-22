require("@rushstack/eslint-patch/modern-module-resolution");
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: [
    "plugin:no-unsanitized/DOM",
    "plugin:security/recommended",
    "plugin:weblint-security/recommended",
    "plugin:weblint-security/react",
    "plugin:weblint-security/nodejs",
  ],
  plugins: ["no-secrets"],

  rules: {
    //#region no-secrets
    "no-secrets/no-secrets": 2,
    //#endregion no-secrets
  },
});
