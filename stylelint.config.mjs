/** @type {import('stylelint').Config} */
export default {
    "extends": ["stylelint-config-standard"],
    plugins: ['stylelint-order', '@stylistic/stylelint-plugin'],
    rules: {
        "@stylistic/indentation": 2,
        "@stylistic/color-hex-case": "upper",
        "@stylistic/unit-case": "lower",
        "@stylistic/max-empty-lines": 1,
    }
};

