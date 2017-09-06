const path = require('path')

module.exports = {
  entry: {
    client: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '../lib'),
    filename: 'index.js',
    publicPath: './',
    libraryTarget: 'umd',
    library: 'LamentoConfirm'
  },
  resolve: {
    extensions: ['.js', '.html', '.css', '.json'],
    alias: {
      '~': path.join(__dirname, '../src')
    }
  },
  performance: {},
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.js$/,
        use: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(html|js)$/,
        use: 'babel-loader',
        include: [/src/, /example/],
        exclude: [/node_modules/]
      },
      {
        test: /\.html$/,
        use: 'svelte-loader',
        include: [/src/, /example/],
        exclude: [/node_modules/]
      }
    ]
  }
}
