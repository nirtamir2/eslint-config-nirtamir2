# eslint-config-nirtamir2

## Installation

```bash
yarn add -D eslint-config-nirtamir2 @next/eslint-plugin-next @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-next eslint-config-prettier eslint-plugin-array-func eslint-plugin-compat eslint-plugin-cypress eslint-plugin-eslint-comments eslint-plugin-etc eslint-plugin-import  eslint-plugin-jest eslint-plugin-jest-async eslint-plugin-jsx-a11y eslint-plugin-markdown eslint-plugin-no-secrets eslint-plugin-no-unsanitized eslint-plugin-no-use-extend-native eslint-plugin-optimize-regex eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-regexp eslint-plugin-security eslint-plugin-sonarjs eslint-plugin-sort-keys-fix eslint-plugin-testing-library eslint-plugin-unicorn eslint-plugin-weblint-security
```

Edit your `package.json` file

```json
{
  "engines": {
    "node": ">=14.0.0"
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

Edit your `.eslintrc` file

```js
module.exports = {
  root: true,
  extends: ["nirtamir2"],
};
```

## Prettier

```bash
yarn add -D prettier prettier-plugin-packagejson @trivago/prettier-plugin-sort-imports
```

Edit your `.prettierrc` file

```json
{
  "overrides": [
    {
      "files": "*.svg",
      "options": {
        "parser": "html"
      }
    }
  ]
}
```

## Husky

```bash
yarn add -D husky lint-staged
npx husky-init && yarn
```

In `.husky/pre-commit` add

```bash
yarn type-check
npx lint-staged
```

Edit your `package.json` file

```json
{
  "scripts": {
    "prepare": "husky install",
    "lint": "next lint",
    "type-check": "tsc --pretty --noEmit"
  },
  "lint-staged": {
    "*.{ts,tsx,md}": "eslint --cache --fix",
    "*.{ts,tsx,css,html,md}": "prettier --write"
  }
}
```
