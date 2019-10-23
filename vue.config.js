const mockPath = "http://rap.d.renrenauto.com/";

const proxyOptions = {
  '/auth': {
    target: mockPath,
    pathRewrite: {'^/api': ''},
    changeOrigin: true,
    secure: false
  },
  '/api': {
    target: mockPath,
    changeOrigin: true,
    secure: false
  }
};

module.exports = {
  devServer: {
    overlay: {    //显示编译错误和警告
      warnings: true,
      errors: true
    },
    open: false, //不自动打开浏览器
    compress: true, //启用Gzip
    proxy: proxyOptions
  }
};