---
id: getting-started
title: 介绍
sidebar_label: 介绍
---
通过免费开源的CDN服务商[jsDelivr](https://www.jsdelivr.com/)和一个模板启动页，就可以开始使用全球最流行的用于构建响应式，移动优先的网站的框架Bootstrap。

## 快速开始
如果想要快速的将Bootstrap添加到项目中，请使用免费开源的CDN:[jsDelivr](https://www.jsdelivr.com/)。如果使用包管理器或是需要下载源文件，[请前往下载页面](https://getbootstrap.com/docs/5.0/getting-started/download/)。

### CSS

把下面的`<link>`样式复制到你的`<head>`区域里，并且放在所有其他样式表之前就可以完成Bootstrap样式的加载。
```HTML5
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
```

### JS
Bootstrap的许多组件都需要使用JavaScript才能起作用。具体来说，它们需要Bootstrap提供的JavaScript插件和[Popper](https://popper.js.org/)。选择下面任一种方式，即可启用组件。记得将`<script>`放在页面结尾`</ body>`标记之前。

#### Bundle
在我们的两个bundle之一中包括每个Bootstrap JavaScript插件和依赖项。 `bootstrap.bundle.js`和`bootstrap.bundle.min.js`都包含Popper作为Bootstrap的工具提示和弹出窗口。有关Bootstrap中包含的内容的更多信息，请参阅我们的[内容](https://getbootstrap.com/docs/5.0/getting-started/contents/#precompiled-bootstrap)部分。

```JavaScript
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
```
#### 分离脚本
如果您决定使用单独的脚本解决方案，则必须先引用Popper（如果您使用的是工具提示或弹出窗口），然后引用JavaScript插件。
```JavaScript
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>
```

#### Modules
如果您使用`<script type =“ module”>`，请参阅我们的[作为模块使用Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/javascript/#using-bootstrap-as-a-module)部分。

#### 组件
好奇哪些组件明确需要我们的JavaScript和Popper？单击下面的显示组件链接。如果您不确定总体页面结构，请继续阅读示例页面模板。
- Alerts for dismissing
- Buttons for toggling states and checkbox/radio functionality
- Carousel for all slide behaviors, controls, and indicators
- Collapse for toggling visibility of content
- Dropdowns for displaying and positioning (also requires Popper)
- Modals for displaying, positioning, and scroll behavior
- Navbar for extending our Collapse plugin to implement responsive behavior
- Toasts for displaying and dismissing
- Tooltips and popovers for displaying and positioning (also requires Popper)
- Scrollspy for scroll behavior and navigation updates

## 启动模板
确保使用最新的设计和开发标准来设置页面。这意味着使用HTML5文档类型，并包含视口元标记以实现正确的响应行为。把它们放在一起，您的页面应如下所示：
```HTML5
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>
    -->
  </body>
</html>
```
这就是全部页面要求所需要的。请访问“[布局](https://getbootstrap.com/docs/5.0/layout/grid/)”文档或我们的[官方示例](https://getbootstrap.com/docs/5.0/examples/)，开始布局您网站的内容和组件。

## 全局样式和设置
Bootstrap采用了一些重要的全局样式和设置，您在使用它们时需要了解它们，几乎所有这些都专门针对跨浏览器样式的标准化。让我们开始吧。
### HTML5 doctype
Bootstrap要求使用HTML5文档类型。没有它，您会看到一些时髦的不完整样式，但是包括它不会引起任何可观的困扰。
### 响应式meta标签
Bootstrap首先开发为移动设备，该策略是我们首先为移动设备优化代码，然后根据需要使用CSS媒体查询扩展组件。为确保所有设备都能正确渲染和触摸缩放，请将响应式视口元标记添加到您的`<head>`。
```HTML5
<meta name="viewport" content="width=device-width, initial-scale=1">
```
您可以在启动模板中看到一个实际的示例。
### Box-sizing
为了在CSS中更直接地调整大小，我们将全局框大小值从content-box切换到border-box。这样可确保填充不会影响元素的最终计算宽度，但会导致某些第三方软件（例如Google Maps和Google Custom Search Engine）出现问题。
在极少数情况下，您需要覆盖它，请使用以下内容：
```CSS
.selector-for-some-widget {
  box-sizing: content-box;
}
```
使用以上代码段，嵌套元素（包括通过:: before和:: after生成的内容）将全部继承该.selector-for-some-widget的指定框大小。

### 重启
为了改善跨浏览器的呈现，我们使用“重新启动”来纠正浏览器和设备之间的不一致，同时为常见的HTML元素提供更多的自以为是的重置。

## 社区
- 掌握最新的Bootstrap开发信息，并通过这些有用的资源与社区联系。
- 在Twitter上关注@getbootstrap。
- 阅读并订阅The Official Bootstrap Blog。
- 加入官方的Slack会议室。
- 与IRC中的Bootstrappers聊天。
- 在irc.freenode.net服务器上的## bootstrap通道中。
- 在堆栈溢出（标记为bootstrap-5）上可以找到实现帮助。
- 开发人员应在通过npm或类似的传递机制进行分发的软件包上使用关键字bootstrap来修改或添加Bootstrap的功能，以最大程度地提高可发现性。
