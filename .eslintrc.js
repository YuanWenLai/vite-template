module.exports = {
    env: {
        browser: true
    },
    extends: [
        'plugin:vue/essential',
        'airbnb-base',
        'prettier',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        allowImportExportEverywhere: true, // 不限制eslint对import使用位置
        ecmaFeatures: {
            modules: true,
            legacyDecorators: true
        }
    },
    plugins: ['vue', 'prettier'],
    rules: {
        // 注意要加上这一句，开启 prettier 自动修复的功能
        'prettier/prettier': 'error',
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true }
        ],
        'import/no-unresolved': [
            2,
            {
                ignore: ['^@/'] // @ 是设置的路径别名
            }
        ],
        'import/extensions': ['error', 'always', { ignorePackages: false }],
        'no-param-reassign': [
            2,
            {
                props: true,
                ignorePropertyModificationsFor: [
                    'state' // for vuex state 解决assignment to property of function parameter ‘state‘
                ]
            }
        ]
    }
};
