**All about GIS**  一个开源的半月刊，计划每月初/中更新，分享一切关于GIS的内容，包括阅读到的文章，偶然发现的工具，以及数据分享等。 欢迎任何人提交内容。

[仓库](https://github.com/WShihan/all-about-gis)｜[RSS](/all-about-gis/feed.xml)

-----

[TOC]

## 文章

### 1.什么是GIS

关于什么是GIS，下面是一些比较权威的机构它的定义。

【中文】[什么是 GIS？ | 地理信息系统制图技术](https://www.esri.com/zh-cn/what-is-gis/overview)

【中文】[什么是地理信息系统（GIS）？ 开源地理空间基金会中文分会 开放地理空间实验室 ](https://www.osgeo.cn/post/17ed9)

【英文】[What is GIS? | Geographic Information System Mapping Technology](https://www.esri.com/en-us/what-is-gis/overview)

### 2.Pie in the sky

【英文】[Pie in the sky ](https://www.esri.com/arcgis-blog/products/arcgis-pro/mapping/pie-in-the-sky/)
介绍Arcgis pro中一种新的饼状图例，和传统饼图不一样的是，每个部分不是用半径来划分，而是采用弧度，看起来像是阴晴圆缺的月亮一般。

### 3.Cesium阴影率分析
【中文】[Cesium阴影率分析](https://www.liaomz.top/2023/04/18/cesium-zhong-shi-xian-yin-ying-lu-fen-xi/)
作者参考超图SDK实现的阴影率分析，效果看起来很不错，完成度很高。

### 4.Cesium-通视分析
【中文】[Cesium-通视分析](https://juejin.cn/post/7133151478583132168)
本文介绍一种基于Cesium的简单通视分析。

### 5.红绿灯倒计时功能是如何实现的？

【中文】[高德地图官方首度揭秘：红绿灯倒计时功能是如何实现的？](https://mp.weixin.qq.com/s/3_LNM62zoHaJsmvAryujEw)
有次打车的时候，我注意到了这个功能，当时想的是导航软件是不是和交通部门有合作，可以实时获取每个红绿灯的状态及变化秒数，导本文介绍了其中原理，居然是大数据相关的技术，另外B站上一位地理教授发表的一个[视频](https://www.bilibili.com/video/BV1zz421676H/?spm_id_from=333.999.0.0&vd_source=10d0f86227f3c318f8237345caac47c8)也涉及到这个。

### 6.在运行MacOS系统的电脑上安装QGIS

【英文】[How to Install QGIS on a Mac Computer](https://www.geographyrealm.com/installing-qgis-on-the-mac/)
可能大部分人第一次接触的GIS软件是ArcGIS，但是官方没有发布过MacOS版本，如果你使用的是以上系统，那么可以尝试下QGIS，它是开源的，功能很强大，不需要商业许可或者昧着良心破解，本文就是教你如何安装它。

### 7.空间插值

【中文】[ArcGIS的插值方法有哪些区别，分别适合哪些情况](https://www.zhihu.com/question/308308496/answer/1609417217)

介绍常见空间插值以及不同维度间的对比，总结其适用性和局限性。

### 8.来自 Esri 的超强制图专家的“秘密”武器

【中文】][来自 Esri 的超强制图专家的“秘密”武器！](https://mp.weixin.qq.com/s?__biz=MzkxOTYwMDgxNw==&mid=2247494070&idx=1&sn=f396e1f8b233e32b0eb9e4c5d29b00b8&source=41#wechat_redirect)

作者对ESRI公司出品的地形处理工具做了改进。

### 9.利用开放地理信息系统数据绘制公共城市绿地地图

【英文】[Using Open GIS Data to Map Public Urban Green Spaces](https://www.geographyrealm.com/mapping-public-urban-green-spaces-open-gis-data/)

介绍如何使用开放地图数据以及相关方法识别公共绿地并绘制出地图。

### 10.GIS行业相关的证书

【英文】[Certification in GIS](https://www.geographyrealm.com/certification-in-gis/)

介绍GIS行业内的一些证书，主要是国外。



## 工具

### 1.[GeoServer](https://geoserver.org/)

一款非常流行的开源地图服务器。

### 2.[GeocodeCN](https://github.com/WShihan/GeocodeCN)

一款基于百度地图开放平台的QGIS插件，可以批量将地址转换为经纬度，支持不同经纬度，包括百度做标题，WGS84，国测局坐标系。

### 3.[Qgis2threejs](https://github.com/minorua/Qgis2threejs)

一个QGIS插件，支持导入数字高程模型（DEM）及矢量，栅格数据生成场景后，导出在浏览器里浏览，下图为我以前项目的截图（大理苍山地区）。

![场景](https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240630023143475.png)



### 4.[GeoDjango](https://docs.djangoproject.com/en/1.11/ref/contrib/gis/)

[Django](https://docs.djangoproject.com/en/5.0/)是一个用Python编写的网络应用开发框架，而GeoDjango则是在基础上增强GIS功能的版本，旨在成为世界级的地理Web框架，其目标是尽可能轻松地构建地理信息系统Web应用程序并利用空间使能数据的力量。我曾经用过Django，而GeoDjango则没有，我的博客的第一个版本就是采用了前者。此项目文档，功能什么的都挺完备，希望以后有机会能实践一下。



## 数据分享



-----

[版权声明：自由转载-非商用-非衍生-保持署名（创意共享3.0许可证）](https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh-hans)



