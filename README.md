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
 ◉ Babel       
 ◯ TypeScript
 ◉ Progressive Web App (PWA) Support
 ◉ Router
 ◉ Vuex
 ◉ CSS Pre-processors
 ◉ Linter / Formatter
 ◉ Unit Testing
❯◉ E2E Testing
```
我们在此勾选所有插件，做一个功能最全的模板项目
当然你也可以在项目创建后，使用 vue add eslint 来补充插件


#### step3：
```
Use history mode for router? (Requires proper server setup for index fallback in production)（Y/n） //输入Y
```
是否使用 history 模式的前端路由， Y


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

至此安装完毕，等待项目穿件完成。下一步我们尝试下各种配置.
新版本与旧版本的区别在移除了build目录，集成到了vue/cli-service下
我之前的项目中有对webpack的打包优化，有对测试服务的修改。
换到新版本后需要重新考虑解决方案了。


### SPA单页面应用
#### 1.router实现
#### 2.页面过渡动画实现
#### 3.接口代理
#### 4.三方文件引入
#### 5.自定义构建钩子
    
### MPA多页面应用
#### 1.多入口实现
#### 2.单页面多页面混合
#### 3.接口代理
#### 4.三方文件引入
#### 5.自定义构建钩子



