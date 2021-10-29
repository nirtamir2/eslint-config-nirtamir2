# eslint-config-nirtamir2

## Installation

```bash
yarn add -D eslint eslint-config-nirtamir2
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

Edit your `.eslintrc` file (choose the configs you want)

```js
module.exports = {
  root: true,
  extends: [
    "nirtamir2/recommended",
    "nirtamir2/react",
    "nirtamir2/typescript",
    "nirtamir2/security",
    "nirtamir2/compat",
    "nirtamir2/jest",
  ],
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

## Release / Publish

```bash
yarn publish
```
