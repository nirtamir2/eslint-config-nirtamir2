module.exports = {
  extends: ["plugin:jsx-a11y/recommended", "plugin:solid/typescript"],
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
  overrides: [
    // solid-start default exports
    {
      files: [
        "**/routes/**",
        "root.tsx",
        "entry-server.tsx"
      ],
      rules: {
        "import/no-unused-modules": 0,
      },
    },
  ],
};
