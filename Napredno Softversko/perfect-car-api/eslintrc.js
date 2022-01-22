module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'import',
    ],
    extends: [
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        'object-curly-newline': ['error', {
            ObjectExpression: { multiline: true, minProperties: 3 },
            ObjectPattern: { multiline: true, minProperties: 3 },
            ImportDeclaration: { multiline: true, minProperties: 3 },
            ExportDeclaration: { multiline: true, minProperties: 3 },
        }],
        'block-spacing': ['error', 'always'],
        'object-curly-spacing': ['error', 'always'],
        curly: ['error', 'all'],
        semi: [
            'error',
            'always',
        ],
        quotes: [
            2,
            'single',
        ],
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
        }],
        'no-prototype-builtins': 'off',
        'max-len': [
            'error',
            140,
            2,
            {
                ignoreUrls: true,
                ignoreComments: true,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'no-await-in-loop': 'off',
        'no-plusplus': 'off',
        'no-shadow': 'off',
        'no-console': ['warn',
            {
                allow: ['warn', 'error',
                ],
            },
        ],
        'no-underscore-dangle': 'off',
        'no-param-reassign': 'off',
        'no-undef': 'off',
        'guard-for-in': 'off',
        'class-methods-use-this': 'off',
        'no-use-before-define': [
            'error',
            {
                functions: false, classes: false, variables: false,
            },
        ],
        'prefer-destructuring': ['error',
            { array: false, object: true },
        ],
        'no-empty': ['error',
            { allowEmptyCatch: true },
        ],
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
        'array-callback-return': 'off',
        'consistent-return': 'off',
        'prefer-promise-reject-errors': 'off',
        'global-require': 'off',
        'default-case': 'off',
        'func-names': 'off',
        'new-cap': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
            'ignoreRestSiblings': true,
            'caughtErrors': 'none',
            'args': 'after-used', 
        }],
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/type-annotation-spacing': ['error', { after: true }],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always', prev: '*', next: 'return', 
            },
            {
                blankLine: 'always', prev: 'block-like', next: '*', 
            },
            {
                blankLine: 'always', prev: '*', next: 'block-like', 
            },
        ],
        'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
        'space-infix-ops': 'error',
        'keyword-spacing': ['error', { before: true, after: true }],
        'arrow-spacing': ['error', { before: true, after: true }],
        'space-before-function-paren': ['error', {
            'anonymous': 'always',
            'named': 'never',
            'asyncArrow': 'always',
        }],
        'space-before-blocks': ['error', 'always'],
        'comma-spacing': ['error', { after: true }],
        'key-spacing': ['error', {
            'beforeColon': false, 'afterColon': true, 'mode': 'strict', 
        }],
        'indent': ['error', 4],
        'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],
        'semi-spacing': ['error', { 'before': false, 'after': true }],
        'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
        'computed-property-spacing': ['error', 'never', { 'enforceForClassMembers': true }],
    },
};