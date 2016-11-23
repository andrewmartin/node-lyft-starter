module.exports = {
  "extends": "airbnb",
  "globals": {
    "$": true,
    "window": true,
    "fetch": true
  },
  "rules": {
    "comma-dangle": [0],
    "import/extensions": [0],
    "import/no-unresolved": [0],
    "import/no-extraneous-dependencies": [0],
    "max-len": [0],
    "react/forbid-prop-types": [0],
    "react/prefer-stateless-function": [0],
  },
  "plugins": ["react"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  }
}
