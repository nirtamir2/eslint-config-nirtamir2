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
    "nirtamir2/typescript",
    "nirtamir2/react",
    "nirtamir2/solid",
    "nirtamir2/security",
    "nirtamir2/compat",
    "nirtamir2/jest",
    "nirtamir2/storybook",
    "nirtamir2/i18n",
    "nirtamir2/next", // should be after recommended react and typescript
  ],
};
```

#### Next.js
You may add
```
 overrides: [
    {
      // Frontend
      files: ["apps/next-app/**/*.{ts,tsx}"],
      extends: ["@nirtamir2/next"],
      settings: {
        next: {
          rootDir: "apps/next-app",
        },
      },
      parserOptions: {
        project: ["apps/next-app/tsconfig.json"],
      },
    },
```

## Import resolution
If you have problems with the import resolution try
```
 root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["**/tsconfig.json"],
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: ["**/tsconfig.json"],
      },
    },
  },
```

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
