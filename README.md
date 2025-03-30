**All about GIS**
===

这是一份与GIS内容相关的仓库，受[All-about-RSS](https://github.com/AboutRSS/ALL-about-RSS)启发，包含开源软件工具，编程语言库，文章以及数据分享等，刚开始记录，内容不全且很少，欢迎参与完善，你可以通过这个<a href="./archieve/issuer/README.md">浏览器插件</a>提交内容。

关于什么是GIS，你可以在如下文章里找到答案：

1. [What is a geographic information system (GIS)? | U.S. Geological Survey (usgs.gov)](https://www.usgs.gov/faqs/what-geographic-information-system-gis)
2. [Geographic information system - Wikipedia](https://en.wikipedia.org/wiki/Geographic_information_system)
3. [What is GIS? | Geographic Information System Mapping Technology (esri.com)](https://www.esri.com/en-us/what-is-gis/overview)



## 软件&工具

### 1.[GeoServer](https://geoserver.org/)

一款非常流行的开源地图服务器。

### 2.[GeocodeCN](https://github.com/WShihan/GeocodeCN)

一款基于百度地图开放平台的QGIS插件，可以批量将地址转换为经纬度，支持不同经纬度，包括百度做标题，WGS84，国测局坐标系。

### 3.[Qgis2threejs](https://github.com/minorua/Qgis2threejs)

一个QGIS插件，支持导入数字高程模型（DEM）及矢量，栅格数据生成场景后，导出在浏览器里浏览，下图为我以前项目的截图（大理苍山地区）。

![场景](https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240630023143475.png)



### 4.[GeoDjango](https://docs.djangoproject.com/en/1.11/ref/contrib/gis/)

[Django](https://docs.djangoproject.com/en/5.0/)是一个用Python编写的网络应用开发框架，而GeoDjango则是在基础上增强GIS功能的版本，旨在成为世界级的地理Web框架，其目标是尽可能轻松地构建地理信息系统Web应用程序并利用空间使能数据的力量。我曾经用过Django，而GeoDjango则没有，我的博客的第一个版本就是采用了前者。此项目文档，功能什么的都挺完备，希望以后有机会能实践一下。

### 5.ogr2ogr

[ogr2ogr](https://gdal.org/programs/ogr2ogr.html)
一款基于gdal的空间数据格式转换命令行工具，使用简单且格式支持广泛。

### 6.QTiles

[QTiles](https://github.com/nextgis/qgis_qtiles)
一款QGIS插件，生成预设的栅格瓦片地图。

### 7.Bunting Labs AI Vectorizer

[Bunting Labs AI Vectorizer](https://buntinglabs.com/solutions/ai-vectorizer-qgis-plugin)
一款QGIS插件，借助AI赋能，可以帮助在传统的栅格地图上快速将地理要素矢量化。该插件为商业公司开发，提供有免费使用额度。

![](https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/qgis_polygon.gif)



往期
===

[issue-1](/issues/issue-1.md)  [issue-2](/issues/issue-2.md)  [issue-3](/issues/issue-3.md)





