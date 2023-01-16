module.exports = {
  extends: [
    '@fearcleari/eslint-config-basic',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // 覆盖基础配置
    'no-unused-vars': 0,
    'no-undef': 0,
    'no-useless-constructor': 0,
    'no-empty': 0,
    // 覆盖 typescript-eslint 配置
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    '@typescript-eslint/ban-ts-comment': ['error', 'allow-with-description']
  }
}
