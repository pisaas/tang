# Tang

### 问题

在开发过程中，通常前后端会按照业务需求定义 API 文档，并且遵照 API 文档来实现，最后进行接口联调和上线。 在整个过程中会产生很多的问题，诸如：

1. 难以跟踪和管理变更。接口契约一般通过 wiki 等方式人工登记，契约变化难以管理和跟踪，导致后期调试成本高，效率低。
2. 接口文档二义性。 很难避免接口文档的二义性，例如这个定义字段可以为空， 到底是 null，还是" " 又或者可以是""
3. 浪费时间写接口模型。接口模型一般没有技术含量， 开发人员却需要花费时间按照文档定义来写， 模型复杂，难免写错，导致后期调试成本高，效率低。
4. 没有高质量 Mock 数据。下游系统依赖上游系统接口，上游系统从接口定义到接口实现需要若干天到几周不等，导致下游系统只能等待实现，或者进行简单的 Mock， 导致后期调试成本高，效率低。
5. 难以进行自动化单元测试。 每个接口都要按照契约人工编写单元测试，异常测试分支覆盖率低，无法穷举，接口变化需要人工维护。 当接口量增多时，基本上是无法维护的，单元测试只能走个形式。

综上分析，结合实际经验， 这些问题最终会被压到联调阶段，导致项目延期，造成质量风险。

### 目标

Tang 就是这样一个工具，它可以帮助开发人员极大减少接口开发工作量，降低联调的成本，提高工作效率，让开发的生活变得更美好。所以我们觉得它能够 ：

1. 很方便的集成在任意项目中，无论是使用在新的项目，还是开发中的项目。
2. 使用方便，代码入侵少。
3. 能很方便的定义接口契约文档。
4. 通过接口文档可以生成后端 Java 代码， 前端支持 Vue， iOS 和 Anroid 代码。 并且可以很方便的通过插件或者 SDK 的方式支持生成各种语言代码。
5. 产生高质量的 Mock 数据。
6. 能够进行自动化测试。

### 关于名字

Tang 是很蠢萌的海水鱼，学名黄高鳍刺尾鱼， 别名，黄金吊。它是最容易饲养的倒吊品种，它是近乎全球所有海水观赏鱼爱好者都喜欢的品种。

![tang](https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2061364928,4255556154&fm=26&gp=0.jpg)

### 快速开始

1. 准备：请在开始前确保机器上安装了 node 10.13 以上环境，[nodejs 安装](https://nodejs.org/zh-cn/download/)
2. 安装：执行 node 命令安装

```
npm i
```

### 其它

我们的项目是开源的，我们崇尚同建共享， 所以，我们希望有更多的人能够一同参与。 任何的问题都欢迎 issue 给我们。
