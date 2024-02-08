module.exports = {
  extends: [
    "plugin:storybook/recommended",
    "plugin:storybook/csf-strict",
    "plugin:storybook/addon-interactions",
  ],
  overrides: [
    {
      // Storybook stories
      files: ["*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
      rules: {
        "import/no-unused-modules": "off",
        "import/no-default-export": "off",
      },
    },
  ],
};
