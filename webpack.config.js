const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
	mode: 'development',
	entry: __dirname + '/src/app.jsx',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react'], // используемые плагины
				},
			},
		],
	},
	devServer: {
		historyApiFallback: true,
		port: 8081,
		open: true,
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({ template: './src/index.html' }),
	],
	devServer: {
		// configuration for webpack-dev-server
		contentBase: './src/public', //source of static assets
		port: 7700, // port to run dev-server
	},
};
