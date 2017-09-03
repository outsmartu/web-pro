const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
	devtool: 'inline-source-map',
	devServer: {
		inline: true,
		contentBase: './dist',
		port: 8000,
		hot: true,
		open: true,
        disableHostCheck: true
	}
});