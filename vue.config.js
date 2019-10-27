//html 插入文件插件
const InsertHtmlPlugin = require('./src/assets/js/insertHtmlPlugin');

// 接口mock地址
const mockPath = "http://rap.d.renrenauto.com/";

//资源打包后的引用地址
const publicPath = process.env.NODE_ENV === 'production'
  ? 'https://s.domain.com/'
  : '/';

//请求转发配置
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
  pages: {
    index: {
      // page 的入口
      entry: 'src/htmls/main/index.js',
      // 模板来源
      template: 'src/htmls/template/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
    }
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js'
  },
  productionSourceMap: false,
  publicPath: publicPath,  //CDN节点地址
  configureWebpack: {
    plugins: [
      new InsertHtmlPlugin()
    ]
  },
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