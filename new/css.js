/*
盒模型：border+content+padding+margin
标准盒模型（W3C盒模型)：width+border+padding+margin
怪异盒模型（ie盒模型）：width+margin------width=width+border+padding

css选择符有哪些？哪些可以继承？
id选择器（#id）
类选择器（.box)
标签选择器（p,b)
相邻选择器（h1+p)
子选择器（ul>li)
后代选择器（li a)
通配符选择器（*）
伪类选择器（li:nth-child p:hover)

可继承的样式：
font-size font-family color ul li dl dd dt
不可继承的样式：
border padding margin width height

css优先级计算
1、优先级就近原则，同权重情况下样式定义最近者为准
2、载入样式以最后载入样式为准

优先级：
！important>id>class>tag
!importtant>内联样式


C3新增伪类有哪些？
：first-of-type
:last-of-type
:only-of-type(父元素中只能有符合要求的一个子标签)
:only-child(父元素中只能有一个子元素)
:nth-child(num)
:after
:before
:disabled
:checked


div如何居中？
C3新特性：
display:none和visibility:hidden区别
css样式优化以及提高性能的方法
css画一个三角形
position定位

static默认属性值
relative相对定位
absolute 绝对定位（以他最近的一个已经定位的为基准进行定位，如果没有就一浏览器为基准定位）
fixed 固定定位 与绝对定位相似---以浏览器为基准定位 拖动滚动条，位置保持不变
*/ 