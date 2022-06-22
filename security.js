module.exports = {
  extends: [
    "plugin:no-unsanitized/DOM",
    "plugin:security/recommended",
  ],
  plugins: ["no-secrets"],

  rules: {
    //#region no-secrets
    "no-secrets/no-secrets": 2,
    //#endregion no-secrets
  },
};
