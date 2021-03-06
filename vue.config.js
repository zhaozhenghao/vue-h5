module.exports = {
	publicPath: './',
	devServer: {
		disableHostCheck: true,
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:8088',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api/': ''
				}
			},
		}
	}
}