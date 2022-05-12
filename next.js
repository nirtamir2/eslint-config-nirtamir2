module.exports = {
  extends: ["next/core-web-vitals"],
  overrides: [{
    files: ["**/*.ts?(x)"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
      warnOnUnsupportedTypeScriptVersion: true,
    },
  },
    {
      // Next.js Pages
      files: ["**/pages/**/*.tsx"],
      rules: {
        "import/no-unused-modules": "off",
        "import/no-default-export": "off",
      },
    },
  ],
};
