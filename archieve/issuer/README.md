issuer插件使用
===

[All-about-GIS](https://github.com/WShihan/all-about-gis)附属的浏览器收集工具，可以将网页链接以`issue`的形式提交到All-about-GIS。

必须使用GitHub personal access token才可以进行相关自动化活动，**issuer**不会单独保管或者泄露token，一切敏感信息都将保存在你的本地电脑上。

<p align="center">
  <img src="https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240629143010453.png" alt="image-20240629143010453" style="width:200px;" />
</p>




## 获取token

前往[GitHub](https://github.com/)进入主页，登录后点击头像，选择【Settings】

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

<p align="center"><img src="https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240629062846368.png" alt="image-20240629062846368" style="width:30%;" /></p>

分别将`token`，`github用户名`，`该用户所属仓库名`填入，保存

<img src="https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240629063402257.png" alt="image-20240629063402257" style="width:100%;" />



## 生成issue

在阅读当前网页时，点击插件，会自动获取网页链接和网页标题，如果你不满意可以手动修改，

<img src="https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240629064450623.png" alt="image-20240629064450623" style="width:100%;" />

接着修改其他信息，比如类型，语言及描述等。描述是当前链接内容的介绍或者自己的阅读感悟等，然后点击【提交】

<img src="https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240629064531942.png" alt="image-20240629064531942" style="width:100%;" />



此时打开`Github`，能看见创建了一个新的issue

<img src="https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240629064620498.png" alt="image-20240629064620498" style="width:100%;" />



issue的内容正是我们刚才填写的信息。

⚠️主意：不要手动关闭，因为还要使用自动化程序将所有打开的issue汇总。

<img src="https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240629064645419.png" alt="image-20240629064645419" />