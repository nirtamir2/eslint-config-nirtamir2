module.exports = {
  extends: ["plugin:jsx-a11y/recommended", "plugin:solid/typescript"],
  plugins: ["react"],
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
    react: {
      version: "18.2.0",
    },
  },
  rules: {
    // "react/boolean-prop-naming": ["error", { "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+|disabled|open" }]
    "import/dynamic-import-chunkname": "off", // no need webpack anymore
    "react/button-has-type": "error",
    // Breaks reactivity in solid.js but nice to have in react
    "react/destructuring-assignment": [
      "off", // we have eslint plugin solid for that
      "never",
      {
        destructureInSignature: "ignore",
      },
    ],
    "react/display-name": "off",
    "react/forbid-component-props": [
      "off", // too aggressive to use
      {
        forbid: [
          {
            propName: "style",
            // message: "Avoid using style prop",
          },
          "className",
        ],
      },
    ],
    "react/forbid-elements": ["warn", { forbid: [{ element: "a" }] }], // solid-start
    "react/forbid-foreign-prop-types": "off",
    "react/forbid-prop-types": "off",
    "react/function-component-definition": [
      "off", // may be too strict
      { namedComponents: "function-declaration" },
    ],
    "react/hook-use-state": "off", // may be too aggressive
    "react/iframe-missing-sandbox": "error",
    "react/jsx-boolean-value": ["warn", "never"],
    "react/jsx-child-element-spacing": "off", // I think prettier can handle it
    "react/jsx-closing-bracket-location": "off", // I think prettier can handle it
    "react/jsx-closing-tag-location": "off", // I think prettier can handle it
    "react/jsx-curly-brace-presence": [
      "warn",
      { props: "never", children: "never", propElementValues: "always" },
    ],
    "react/jsx-curly-newline": "off", // prettier
    "react/jsx-curly-spacing": "off", // prettier
    "react/jsx-equals-spacing": "off", // prettier
    "react/jsx-filename-extension": [
      "warn",
      { allow: "as-needed", extensions: [".tsx", ".jsx"] },
    ],
    "react/jsx-first-prop-new-line": "off", // prettier
    "react/jsx-fragments": ["warn", "syntax"],
    "react/jsx-handler-names": "error",
    "react/jsx-indent-props": "off", // prettier
    "react/jsx-indent": "off", // prettier
    "react/jsx-max-depth": ["warn", { max: 30 }],
    "react/jsx-max-props-per-line": "off", // prettier
    "react/jsx-newline": "off", // prettier
    "react/jsx-no-bind": "off",
    "react/jsx-no-comment-textnodes": "warn",
    "react/jsx-no-constructed-context-values": "off", // no needed in solid but required in react
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary"] }],
    // Good for i18n only
    "react/jsx-no-literals": [
      "off", // too aggressive fpr now
      {
        noStrings: true,
        allowedStrings: [],
        ignoreProps: true,
        noAttributeStrings: false,
      },
    ],
    "react/jsx-no-script-url": "error",
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    "react/jsx-one-expression-per-line": "off", // prettier
    "react/jsx-pascal-case": [
      "error",
      {
        allowLeadingUnderscore: true,
        allowNamespace: true,
      },
    ],
    "react/jsx-props-no-multi-spaces": "off", // prettier
    "react/jsx-props-no-spreading": "off", // but interesting, better to avoid spreads but sometimes it's needed
    "react/jsx-sort-default-props": "off",
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        shorthandFirst: true,
        // "shorthandLast": <boolean>,
        // "ignoreCase": <boolean>,
        noSortAlphabetically: true,
        reservedFirst: true,
      },
    ],
    "react/jsx-space-before-closing": "off", // prettier
    "react/jsx-tag-spacing": "off", // prettier
    "react/jsx-uses-react": "off",
    "react/jsx-uses-vars": "error",
    "react/jsx-wrap-multilines": "off", // prettier
    "react/no-access-state-in-setstate": "off",
    "react/no-adjacent-inline-elements": "off", // prettier
    "react/no-array-index-key": "off", // solid.js does not need it
    "react/no-arrow-function-lifecycle": "off",
    "react/no-children-prop": "error",
    "react/no-danger-with-children": "error",
    "react/no-danger": "error",
    "react/no-deprecated": "off", // no needed for solidjs
    "react/no-did-mount-set-state": "off",
    "react/no-did-update-set-state": "off",
    "react/no-direct-mutation-state": "off",
    "react/no-find-dom-node": "off",
    "react/no-invalid-html-attribute": "error",
    "react/no-is-mounted": "off",
    "react/no-multi-comp": "off",
    "react/no-namespace": "error",
    "react/no-object-type-as-default-prop": "off",
    "react/no-redundant-should-component-update": "off",
    "react/no-render-return-value": "off",
    "react/no-set-state": "off",
    "react/no-string-refs": "off", // solid refs are not string
    "react/no-this-in-sfc": "off",
    "react/no-typos": "off",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "off", // TypeScript handle it better
    "react/no-unsafe": "off",
    "react/no-unstable-nested-components": "error",
    "react/no-unused-class-component-methods": "off",
    "react/no-unused-prop-types": "off",
    "react/no-unused-state": "off",
    "react/no-will-update-set-state": "off",
    "react/prefer-es6-class": "off",
    "react/prefer-exact-props": "off",
    "react/prefer-read-only-props": "off",
    "react/prefer-stateless-function": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/require-optimization": "off",
    "react/require-render-return": "off",
    "react/self-closing-comp": "warn",
    "react/sort-comp": "off",
    "react/sort-default-props": "off",
    "react/sort-prop-types": "off",
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",
  },
  overrides: [
    // solid-start default exports
    {
      files: ["**/routes/**", "root.tsx", "entry-server.tsx"],
      rules: {
        "import/no-unused-modules": 0,
      },
    },
  ],
};
