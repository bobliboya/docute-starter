# 函数的极限

## [基本概念]邻域

以<img src="https://latex.codecogs.com/gif.latex?{x_0}" title="{x_0}" />为中心的任何开区间称为点<img src="https://latex.codecogs.com/gif.latex?{x_0}" title="{x_0}" />的邻域，记作<img src="https://latex.codecogs.com/gif.latex?U({x_0})" title="U({x_0})" />；在<img src="https://latex.codecogs.com/gif.latex?U({x_0})" title="U({x_0})" />去掉中心<img src="https://latex.codecogs.com/gif.latex?{x_0}" title="{x_0}" />后，称为点<img src="https://latex.codecogs.com/gif.latex?{x_0}" title="{x_0}" />的去心邻域，记作<img src="https://latex.codecogs.com/gif.latex?\mathop&space;U\limits^&space;\circ&space;({x_0})" title="\mathop U\limits^ \circ ({x_0})" />。



## 自变量趋于有限值时函数的极限

### 基本形式

<center><img src="https://latex.codecogs.com/gif.latex?\mathop&space;{\lim&space;}\limits_{x&space;\to&space;{x_0}}&space;f(x)&space;=&space;A" title="\mathop {\lim }\limits_{x \to {x_0}} f(x) = A" /></center>

### 常用解题思路

#### 1. 多项式函数

&emsp;&emsp;对于多项式函数<img src="https://latex.codecogs.com/gif.latex?f(x)&space;=&space;{a_1}{x^n}&space;&plus;&space;{a_2}{x^{n&space;-&space;1}}&space;&plus;&space;...&space;&plus;&space;{a_{n&space;&plus;&space;1}}" title="f(x) = {a_1}{x^n} + {a_2}{x^{n - 1}} + ... + {a_{n + 1}}" />，一般不会存在渐近线等情况(都为连续函数)，直接将趋近的值带入运算即可。

&emsp;&emsp;运用公式：<img src="https://latex.codecogs.com/gif.latex?\mathop&space;{\lim&space;}\limits_{x&space;\to&space;{x_0}}&space;f(x)&space;=&space;f({x_0})" title="\mathop {\lim }\limits_{x \to {x_0}} f(x) = f({x_0})" />



#### 2. 有理函数

##### 	A. 取值非渐近线

&emsp;&emsp;和上面的多项式函数一样，运用公式带入即可。

##### 	B. 取值为渐近线

&emsp;&emsp;在拿到有理函数求极限的时候，一定要先确定取值是否能够使式子具有意义。例如函数<img src="https://latex.codecogs.com/gif.latex?\mathop&space;{\lim&space;}\limits_{x&space;\to&space;1}&space;{{{x^2}&space;-&space;1}&space;\over&space;{x&space;-&space;1}}" title="\mathop {\lim }\limits_{x \to 1} {{{x^2} - 1} \over {x - 1}}" />，不能直接将x=1带入计算，而是要先将原式因式分解才能够带入计算。其次要注意取值是要从哪一个方向趋近，例如函数<img src="https://latex.codecogs.com/gif.latex?\mathop&space;{\lim&space;}\limits_{x&space;\to&space;0}&space;{1&space;\over&space;x}" title="\mathop {\lim }\limits_{x \to 0} {1 \over x}" />，从正方向和负方向趋近的极限值分别为<img src="https://latex.codecogs.com/gif.latex?\infty" title="\infty" />和<img src="https://latex.codecogs.com/gif.latex?-&space;\infty" title="- \infty" />，对于这样的题目，题目上一般会有说明具体的趋近方向，例如<img src="https://latex.codecogs.com/gif.latex?\mathop&space;{\lim&space;}\limits_{x&space;\to&space;{0^&space;&plus;&space;}}&space;{1&space;\over&space;x}" title="\mathop {\lim }\limits_{x \to {0^ + }} {1 \over x}" />。对于没有说明并且要求"有极限值则求值，无极限值则说理"的题目一般都可以说明“不存在”。