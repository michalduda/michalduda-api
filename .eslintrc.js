const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-debugger': isProd ? 'warn' : 'off'
  }
}
