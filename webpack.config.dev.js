const path = require('path');
const MiniCssExtractPlugin =require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
  entry:{
    main:"./index.js"
  },
  output:{
    filename:"[name]-[hash].js",
    path:path.resolve(__dirname,'./dist')
  },
  mode:'development',
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        },
        exclude:/node_modules/
      },
      {
        test:/\.css$/,
        use:[
          {loader:'style-loader'},
          {loader:'css-loader',options:{modules:false}}
        ]
      },
      {
        test:/\.scss$/,
        use:[
          {loader:'style-loader'},
          // {
          //   loader:MiniCssExtractPlugin.loader,
          //   options:{publicPath:'./'}
          // },
          {loader:'css-loader',options:{modules:false}},
          {loader:'sass-loader'}
        ]
      }
    ]
  },
  plugins:[
    // new MiniCssExtractPlugin({
    //   filename: '[name].css',
    //   chunkFilename: '[id].css',
    //   ignoreOrder: false // Enable to remove warnings about conflicting order
    // }),
    new HtmlWebpackPlugin({
      template:'./index.html'
    })
  ],
  devtool: 'cheap-module-eval-source-map',
  resolve: {
  extensions: [".js", ".jsx", ".css"]
},
  devServer:{
    contentBase: false,
    compress: true,
    port: 9000,
    hot:true
  }
}
