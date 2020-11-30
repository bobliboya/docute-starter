# Precalculus复习

## 1. 正多边形的面积问题

&emsp;&emsp;正多边形的面积：正多边形的边数为*n*。当*n*越大时，面积*An*趋近于它所对应的圆的面积。圆的面积*A*是正多边形面积的极限。可以写成：

<center><img src="https://latex.codecogs.com/gif.latex?A&space;=&space;\mathop&space;{\lim&space;}\limits_{n&space;\to&space;\infty&space;}&space;{A_n}" title="A = \mathop {\lim }\limits_{n \to \infty } {A_n}" /></center>

&emsp;&emsp;其中，圆的面积计算公式为：<img src="https://latex.codecogs.com/gif.latex?A&space;=&space;\pi&space;{r^2}" title="A = \pi {r^2}" />



## 2. 斜率问题

<a href="https://imgchr.com/i/wMINuD"><img src="https://s1.ax1x.com/2020/09/08/wMINuD.md.png" alt="wMINuD.png" border="0" width=50%/></a>

&emsp;&emsp;如右图所示，*P*和*Q*之间的斜率可以表示为

<center><img src="https://latex.codecogs.com/gif.latex?{m_{PQ}}&space;=&space;{{f(x)&space;-&space;f(a)}&space;\over&space;{x&space;-&space;a}}" title="{m_{PQ}} = {{f(x) - f(a)} \over {x - a}}" /></center>

&emsp;&emsp;若*Q*点继续在抛物线上移动，斜率同时也发生变化。当*Q*与点*P*几乎重合时，<img src="https://latex.codecogs.com/gif.latex?{m_{PQ}}" title="{m_{PQ}}" />近似等于*P*点的切线斜率*m*，也就是<img src="https://latex.codecogs.com/gif.latex?{m_{PQ}}" title="{m_{PQ}}" />的极限值，可以表示为

<center><img src="https://latex.codecogs.com/gif.latex?m&space;=&space;\mathop&space;{\lim&space;}\limits_{Q&space;\to&space;P}&space;{m_{PQ}}" title="m = \mathop {\lim }\limits_{Q \to P} {m_{PQ}}"  /></center>

&emsp;&emsp;使用上面的<img src="https://latex.codecogs.com/gif.latex?{m_{PQ}}" title="{m_{PQ}}" />计算公式，我们也可以将m表示为

<center><img src="https://latex.codecogs.com/gif.latex?m&space;=&space;\mathop&space;{\lim&space;}\limits_{x&space;\to&space;a}&space;{{f(x)&space;-&space;f(a)}&space;\over&space;{x&space;-&space;a}}" title="m = \mathop {\lim }\limits_{x \to a} {{f(x) - f(a)} \over {x - a}}" /></center>



## 3. 速度

&emsp;&emsp;平均速度的计算公式，可以写作

<center><img src="https://latex.codecogs.com/gif.latex?\overline&space;v&space;=&space;{{\Delta&space;x}&space;\over&space;{\Delta&space;t}}" title="\overline v = {{\Delta x} \over {\Delta t}}" /></center>

&emsp;&emsp;即总位移除以总时间。



## 4. 数列的极限

相关资源：芝诺悖论 [链接](https://baike.baidu.com/item/芝诺悖论/241624?fr=aladdin#4_1)

&emsp;&emsp;同理，集合<img src="https://latex.codecogs.com/gif.latex?\left\{&space;{{a_n}}&space;\right\}" title="\left\{ {{a_n}} \right\}" />可以表示为

<center><img src="https://latex.codecogs.com/gif.latex?\left\{&space;{1,{1&space;\over&space;2},{1&space;\over&space;3},{1&space;\over&space;4},{1&space;\over&space;5},...}&space;\right\}" title="\left\{ {1,{1 \over 2},{1 \over 3},{1 \over 4},{1 \over 5},...} \right\}" /></center>

&emsp;&emsp;通项公式为

<center><img src="https://latex.codecogs.com/gif.latex?{a_n}&space;=&space;{1&space;\over&space;n}" title="{a_n} = {1 \over n}" /></center>

&emsp;&emsp;可见，n的值越大，an的值越趋近于0。以上内容可以写作：

<center><img src="https://latex.codecogs.com/gif.latex?\mathop&space;{\lim&space;}\limits_{n&space;\to&space;\infty&space;}&space;{1&space;\over&space;n}&space;=&space;0" title="\mathop {\lim }\limits_{n \to \infty } {1 \over n} = 0" /></center>

##  5. 数列的和

现有一等比数列：

<center><img src="https://latex.codecogs.com/gif.latex?\left\{&space;{{{\rm{1}}&space;\over&space;{\rm{2}}},{{\rm{1}}&space;\over&space;{\rm{4}}},{{\rm{1}}&space;\over&space;{\rm{8}}},{{\rm{1}}&space;\over&space;{{\rm{16}}}},{{\rm{1}}&space;\over&space;{{\rm{32}}}}...}&space;\right\}" title="\left\{ {{{\rm{1}} \over {\rm{2}}},{{\rm{1}} \over {\rm{4}}},{{\rm{1}} \over {\rm{8}}},{{\rm{1}} \over {{\rm{16}}}},{{\rm{1}} \over {{\rm{32}}}}...} \right\}" /></center>

将其求和可得

<center><img src="https://latex.codecogs.com/gif.latex?{{\rm{1}}&space;\over&space;{\rm{2}}}{\rm{&space;&plus;&space;}}{{\rm{1}}&space;\over&space;{\rm{4}}}{\rm{&space;&plus;&space;}}{{\rm{1}}&space;\over&space;{\rm{8}}}{\rm{&space;&plus;&space;}}{{\rm{1}}&space;\over&space;{{\rm{16}}}}{\rm{&space;&plus;&space;}}...{\rm{&space;&plus;&space;}}{1&space;\over&space;{{2^n}}}&space;=&space;1" title="{{\rm{1}} \over {\rm{2}}}{\rm{ + }}{{\rm{1}} \over {\rm{4}}}{\rm{ + }}{{\rm{1}} \over {\rm{8}}}{\rm{ + }}{{\rm{1}} \over {{\rm{16}}}}{\rm{ + }}...{\rm{ + }}{1 \over {{2^n}}} = 1" /></center>

使用极限表示，可以写作

<center><img src="https://latex.codecogs.com/gif.latex?\mathop&space;{\lim&space;}\limits_{n&space;\to&space;\infty&space;}&space;{s_n}&space;=&space;1" title="\mathop {\lim }\limits_{n \to \infty } {s_n} = 1" /></center>