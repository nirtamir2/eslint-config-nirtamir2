module.exports = {
  extends: [
    /**
     * Notice - for compat need to config also the env and browserlist
     * https://github.com/amilajack/eslint-plugin-compat
     */
    "plugin:compat/recommended",
  ],
  settings: {
    // https://nextjs.org/docs/basic-features/supported-browsers-features for compat/compat
    polyfills: ["fetch", "URL", "Object.assign"],
  },
};
