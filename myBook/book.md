<h1>综述</h1>

## 已确认


==================================
### CSS


#### display：inline-block

>	添加inline-block属性后总是会多出1px的空行，原因是inline-block属性的元素浏览器默认vertical-align:base_line，改成bottom即可消除1px的间隙

#### scss引入包开发

>	使用_做为文件名开头，且内容不包含class，只包含@mixin和函数时，不会重复打包

#### visibility当前元素隐藏，可继承，子元素如果设置visible，则可以模仿pointer-events鼠标穿透

#### -webkit-font-smoothing

>	对于半像素的iconfont苹果和window设备显示有出入

>	只对mac的chrome有效

>	-webkit-font-smoothing: none: 无抗锯齿

>	-webkit-font-smoothing: antialiased | subpixel-antialiased | default: 灰度平滑


==================================
### JS

#### [vue]input:type=search

>	虽然回车能触发watch或者change，但是v-model的值会被强制改成event，而且冒泡所有关联的事件参数都会强制被改成event


##### offsetTop

>  	is the number of pixels from the top of the closest relatively positioned parent element.

>	最近的一个relation的祖父元素与元素之间的距离,jq的offset则是遍历所有祖父元素，最终给出距离屏幕顶端的距离


#### setTimeout有最小时间

>	Browsers all have a 10ms minimum delay on OSX and a(approximately) 15ms delay on Windows.（在苹果机上的最小时间间隔是10毫秒，在Windows系统上的最小时间间隔大约是15毫秒）

>	MDC中关于setTimeout的介绍中也提到，Firefox中定义的最小时间间隔（DOM_MIN_TIMEOUT_VALUE）是10毫秒，HTML5定义的最小时间间隔是4毫秒


#### domcontentloaded

>	domcontentloaded在dom加载完，并且解析完内联js后会触发，因为要先走到绑定这一步

>	DOMContentLoaded要等到css加载完才会触发

>	CSS样式表影响了图片的加载速度，然而JS不会影响，如果想让图片尽快加载，就不要给图片使用样式，比如宽高采用标签属性即可。

>	如果浏览器存在 document.onreadystatechange 事件，当该事件触发时，如果 document.readyState=complete 的时候，可视为 DOM 树已经载入。不过，这个事件不太可靠，比如当页面中存在图片的时候，可能反而在 onload 事件之后才能触发

>	[参考资料](http://www.cnblogs.com/margo/p/3745301.html)

#### IOS无法自动播放音乐， 需要用户真实点击，可用js桥播放音乐


#### js弹窗被拦截

>	当通过用户行为触发window.open时不会被拦截，而如果是js自己执行(在ajax返回结果后)

#### arguments

>	类数组对象

>	caller指向上一层的调用的函数，值为函数的toString

>	arguments.callee.length是形参长度，arguments.length是实参长度，callee指函数本身，可用于递归调用



#### 动态加载js

>	webpack中require.ensure();require.include(只加载不执行，但是如果多个子模块用到，则会被提升到公共父模块中)

>	直接将<sctript src="XXX">append到head中，并进行去重

>	webpack加载jq插件时，容易导致重复加载


==================================
### HTML



==================================
### HTTP
1.缓存系列
2.传输编码系列

>Keep-Alive: timeout=2, max=100

>Connection: Keep-Alive

>Transfer-Encoding: chunked

3.跨域系列

6.websockets系列

7.安全扩展系列
#### X-Frame-Options

>X-Frame-Options:DENY//这个页面不允许被以frame的方式加载

>X-Frame-Options:SAMEORIGIN//这个页面只允许同源页面加载

>X-Frame-Options:<uri> //这个页面只能被特定的域加载

#### X-Content-Type-Options

>	nosniff

>	防止content-type进行嗅探

#### X-XSS-Protection（IE过滤，默认打开）


8.代理扩展系列

1.General

>status Code

>method

>url

2.请求系列

>Accept

>request

>uesr-Agent

>accept-language/encoding/type

>referer(请求方域名)

>Link: </images/big.jpeg>; rel=prefetch[链接预取](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Link_prefetching_FAQ)

3.响应系列

>Allow

>Content-type/encoding

>server

>date

>age

>set-cookie

>connection

#### [http缓存](https://zhuanlan.zhihu.com/p/24467558)

>	get可以被缓存，post不能

>	Cache-Control 中指定的缓存过期策略优先级高于 Expires

>	如果expries指定时间过去，则会带Last-Modified去请求服务器端请求，服务器端通过比较Modified决定是否返回304

>	no-cache只是不建议缓存，但是服务器返回304时依然会读取缓存

>	如果没有声明Expries，浏览器会根据响应头中2个时间字段 Date 和 Last-Modified 之间的时间差值，取其值的10%作为缓存时间周期。

>	ETag标记版本，而Last-Modified标记时间


#### ETaga

>	Etag 主要为了解决 Last-Modified 无法解决的一些问题。

>1.  一些文件也许会周期性的更改，但是他的内容并不改变(仅仅改变的修改时间)，这个时候我们并不希望客户端认为这个文件被修改了，而重新GET;

>2.  某些文件修改非常频繁，比如在秒以下的时间内进行修改，(比方说1s内修改了N次)，If-Modified-Since能检查到的粒度是s级的，这种修改无法判断(或者说UNIX记录MTIME只能精确到秒)

>3.  某些服务器不能精确的得到文件的最后修改时间；
为此，HTTP/1.1引入了 Etag(Entity Tags).Etag仅仅是一个和文件相关的标记，可以是一个版本标记,比如说v1.0.0或者说"2e681a-6-5d044840"这么一串看起来很神秘的编码。但是HTTP/1.1标准并没有规定Etag的内容是什么或者说要怎么实现，唯一规定的是Etag需要放在""内。


#### Transfer-Encoding

>	Connection:keep-alive保持链接，http1.1以后默认都是keep-alive

>	content-length:需要计算所有文件长度以后才能返回，影响响应时间

>	每个分块包含十六进制的长度值和数据，长度值独占一行，长度不包括它结尾的 CRLF（\r\n），也不包括分块数据结尾的 CRLF。最后一个分块长度值必须为 0，对应的分块数据没有内容，表示实体结束

>	Transfer-Encoding:chunked表示传输方式编码，一般配合Content-Encoding: gzip使用，表示内容编码，但是图片、压缩包等压缩过的没必要再进行压缩，浪费cpu

>	[参考链接](https://imququ.com/post/transfer-encoding-header-in-http.html)


#### Content-Encoding

>	Accept-Encoding 和 Content-Encoding主要有gzip，zlib和deflate，其中zlib是defalte的精简版，http1.1中defalte默认的是zlib格式，但是部分服务器和浏览器比如IE依然会解释成deflte，所以使用gzip兼容性更好


#### 跨域cors

>	Access-Control-Expose-Headers

>	Access-Control-Max-Age

>	Access-Control-Allow-Credentials(证书):true；设置true时才能带上cookie信息

>	Access-Control-Allow-Origin(特别注意: 给一个带有withCredentials的请求发送响应的时候,服务器端必须指定允许请求的域名,不能使用'*'，否则响应会失败)

>	Access-Control-Allow-Methods

>	Access-Control-Allow-Headers

>	简单请求不会触发预请求(CORS preflight)(不包括json)，否则会先发送option请求

>	[参考链接](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)

==================================
### 前端工程化

#### css文件单独编译

>	webpack计算chunkhash时，以entry.js文件为编译入口，整个chunk的内容会将main.css的内容也计算在内。所以，不论是修改了js代码还是css代码，整个chunk的内容都改变了，计算所得的chunkhash随之改变。但理想情况下是想css或js内容改变时仅影响自身文件的chunkhash，这样客户端只需更新一部分文件。解决此问题首先要将css单独编译输出文件，因为正常情况下webpack会把js文件中引入的css文件编译输出到html页面的<style></style>标签中。

==================================
### 前端性能

#### 首屏加载

>	加载时并行的，但是执行是串行的，css的加载会影响js的执行

>	如果html的返回头包含chunk，则它是边返回边解析的，不然就是一次性返回再解析。这个是在服务器配置的

>	写在html里面的script节点的加载和解析会影响 domContentLoaded 事件的触发时间

>	[参考链接](http://www.alloyteam.com/2016/01/points-about-resource-loading/)


#### 手机端滚动优化

>	浏览器绑定事件第三个参数，true为捕获阶段，false为冒泡阶段，大部分都默认为false

>	stopPropagation阻止时间传递，preventDefault阻止默认事件

>	监听touchstart时，执行所消耗的时候会阻塞浏览器滚动

>	chrome	51版本以上第三个参数改为了对象，增加{ passive: true }，则不会再阻塞滚动


==================================
### web安全

>	XSS:跨站脚本攻击[参考资料](http://www.cnblogs.com/digdeep/p/4679832.html)

>	CSRF:跨站请求伪造

#### 禁止一切外链资源

>	如果允许用户任意发起外链，可能会导致CSRF攻击，比如修改路由器DNS

>	http://admin:admin@192.168.1.1/userRpm/PPPoECfgAdvRpm.htm?wan=0&lcpMru=1480&ServiceName=&AcName=&EchoReq=0&manual=2&dnsserver=黑客服务器&dnsserver2=4.4.4.4&downBandwidth=0&upBandwidth=0&Save=%B1%A3+%B4%E6&Advanced=Advanced

>	主要注意：图片src，css的image

>	1.图片必须上传服务器


#### 富文本编辑器

>	DOM 构造之后、渲染之前，对离屏的元素进行风险扫描。将可执行的元素（script，iframe，frame，object，embed，applet）从缓存中移除

>	加上沙箱隔离 iframe 加上 sandbox， Flash 加上 allowScriptAccess 及 allowNetworking

>	拦截可疑模块

#### 跳转 opener 钓鱼

>	真正的类型是由服务器返回的 MIME 决定的,所以请求的.gif有可能是一个html

>	用户发起的超链接可以通过opener属性重定向原页面地址，应该通过window.open，并设置opener=null

#### 用户内容限制

>	如果用户可以自定义样式，则可能会伪造一条假的消息诱骗用户

>	措施：字体大小限制等，对内容overflow:hidden;

#### 点击劫持

>	网站通过iframe调用你的网站，并在你网站上添加一层透明的蒙版，点击任意地方都会触发他的click事件

>	解决办法：检测self==top判断是否被嵌套;最好将用户自定义的内容嵌套在iframe


#### [主动拦截](http://fex.baidu.com/blog/2014/06/xss-frontend-firewall-2/)

==================================
### 跨域

[参考资料1](http://caibaojian.com/jquery-ajax-post-cors.html)

1.CORS

>	IE8、9只支持部分,IE8以下不支持

>	简单请求只需要设置允许域名

>	复杂请求需要先发送一次option

>	带cookie请求需要额外增加一个证书允许字段，并且allow-origin不能为*

2.window.name

>	IE11不支持

>	可以存放2M数据

>	

3.JSONP

4.FIM

5.subspace


==================================
### 其他

#### 前端缓存
1.本地储存 localstorage & sessionstorage; 

>	ios无痕浏览会失效

>	可用于存储图片，使用canvas=>drawImage=>toDataURL=>dataurl

>	可用于表单提交缓存，如果页面意外刷新

2.cookie


3.浏览器数据库 indexedDB;

>	IndexedDB(nosql) 是 <font color=yellow>WebSQL</font>(关系型) 数据库的取代品

>	可以建立索引


4.离线存储service workers（试验中）

>	Service Workers严格要求要在HTTPS下才能运行

>	需要浏览器开放设置

>	需要注册=》安装=》运行

5.离线储存 application cache;(即将废气)

>	<html manifest="host/xxx">...</html>

>	manifest 文件可分为三个部分：

>	CACHE MANIFEST - 在此标题下列出的文件将在首次下载后进行缓存

>	NETWORK - 在此标题下列出的文件需要与服务器的连接，且不会被缓存

>	FALLBACK - 在此标题下列出的文件规定当页面无法访问时的回退页面（比如 404 页面）

>	需要注意的

>	1.必须在第一行包括 CACHE MANIFEST 字符串。

>	2.站点所能缓存的数据上限是5MB 。但是，如果你是在为Chrome Web Store做开发的话，你可以使用unlimitedStorage  来去除这个限制。

>	3.如果manifest文件或者是其中指定的某个资源下载失败的话，整个cache的更新都会失败。在这种情况下，浏览器将会使用老的application cache。

>	[参考资源](http://www.cnblogs.com/yexiaochai/p/4271834.html)

>	<font color=red>*注意该特性已经在标准中被删除，建议使用service workers</font>



## 待研究




==================================
### CRM项目

+将业务组件模块化，包括数据获取，不再全部挤到state中
+页面如果太大，进行抽离