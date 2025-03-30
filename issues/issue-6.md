**All about GIS** 一个开源的信息合集，计划每周一更新（不固定），分享一切关于GIS的内容，包括阅读到的文章，偶然发现的工具，以及数据分享等，欢迎任何人提交内容。

[仓库](https://github.com/WShihan/all-about-gis)｜[RSS](https://wsh233.cn/all-about-gis/feed.xml)

-----

[TOC]



## 文章

### 1.跟着做教程，使用FastAPI创建空间API

【英文】[链接 ](https://medium.com/rotten-grapes/create-spatial-apis-with-fastapi-b44e42d07786)
教程，使用FastAPI框架搭建支持空间处理的网络接口。我常常使用flask搭建一些快速实现的需求，感觉这个不错，有机会尝试一下看看。



### 2.Gridded NetCDF基础-使用ArcGIS模拟气候变化

【英文】[链接 ](https://justincolegis.com/2025/01/10/gridded-net-cdf-basics-you-can-model-climate-change-with-arcgis/)
介绍如何使用ArcGIS Pro分析NOAA提供的以NetCDF格式存储的气候数据，模拟气候变化。



### 3.在QGIS中对Landsat影像做全色锐化处理
【英文】[链接](https://www.geographyrealm.com/pan-sharpen-landsat-qgis/)
文章介绍全色锐化，一种广泛使用的技术，用于提高多光谱卫星图像的空间分辨率。该过程将卫星图像的高分辨率全色波段与较低分辨率的多光谱波段相结合，生成视觉上细节丰富的图像，同时不丢失颜色信息。



### 4.如何利用Python对DEM沉陷区进行填平

【英文】[链接 ](https://medium.com/@taremyor/how-to-fill-sinks-in-a-digital-terrain-model-with-python-a1d2d2d3bbc5)
本文介绍了如何使用Python处理数字地形模型（DEM）中的沉陷区（sinks）。沉陷区是由于DEM数据中的错误海拔值造成的，这些错误值比正常值低。文章提供了两种方法来填充这些沉陷区：一种是无条件填充所有沉陷区，另一种是设置阈值，仅填充满足特定高度差的沉陷区。这些方法有助于提高水文分析的准确性，并避免水流积聚和不规则地表形态。



### 5.WebGIS 三维空间分析之参考超图实现的天际线分析
【中文】[链接](https://www.wsh233.cn/blog/53421540)
作者通过比较Cesium和超图Cesium发行版的实现，提出了利用深度图获取天际线坐标的新思路，并讨论了场景内绘制天际线和二维线段图表的方法，提供了具体的实现效果展示。



### 6.使用动力学和地图对GPS数据进行插值

【英文】[链接 ](https://medium.com/@joao.figueira/gps-interpolation-using-maps-and-kinematics-6a56fdf29179)
这篇文章讨论了如何使用地图和运动学数据对GPS数据进行插值，以提高地理空间数据集的分辨率。作者介绍了一种类似于航位推算的方法，通过车辆的速度信号和地图信息来推断GPS信号缺失时的地理位置。文章详细解释了插值过程，包括地图匹配、地图对齐、速度整合和地图投影等技术，并提供了一个案例研究，展示了如何使用插值后的GPS数据来识别车辆急刹车的路段。最后，作者还提供了实现这一过程的Python代码，并讨论了如何使用这些数据进行进一步的分析。



### 7.如何将栅格像素值提取到对应点

【英文】[链接](https://medium.com/@taremyor/how-to-extract-raster-pixel-values-to-corresponding-points-b6dc96c2f261)
作者使用ArcGIS来实现，但是也可以用其他GIS软件来实现，因为逻辑一样的。




## 工具
### 1.Godview
[链接](https://godview.ai/)
一个结合AI实现的语义化地图，用自然语言查询地图，你可以模糊查询一个地区的信息，发现自阮老师的周刊。

下图是我查询的结果。

![godview](https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/godview.png)



### 2.Spatial Reference List 

[链接](https://spatialreference.org/ref/epsg/)
该网站提供空间坐标系列表，可以获取不同的坐标系描述格式，例如wkt,proj等，获取坐标系描述信息之后便于互相转换。



### 3.3dtiles

[链接](https://github.com/fanvanzh/3dtiles)
3D-Tile 转换工具集，支持将多种类型的地理空间数据格式转换为3Dtile（一种由Cesium主导的开源数据格式）的命令行工具。




-----
[版权声明：自由转载-非商用-非衍生-保持署名（创意共享3.0许可证）](https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh-hans)