require("@rushstack/eslint-patch/modern-module-resolution");

// @see https://typescript-eslint.io/docs/linting/troubleshooting#eslint-plugin-import
module.exports = {
  rules: {
    "import/no-cycle": 2,
    "import/no-unused-modules": 2,
  },
};
