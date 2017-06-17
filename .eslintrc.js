module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "globals": {
        "document": true
    },
    "rules": {
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    }
};