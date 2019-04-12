module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
      publicPath: '/dist/',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    }  
  }