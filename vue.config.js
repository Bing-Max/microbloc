
module.exports = {
    devServer: {
        port: 8088,
        proxy: {
            '/ssm_demo': {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true,
            }
        }
    }
}