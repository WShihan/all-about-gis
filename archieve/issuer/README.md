issuer插件使用
===

[All-about-GIS](https://github.com/WShihan/all-about-gis) 附属的浏览器收集插件，可以将网页以`issue`的形式提交到All-about-GIS。

支持通过GitHub Personal Access Token直接创建issue，或者通过邮箱间接创建issue，**issuer**不会单独保管或者泄露token和邮箱，一切敏感信息都将保存在你的本地电脑上。



<p align="center">
  <img src="https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240704171218083.png" alt="image-20240629143010453" style="width:200px;" />
</p>





## 获取token

通过邮箱可跳过此章节，前往[GitHub](https://github.com/)进入主页，登录后点击头像，选择【Settings】

<p align="center"></p>

<p align="center">
  <img src="https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240629062424541.png" alt="image-20240629062424541" style="width:20%;" />
</p>




左侧选择【Developer settings】

<img src="https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240629062646515.png" alt="image-20240629062646515" style="width: 100%;" />

选择【Personal access token】，创建后只会显示一次，需要及时复制保存下来。

⚠️注意：记得勾选相关权限，如图所示即可。

<img src="https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240629063229148.png" alt="image-20240629063229148" style="width:100%;" />



## 安装插件

将`issuer`整个代码下载，启动浏览器（仅支持`Chrome`和`Edge`），开启`开发人员模式`，点击`加载解压缩的扩展`，选中扩展所文件夹。

<img src="https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240629150019823.png" alt="image-20240629150019823" />

## 插件设置

右键单击插件，选择扩展选项，

<p align="center"><img src="https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240704143008361.png" alt="image-20240629062846368" style="width:30%;" /></p>



将Github Personal Access Token或者邮箱填入，保存

![image-20240704170316865](https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240704170316865.png)





## 生成issue信息

阅读当前网页时，点击插件，会自动获取网页`链接`和网页`标题`，然后可以手动修改它们，

![image-20240704171150138](https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240704171150138.png)

接着完善其他信信息，比如语言，提交类型以及描述等。描述是当前链接内容的介绍或者自己的阅读感悟，点击【保存】将当前编辑的信息保存到本地，关闭插件之后再打开，点击【恢复】将会恢复已保存的信息。

点击【清空】将一键清空信息，恢复为默认状态。

点击【创建】按钮，将会根据填写的信息向github仓库创建一条issue。

此时打开`Github`，能看见创建了一个新的issue。

<img src="https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240704140246243.png" alt="image-20240704140246243" />

内容正是我们刚才填写的信息。

⚠️主意：此时不要手动关闭issue，因为还要使用自动化程序将所有打开的issue汇总。

<img src="https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240704140402426.png" alt="image-20240704140402426" />





如果你有其他更高效的收集方式，欢迎让我知道。

