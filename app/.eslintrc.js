module.exports = {
  "parser": "babel-eslint",
  "settings": {
    "import/resolver": {
      "webpack": "webpack.config.js",
    },
  },
  "plugins": [
    "react",
    "import",
    "chai-friendly",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
  },
  "extends": [
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "standard-warn", // Standard but with warnings instead of errors
  ],
  "rules": {
    "comma-dangle": ["warn", "always-multiline"],
    // The below option is part of Standard, but it's not that good :/
    // I've left this comment here to warn the next person coming along
    // "handle-callback-err": [1, "^(err|error)$" ],
    "jsx-quotes": ["warn", "prefer-double"],
    // "no-native-reassign": 1,
    // "no-negated-in-lhs": 1,
    // "no-spaced-func": 1,
    "react/prop-types": 0,

    // This is just in plain disagreement with Standard (they use "always" for all)
    "space-before-function-paren": ["warn", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always",
    }],

    "import/order": ["warn", {
      "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
      "newlines-between": "always",
    }],

    // Don't count chai.expect as a unused expression
    "no-unused-expressions": 0,
    "chai-friendly/no-unused-expressions": 2,
    "no-undef": "error",
  }
}