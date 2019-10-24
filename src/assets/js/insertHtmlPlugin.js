function InsertHtmlPlugin(options) {
  // Configure your plugin with options...
  this.options = options;
}

InsertHtmlPlugin.prototype.apply = function (compiler) {
  compiler.hooks.compilation.tap('InsertHtmlPlugin', function(compilation){
    compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync('InsertHtmlPlugin', (data, callback) => {
      data.html =  data.html.replace('</head>',
        `<script>
         var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
          </script></head>`);
      callback(null, data)
    })
  })
};

module.exports = InsertHtmlPlugin;