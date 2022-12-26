module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "no-duplicate-imports": "warn",
        "eqeqeq": ["warn", "smart"],
        "no-alert": "warn",
        "no-var": "warn",
        "linebreak-style": ["error", "windows"],
        "max-len": ["warn", { "code": 100, "tabWidth": 2, "ignoreUrls": true }],
        "multiline-ternary": "warn",
        "no-multiple-empty-lines": ["warn", { "max": 2 }],
        "quotes": ["error", "single"],
    }
}
