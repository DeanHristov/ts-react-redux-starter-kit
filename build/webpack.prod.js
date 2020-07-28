const config = require('dotenv').config();
const  { wpPlugins, webpackConf } = require('./build.conf')

if (config.error)
  throw new Error(config.error);

module.exports = env => ({
  ...webpackConf,
  mode: env.NODE_ENV,
  devtool: false,
  plugins: wpPlugins
});
