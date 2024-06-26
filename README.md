# eslint-config-nirtamir2

My ESLint config till ESLint v9.
Notice: compatible with ESLint <= v8.
For ESLint v9+ flat config you may want to use [@nirtamir2/eslint-config](https://github.com/nirtamir2/eslint-config)

## Installation

```bash
pnpm add -D eslint eslint-config-nirtamir2
```

Edit your `package.json` file

```json
{
  "engines": {
    "node": ">=20.0.0"
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
    "nirtamir2",
    "nirtamir2/recommended",
    "nirtamir2/typescript",
    "nirtamir2/react",
    "nirtamir2/query",
    "nirtamir2/solid",
    "nirtamir2/security",
    "nirtamir2/compat",
    "nirtamir2/jest",
    "nirtamir2/storybook",
    "nirtamir2/i18n",
    "nirtamir2/query",
    "nirtamir2/tailwindcss",
    "nirtamir2/astro",
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
pnpm add -D prettier prettier-plugin-tailwindcss @trivago/prettier-plugin-sort-imports prettier-plugin-packagejson
```

Edit your `.prettierrc.mjs` file

```js
export default {
  plugins: [
    "prettier-plugin-packagejson",
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss", // must come last
  ],
  // @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss#resolving-your-tailwind-configuration
  tailwindConfig: "./tailwind.config.ts",
  // @see https://github.com/trivago/prettier-plugin-sort-imports
  importOrder: [
    "^react$",
    "<THIRD_PARTY_MODULES>",
    // Internal modules
    "^@app/(.*)$",
    // TypeScript TSConfig path aliases
    "^@/(.*)$",
    // Relative imports
    "^[./]",
  ],
  importOrderSortSpecifiers: true,
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
pnpm add -D husky lint-staged
npx husky-init && pnpm i
```

In `.husky/pre-commit` add

```bash
pnpm run type-check
npx lint-staged
```

Edit your `package.json` file

```json
{
  "scripts": {
    "prepare": "husky install",
    "format": "prettier \"**/*\" --write --ignore-unknown",
    "lint": "eslint --fix \"**/*.{ts,tsx,js,jsx}\" \"**/locales/**/*.json\"",
    "type-check": "tsc --pretty --noEmit"
  },
  "lint-staged": {
    "*.{ts,tsx,md}": "eslint --cache --fix",
    "*.{ts,tsx,css,html,md}": "prettier --write"
  }
}
```

## TypeScript

```bash
pnpm add -D @tsconfig/strictest
```

In `tsconfig.json` add to the top

```
"extends": "@tsconfig/strictest/tsconfig.json",
```

## Release / Publish

Create release

```bash
changeset
```

Bump version

```bash
changeset version
```

Publish to pnpm

```bash
changeset publish
```

### Notes

> [!WARN] Maintaining
> When you upgrade deps - notice that you need to use the same Next.js versions numbers for dependencies in https://github.com/vercel/next.js/blob/v14.1.0/packages/eslint-config-next/package.json.
> If you want to upgrade `eslint-config-next` - you need to use the matching version numbers.

> [!NOTE]
> You can `run pnpm` to test it, and connect it to existing repository by using
>
> ```json
> {
>   "eslint-config-nirtamir2": "file:./eslint-config-nirtamir2-0.0.63.tgz"
> }
> ```
