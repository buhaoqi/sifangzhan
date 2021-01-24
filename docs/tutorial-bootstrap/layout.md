---
id: layout
title: 布局
sidebar_label: 布局
---

## 断点
断点是Bootstrap中的触发器，用于触发布局、如何响应设备或视口大小的变化。

### 核心概念
- 断点是响应式设计的基础。使用它们来控制何时可以根据特定视口或设备尺寸调整布局。

- 使用媒体查询通过断点构建CSS。媒体查询是CSS的一项功能，可让您根据一组浏览器和操作系统参数有条件地应用样式。我们最常在媒体查询中使用`min-width`。

- 移动优先，响应式设计是目标。Bootstrap的CSS旨在使用最少的样式来使布局在最小的断点处工作，然后在样式上分层以针对较大的设备调整该设计。这样可以优化CSS，缩短渲染时间，并为访问者提供出色的体验。

### 六大断点
Bootstrap包括六个默认断点（有时称为网格层），用于进行响应式构建。如果您使用我们的源Sass文件，则可以自定义这些断点。

|断点|	类中缀	|尺寸值|容器宽度最大值|
|---|---|---|---|
|X-Small|	None|	<576px|575|
|Small|	sm|	≥576px|540|
|Medium|	md|	≥768px|720|
|Large	|lg|	≥992px|960|
|Extra large|	xl	|≥1200px|1140|
|Extra extra large|	xxl	|≥1400px|1320|
选择每个断点以舒适地容纳宽度为12的倍数的容器。断点也代表了常见设备尺寸和视口尺寸的子集，它们并不是专门针对每种情况或设备。取而代之的是，这些范围为几乎任何设备提供了坚实而一致的基础。

这些断点可通过Sass进行自定义-您可以在`_variables.scss`样式表的Sass映射中找到它们。
```css
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
```
有关如何修改Sass映射和变量的更多信息和示例，请参阅[Grid文档的Sass部分](https://getbootstrap.com/docs/5.0/layout/grid/#sass)。

### 媒体查询
由于Bootstrap最初是为移动设备而开发的，因此我们使用了一些[媒体查询](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)来为布局和界面创建合理的断点。这些断点主要基于最小视口宽度，并允许我们在视口变化时按比例放大元素。

#### min-width
Bootstrap主要在源Sass文件中将以下媒体查询范围（或断点）用于布局，网格系统和组件。

```Sass
// Source mixins

// No media query necessary for xs breakpoint as it's effectively `@media (min-width: 0) { ... }`
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }
@include media-breakpoint-up(xxl) { ... }

// Usage

// Example: Hide starting at `min-width: 0`, and then show at the `sm` breakpoint
  .custom-class {
    display: none;
}
  @include media-breakpoint-up(sm) {
    .custom-class {
      display: block;
    }
}

```

这些Sass mixins使用在Sass变量中声明的值在编译的CSS中转换。例如:

```Sass
    // X-Small devices (portrait phones, less than 576px)
    // No media query for `xs` since this is the default in Bootstrap

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) { ... }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { ... }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) { ... }

    // X-Large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) { ... }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) { ... }
```
#### max-width
有时我们会从另一方向使用媒体查询（给定的屏幕尺寸或更小）
```Sass
  // No media query necessary for xs breakpoint as it's effectively `@media (max-width: 0) { ... }`
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
@include media-breakpoint-down(xl) { ... }
@include media-breakpoint-down(xxl) { ... }

// Example: Style from medium breakpoint and down
@include media-breakpoint-down(md) {
  .custom-class {
    display: block;
  }
}
```
这些`mixins`使用那些声明的断点，从中减去.02px，并将其用作我们的最大宽度值。例如
```Sass
  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) { ... }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) { ... }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) { ... }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) { ... }

  // X-Large devices (large desktops, less than 1400px)
  @media (max-width: 1399.98px) { ... }

  // XX-Large devices (larger desktops)
  // No media query since the xxl breakpoint has no upper bound on its width
```
:::note

为什么要减去.02px?浏览器当前不支持范围[上下文查询](https://www.w3.org/TR/mediaqueries-4/#range-context)，因此我们通过使用精度更高的值解决了[min- 和 max-前缀](https://www.w3.org/TR/mediaqueries-4/#mq-min-max)以及视口具有小数宽度的限制（例如，在某些情况下可能会在高dpi的设备上发生）。

:::

#### single breakpoint
也有媒体查询和mixins，用于使用最小和最大断点宽度来定位单个屏幕尺寸段:
```Sass
  @include media-breakpoint-only(xs) { ... }
  @include media-breakpoint-only(sm) { ... }
  @include media-breakpoint-only(md) { ... }
  @include media-breakpoint-only(lg) { ... }
  @include media-breakpoint-only(xl) { ... }
  @include media-breakpoint-only(xxl) { ... }
```
例如，`@include media-breakpoint-only（md）{...}`将导致
```Sass
@media (min-width: 768px) and (max-width: 991.98px) { ... }
```
#### between breakpoints
同样，媒体查询可能跨越多个断点宽度
```Sass
@include media-breakpoint-between(md, xl) { ... }
```
这会导致
```Sass
  // Example
  // Apply styles starting from medium devices and up to extra large devices
  @media (min-width: 768px) and (max-width: 1199.98px) { ... }
```
## 容器
容器是Bootstrap的基本构建块，它包含，填充和对齐给定设备或视口中的内容。
### 容器是怎么工作的
容器是Bootstrap中最基本的布局元素，**在使用Bootstrap的默认网格系统时，容器是必需的。** 容器用于在其中容纳，填充和（有时）使内容居中。尽管可以嵌套容器，但是大多数布局不需要嵌套容器。

Bootstrap带有三个不同的容器：
- `.container` 容器在每个断点处设置`max-width`。（*说的简单一点：容器的宽度只有6个取值：100%,540px,720px,960px,1140px,1320px*)
- `.container-fluid` 容器宽度：在所有断点处为100％。(*容器的宽度在任何情况下都是100%*)
- `.container-{breakpoint}` 容器宽度：100％直到指定的断点。(*就是container和contain-fluid的混合模式，在指定的断点处切换模式。*)

下表说明了每个容器在每个断点处的最大宽度与原始.container和.container-fluid的比较

||Extra small|Small|Medium|Large|X-Large|XX-Large|
|---|---|---|---|---|---|---|
||<576px|≥576px|≥768px|≥992px|≥1200px|≥1400px|
|.container	|100%	|540px|720px|	960px|	1140px|	1320px|
|.container-sm	|100%	|540px	|720px	|960px	|1140px|	1320px|
|.container-md	|100%|	100%|	720px|	960px	|1140px|	1320px|
|.container-lg	|100%	|100%|	100%	|960px	|1140px|	1320px|
|.container-xl|	100%	|100%	|100%|	100%	|1140px|	1320px|
|.container-xxl	|100%	|100%|	100%	|100%|	100%|	1320px|
|.container-fluid	|100%	|100%	|100%|	100%	|100%|	100%|
### 默认容器
Bootstrap的默认.container类是一个响应的固定宽度的容器，这意味着它在每个断点处的最大宽度都会发生变化
```HTML
<div class="container">
  <!-- Content here -->
</div>
```

### 响应式容器
响应式容器允许您指定100％宽的类，直到达到指定的断点为止，此后，我们为每个较高的断点应用`max-width`s。例如，`.container-sm`的宽度为100％，直到到达sm断点为止，它将以md，lg，xl和xxl扩展。
```html
<div class="container-sm">100% wide until small breakpoint</div>
<div class="container-md">100% wide until medium breakpoint</div>
<div class="container-lg">100% wide until large breakpoint</div>
<div class="container-xl">100% wide until extra large breakpoint</div>
<div class="container-xxl">100% wide until extra extra large breakpoint</div>
```

### 流体容器
对整个宽度的容器使用`.container-fluid`，跨视口的整个宽度
```html
<div class="container-fluid">
  ...
</div>
```
### Sass
如上所示，Bootstrap会生成一系列预定义的容器类，以帮助您构建所需的布局。您可以通过修改为它们提供动力的Sass映射（在`_variables.scss`中找到）来自定义这些预定义的容器类。
```CSS
$container-max-widths: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px,
  xxl: 1320px
);
```
除了自定义Sass，您还可以使用我们的Sass mixin创建自己的容器
```Sass
  // Source mixin
  @mixin make-container($padding-x: $container-padding-x) {
    width: 100%;
    padding-right: $padding-x;
    padding-left: $padding-x;
    margin-right: auto;
    margin-left: auto;
  }

  // Usage
  .custom-container {
    @include make-container();
  }
  ```
  有关如何修改Sass映射和变量的更多信息和示例,请参考[Grid文档的Sass部分](https://getbootstrap.com/docs/5.0/layout/grid/#sass)
## 网格
借助十二列系统，六个默认响应层，Sass变量和混合以及几十个预定义类，使用Bootstrap强大的移动优先的Flexbox网格来构建所有形状和大小的布局。

### 示例
Bootstrap的网格系统使用一系列容器，行和列来布局和对齐内容。它是使用[flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)构建的，具有完全的响应能力。下面是一个示例以及有关网格系统如何组合在一起的深入说明。


:::tip

新手还是不熟悉flexbox？阅读本[CSS Tricks flexbox指南](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background)，了解背景，术语，指南和代码段。

:::
```html
<div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>
```
上面的示例使用预定义的网格类在所有设备和视口中创建了三个等宽列。这些列位于父`.container`页面的中心

### 网格是怎样工作的
分解，这就是网格系统如何组合在一起的。

- 我们的网格支持六个响应断点。断点基于最小宽度的媒体查询，这意味着它们会影响该断点及其上方的所有断点(例如, `.col-sm-4` 应用于 sm, md, lg, xl, and xxl)。这意味着您可以按每个断点控制容器和列的大小和行为。

- 容器居中并水平填充内容。使用`.container`表示自适应像素宽度，使用`.container-fluid`表示宽度：在所有视口和设备上均为100％，或使用自适应容器（例如`.container-md`）表示流体宽度和像素宽度的组合

- 行是列的包装。每列都有水平填充（称为Gutter），用于控制它们之间的间距。然后在行上使用负边距抵消此填充，以确保您的列中的内容在视觉上向左对齐。行还支持修饰符类，以统一应用列大小和装订线类以更改内容的间距。

- 列非常灵活。每行有12个模板列，可让您创建跨越任意数量列的元素的不同组合。列类别指示要跨越的模板列数（例如col-4跨越四）。宽度以百分比设置，因此您始终具有相同的相对大小。

- 装订线也响应迅速且可自定义。装订线类适用于所有断点，其大小与边距和填充间距相同。更改.gx-\*类的水平装订线，更改.gy-\*的垂直装订线或更改.g- *类的所有装订线。 .g-0也可用于去除排水沟。

- Sass变量，映射和Mixins为网格供电。如果您不想在Bootstrap中使用预定义的网格类，则可以使用我们的网格源Sass创建具有更多语义标记的自定义网格类。我们还包括一些CSS自定义属性，以使用这些Sass变量，从而为您提供更大的灵活性。


:::caution

请注意flexbox的局限性和[错误](https://github.com/philipwalton/flexbugs)，例如[无法将某些html元素用作flex容器](https://github.com/philipwalton/flexbugs#flexbug-9)

:::

### 网格选项
Bootstrap的网格系统可以适应所有六个默认断点以及您自定义的任何断点。六个默认网格层如下:
- Extra small (xs)
- Small (sm)
- Medium (md)
- Large (lg)
- Extra large (xl)
- Extra extra large (xxl)
如上所述，每个断点都有自己的容器，唯一的类前缀和修饰符。这是表格在这些断点之间的变化方式。
### 自动布局列
利用特定于断点的列类来简化列大小，而无需使用显式编号的类，例如.col-sm-6。
#### 等宽
例如，以下是两个网格布局，它们适用于从xs到xxl的每个设备和视口。为您需要的每个断点添加任意数量的无单元类，每列的宽度相同。
```html
<div class="container">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      2 of 3
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>
```
#### 设置一列宽
Flexbox网格列的自动布局还意味着您可以设置一列的宽度并使同级列自动调整其大小。您可以使用预定义的网格类（如下所示），网格混合或内联宽度。请注意，无论中间列的宽度如何，其他列都会调整大小。
```html
<div class="container">
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-6">
      2 of 3 (wider)
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-5">
      2 of 3 (wider)
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>
```
#### 可变宽度内容
使用`col- {breakpoint} -auto`类可根据其内容的自然宽度来调整列的大小:
```html
<div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      1 of 3
    </div>
    <div class="col-md-auto">
      Variable width content
    </div>
    <div class="col col-lg-2">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-md-auto">
      Variable width content
    </div>
    <div class="col col-lg-2">
      3 of 3
    </div>
  </div>
</div>
```

### 可响应的类
Bootstrap的网格包括六层预定义的类，用于构建复杂的响应式布局。在您认为合适的超小型，小型，中型，大型或超大型设备上自定义列的大小。
#### 全部断点
对于从最小的设备到最大的设备相同的网格，请使用`.col`和 `.col-*`类。需要特殊大小的列时，请指定编号的类别；否则，请坚持使用`.col`
```html
<div class="container">
  <div class="row">
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
  </div>
  <div class="row">
    <div class="col-8">col-8</div>
    <div class="col-4">col-4</div>
  </div>
</div>
```
#### 水平堆叠
使用一组.col-sm- *类，您可以创建一个基本的网格系统，该系统从堆叠开始并在小断点（sm）处变为水平。
```html
<div class="container">
  <div class="row">
    <div class="col-sm-8">col-sm-8</div>
    <div class="col-sm-4">col-sm-4</div>
  </div>
  <div class="row">
    <div class="col-sm">col-sm</div>
    <div class="col-sm">col-sm</div>
    <div class="col-sm">col-sm</div>
  </div>
</div>
```
#### 混合和匹配
不想让您的列简单地堆叠在某些网格层中吗？根据需要为每个层使用不同类的组合。请参阅下面的示例，以更好地了解其工作原理。
```html
<div class="container">
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <div class="row">
    <div class="col-md-8">.col-md-8</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
  <div class="row">
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  <!-- Columns are always 50% wide, on mobile and desktop -->
  <div class="row">
    <div class="col-6">.col-6</div>
    <div class="col-6">.col-6</div>
  </div>
</div>
```
#### 行列
使用响应式`.row-cols- *`类快速设置最能呈现内容和布局的列数。普通的`.col- *`类适用于各个列（例如`.col-md-4`），而行列类是在父`.row`上设置的快捷方式。使用.row-cols-auto您可以为列赋予其自然宽度。

使用这些行列类可快速创建基本的网格布局或控制您的卡片布局.
示例：.row-cols-2
```html
<div class="container">
  <div class="row row-cols-2">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
```
示例：.row-cols-3
```html
<div class="container">
  <div class="row row-cols-3">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
```
示例：.row-cols-auto
```html
<div class="container">
  <div class="row row-cols-auto">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
```
示例：.row-cols-4
```html
<div class="container">
  <div class="row row-cols-4">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
```
示例：.row-cols-4
```html
<div class="container">
  <div class="row row-cols-4">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col-6">Column</div>
    <div class="col">Column</div>
  </div>
</div>
```
示例：row-cols-1 row-cols-sm-2 row-cols-md-4
```html
<div class="container">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
```
您也可以使用随附的Sass mixin,`row-cols()`:
```html
.element {
  // Three columns to start
  @include row-cols(3);

  // Five columns from medium breakpoint up
  @include media-breakpoint-up(md) {
    @include row-cols(5);
  }
}
```
### 嵌套
要将内容嵌套在默认网格中，请在现有的`.col-sm- *`列中添加一个新的`.row`和一组`.col-sm- *`列。嵌套行应包括一组总计不超过12个或更少的列（不需要全部使用12个可用列）。
```html
<div class="container">
  <div class="row">
    <div class="col-sm-3">
      Level 1: .col-sm-3
    </div>
    <div class="col-sm-9">
      <div class="row">
        <div class="col-8 col-sm-6">
          Level 2: .col-8 .col-sm-6
        </div>
        <div class="col-4 col-sm-6">
          Level 2: .col-4 .col-sm-6
        </div>
      </div>
    </div>
  </div>
</div>
```

### Sass
使用Bootstrap的源Sass文件时，可以选择使用Sass变量和mixins创建自定义，语义和响应式页面布局。我们预定义的网格类使用这些相同的变量和mixin为快速响应的布局提供了一整套现成的类。
#### 变量
变量和映射确定列数，装订线宽度以及开始浮动列的媒体查询点。我们使用它们来生成上面记录的预定义网格类，以及下面列出的自定义混合类。
```Sass
$grid-columns:      12;
$grid-gutter-width: 1.5rem;
```
```Sass
  $grid-breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px,
    xxl: 1400px
  );
```
```Sass
  $container-max-widths: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px,
  xxl: 1320px
);
  ```
#### 混合
Mixins与网格变量结合使用以为单个网格列生成语义CSS。
```sass
// Creates a wrapper for a series of columns
@include make-row();

// Make the element grid-ready (applying everything but the width)
@include make-col-ready();
@include make-col($size, $columns: $grid-columns);

// Get fancy by offsetting, or changing the sort order
@include make-col-offset($size, $columns: $grid-columns);
```
#### 用法示例
您可以将变量修改为自己的自定义值，或仅将mixins及其默认值使用。这是使用默认设置创建两列布局的示例。
```Sass
  .example-container {
    @include make-container();
    // Make sure to define this width after the mixin to override
    // `width: 100%` generated by `make-container()`
    width: 800px;
  }

  .example-row {
    @include make-row();
  }

  .example-content-main {
    @include make-col-ready();

    @include media-breakpoint-up(sm) {
      @include make-col(6);
    }
    @include media-breakpoint-up(lg) {
      @include make-col(8);
    }
  }

  .example-content-secondary {
    @include make-col-ready();

    @include media-breakpoint-up(sm) {
      @include make-col(6);
    }
    @include media-breakpoint-up(lg) {
      @include make-col(4);
    }
  }
```

```html
<div class="example-container">
  <div class="example-row">
    <div class="example-content-main">Main content</div>
    <div class="example-content-secondary">Secondary content</div>
  </div>
</div>
```

### 自定义网格
使用我们内置的表格Sass变量和地图，可以完全自定义预定义的表格类。更改层数，媒体查询尺寸和容器宽度，然后重新编译。
#### 列和Gutters
网格列数可以通过Sass变量进行修改。 `$ grid-columns`用于生成每列的宽度（百分比），而$ grid-gutter-width设置列Gutters的宽度。
```Sass
  $grid-columns: 12 !default;
  $grid-gutter-width: 1.5rem !default;
```
#### 网格层
除了列本身之外，您还可以自定义网格层数。如果您只需要四个网格层，则可以将$ grid-breakpoints和$ container-max-widths更新为如下所示:
```Sass
  $grid-breakpoints: (
    xs: 0,
    sm: 480px,
    md: 768px,
    lg: 1024px
  );

  $container-max-widths: (
    sm: 420px,
    md: 720px,
    lg: 960px
  );
```
对Sass变量或映射进行任何更改时，您需要保存更改并重新编译。这样做将为列宽，偏移量和顺序输出一组全新的预定义网格类别。响应性可见性实用程序也将更新为使用自定义断点。确保以像素为单位设置网格值（不是rem，em或％）

## 列
借助我们的flexbox网格系统，了解如何使用一些对齐，排序和偏移选项来修改列。另外，请参阅如何使用列类来管理非网格元素的宽度。
:::caution

小心！在深入了解如何修改和自定义[网格](https://getbootstrap.com/docs/5.0/layout/grid/)列之前，请务必先阅读“网格”页面。

:::

### 列是怎样工作的
- 列基于网格的flexbox体系结构。Flexbox意味着我们具有在行级别更改单个列和[修改列组的选项](https://getbootstrap.com/docs/5.0/layout/grid/#row-columns)。您选择列的增长，收缩或其他方式变化
- 构建网格布局时，所有内容都在列中。Bootstrap网格的层次结构从[容器](https://getbootstrap.com/docs/5.0/layout/containers/)到行再到列再到内容。在极少数情况下，您可以结合使用内容和列，但要注意可能会导致意想不到的后果。
- Bootstrap包含用于创建快速响应式布局的预定义类。每个网格层都有[六个断点](https://getbootstrap.com/docs/5.0/layout/breakpoints/)和一列列，我们已经为您构建了数十个类来创建所需的布局。如果愿意，可以通过Sass禁用它。

### 对齐
使用flexbox对齐工具可垂直和水平对齐列。
#### 垂直对齐

示例
```html
<div class="container">
  <div class="row align-items-start">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
  <div class="row align-items-end">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
</div>
```
示例
```html
<div class="container">
  <div class="row">
    <div class="col align-self-start">
      One of three columns
    </div>
    <div class="col align-self-center">
      One of three columns
    </div>
    <div class="col align-self-end">
      One of three columns
    </div>
  </div>
</div>
```
水平对齐
```html
<div class="container">
  <div class="row justify-content-start">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-end">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-around">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-between">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-evenly">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
</div>
```
#### 列包
如果在一行中放置超过12列，则每组额外的列将作为一个单元包装在新行上。
示例
```html
<div class="container">
  <div class="row">
    <div class="col-9">.col-9</div>
    <div class="col-4">.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
    <div class="col-6">.col-6<br>Subsequent columns continue along the new line.</div>
  </div>
</div>
```
#### 分栏符
在flexbox中将列拆分为新行需要一个小技巧：将宽度为100％的元素添加到要将列换行的位置。通常，这是通过多个.rows完成的，但并非每种实现方法都可以解决这个问题。
```html
<div class="container">
  <div class="row">
    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>

    <!-- Force next columns to break to new line -->
    <div class="w-100"></div>

    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
  </div>
</div>
```
您还可以使用我们的响应式显示实用程序在特定的断点处应用此中断。
```html
<div class="container">
  <div class="row">
    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>

    <!-- Force next columns to break to new line at md breakpoint and up -->
    <div class="w-100 d-none d-md-block"></div>

    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
  </div>
</div>
```

### 重新排序
#### 顺序类
使用`.order-`类来控制内容的视觉顺序。这些类是响应式的，因此您可以按断点设置顺序（例如`.order-1` `.order-md-2`）。包括对所有六个网格层中的1到5的支持。
```html
<div class="container">
  <div class="row">
    <div class="col">
      First in DOM, no order applied
    </div>
    <div class="col order-5">
      Second in DOM, with a larger order
    </div>
    <div class="col order-1">
      Third in DOM, with an order of 1
    </div>
  </div>
</div>
```
还有响应式.order-first和.order-last类，它们分别通过应用order -1和order 6来更改元素的顺序。这些类也可以根据需要与编号的.order- *类混合使用。
```html
<div class="container">
  <div class="row">
    <div class="col order-last">
      First in DOM, ordered last
    </div>
    <div class="col">
      Second in DOM, unordered
    </div>
    <div class="col order-first">
      Third in DOM, ordered first
    </div>
  </div>
</div>
```
#### 偏移列
您可以通过两种方式偏移网格列：我们的响应式`.offset-`网格类和边距实用程序。网格类的大小可匹配列，而边距对于偏移宽度可变的快速布局更有用
#### 偏移类
使用`.offset-md- *`类将列向右移动。这些类将*列增加一列的左边距。例如，`.offset-md-4`将`.col-md-4`移动到四列
```html
<div class="container">
  <div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
  </div>
  <div class="row">
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
  </div>
  <div class="row">
    <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
  </div>
</div>
```
除了在响应断点处清除列外，您可能还需要重置偏移量。在[网格示例](https://getbootstrap.com/docs/5.0/examples/grid/)中查看此操作。
```html
<div class="container">
  <div class="row">
    <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
    <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
  </div>
  <div class="row">
    <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
    <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
  </div>
</div>
```
#### Margin工具
随着v4中向flexbox的迁移，您可以使用诸如`.me-auto`之类的边距实用程序来迫使同级列彼此分离。
```html
<div class="container">
  <div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
  </div>
  <div class="row">
    <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
    <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
  </div>
  <div class="row">
    <div class="col-auto me-auto">.col-auto .me-auto</div>
    <div class="col-auto">.col-auto</div>
  </div>
</div>
```


### 独立列的类
`.col- *`类也可以在.row外部使用，以赋予元素特定的宽度。每当将列类用作行的非直接子代时，都将省略填充。
```html
<div class="col-3 bg-light p-3 border">
  .col-3: width of 25%
</div>
<div class="col-sm-9 bg-light p-3 border">
  .col-sm-9: width of 75% above sm breakpoint
</div>
```
这些类可与实用程序一起使用，以创建响应的浮动图像。如果文本较短，请确保将内容包装在.clearfix包装器中以清除浮点数。
```html
<div class="clearfix">
  <img src="..." class="col-md-6 float-md-end mb-3 ms-md-3" alt="...">

  <p>
    Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris paddenstoel nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>

  <p>
    Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Id nullam tellus relem amet commodo telemque olemit. Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
  </p>

  <p>
    Donec id elit non mi porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare sem lantaarnpaal quam venenatis vestibulum. Donec sed odio dui. Maecenas faucibus mollis interdum. Nullam quis risus eget urna salsa tequila vel eu leo. Donec id elit non mi porta gravida at eget metus.
  </p>
</div>

```
## Gutters
Gutters是列之间的填充，用于响应地间隔和对齐Bootstrap网格系统中的内容。


### Gutter是怎样工作的
- 是列内容之间的间隙，由水平填充创建。我们在每一列上设置padding-right和padding-left，并使用负的页边距来抵消每行开头和结尾的内容以对齐内容
- Gutters始于1.5rem（24px）宽。这使我们能够将网格匹配到padding和margin spacer的比例
- Gutters可以响应的调整。使用特定于断点的Gutters类来修改水平Gutters，垂直Gutters和所有Gutters。

### 水平Gutter
`gx- *`类可用于控制水平装订线的宽度。如果也使用较大的装订线，则可能需要调整`.container`或`.container-fluid`父级，以使用匹配的填充实用程序来避免不必要的溢出。例如，在以下示例中，我们使用`.px-4`增加了填充。
```html
<div class="container px-4">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
  </div>
</div>
```
一种替代解决方案是使用`.overflow-hidden`类在`.row`周围添加包装器
```html
<div class="container overflow-hidden">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
  </div>
</div>
```

### 垂直Gutter
`.gy- *`类可用于控制垂直装订线宽度。像水平装订线一样，垂直装订线会导致页面末尾.row下方的某些溢出。如果发生这种情况，请使用`.overflow-hidden`类在`.row`周围添加包装器：
```html
<div class="container overflow-hidden">
  <div class="row gy-5">
    <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
  </div>
</div>
```

### 水平和垂直Gutter
`.g- *`类可用于控制水平装订线宽度，在以下示例中，我们使用较小的装订线宽度，因此无需添加.overflow-hidden包装器类。
```html
<div class="container">
  <div class="row g-2">
    <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
  </div>
</div>
```

### 行列Gutter
Gutter类也可以添加到行列。在下面的示例中，我们使用响应式行列和响应式Gutter类。
```html
<div class="container">
  <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div class="col">
      <div class="p-3 border bg-light">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Row column</div>
    </div>
  </div>
</div>
```


### 无Gutter
可以使用`.g-0`删除预定义网格类别中列之间的装订线。这将删除`.row`中的负边距和所有直接子级中的水平填充。

**需要边缘到边缘的设计吗？** 删除父`.container`或`.container-fluid`。
实际上，这是它的外观。请注意，您可以继续将其与所有其他预定义的网格类一起使用（包括列宽，响应层，重新排序等）
```html
<div class="row g-0">
  <div class="col-sm-6 col-md-8">.col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>
```


### 修改Gutter
类是从`$gutters` Sass映射继承的`$gutters` Sass映射构建的。
```html
$grid-gutter-width: 1.5rem;
$gutters: (
  0: 0,
  1: $spacer * .25,
  2: $spacer * .5,
  3: $spacer,
  4: $spacer * 1.5,
  5: $spacer * 3,
);
```

## 工具

### 修改显示

### Flexbox选项

### margin和padding

### 切换可见性

## z-index
