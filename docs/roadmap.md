# eslint-config-nirtamir2

The journey to create my own ESLint config

I should look at https://github.com/dustinspecker/awesome-eslint before I wrote it

Maybe I should start with strict rules, and then debug performance and then remove the unwanted?

## Productivity tools

- https://github.com/kentcdodds/eslint-config-kentcdodds
- https://github.com/kentcdodds/kcd-scripts

## How to create your ESLint config

https://eslint.org/docs/developer-guide/shareable-configs

## What do I want to achieve with those rules:

- Prefer auto-fixable over non auto-fixable rules - to gain productivity
- If TypeScript can handle it - you don't need that rule
- If Prettier can handle it - you don't need that rule (you should run pretty-quick or similar with husky and lint-staged)
- If it's deprecated stuff nobody write - you should not use it
- If it's security - be strict - use it
- If it's something you don't know that you don't know - use it!
- If it's anoyying and not adding a value - don't use it

## Liked:

https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/docs/rules/prefer-early-return.md
https://github.com/welldone-software/eslint-plugin-welldone/blob/master/rules/import-export-only.js + https://github.com/welldone-software/eslint-plugin-welldone/blob/master/rules/modules-engagement.js

## TODO:

- [ ] add adiera "adeira/no-duplicate-import-type-import": 2, rule only
- [ ] https://github.com/joshuajaco/eslint-plugin-workspaces
- [ ] https://github.com/leo-buneev/eslint-plugin-sort-keys-fix for i18n files
- [ ] https://github.com/nirtamir2/eslint-plugin-sort-export-all
- [ ] https://github.com/benmosher/eslint-plugin-import + `sort-import: ["error", { ignoreDeclarationSort: true }]`
- [ ] https://github.com/godaddy/eslint-plugin-i18n-json
- [ ] eslint:reccomended
- [ ] https://www.npmjs.com/package/eslint-plugin-react-hooks
- [ ] https://github.com/typescript-eslint/typescript-eslint
- [ ] https://github.com/prettier/eslint-config-prettier - ignore prettier rules, don't force them because they tend to slow things
- [ ] see if something interesting in airbnb's
- [ ] eslint react - only new relevant stuff (no need for old react code's rules)
- [ ] https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
- [ ] https://github.com/nodesecurity/eslint-plugin-security
- [ ] https://github.com/amilajack/eslint-plugin-compat - for browsers feature compability
- [ ] https://github.com/azeemba/eslint-plugin-json
- [ ] https://github.com/ota-meshi/eslint-plugin-regexp
- [ ] https://github.com/SonarSource/eslint-plugin-sonarjs
- [ ] https://github.com/cartant/eslint-plugin-etc
- [ ] https://github.com/nickdeis/eslint-plugin-no-secrets
- [ ] https://github.com/xjamundx/eslint-plugin-promise
- [ ] https://github.com/Shopify/web-configs/tree/main/packages/eslint-plugin/docs/rules , https://github.com/Shopify/web-configs
- [ ] https://github.com/amilajack/eslint-plugin-dom
- [ ] https://github.com/nickdeis/eslint-plugin-notice
- [ ] https://github.com/mysticatea/eslint-plugin-node
- [ ] https://github.com/mdx-js/eslint-mdx/tree/master/packages/eslint-plugin-mdx
- [ ] https://github.com/testing-library/eslint-plugin-testing-library
- [ ] https://github.com/johvin/eslint-import-resolver-alias
- [ ] https://github.com/wcandillon/eslint-plugin-ts-exports
- [ ] https://github.com/facebook/flipper/blob/main/desktop/eslint-plugin-flipper/src/rules/noRelativeImportsAcrossPackages.ts

## Investigate?

- [ ] https://www.npmjs.com/package/eslint-plugin-ecmascript-compat
- [ ] https://github.com/HKalbasi/eslint-plugin-toplevel
- [ ] https://github.com/kunalgolani/eslint-config/tree/master/packages/recommended#readme
- [ ] https://github.com/sindresorhus/eslint-plugin-unicorn
- [ ] https://github.com/selaux/eslint-plugin-filenames
- [ ] https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin
- [ ] https://github.com/MarkKragerup/weblint-eslint-security
- [ ] https://github.com/iamturns/eslint-config-airbnb-typescript
- [ ] https://github.com/Bkucera/eslint-plugin-json-format
- [ ] https://github.com/RunDevelopment/eslint-plugin-clean-regex
- [ ] https://github.com/remithomas/eslint-plugin-ban

## Not sure

- [ ] https://github.com/infctr/eslint-plugin-typescript-sort-keys
- [ ] https://github.com/mthadley/eslint-plugin-sort-destructure-keys
- [ ] https://github.com/standard/eslint-config-standard-with-typescript
- [ ] https://github.com/mysticatea/eslint-plugin-eslint-comments
- [ ] https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin
  - 'eslint-plugin/report-message-format'report-message-format': ['error', "^[A-Z`'{].\*\\.$"],
  - 'eslint-plugin/prefer-placeholders': 'error',
  - 'eslint-plugin/consistent-output': 'error',

## Not ESLint, not sure

- [ ] https://github.com/Quramy/typescript-eslint-language-service

## Not ESLint

- [ ] https://github.com/anandthakker/doiuse

## NextJs

- [ ] https://github.com/vercel/next.js/tree/canary/packages/eslint-config-next

## Emotion

## Tailwind

- [ ] https://github.com/Idered/eslint-plugin-tailwind

## React Native

- [ ] @react-native-community
- [ ] https://github.com/Intellicode/eslint-plugin-react-native
- [ ] expo

## Codegen

- [ ] https://github.com/mmkal/ts/tree/main/packages/eslint-plugin-codegen - add a comment regions to your code to force eslint fix to write code (for example generate barrel `export * from "./somewhere"` in index files)

## Usage:

```bash
yarn add eslint-config-nirtamir2
```

In `.eslintrc`:

```js
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "nirtamir2/reccommended",
    "nirtamir2/react",
    "nirtamir2/typescript",
    "nirtamir2/prettier",
  ],
};
```

## Inspiration

- https://github.com/antfu/eslint-config

## Unknown plugins

- https://github.com/microsoft/rushstack/tree/master/stack/eslint-plugin-packlets

## Tools

- https://github.com/microsoft/rushstack/tree/master/stack/eslint-patch - allow users of your eslint-config not installing eslint-plugins you depend on

  ### Auto config based on dependencies

  - https://github.com/davidjbradshaw/eslint-config-auto
  - https://github.com/davidjbradshaw/eslint-config-adjunct

https://nextjs.org/docs/basic-features/eslint#eslint-plugin
