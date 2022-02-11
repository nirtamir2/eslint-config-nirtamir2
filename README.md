# eslint-config-nirtamir2

## Installation

```bash
yarn add -D eslint eslint-config-nirtamir2
```

Edit your `package.json` file

```json
{
  "engines": {
    "node": ">=16.0.0"
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

#### Next.js

```bash
yarn add -D @next/core-web-vitals
```

add `"plugin:@next/core-web-vitals"` or copy rules from https://github.com/vercel/next.js/blob/canary/packages/eslint-config-next/index.js +https://github.com/vercel/next.js/blob/canary/packages/eslint-config-next/core-web-vitals.js

## Prettier

```bash
yarn add -D prettier prettier-plugin-packagejson @trivago/prettier-plugin-sort-imports
```

Edit your `.prettierrc.js` file

```js
module.exports = {
  plugins: [
    require.resolve("@trivago/prettier-plugin-sort-imports"),
    require.resolve("prettier-plugin-packagejson"),
  ],
  // @see https://github.com/trivago/prettier-plugin-sort-imports
  importOrder: [
    "^react$",
    "<THIRD_PARTY_MODULES>",
    // Internal modules
    "^@core/(.*)$",
    "^@server/(.*)$",
    "^@ui/(.*)$",
    "^@*/(.*)$",
    // Relative imports
    "^[./]",
  ],
  overrides: [
    {
      files: "*.svg",
      options: {
        parser: "html",
      },
    },
  ],
};
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
    "format": "prettier \"**/*\" --write --ignore-unknown",
    "lint": "eslint --fix \"**/*.{ts,tsx,js,jsx,json}\"",
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
