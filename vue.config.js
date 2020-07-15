
module.exports = {
    devServer: {
        port: 8088,
        proxy: {
            '/ssm_demo': {
                target: 'http://localhost:8080/ssm_demo',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/ssm_demo': ''
                }
            }
        }
    }
}