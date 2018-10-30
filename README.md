# 鱼猫投融WeChat

> WeChat端项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 目录结构

```
yumaomoney_WeChat
├── build                   # 项目配置
├── config                  # 项目配置
├── dist                    # 打包文件
├── node_modules            # 插件资源
├── build                   # 项目配置
├── src                     # 开发目录
│   ├── assets              # 静态资源
│   │   ├── images          # 图片资源
│   │   └── style           # 公共样式
│   ├── components          # 组件目录
│   │   ├── container       # 公共模板(配置层级路由使用)
│   │   ├── events          # 活动
│   │   ├── lending         # 项目(首页)
│   │   ├── start           # 起始页
│   │   ├── tool            # 全局变量
│   │   └── user            # 我的
│   ├── router              # 路由配置
│   │   └── index.js        # 配置文件
│   ├── util                # 公共方法
│   │   └── util.js         # 配置文件
│   ├── App.vue             # 项目入口文件
│   └── main.js             # 项目的核心文件
├── static                  # 项目静态资源(图片、字体等)
├── test                    # 初始测试目录
├── .xxxx                   # 各类配置文件(包括语法配置，git配置等)
├── index.html              # 首页入口文件(可添加一些meta信息或统计代码)
├── package.json            # 项目配置文件
└── README.md               # 项目说明文档(markdown格式)
```

## 参考资料

* [router配置位置](https://www.cnblogs.com/padding1015/p/7884861.html)
* [tabber切换图标及颜色](https://blog.csdn.net/wandoumm/article/details/80168445)
* [打包报错处理：Failed to load resource: net::ERR_FILE_NOT_FOUND](https://blog.csdn.net/lhb_11/article/details/79455015)
* [x-header、tabbar固定位置](https://github.com/airyland/vux/issues/285)
* [下拉加载更多](https://www.jb51.net/article/132455.htm)
* [运行警告处理：warning：component lists rendered with v-for should have explicit keys](https://blog.csdn.net/twinkle2star/article/details/73741120)
* [Vue下路由History模式打包后页面空白](https://blog.csdn.net/sky2714/article/details/80887081)
* [scroller下拉失败回弹](https://blog.csdn.net/hh_liweihong/article/details/77066023)
* [打包后css引用图片资源找不到](https://blog.csdn.net/gdut_luoyifei/article/details/79001397)
* [打包后js引用图片资源找不到](https://blog.csdn.net/github_37533433/article/details/78937645)
* [上传图片组件](https://www.npmjs.com/package/vux-uploader)
* [上传图片组件引入报错](https://blog.csdn.net/wandoumm/article/details/80167708)
* [报错处理：exports is not defined](https://segmentfault.com/q/1010000011817644/a-1020000011818193)
* [报错处理：Default export is not declared in imported module](https://segmentfault.com/q/1010000004664827)
* [vux中fullpage的使用](https://www.jb51.net/article/108893.htm)
* [Vue Router 的params和query传参的使用和区别](https://blog.csdn.net/mf_717714/article/details/81945218)
* [vux框架组件自定义样式](https://blog.csdn.net/linggty/article/details/81512211)
* [vux cell title 插槽使用](https://segmentfault.com/q/1010000014234606/a-1020000014653614)
* [复制至剪贴板插件](https://www.cnblogs.com/wyhlightstar/p/8950430.html)
* [vue-cookies](https://www.cnblogs.com/s313139232/p/9341762.html)
* [级联选择器](https://blog.csdn.net/oulihong123/article/details/58327247/)
* [输入框验证](https://blog.csdn.net/honnyee/article/details/80691445)
* [声明公共方法](https://blog.csdn.net/sinat_17775997/article/details/78341907?locationNum=9&fps=1)
* [声明公共变量](https://www.jianshu.com/p/7547ff8760c3)

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
