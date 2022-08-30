'use strict';

// Monaco is required for import/export plugin UI
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');


/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  // Important: return the modified config
  config.plugins.push(new MonacoWebpackPlugin()); // add this for import/export plugin
  return config;
};
