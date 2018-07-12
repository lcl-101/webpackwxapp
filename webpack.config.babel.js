import webpack from 'webpack';
import path,{resolve} from 'path';
import glob from 'glob';
import WXAppWebpackPlugin, { Targets } from 'wxapp-webpack-plugin';  //微信小程序 webpack 插件
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';  //代码压缩

//生成环境
var plugins = [];
var NODE_ENV = process.env.NODE_ENV;
var isProduction = NODE_ENV ==='production' ? true : false;

//获取项目路径
const ROOT_PATH = path.resolve(__dirname);
const PATH_DIST = path.resolve(__dirname,'dist');
const SRC_VIEW = path.resolve(__dirname,'src');
const BLOG_VIEW = path.resolve(__dirname,'src/blog');

//代码压缩
if(isProduction){
  const UglifyJSPlugins = new UglifyJSPlugin({
    uglifyOptions:{
      warnings: false,
      output: {
        comments: false  // remove all comments
      },
      compress: {
        warnings: false
      },
    },
    sourceMap: true
  });
  plugins.push(UglifyJSPlugins);
}
export default (env = {}) => {
  var envPath = 'src/'+env.target;
  //入口app.js
  const enterJsFile = glob.sync(SRC_VIEW + '/**/app.js');
  const enterJs = {};
  enterJsFile.forEach(function(filePath){
    var l = filePath.split('/').length;
    var n = filePath.split('/')[l-2];
    if(env.target == n){
      enterJs['app'] = filePath;
    }
  });

  const relativeFileLoader = (ext = '[ext]') => {
    return {
  		loader: 'file-loader',
  		options: {
        useRelativePath: true,
  			name: `[name].${ext}`,
  			context: SRC_VIEW
  		}
  	}
  }
  return {
    entry:enterJs,
    output: {
      path: PATH_DIST,
      publicPath: '/',
      filename: env.target+'/[name].js'
    },
    module: {
      rules:[
        {
          test:/\.js$/,
          include: /src/,
          exclude:/node_modules/,
          use:{
            loader:'babel-loader'
          }
        },
        {
          test: /\.wxs$/,
          include: /src/,
          exclude: /node_modules/,
          use: [
            relativeFileLoader(),
            'babel-loader'
          ],
        },
        {
          test: /\.(less|wxss)$/,
          use: [
            relativeFileLoader('wxss'),
            {
              loader:"less-loader",
              options:{
                modules:true
              }
            }
          ]
        },
        {
  				test: /\.(wxml)$/,
  				include: /src/,
  				use: [
            relativeFileLoader('wxml'),
  					{
  						loader: 'wxml-loader',
  						options: {
  							root: SRC_VIEW,
  							enforceRelativePath: true,
  						},
  					},
  				]
        },
        {
          test: /\.(json|png|jpg|gif)$/,
          include: /src/,
          use: relativeFileLoader()
        }
      ]
    },
    devtool: (isProduction ? '' : 'source-map'),
    resolve: { //定义能够被打包的文件，文件后缀名
        modules: [resolve(__dirname, 'src'), 'node_modules']
    },
    plugins: [
      new WXAppWebpackPlugin({
        clear:true
      })
    ].concat(plugins)
  }
}
