# Inspiration - 一个激励自己的浏览器新标签页插件

Inspiration is a [Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=en)-like extension with quotes from Chinese top entrepreneurs.

Inspiration 是一个类似 [Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=en) 的 Chrome 浏览器首页插件，每次打开首页都会随机展示一条来自顶尖中国企业家的语录，通过语录我们可以看到这些大牛跟我们年纪差不多的时候在想什么，在做什么。**主要目的是激励自己**。目前只有张一鸣和王兴的语录，来自他们几年前发的微博或者饭否。感谢这两篇微信公众号文章：[深夜看了张一鸣的微博，让我越想越后怕](https://mp.weixin.qq.com/s/-y89zflK7omkMm3bWKQwsg)、[十年来，王兴发了12838条饭否消息...](https://mp.weixin.qq.com/s/rd0hIo-hUAfyA04MOAT0Pw)、[看完地球首富贝佐斯的100条思考，我才意识到他是“外星人”](https://mp.weixin.qq.com/s/3jB3m3a5GsJAg_xfekc3tA)。

Chrome Web Store应用还在提交审核中，目前想体验的话可以下载整个项目，进入 Chrome 插件管理页面: chrome://extensions/，打开右上角的开发者模式，选择最左边的「Load unpacked」按钮，选择项目下的「build」文件夹即可。

或者可以选择自己打包项目：先运行 `yarn` 获取项目依赖，由于 Chrome 插件对 inline 的 js 代码运行有限制，需要设置环境变量 `export INLINE_RUNTIME_CHUNK=false` 之后再进行 `yarn build` 编译打包项目。打包之后同样上传「build」目录即可。

操作完成之后打开一个新的 tab 就能看到插件内容。

一些截图：
![1](./screen-shots/1.png)
![2](./screen-shots/2.png)
![3](./screen-shots/3.png)
