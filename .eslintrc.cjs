/* eslint-env node */
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    env: {
        node: true,
        browser: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'no-console': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'prefer-const': 'error',
    },
};
