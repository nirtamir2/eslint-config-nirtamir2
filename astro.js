/** @type {import("@types/eslint").Linter.Config} */
module.exports = {
  extends: ["plugin:astro/recommended", "plugin:astro/jsx-a11y-strict"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "astro/no-set-html-directive": "error",
        "astro/no-set-text-directive": "error",
        "astro/no-unused-css-selector": "error",

        // For some reason - it does not work there
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-call": "off",

        //It does not recognize astro:content astro:assets
        "import/no-unresolved": "off",
      },
    },
    {
      // content collection
      files: ["src/content/config.ts"],
      rules: {
        "import/no-unused-modules": "off",
      },
    },
  ],
};
