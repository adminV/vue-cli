## Vue内部开发规范（alpha）
### 一. 基本约定：
#### 1. 命名规范：
    原则：为了让大家书写可维护的代码，而不是一次性的代码
       让团队当中其他人看你的代码能一目了然
       甚至一段时间时候后你再看你某个时候写的代码也能看
##### 1.1 普通变量命名规范
命名必须是跟需求的内容相关的词，如：
```
let  productPageDetail = "产品详情页面";
```
命名是复数的时候需要加s,如：
```
const productList = new Array(); 
```
##### 1.2 常量命名规范
命名方法 : 全部大写
命名规范 : 使用大写字母匈牙利式命名法。
```
const MAX_COUNT = 10
const URL = 'https://www.cupshe.com/'
```

##### 1.3 组件命名规范
驼峰式命名
```
bannerCard
noticeCard
```

##### 1.4 方法命名规范
匈牙利式命名，统一使用动词或者动词+名词形式
```
get_user_list,
submit_cart_product

附《常用动词》：
get 获取 / set 设置,
add 增加 / remove 删除
create 创建 / destory 移除
start 启动 / stop 停止
open 打开 / close 关闭,
read 读取 / write 写入
load 载入 / save 保存,
create 创建 / destroy 销毁
begin 开始 / end 结束,
backup 备份 / restore 恢复
import 导入 / export 导出,
split 分割 / merge 合并
inject 注入 / extract 提取,
attach 附着 / detach 脱离
bind 绑定 / separate 分离,
view 查看 / browse 浏览
edit 编辑 / modify 修改,
select 选取 / mark 标记
copy 复制 / paste 粘贴,
undo 撤销 / redo 重做
insert 插入 / delete 移除,
add 加入 / append 添加
clean 清理 / clear 清除,
index 索引 / sort 排序
find 查找 / search 搜索,
increase 增加 / decrease 减少
play 播放 / pause 暂停,
launch 启动 / run 运行
compile 编译 / execute 执行,
debug 调试 / trace 跟踪
observe 观察 / listen 监听,
build 构建 / publish 发布
input 输入 / output 输出,
encode 编码 / decode 解码
encrypt 加密 / decrypt 解密,
compress 压缩 / decompress 解压缩
pack 打包 / unpack 解包,
parse 解析 / emit 生成
connect 连接 / disconnect 断开,
send 发送 / receive 接收
download 下载 / upload 上传,
refresh 刷新 / synchronize 同步
update 更新 / revert 复原,
lock 锁定 / unlock 解锁
check out 签出 / check in 签入,
submit 提交 / commit 交付
push 推 / pull 拉,
expand 展开 / collapse 折叠
begin 起始 / end 结束,
start 开始 / finish 完成
enter 进入 / exit 退出,
abort 放弃 / quit 离开
obsolete 废弃 / depreciate 废旧,
collect 收集 / aggregate 聚集
```

#### 2. 注释规范
以下情况必须进行注释
1. 公共组件使用说明
2. 各组件中重要函数或者类说明
3. 复杂的业务逻辑处理说明
4. 特殊情况的代码处理说明,对于代码中特殊用途的变量、存在临界值、函数中使用的 hack、使用
了某种算法或思路等需要进行注释描述
5. 多重 if 判断语句
6. 注释块必须以/（至少两个星号）开头/
7. 单行注释使用//

##### 2.1 HTML注释示例
```
 /**
  * @description: 中文说明
  * @author: name
  * @update: name(xxxx-xx-xx)
  */
```
##### 2.2 CSS注释示例
```
/* content */
内容
/* end content */
```
##### 2.3 函数注释
```
/**
 * @func
 * @todo 这个函数需要优化
 * @desc 一个带参数的函数
 * @param {string} a - 参数a
 * @param {number} b=1 - 参数b默认值为1
 * @param {string} c=1 - 参数c有两种支持的取值</br>1—表示x</br>2—表示xx
 * @param {object} d - 参数d为一个对象
 * @param {string} d.e - 参数d的e属性
 * @param {string} d.f - 参数d的f属性
 * @param {object[]} g - 参数g为一个对象数组
 * @param {string} g.h - 参数g数组中一项的h属性
 * @param {string} g.i - 参数g数组中一项的i属性
 * @param {string} [j] - 参数j是一个可选参数 
 * @returns {boolean} 返回值为true
 */
```

### 开发规范：
#### 1. v-for 循环必须加上 key 属性，在整个 for 循环中 key 需要唯一
```
<ul>
    <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
    </li>
</ul>
```

#### 2. 

### 样式规范： 
统一使用"-"连字符
省略值为 0 时的单位
如果 CSS 可以做到，就不要使用 JS
建议并适当缩写值，提高可读性，特殊情况除外
使用单个字母加上"-"为前缀
布局（grid）（.g-）；
模块（module）（.m-）；
元件（unit）（.u-）；
功能（function）（.f-）；
皮肤（skin）（.s-）；
状态（.z-）。
