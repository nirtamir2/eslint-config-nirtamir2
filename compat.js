require("@rushstack/eslint-patch/modern-module-resolution");

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

/**
 * Install eslint packages
 * yarn add -D @next/eslint-plugin-next @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-next eslint-config-prettier eslint-plugin-array-func eslint-plugin-compat eslint-plugin-cypress eslint-plugin-eslint-comments eslint-plugin-etc eslint-plugin-import  eslint-plugin-jest eslint-plugin-jest-async eslint-plugin-jsx-a11y eslint-plugin-markdown eslint-plugin-no-secrets eslint-plugin-no-unsanitized eslint-plugin-no-use-extend-native eslint-plugin-optimize-regex eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-regexp eslint-plugin-security eslint-plugin-sonarjs eslint-plugin-sort-keys-fix eslint-plugin-testing-library eslint-plugin-unicorn eslint-plugin-weblint-security
 */
