const  createProxyMiddleware  = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    '/home',
    createProxyMiddleware({
      target: 'https://home-api.pinduoduo.com/',
      changeOrigin: true,
    }),
  )

  // http://api.bdplus.cn/api/userinfo?page=1&pageSize=100
  //   app.use(
  //     '/wp-json',
  //     createProxyMiddleware({
  //       target: 'https://#####.cn/',
  //       changeOrigin: true,
  //     }),
  //   )
}