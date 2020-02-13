module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // target: 'http://localhost:3000',
                target : 'http://sample.bmaster.kro.kr',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}