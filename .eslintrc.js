module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  plugins: [
    'html'
  ],
  'rules': {
    'no-console': 1,
    'no-new': 0,
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}