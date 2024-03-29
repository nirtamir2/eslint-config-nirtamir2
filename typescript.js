module.exports = {
  extends: [
    "plugin:expect-type/recommended",
    "plugin:@typescript-eslint/recommended", // should not add new rules
    "plugin:@typescript-eslint/recommended-requiring-type-checking", // should not add new rules
    // "plugin:etc/recommended", // should not add new rules UPDATE: does not work
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  plugins: ["tsdoc", "eslint-plugin-expect-type"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    project: ["./tsconfig.json"],
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    "import/resolver":{
      typescript: {}
    }
  },
  rules: {
    //#region tsdoc
    "tsdoc/syntax": "warn",
    //#endregion

    //#region import
    /**
     * @see https://typescript-eslint.io/docs/linting/troubleshooting/#eslint-plugin-import
     * Import rules that have TypeScript specific checks
     */
    "import/named": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/no-named-as-default-member": "off",
    //#endregion

    //#region etc - off too strict rules
    // "etc/no-commented-out-code": "off", //too strict?
    // "etc/no-deprecated": "off",
    // "etc/no-enum": "off",
    // "etc/no-foreach": "off",
    // "etc/no-internal": "off",
    // "etc/prefer-less-than": "off", // conflicts unicorn/explicit-length-check
    // "etc/no-t": "off", // in the future
    //#endregion

    //#region etc - error rules
    // "etc/no-assign-mutated-array": "error",
    // "etc/no-const-enum": "error",
    // "etc/no-misused-generics": "error",
    // "etc/prefer-interface": "error",
    // "etc/throw-error": "error",
    // "etc/underscore-internal": "error",
    // "etc/no-implicit-any-catch": "error",
    //#endregion

    //#region @typescript-eslint off - too strict
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/class-methods-use-this": "off",
    "@typescript-eslint/consistent-type-definitions": "off", // I think it's covered by etc/prefer-interface + I prefer interface than type
    "@typescript-eslint/explicit-module-boundary-types": "off", // nice, but may need to off in tsx files? https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md#configuring-in-a-mixed-jsts-codebase
    "@typescript-eslint/explicit-function-return-type": "off", //too strict
    "@typescript-eslint/prefer-readonly": "off", //too strict to specify readonly on every param
    "@typescript-eslint/prefer-readonly-parameter-types": "off", //too strict to specify readonly on every param
    "@typescript-eslint/naming-convention": [
      "off",
      /*
       Too strict: sometimes we get stuff from server like user_id or call server with
       .match({
               course_id: course.id,
               user_id: userId,
             });
       And we fail in this lint

       Another example is something like
       Function name `AuthProvider` must match one of the following formats: camelCase

       {
         selector: "default",
         format: ["camelCase"],
         leadingUnderscore: "allow",
         trailingUnderscore: "allow",
       },

       {
         selector: "variable",
         format: ["camelCase", "UPPER_CASE"],
         leadingUnderscore: "allow",
         trailingUnderscore: "allow",
       },

       Also for 3rd party override like in global.d.ts

      declare global {
        namespace NodeJS {
          interface ProcessEnv {
            NODE_ENV: "development" | "production";
            MY_ENV_VARIABLE: string;
          }
        }
      }

      This will complain that interface ProcessEnv not starting with I

      Or auto-generated TypeScript tool that gets an object json and return it's types

      */
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      // Mine:
      {
        selector: "interface",
        format: ["PascalCase"],
        prefix: ["I"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
        suffix: ["T"],
      },
    ],
    //#endregion

    //#region @typescript-eslint no need
    "@typescript-eslint/ban-tslint-comment": "off",
    //#endregion no need

    //#region @typescript-eslint - warn
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    //#endregion @typescript-eslint - too noisy rules

    //#region @typescript-eslint - styling rules I don't care about (prettier can handle it so I put it in off)
    "space-infix-ops": "off",
    "@typescript-eslint/space-infix-ops": "off",
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": "off",
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": "off",
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": "off",
    "brace-style": "off",
    "@typescript-eslint/brace-style": "off",
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": "off",
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": "off",
    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": "off",
    indent: "off",
    "@typescript-eslint/indent": "off",
    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    quotes: "off",
    "@typescript-eslint/quotes": "off",
    semi: "off",
    "@typescript-eslint/semi": "off",
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "block-spacing": "off",
    "@typescript-eslint/block-spacing": "off",
    "key-spacing": "off",
    "@typescript-eslint/key-spacing": "off",
    "lines-around-comment": "off",
    "@typescript-eslint/lines-around-comment": "off",
    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": "off",
    //#endregion

    //#region @typescript-eslint all https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/all.ts

    "@typescript-eslint/consistent-generic-constructors": "error",
    "@typescript-eslint/no-unsafe-declaration-merging": "error",
    // "@typescript-eslint/no-unsafe-enum-comparison": "error", new rule
    "@typescript-eslint/sort-type-constituents": "off", // Style - too strict
    "@typescript-eslint/no-mixed-enums": "error",
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/no-redundant-type-constituents": "error",
    "@typescript-eslint/no-duplicate-enum-values": "error",
    "@typescript-eslint/no-useless-empty-export": "error",
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-ignore": "allow-with-description",
      },
    ],
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": ["error", { default: "generic" }],
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          String: {
            message: "Use `string` instead.",
            fixWith: "string",
          },
          Number: {
            message: "Use `number` instead.",
            fixWith: "number",
          },
          Boolean: {
            message: "Use `boolean` instead.",
            fixWith: "boolean",
          },
          Symbol: {
            message: "Use `symbol` instead.",
            fixWith: "symbol",
          },
          Object: {
            message:
              "The `Object` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead. See https://github.com/typescript-eslint/typescript-eslint/pull/848",
            fixWith: "Record<string, unknown>",
          },
          "{}": {
            message:
              "The `{}` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead.",
            fixWith: "Record<string, unknown>",
          },
          object: {
            message:
              "The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848",
            fixWith: "Record<string, unknown>",
          },
          Function: "Use a specific function type instead, like `() => void`.",
        },
      },
    ],
    "@typescript-eslint/class-literal-property-style": "error", // IDK
    "@typescript-eslint/consistent-indexed-object-style": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/consistent-type-exports": "error",
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "error",
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/explicit-member-accessibility": "error",
    "init-declarations": "off",
    "@typescript-eslint/init-declarations": "error",
    "lines-between-class-members": "off",
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/method-signature-style": "error",
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-confusing-void-expression": "error",
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "error",
    "no-duplicate-imports": "off",
    "@typescript-eslint/no-dynamic-delete": "error",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-extra-non-null-assertion": "error",

    // Less important rules:
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "no-implied-eval": "off",
    "@typescript-eslint/no-implied-eval": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "no-invalid-this": "off",
    "@typescript-eslint/no-invalid-this": "error",
    "@typescript-eslint/no-invalid-void-type": "error",
    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": "error",
    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": "error",
    "@typescript-eslint/no-meaningless-void-operator": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/parameter-properties": "error",
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error",
    "@typescript-eslint/no-require-imports": "error",
    "no-restricted-imports": "off",
    "@typescript-eslint/no-restricted-imports": "error",
    "@typescript-eslint/no-this-alias": "error",
    "no-throw-literal": "off",
    "@typescript-eslint/no-throw-literal": "error",
    // "@typescript-eslint/no-type-alias": "off", // A & B, type AppRouter = typeof appRouter, Merge<A,B>
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "@typescript-eslint/no-unsafe-argument": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "error",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/non-nullable-type-assertion-style": "error",
    "padding-line-between-statements": "off",
    "@typescript-eslint/padding-line-between-statements": "error",
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-literal-enum-member": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/prefer-return-this-type": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "require-await": "off",
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/restrict-template-expressions": "error",
    "no-return-await": "off",
    "@typescript-eslint/return-await": ["error", "always"],
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/typedef": "error",
    "@typescript-eslint/unbound-method": "error",
    "@typescript-eslint/unified-signatures": "error",
    //#endregion

    "array-callback-return": "off", // https://github.com/typescript-eslint/typescript-eslint/issues/2841 - false positive with TypeScript
  },
};
