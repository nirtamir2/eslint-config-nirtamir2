module.exports = {
  extends: ["next/core-web-vitals"],
  overrides: [
    {
      files: "static-paths.d.ts",
      rules: {
        "eslint-comments/disable-enable-pair": "off",
        "eslint-comments/no-unlimited-disable": "off",
        "unicorn/no-abusive-eslint-disable": "off",
      },
    },
    {
      // Next.js App directory & pages
      files: [
        "**/pages/**/*.ts?(x)",
        "**/src/app/**/*.tsx",
        "**/src/middleware.ts",
      ],
      rules: {
        "import/no-unused-modules": "off",
        "import/no-default-export": "off",
      },
    },
  ],
};
