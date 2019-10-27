# vue-cli

## Vue-cli 配置详解
    最近想升级一下技术架构，发现新版本的脚手架和之前的区别有点大。
    很多之前的配置要进行迁移。
    基于此，在这里做下配置说明以及配置一些自定义的功能实现。

#### 直接获取：
    以下内容可能过于简单，请选择性查看。
    全功能最终版本位于 master 分支，包括：
        1. 单入口，多入口配置
        2. 单元测试
        3. 外部文件引入
    单页面模板位于 fu-spa 分支
    多页面模板位于 fu-mpa 分支
    
### 如何运行：
```
$ npm install
$ npm run serve  //运行本地服务
$ npm run build  //执行构建任务
$ npm run test:unit  //执行单元测试
$ npm run test:e2e  //执行端测试
$ npm run lint  //运行代码错误检查
```

### 环境：
```
➜ gitHub npm -v
6.11.3
➜ gitHub node -v
v12.12.0
➜ gitHub vue -V
@vue/cli 4.0.2
```

* 注意：如果在升级vue-cli 4.0时，npm install 命令总是报错。
    此问题原因是因为本地控制node版本的 n 版本过旧。需要先升级 n 然后再切换node版本
    使用 npm install -g @vue/cli 安卓最新脚手架

### 安装过程：

#### step1：
```
? Please pick a preset:
  default (babel, eslint)   //默认，包含基础的babel和eslint
❯ Manually select features    //自定义
```
此处选择自定义


#### step2：
```
? Check the features needed for your project:
 ◉ Babel       //ES6转ES5
 ◯ TypeScript
 ◉ Progressive Web App (PWA) Support  //PWA
 ◉ Router   //vue-router
 ◉ Vuex    //单页面应用的状态管理模块
 ◉ CSS Pre-processors  //CSS预处理（less/sass）
 ◉ Linter / Formatter    //代码检查
 ◉ Unit Testing    //单元测试
❯◉ E2E Testing    //端对端测试
```
我们在此勾选所有插件，做一个功能最全的模板项目
当然你也可以在项目创建后，使用 vue add eslint 来补充插件


#### step3：
```
Use history mode for router? (Requires proper server setup for index fallback in production)（Y/n） //输入N
```
是否使用 history 模式的前端路由， N 不使用


#### step4：
```
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default):   
  Sass/SCSS (with dart-sass)
  Sass/SCSS (with node-sass)
❯ Less   // 因为我的服务上 node-sass 总是出现问题，在这里我选择了less，随喜好各自选择。
  Stylus
```
选择一个css预处理器


#### step4：
```
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default):   
  Sass/SCSS (with dart-sass)
  Sass/SCSS (with node-sass)
❯ Less   // 因为我的服务上 node-sass 总是出现问题，在这里我选择了less，随喜好各自选择。
  Stylus
```
选择一个css预处理器


#### step5：
```
? Pick a linter / formatter config: (Use arrow keys)
❯ ESLint with error prevention only  //仅防止异常格式
  ESLint + Airbnb config  //Airbnb 配置
  ESLint + Standard config //标准配置
  ESLint + Prettier
```
选择一个代码风格/格式校验配置


#### step6：
```
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◉ Lint on save   //保存时
 ◯ Lint and fix on commit   //提交时
```
选择代码风格/格式校验的时机


#### step7：
```
? Pick a unit testing solution: (Use arrow keys)
  Mocha + Chai
❯ Jest
```
选择选择单元测试工具


#### step8：
```
Pick a E2E testing solution: (Use arrow keys)
❯ Cypress (Chrome only)  //仅支持chrome
  Nightwatch (WebDriver-based) //基于WebDriver
```
选择端对端测试工具


#### step9：
```
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? (Use arrow keys)
❯ In dedicated config files //在专属的配置文件中
  In package.json  //在package.json中
```
选择Babel，PostCSS，ESLint配置的储存位置，单独文件还是统一放到package.json中


#### step10：
```
Save this as a preset for future projects? (y/N)  //Y
```
是否将以上配置设为之后项目默认配置


#### step11：
```
 Save preset as:  
```
配置起名

至此安装完毕，等待项目创建完成。
新版本与旧版本的区别在移除了build目录，集成到了vue/cli-service下
我之前的项目中有对webpack的打包优化，有对测试服务的修改。
换到新版本后需要重新考虑解决方案了。


先看下目录结构：
#### public 
   网站根目录，可以放一些公共资源目录，相当于老版本的static目录，build时所有文件会被copy到dist目录下。
你可以将一些版本不会发生变化的文件直接放到此目录下。
例如：我们想在页面中引用echarts库，可以这么操作：
```
1. 在public目录下新建static目录
2. copy 文件 echarts-all.js 到 static 目录下
3. 在index.html中引用：<script type="text/javascript" src="/static/echarts-all.js" ></script>
```

#### src/assets
   与public目录类似，也是用来存放静态资源的目录。
二者的区别是public目录下文件只会简单的被copy到dist目录。
assets目录下文件会经过webpack处理，压缩合并或者图片转base。
所以，不需要构建的文件放到public下，例如三方库，robots文件，小程序/公众号的验证文件等。
需要参与构建过程的文件要放到assets下，例如vue中引用的图片资源

#### src/components
   组件目录，没有特殊含义，用来区分文件夹功能。可以将一些自定义的组件放到此目录下。
   
#### src/router
   前端路由目录， 具体的路由配置写到index.js中，详细配置放到后面讲
   
#### src/store
   vuex目录，公众号里有一篇关于vuex的使用介绍，有兴趣的同学可以关注"js前端架构"进行查看
   
#### src/views
   页面文件目录，用来存放路由对应的vue文件。
   
#### src/App.vue
   在单页面应用的情况下，App.vue 为 index页面对应的Vue文件
   
#### src/main.js
   全局入口配置，在此文件中初始化全局的Vue示例，以及Router，vuex的引入

#### src/registerServiceWorker.js
   PWA配置，它需要与manifest.json文件搭配使用。 具体的使用方式我们在后面单独讲解。
   
#### tests/e2e
   此目录下为端对端测试代码，可以实现页面的自动化UI测试功能。

#### tests/test
   此目录下为Jest单元测试代码。
   
#### .browserslistrc
   此文件为CSS编译时的浏览器兼容配置。具体配置参考：https://github.com/browserslist/browserslist
   为了体现通用模板，我们考虑有可能在PC端使用此模板，所以增加IE的版本支持，从IE9开始
   增加了配置： not ie <= 8
#### .eslintrc.js
   此文件为代码格式化检查配置，具体配置参考：https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint

#### .gitignore
   此文件为git文件忽略配置，用来忽略不想加入版本控制的文件。
   
#### babel.config.js
   此文件为 babel 代码转换的配置，具体配置参考：https://cli.vuejs.org/zh/guide/browser-compatibility.html#polyfill
  
#### cypress.json
   此文件为端对端测试配置文件，具体配置参考：https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress
   
#### jest.config.js
   此文件为Jest单元测试配置文件，具体配置参考：https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest
   
#### package.json、package-lock.json
   npm包管理文件，管理项目依赖包。
   
#### postcss.config.js
   此文件为PostCSS配置文件。

   了解完了目录结构之后我们要开始实现一些通用功能了,比如一些公共的方法，公共的插件。
我们把这些配置放到 assets/js/common.js 文件中，
还有一些公共的样式文件，我们把它放到 assets/style 目录下。
assets/style/base.less 文件存放顶层样式，例如 cssReset

### 1. 配置公共样式引入
  在 assets/js/common.js 文件中 import base.less文件。
按照约定，base.less 只存放全局样式。目前该文件中包含了全局cssReset以及router切换动画
  
### 2. 安装 FastClick
   因为移动设备上的浏览器默认会在用户点击屏幕大约延迟300毫秒后才会触发点击事件，
为了能够立即响应用户的点击事件，我们引入 FastClick。
在 common.js 中的公共点击模块中增加以下代码：
```
const FastClick = require('fastclick');
FastClick.attach(document.body);
```

### 3. axios封装
  此模板使用 axios 进行页面请求，axios请求配置文件位于 /src/assets/js/axiosConfig.js
可在此文件内修改请求头，状态码处理，接口暴露修改等操作。

### 4. 请求转发、代理配置
   我们在开发过程中需要对接后端接口，通常会面临跨域问题。该问题我们需要借助 vue.config.js 文件。
官网是这么介绍 vue.config.js：
    vue.config.js 是一个可选的配置文件，
    如果项目的 (和 package.json 同级的) 根目录中存在这个文件，
    那么它会被 @vue/cli-service 自动加载。
    你也可以使用 package.json 中的 vue 字段，但是注意这种写法需要你严格遵照 JSON 的格式来写。

### 5. cdn资源域名配置
   默认情况下执行npm run build 后资源路径为相对路径，但在实际项目中，资源一般会放在CDN节点上。
因此我们在 vue.config.js 中配置 publicPath 为对应的资源路径即可实现

### 6. 第三方文件引入
   在项目开发中，我们可能需要引入一些第三方插件，例如异常采集，百度统计文件等。
我们需要有一个配置用来在构建前插入第三方插件。在老版本中，我是通过直接修改webpack配置的方式实现此功能。
vue-cli 的 4.0版本 较于 2.0 移除了build目录。新版本中需要在 vue.config.js 文件中增加 configureWebpack 来进行配置。
具体实现的原理是我们要在 html-webpack-plugin 执行过程中对html内容进行修改，将自定义内容注入到打包结果里。
新增一个webpack插件，修改 afterTemplateExecution HOCK 来实现html内容修改。
src/assets/js/insertHtmlPlugin.js    为实现结果，以插入百度统计代码为例。

### 7. 移动端适配方案
   移动端适配我们选择rem，作为通用脚手架，可能用来做移动端，也可能做PC端。关于项目的兼容性也要做考虑。
看了一下《如何在Vue项目中使用vw实现移动端适配》发现配置之复杂，需要组合多个插件。
所以我抛弃了 vw方案 与 px2rem-loader方案。还是保险起见使用 rem 布局方案。
之后有机会在新项目中可以试一下。
关于rem，开始有考虑过 media 媒体查询，但是实际使用时发现也存在部分设备的不兼容。所以该方案也被放弃。
最终决定通过修改淘宝 flexible 方案来实现，顺便可以支持大屏幕适配以及移动端适配。
rem 通过webpack plugin 的方式注入页面，与百度统计代码注入方式相同。

### 8. 多入口实现
   之前的改动针对单页面应用，我期望的脚手架应该是单页面多页面通用的。所以接下来会针对多页面进行优化改造。



### SPA单页面应用
#### 1.router实现     √ done
#### 2.页面过渡动画实现     √ done
#### 3.接口代理       √ done
#### 4.三方文件引入      √ done
#### 5.自定义构建钩子   √ done
#### 6.移动端适配   √ done
    
### MPA多页面应用
#### 1.多入口实现
#### 2.单页面多页面混合
#### 3.接口代理         √ done
#### 4.三方文件引入     √ done
#### 5.自定义构建钩子   √ done
#### 6.移动端适配   √ done



