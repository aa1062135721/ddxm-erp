module.exports = {
    outputDir: 'erp',
    baseUrl: './',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api':{
                target:'http://testadmin2.ddxm661.com',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            },
            '/aShop':{
                target:'http://ddxm661.com:8088',
                changeOrigin:true,
                pathRewrite:{
                    '/aShop':''
                }
            }
        }
    }
}
