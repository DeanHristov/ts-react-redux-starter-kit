const pathResolve = require('path').resolve;
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

/** Base configuration for both configurations (dev/prod) */
const webpackConf = {
  entry: {
    main: [
      "whatwg-fetch",
      "es6-shim",
      pathResolve(`${process.cwd()}/index.tsx`)
    ],
  },
  output: {
    filename: '[name]-bundle.js',
    path: pathResolve(`${process.cwd()}/dist/`),
    publicPath: "/"
  },
  plugins: [],
  module: {
    rules: []
  },
  resolve: {
    extensions: [".ts", ".tsx", ".json", ".js"],
    alias: {
      "@assets": pathResolve(process.cwd(), 'src/assets'),
      "@common": pathResolve(process.cwd(), 'src/common'),
      "@containers": pathResolve(process.cwd(), 'src/common/containers'),
      "@ui": pathResolve(process.cwd(), 'src/common/ui'),
      "@store": pathResolve(process.cwd(), 'src/store'),
      "@styles": pathResolve(process.cwd(), 'src/styles'),
      "@locales": pathResolve(process.cwd(), 'src/locales'),
      "@constants": pathResolve(process.cwd(), 'src/constants'),
      "@routes": pathResolve(process.cwd(), 'src/routes'),
      "@shared": pathResolve(process.cwd(), 'src/shared'),
      "@core": pathResolve(process.cwd(), 'src/core')
    }
  }
}

/** Added external loaders */
webpackConf.module.rules.push({
  test: /\.ts(x?)$/,
  exclude: /node_modules/,
  use: [{loader: "ts-loader"}]
});

webpackConf.module.rules.push({
  enforce: "pre",
  test: /\.js$/,
  loader: "source-map-loader"
});

webpackConf.module.rules.push({
  test: /\.(scss|css)$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'
  ]
});

webpackConf.module.rules.push({
  test: /\.(png|jpe?g|gif|pdf)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name(resourcePath, resourceQuery) {
          if (process.env.NODE_ENV === 'development') {
            return '[path][name].[ext]';
          }

          return '[name].[ext]';
        }
      },
    },
  ],
});

/** Define webpack plugins */
webpackConf.plugins.push(new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html'
}));

exports.wpPlugins = env => {
  webpackConf.plugins.push(new webpack.DefinePlugin({
    __DEV__: JSON.stringify(env.NODE_ENV === 'development'),
    __PROD__: JSON.stringify(env.NODE_ENV === 'production'),
    __TEST__: JSON.stringify(env.NODE_ENV === 'test'),

    API_KEY: JSON.stringify(process.env.API_KEY),
    API_URL: JSON.stringify(process.env.API_URL),
    API_TOKEN: JSON.stringify(process.env.API_TOKEN)
  }));

  return webpackConf.plugins;
}

exports.webpackConf = webpackConf;
