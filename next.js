module.exports = {
  extends: ["next/core-web-vitals"],
  overrides: [
    // @see https://github.com/vercel/next.js/blob/canary/packages/eslint-config-next/index.js
    {
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
      files: ["**/pages/**/*.ts?(x)"],
      rules: {
        "import/no-unused-modules": "off",
        "import/no-default-export": "off",
      },
    },
  ],
};
