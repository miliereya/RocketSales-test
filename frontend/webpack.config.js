const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    compress: true
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', ["@babel/preset-react", {"runtime": "automatic"}]]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  resolveLoader: {
    modules: [
        path.join(__dirname, 'node_modules')
    ]
  },
  resolve: {
      modules: [
          path.join(__dirname, 'node_modules')
      ],
      extensions: ['*', '.js','jsx'],
      alias: {
        '@src': path.resolve(__dirname, './src'),
      }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
}