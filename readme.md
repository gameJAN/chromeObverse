# chromeObverse



<!-- PROJECT SHIELDS -->



<!-- PROJECT LOGO -->
<br />

<p align="center">

  <h3 align="center">前端性能监控插件</h3>
  <p align="center">
    一个前端性能监控插件
    <br />
  </p>

</p>

 
## 目录

- [chromeObverse](#chromeobverse)
  - [目录](#目录)
    - [上手指南](#上手指南)
          - [**安装步骤**](#安装步骤)
    - [文件目录说明](#文件目录说明)
    - [开发的架构](#开发的架构)
    - [部署](#部署)
      - [如何参与开源项目](#如何参与开源项目)
    - [版本控制](#版本控制)
    - [作者](#作者)
    - [版权说明](#版权说明)

### 上手指南

1.自定``src``目录下的``webEyeSDK.js``文件内的``init``方法后进行打包
2.在对应项目内引入打包后``dist``文件下的``monitor.js``文件
3.在项目内进行全局引入后通过``monitor.init()``初始化后即可进行相关性能监听




###### **安装步骤**

1. 克隆项目

```sh
git clone https://github.com/gameJAN/chromeObverse.git
```
2. 安装依赖 
```sh
npm install
```
3. 修改配置项 
```sh
export function init(options){
    setConfig(options)
    // error()
    // performance()
    behavior()
}
```
4. 引入依赖 
```sh
 <script src="../dist/monitor.js"></script>
```
5. 依赖初始化 
```sh
<script>
        monitor.init({
            url:'http://localhose:8080/reportData'
        })
    </script>
```

### 文件目录说明

```
chromeObverse 
├── demo
│  ├── behavior             //监听用户行为上报demo
│  ├── error                //监听js错误上报demo
│  ├── performance          //监听页面性能细节demo
├── dist                    //构建打包后的文件
├── rollup                  //文件打包配置
├── src                     //核心代码
│  ├── behavior             //用户行为监听实现代码
│  ├── performance          //页面性能监听实现代码
├── test                    //vue项目监听demo
├── test2                   //react项目监听demo
├── servser.js              //本地node测试用于接收上报信息
└── /readme.md/

```





### 开发的架构 

暂无

### 部署

暂无




#### 如何参与开源项目

贡献使开源社区成为一个学习、激励和创造的绝佳场所。你所作的任何贡献都是**非常感谢**的。


1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



### 版本控制

该项目使用Git进行版本管理。您可以在repository参看当前可用版本。

### 作者

gameJAN


### 版权说明

该项目签署了MIT 授权许可，详情请参阅 [LICENSE.txt](https://github.com/shaojintian/Best_README_template/blob/master/LICENSE.txt)


<!-- links -->
[your-project-path]:shaojintian/Best_README_template
[contributors-shield]: https://img.shields.io/github/contributors/shaojintian/Best_README_template.svg?style=flat-square
[contributors-url]: https://github.com/gameJAN/chromeObverse/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/shaojintian/Best_README_template.svg?style=flat-square
[forks-url]: https://github.com/gameJAN/chromeObverse/network/members
[stars-shield]: https://img.shields.io/github/stars/shaojintian/Best_README_template.svg?style=flat-square
[stars-url]: https://github.com/gameJAN/chromeObverse/stargazers
[issues-shield]: https://img.shields.io/github/issues/shaojintian/Best_README_template.svg?style=flat-square
[issues-url]: https://img.shields.io/github/issues/shaojintian/Best_README_template.svg
[license-shield]: https://img.shields.io/github/license/shaojintian/Best_README_template.svg?style=flat-square
[license-url]: https://github.com/gameJAN/chromeObverse/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
