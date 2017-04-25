
<h1>HTTP</h1>

### HTTP缓存
1. Cache-Control:Public、Private、no-cache、max-age 、no-store
>	前4个都会缓存，其中no-cache是不建议缓存

>	max-age充当了Expires的作用，并且优先级比Expires高

2. Expires
>	如果没有声明Expries，浏览器会根据响应头中2个时间字段 Date 和 Last-Modified 之间的时间差值，取其值的10%作为缓存时间周期。

2. Last-Modified
>	Last-Modified客户端第二次请求此URL时，根据HTTP协议的规定，浏览器会向服务器传送If-Modified-Since报头，询问该时间之后文件是否有被修改过

#### ETaga

>Etag 主要为了解决 Last-Modified 无法解决的一些问题:

>1.  一些文件也许会周期性的更改，但是他的内容并不改变(仅仅改变的修改时间)，这个时候我们并不希望客户端认为这个文件被修改了，而重新GET;
>2.  某些文件修改非常频繁，比如在秒以下的时间内进行修改，(比方说1s内修改了N次)，If-Modified-Since能检查到的粒度是s级的，这种修改无法判断(或者说UNIX记录MTIME只能精确到秒)
>3.  某些服务器不能精确的得到文件的最后修改时间,Etag仅仅是一个和文件相关的标记，唯一规定的是Etag需要放在""内