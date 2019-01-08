## lcl个人博客小程序项目

> 作者：李成龙 <lichenglong@qq.com>

### 环境依赖

node v8.4.0+


### 部署步骤

1. npm install        //安装node运行环境
2. npm run dev        //开发环境构建
3. npm run start      //开发环境构建
4. npm run build      //生产环境构建


### 目录结构描述

<pre>
├── dist                        // 生产环境
├── src                         // 开发项目目录
│   ├── api                     // 配置目录
│   │    ├── auth.js
│   │    └── site.js      
│   ├── components              // 组件目录
│   ├── image                   // 图片目录
│   ├── page                    // 页面级目录
│   ├── utils                   // 工具类目录
│   ├── app.js                  // 入口js
│   └── app.json                // 全局配置项
│   ├── app.less                // 全局样式
│   └── project.config.json     // 项目配置文件
├── .babelrc
├── .gitignore                  
├── package.json
├── webpack.config.babel.js
└── readme.md                   // help
</pre>


### 版本更新日志

| 版本 | 备注 | 贡献者 |
| :--: | :--: | :--: |
| 1.0.0 | 首页,列表页,详情页 | 李成龙 |
| 1.0.5 | 详情页加载速度优化 | 李成龙 |
| 1.0.6 | 详情页添加标题显示 | 李成龙 |
| 1.0.7 | 交互优化 | 李成龙 |
| 1.0.8 | 添加节流函数用例 | 李成龙 |
| 1.0.9 | 添加瀑布流用例 | 李成龙 |
