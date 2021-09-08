module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",

    "plugin:etc/recommended",
    "plugin:sonarjs/recommended",
    /**
     * Notice - for compat need to config also the env and browserlist
     * https://github.com/amilajack/eslint-plugin-compat
     */
    "plugin:compat/recommended",

    "plugin:unicorn/recommended",

    "plugin:eslint-comments/recommended",
    "plugin:array-func/recommended",
    "plugin:promise/recommended",
    "plugin:optimize-regex/recommended",
    "plugin:regexp/recommended",
    "plugin:no-use-extend-native/recommended",

    "plugin:no-unsanitized/DOM",
    "plugin:security/recommended",
    "plugin:weblint-security/recommended",

    "plugin:jest/recommended",
    "plugin:jest/style",
    // "plugin:cypress/recommended",
    // plugin:testing-library/react

    //#region react
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/react",
    "plugin:weblint-security/react",
    //#endregion react

    //#region nextjs
    "plugin:@next/next/recommended",
    "next",
    "next/core-web-vitals",
    //#endregion nextjs

    "plugin:node/recommended",
    "plugin:weblint-security/nodejs",

    "plugin:markdown/recommended",

    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  plugins: [
    "no-secrets",
    "jest-async",
    "sort-keys-fix" /* not in use but can be */,
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    project: ["./tsconfig.json"],
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: { extensions: [".js", ".mjs", ".ts", ".d.ts"] },
    },
  },
  rules: {
    //#region jest-async
    "jest-async/expect-return": "error",
    //#endregion jest-async

    //#region no-secrets
    "no-secrets/no-secrets": 2,
    //#endregion no-secrets

    //#region sort-keys-fix
    "sort-keys-fix/sort-keys-fix": 0,
    //#endregion sort-keys-fix

    //#region import
    "import/no-namespace": 2,
    "import/no-mutable-exports": 2,
    "import/no-self-import": 2,
    "import/no-cycle": 2,
    "import/no-unused-modules": 2,
    "import/no-anonymous-default-export": 2,
    "import/no-default-export": 2,
    "import/no-named-default": 2,
    "import/no-commonjs": 2,
    "import/no-amd": 2,
    "import/first": 2,
    "import/no-absolute-path": 2,
    "import/no-nodejs-modules": 2,
    "import/no-useless-path-segments": 2,
    "import/unambiguous": 2,
    "import/no-webpack-loader-syntax": 2,
    "import/dynamic-import-chunkname": 2,
    "import/exports-last": 2,
    "import/no-dynamic-require": 2,

    // When using workspaces:
    // "import/no-relative-parent-imports": 2,
    // "import/no-internal-modules": 2, // maybe?
    "import/no-extraneous-dependencies": 2,

    // Off because it's slow
    // "import/no-deprecated": 2,

    // // Not sure
    // extensions: [require("./rules/extensions")],
    // "max-dependencies": require("./rules/max-dependencies"),
    // "no-unassigned-import": require("./rules/no-unassigned-import"),

    //  NO
    // "group-exports": require("./rules/group-exports"),
    // "prefer-default-export": require("./rules/prefer-default-export"),

    //#endregion import

    //#region unicorn
    /**
     * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/9c3f180c3ce35b3e488c076a243bf5b935c108ef/docs/rules/no-null.md
     * I use null to check for null / undefined with `variableName == null`
     */
    "unicorn/no-null": 0,
    /**
     * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/9c3f180c3ce35b3e488c076a243bf5b935c108ef/docs/rules/prevent-abbreviations.md
     * I prefer variables with short scope to be called with short name like e instead of event
     */
    "unicorn/prevent-abbreviations": 0,
    //#endregion unicorn

    //#region react
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        // "shorthandFirst": true,
        // "shorthandLast": <boolean>,
        // "ignoreCase": <boolean>,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    "react/react-in-jsx-scope": 0,
    "react/display-name": 0,
    "react/prop-types": 0,
    "react/jsx-pascal-case": 2,
    "react/jsx-no-constructed-context-values": 2,
    "react/jsx-no-useless-fragment": 2,
    "react/jsx-handler-names": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-curly-brace-presence": [
      2,
      { props: "never", children: "never" },
    ],
    // As of React 16.14 and 17
    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    "react/jsx-uses-react": 0,

    //#endregion react

    //#region eslint

    // ignore eslint prettier that remove this rule, because I want to remove useless template literal
    quotes: [2, "double", { allowTemplateLiterals: false }],
    "no-implicit-coercion": ["error"],
    "prefer-destructuring": "error",
    "func-style": ["error", "declaration", { allowArrowFunctions: false }],

    // Based on https://github.com/antfu/eslint-config/blob/master/packages/basic/index.js
    // Common
    "no-param-reassign": "off",
    "array-bracket-spacing": ["error", "never"],
    "brace-style": ["error", "stroustrup", { allowSingleLine: true }],
    "block-spacing": ["error", "always"],
    camelcase: "off",
    "comma-spacing": ["error", { before: false, after: true }],
    "comma-style": ["error", "last"],
    "comma-dangle": ["error", "always-multiline"],
    "no-constant-condition": "warn",
    "no-debugger": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-cond-assign": ["error", "always"],
    "func-call-spacing": ["off", "never"],
    "key-spacing": ["error", { beforeColon: false, afterColon: true }],
    indent: [
      "error",
      2,
      { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 },
    ],
    "no-restricted-syntax": [
      "error",
      "DebuggerStatement",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "object-curly-spacing": ["error", "always"],
    "no-return-await": "off",
    "space-before-function-paren": ["error", "never"],

    // es6
    "no-var": "error",
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: true,
      },
    ],
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    "object-shorthand": [
      "error",
      "always",
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "template-curly-spacing": "error",
    "arrow-parens": ["error", "as-needed", { requireForBlockBody: true }],
    "generator-star-spacing": "off",

    // best-practice
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "consistent-return": "off",
    complexity: ["off", 11],
    eqeqeq: ["error", "always", { null: "ignore" }],
    "no-alert": "warn",
    "no-case-declarations": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-with": "error",
    "no-void": "error",
    "no-useless-escape": "off",
    "vars-on-top": "error",
    "require-await": "off",
    "no-return-assign": "off",
    "operator-linebreak": ["error", "before"],

    //#endregion eslint

    //#region etc
    "etc/no-commented-out-code": 2,
    "etc/no-const-enum": 2,
    "etc/no-misused-generics": 2,
    "etc/prefer-interface": 2,
    "etc/prefer-less-than": 2,
    "etc/throw-error": 2,
    "etc/underscore-internal": 2,
    //#endregion etc

    //#region @typescript-eslint
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/prefer-literal-enum-member": "error",
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-ignore": "allow-with-description",
      },
    ],
    //#endregion @typescript-eslint
  },
};

/**
  yarn add eslint-plugin-no-secrets eslint-plugin-jest-async eslint-plugin-sort-keys-fix @typescript-eslint/parser @typescript-eslint/eslint-plugin  eslint-plugin-etc eslint-plugin-sonarjs eslint-plugin-compat eslint-plugin-unicorn eslint-plugin-eslint-comments eslint-plugin-array-func eslint-plugin-promise eslint-plugin-optimize-regex eslint-plugin-regexp eslint-plugin-no-use-extend-native eslint-plugin-no-unsanitized eslint-plugin-security eslint-plugin-weblint-security eslint-plugin-jest eslint-plugin-cypress eslint-plugin-testing-library eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import @next/eslint-plugin-next eslint-config-next eslint-plugin-node eslint-plugin-markdown eslint-plugin-import
 */
