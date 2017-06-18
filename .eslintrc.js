module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "globals": {
        "document": true,
        "window": true,
        "describe": true,
        "it": true
    },
    "rules": {
        "no-underscore-dangle": ["error", {"allow": ["__REDUX_DEVTOOLS_EXTENSION__"]}],
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    }
};