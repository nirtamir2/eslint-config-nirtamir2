module.exports = {
  plugins: ["misc"],
  rules: {
    "misc/class-match-filename": 2,
    "misc/comment-spacing": 0,
    "misc/consistent-empty-lines": 0,
    "misc/consistent-enum-members": 2,
    "misc/consistent-filename": 2, // config?
    "misc/consistent-import": 2, // config + too strict?
    "misc/consistent-optional-props": 0,
    "misc/consistent-source-extension": 0,
    "misc/consistent-symbol-description": 0,
    "misc/disallow-import": 0, // cool rule - but I think I already have this somewhere and we can configure it
    "misc/export-matching-filename-only": 2,
    "misc/match-filename": 0,
    "misc/max-identifier-blocks": 0, // cool
    "misc/no-at-sign-import": 2,
    "misc/no-at-sign-internal-import": 0,
    "misc/no-chain-coalescence-mixture": 0,
    "misc/no-expression-empty-lines": 0, // nice but stylistic
    "misc/no-index-import": 2,
    "misc/no-internal-modules": 0, // nice bit too strict
    "misc/no-language-mixing": 0, // nice but not relevant
    "misc/no-negated-conditions": 0,
    "misc/no-nodejs-modules": 0,
    "misc/no-param-reassign": 0,
    "misc/no-relative-parent-import": 0,
    "misc/no-restricted-syntax": 0, // cool - we can configure it
    "misc/no-self-import": 2,
    "misc/no-shadow": 0,
    "misc/no-sibling-import": 0,
    "misc/no-underscore-export": 2,
    "misc/no-unnecessary-as-const": 2,
    "misc/no-unnecessary-break": 0,
    "misc/no-unnecessary-initialization": 0,
    "misc/no-unnecessary-template-literal": 2,
    "misc/object-format": 0,
    "misc/only-export-name": 2,
    "misc/prefer-arrow-function-property": 0,
    "misc/prefer-const-require": 0,
    "misc/prefer-only-export": 2,
    "misc/require-jsdoc": 0,
    "misc/require-syntax": 0, // not useful but can be configured
    "misc/restrict-identifier-characters": 0,
    "misc/sort-array": 0,
    "misc/sort-call-signature": 2,
    "misc/sort-class-members": 0,
    "misc/sort-construct-signature": 2,
    "misc/sort-export-specifiers": 0,
    "misc/sort-keys": 0,
    "misc/sort-statements": 0,
    "misc/sort-top-comments": 0,
    "misc/switch-case-spacing": 0,
    "misc/template-literal-format": 0,
    "misc/wrap": 0, // nice! can be very useful to configure

    "misc/eslintrc/no-message-dot": 2,
    "misc/eslintrc/no-unnecessary-array": 2,
    "misc/eslintrc/sort-array": 0,
    "misc/eslintrc/sort-suboptions": 0,

    // I don't care about those rules
    "misc/jest/no-toThrow-literal": 0,
    "misc/jest/prefer-toBe": 0,
    "misc/jest/prefer-toStrictEqual": 0,

    // I don't care about those rules and I think they are implemented at typescript/eslint
    "misc/typescript/array-callback-return-type": 0,
    "misc/typescript/class-methods-use-this": 0,
    "misc/typescript/consistent-array-type-name": 0,
    "misc/typescript/define-function-in-one-statement": 0,
    "misc/typescript/exhaustive-switch": 0,
    "misc/typescript/no-boolean-literal-type": 0,
    "misc/typescript/no-complex-declarator-type": 0,
    "misc/typescript/no-complex-return-type": 0,
    "misc/typescript/no-empty-interfaces": 0,
    "misc/typescript/no-inferrable-types": 0,
    "misc/typescript/no-multi-type-tuples": 0,
    "misc/typescript/no-never": 0,
    "misc/typescript/no-restricted-syntax": 0,
    "misc/typescript/no-unsafe-object-assign": 0,
    "misc/typescript/no-unsafe-object-assignment": 0,
    "misc/typescript/prefer-array-type-alias": 0,
    "misc/typescript/prefer-class-method": 0,
    "misc/typescript/prefer-enum": 0,
    "misc/typescript/prefer-readonly-array": 0,
    "misc/typescript/prefer-readonly-map": 0,
    "misc/typescript/prefer-readonly-property": 0,
    "misc/typescript/prefer-readonly-set": 0,
    "misc/typescript/require-prop-type-annotation": 0,
    "misc/typescript/require-this-void": 0,

    // I don't care about vue rules
    "misc/vue/component-name": 0,
    "misc/vue/element-contents-spacing": 0,
    "misc/vue/no-complex-declarator-type": 0,
    "misc/vue/no-complex-return-type": 0,
    "misc/vue/no-readonly-v-model": 0,
    "misc/vue/sort-v-bind": 0,
  },
};
