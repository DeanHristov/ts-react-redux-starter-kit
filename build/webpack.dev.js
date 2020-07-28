const DashboardPlugin = require('webpack-dashboard/plugin');

const  { wpPlugins, webpackConf } = require('./build.conf')
const config = require('dotenv').config();

if (config.error) throw new Error(config.error);

module.exports = (env) => ({
  ...webpackConf,
  mode: env.NODE_ENV,
  plugins: [
    ...wpPlugins(env),
    new DashboardPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    overlay: true,
    hot: true,
    contentBase: '/dist',
    historyApiFallback: true
  }
});
