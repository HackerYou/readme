module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "globals": {
        "document": true,
        "window": true,
        "describe": true,
        "it": true,
        "Headers": true,
        "Request": true,
        "fetch": true,
        "sessionStorage": true,
        "localStorage": true
    },
    "rules": {
        "arrow-body-style": 0,
        "no-underscore-dangle": ["error", {"allow": ["__REDUX_DEVTOOLS_EXTENSION__", "__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]}],
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-indent-props": [2, 4],
        "import/prefer-default-export": 0
    }
};