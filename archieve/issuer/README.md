issuer插件使用
===

[All-about-GIS](https://github.com/WShihan/all-about-gis) 附属的浏览器收集插件，可以将网页以`issue`的形式提交到All-about-GIS。

必须使用GitHub Personal Access Token才可以进行相关自动化活动，**issuer**不会单独保管或者泄露token，一切敏感信息都将保存在你的本地电脑上。

<p align="center">
  <img src="https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240704135029929.png" alt="image-20240629143010453" style="width:200px;" />
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

<p align="center"><img src="https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240704143008361.png" alt="image-20240629062846368" style="width:30%;" /></p>

分别将`token`，`github用户名`，`该用户所属仓库名`填入，保存

<img src="https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240704135111782.png" alt="image-20240629063402257" style="width:100%;" />



## 生成issue信息

阅读当前网页时，点击插件，会自动获取网页`链接`和网页`标题`，然后可以手动修改它们，

<img src="https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240704135711674.png" alt="image-20240629064450623" style="width:100%;" />

接着完善其他信信息，比如语言，提交类型以及描述等。描述是当前链接内容的介绍或者自己的阅读感悟，点击【保存】将当前编辑的信息保存到本地，关闭插件之后再打开，点击【恢复】将会恢复已保存的信息。

点击【清空】将一键清空信息，恢复为默认状态。

<img src="https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240704140025597.png" alt="image-20240704140025597" />

点击【创建】按钮，将会根据填写的信息向github仓库创建一条issue。

![image-20240704140120252](https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240704140120252.png)

此时打开`Github`，能看见创建了一个新的issue。

<img src="https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240704140246243.png" alt="image-20240704140246243" />

内容正是我们刚才填写的信息。

⚠️主意：此时不要手动关闭issue，因为还要使用自动化程序将所有打开的issue汇总。

<img src="https://md-1301600412.cos.ap-nanjing.myqcloud.com/pic/typora/image-20240704140402426.png" alt="image-20240704140402426" />



# 其他提交方式

### 通过直接创建issue

所有的信息收集都将基于github平台，提交issue是最简单，且对自动化友好度最高的方式，你可以选择不通过插件提交issue，但请遵循基本的格式（markdown语法），如下

```text
【语言】[标题](链接)
文章/工具/数据分享的描述
```

⚠️主意：issue的标签当前仅支持`文章`,`工具`,`数据分享`

### 通过邮箱

如果你没有Github账户，那么可以选择通过电子邮件的方式提交到`3443327820@qq.com`，记得：

* 邮件主题为`标题｜类型｜语言｜链接`的形式。
* 邮件正文为描述信息。



如果你有其他更高效的收集方式，欢迎让我知道。

