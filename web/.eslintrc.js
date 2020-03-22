module.exports = {
  "extends": ["airbnb-typescript", "prettier"],
  "plugins": ["prettier"],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    "prettier/prettier": ["error"],
    "import/prefer-default-export": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off"
  }
};
