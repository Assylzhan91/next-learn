/** @type {import('stylelint').Config} */
export default {
    extends: ["stylelint-config-standard"],
    plugins: ['stylelint-order'],
    rules: {
        "block-no-empty": true,
        "textIndent": 4,
        "color-no-invalid-hex": true,

    }
};

