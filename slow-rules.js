// @see https://typescript-eslint.io/docs/linting/troubleshooting#eslint-plugin-import
module.exports = {
  rules: {
    "import/no-cycle": 1,
    "import/no-unused-modules": [1, { unusedExports: true }],
  },
};
