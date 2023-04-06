const path = require("path");

module.exports = {
	webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
		config.module.rules.push({
			test: /\.(ttf|eot|woff|woff2)$/i,
			use: [
				{
					loader: "file-loader",
					options: {
						publicPath: "/_next/static/fonts",
						outputPath: "static/fonts",
					},
				},
			],
		});

		config.module.rules.push({
			test: /\.mp3$/,
			loader: "file-loader",
			options: {
				name: "[path][name].[ext]",
				outputPath: "static/audio/",
				publicPath: "/_next/static/audio/",
			},
		});

		return config;
	},
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		remotePatterns: [],
	},
};
