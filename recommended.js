const confusingBrowserGlobals = require("confusing-browser-globals");

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:array-func/recommended",
    "plugin:promise/recommended",
    "plugin:optimize-regex/recommended",
    "plugin:regexp/recommended",
    "plugin:no-use-extend-native/recommended",
    "plugin:markdown/recommended",
    "plugin:import/recommended",
    "plugin:workspaces/recommended",
    "prettier",
  ],
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".mjs", ".ts", ".d.ts"] },
    },
  },
  plugins: ["sort-keys-fix" /* not in use but can be */],
  rules: {
    //#region sort-keys-fix
    "sort-keys-fix/sort-keys-fix": 0,
    //#endregion sort-keys-fix

    "array-func/prefer-array-from": 0, // conflicts with unicorn/prefer-spread

    //#region import
    "import/no-unresolved": 0,
    "import/no-namespace": 2,
    "import/no-mutable-exports": 2,
    "import/no-self-import": 2,
    // "import/no-cycle": 2, - slow rule
    // "import/no-unused-modules": 2, - slow rule
    "import/no-anonymous-default-export": 2,
    // "import/no-default-export": 2,
    "import/no-named-default": 2,
    "import/no-commonjs": 2,
    "import/no-amd": 2,
    "import/first": 2,
    "import/no-absolute-path": 2,
    "import/no-nodejs-modules": 2,
    "import/no-useless-path-segments": 2,
    "import/no-webpack-loader-syntax": 2,
    "import/dynamic-import-chunkname": 2,
    // "import/exports-last": 2, // some functions are depended on other, and I want export function instead of one single export
    "import/no-dynamic-require": 2,

    // https://typescript-eslint.io/docs/linting/troubleshooting#eslint-plugin-import - slow rules - should have a separate config
    "import/no-named-as-default": 0,
    "import/no-cycle": 1,
    "import/no-unused-modules": [1, { unusedExports: true }],
    "import/no-deprecated": 0,

    // https://typescript-eslint.io/docs/linting/troubleshooting#eslint-plugin-import - have typescript equal checks
    "import/named": 0,
    "import/namespace": 0,
    "import/default": 0,
    "import/no-named-as-default-member": 0,

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
    "unicorn/numeric-separators-style": 0,
    "unicorn/filename-case": 0,
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

    //#region eslint

    "no-constant-binary-expression": "error",
    "max-params": "error",

    // ignore eslint prettier that remove this rule, because I want to remove useless template literal
    // quotes: [2, "double", { allowTemplateLiterals: false }],
    "no-implicit-coercion": ["error"],
    "prefer-destructuring": ["error", { object: true, array: false }], // a[0] should not destruct
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],

    // Based on https://github.com/antfu/eslint-config/blob/master/packages/basic/index.js
    // Common
    "no-param-reassign": "off",
    camelcase: "off",
    "no-constant-condition": "warn",
    "no-debugger": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-cond-assign": ["error", "always"],
    "no-restricted-globals": ["error"].concat(confusingBrowserGlobals),
    "no-restricted-syntax": [
      "error",
      "DebuggerStatement",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],

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

    // best-practice
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "consistent-return": "off",
    complexity: ["off", 11],
    eqeqeq: ["error", "always", { null: "ignore" }],
    "no-alert": "warn",
    "no-case-declarations": "error",
    "no-multi-str": "error",
    "no-with": "error",
    "no-useless-escape": "off",
    "vars-on-top": "error",
    "require-await": "off",
    "no-return-assign": "off",
    //#endregion eslint
  },
  overrides: [
    {
      files: ["**/*.js", "**/*.jsx"],
      extends: ["plugin:jsdoc/recommended"],
    },
    {
      // Index files and TypeScript declarations
      files: ["**/*.d.ts", "packages/*/index.ts"],
      rules: {
        "import/no-unused-modules": "off",
      },
    },
  ],
};
