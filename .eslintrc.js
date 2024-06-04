module.exports = {
    "env": {
        "browser": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "tsx": true
        }
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
        "react/jsx-uses-vars": "off",
        "react/jsx-uses-react": "off",
        "react/jsx-no-undef": "off",
        "react/jsx-uses-router": "off",
        "@typescript-eslint/no-explicit-any": "off"
    },
    // "include": ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    // "exclude": ["node_modules"]
}
