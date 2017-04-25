<h1>前端性能</h1>

>一直依赖都在关注性能的问题，从最开始在CSS和JS执行效率上钻研，到前端工程化时对加载优化等思考，零散的学了很多东西，最近打算利用空闲时间总结一下

思路主要有以下：
### 加载优化
1. DNS寻址 => CDN
2. TCP链接 => 合并请求
3. response => ajax
4. download => 压缩、合并、缓存
>本身浏览器就有很多缓存机制，可以利用HTTP头进行控制，详情可以参考[HTTP]()
5. domContentLoad => 解决css、js等阻塞
6. 首屏渲染 => 懒加载


### 交互优化
1. 减少刷新 => ajax
2. 单页应用 => 预加载、vuex管理
3. loading、动效 => 适当的动效可以减缓用户对操作延迟的感知
4. 缓存操作数据 => 虚拟DOM、vuex、利用闭包等
5. 减少大面积重绘触发 => 手机端对性能要求可能比较高
6. 使用CSS3开启GPU

### 其他相关

>1. 利用performance和手动打点，采集数据并分析在不同阶段的耗时，争对性优化
>2. 利用fiddler和浏览器调试工具，对带宽限制，或者修改某些请求来测试调优
>3. ajax请求虽然可以减少服务器端加载页面时的计算，但是依然多了一次请求，对于类似用户登录、权限等信息会阻塞页面功能时采用服务器端渲染性能更优
>4. 打包时应该将框架、公共模块等更新较少、多个页面都会使用的资源分离，利用浏览器的缓存减少不必要的流量
>5. 必要时可以对较大数据文件进行本地缓存

=====================================
### 参考资料
+ 《web性能权威指南》
+ http://www.cnblogs.com/yangmin01/p/6290595.html
+ http://www.cnblogs.com/haogj/archive/2013/01/15/2861950.html
+ http://www.cnblogs.com/margo/p/3745301.html
+ http://www.alloyteam.com/2016/01/points-about-resource-loading/
+ http://www.codeceo.com/article/javascript-no-block.html
+ https://zhuanlan.zhihu.com/p/25221314