require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:import/react",
    "plugin:jsx-a11y/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    //#region react
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        shorthandFirst: true,
        // "shorthandLast": <boolean>,
        // "ignoreCase": <boolean>,
        noSortAlphabetically: true,
        reservedFirst: true,
      },
    ],
    "react/display-name": 0,
    "react/prop-types": 0,
    "react/jsx-pascal-case": [
      2,
      {
        allowLeadingUnderscore: true,
        allowNamespace: true,
      },
    ],
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
    // "react/react-in-jsx-scope": 0,
    // "react/jsx-uses-react": 0,

    //#endregion react

    // @see https://github.com/vercel/next.js/blob/canary/packages/eslint-config-next/index.js
    //#region jsx-a11y from nextjs eslint config
    "jsx-a11y/alt-text": [
      "warn",
      {
        elements: ["img"],
        img: ["Image"],
      },
    ],
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",

    //#endregion jsx-a11y from nextjs eslint config
  },
};
