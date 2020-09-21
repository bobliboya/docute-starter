# 映射与函数

## 映射的定义

&emsp;&emsp;X、Y是两个非空集合，若存在法则f，使得X中的每一个元素x通过法则f在Y中有唯一确定的元素y与之对应，那么称f为从X 到Y的**映射**。记作：<img src="https://latex.codecogs.com/gif.latex?f:X&space;\to&space;Y" title="f:X \to Y" />

&emsp;&emsp;其中，y称作元素x(在映射f下) 的**像**，并且记作f(x)，即y=f(x)。

&emsp;&emsp;而元素x 称为元素y ( 在映射f 下）的一个**原像**；集合X 称为映射f 的定义域，记作Dx ；X中所有元素的像所组成的集合称为映射f 的值域，记作Rf或f(x)。

<center><img src="https://latex.codecogs.com/gif.latex?{R_f}&space;=&space;f(X)&space;=&space;\left\{&space;{f(x)|x&space;\in&space;X}&space;\right\}" title="{R_f} = f(X) = \left\{ {f(x)|x \in X} \right\}" /></center>

<Note type="tip">

1. 构成映射的三要素：

   ​    集合X，即定义域Df=x

   ​    集合Y，即值域的范围：<img src="https://latex.codecogs.com/gif.latex?{R_f}&space;\subset&space;Y" title="{R_f} \subset Y" />

2. 对于每个<img src="https://latex.codecogs.com/gif.latex?x&space;\in&space;X" title="x \in X" />，元素x的像y是唯一的；而对每个<img src="https://latex.codecogs.com/gif.latex?y&space;\in&space;R" title="y \in R" />，元素y的原像不一定是唯一的；映射f的值域<img src="https://latex.codecogs.com/gif.latex?{R_f}" title="{R_f}" />的值域是Y的一个子集，即<img src="https://latex.codecogs.com/gif.latex?{R_f}&space;\subset&space;Y" title="{R_f} \subset Y" />，不一定<img src="https://latex.codecogs.com/gif.latex?{R_f}&space;=&space;Y" title="{R_f} = Y" />。

</Note>



## 函数的概念

<center><img src="https://latex.codecogs.com/gif.latex?y&space;=&space;f(x),x&space;\in&space;R" title="y = f(x),x \in R" /></center>

&emsp;&emsp;x称为自变量，y称为因变量；f是定义法则，f(x)是函数的值。

&emsp;&emsp;函数是从实数集到实数集的映射，所以它的值域范围在**R**内。

&emsp;&emsp;如果两个函数定义域相同，对应法则也相同，那么这两个函数也相同。



### 确定函数的定义域

1. 对于拥有实际背景的函数，根据实际背景中变量的实际意义确定；

&emsp;&emsp;例如自由落体运动：开始下落的时刻t=0，落地的时刻t=T，则下落的高度h与时间t的函数为<img src="https://latex.codecogs.com/gif.latex?h&space;=&space;{1&space;\over&space;2}g{t^2}" title="h = {1 \over 2}g{t^2}" />，其中t的定义域<img src="https://latex.codecogs.com/gif.latex?t&space;\in&space;[0,T]" title="t \in [0,T]" />。



## 函数的特性

### 1. 有界性

### 2. 单调性

&emsp;&emsp;设函数f(x)的定义域为D，区间<img src="https://latex.codecogs.com/gif.latex?I&space;\subset&space;D" title="I \subset D" />，<img src="https://latex.codecogs.com/gif.latex?{x_1},{x_2}&space;\in&space;I" title="{x_1},{x_2} \in D" />，且![](https://latex.codecogs.com/gif.latex?%7Bx_1%7D%20%3C%20%7Bx_2%7D)。若恒有<img src="https://latex.codecogs.com/gif.latex?f({x_1})&space;>&space;f({x_2})" title="f({x_1}) > f({x_2})" />，则可说明函数f(x)在区间I上是**单调增加**的；若恒有<img src="https://latex.codecogs.com/gif.latex?f({x_1})&space;>&space;f({x_2})" title="f({x_1}) > f({x_2})" />，则可说明函数f(x)在区间I上是**单调减少**的。

### 3. 奇偶性

&emsp;&emsp;设函数f(x)的定义域关于原点对称，对于任意的<img src="https://latex.codecogs.com/gif.latex?x&space;\in&space;D" title="x \in D" />，满足<img src="https://latex.codecogs.com/gif.latex?f(- x)&space;=&space;f(&space;&space;x)" title="f( - x) = f(x)" />，则为偶函数；若<img src="https://latex.codecogs.com/gif.latex?f(&space;-&space;x)&space;=&space;-&space;f(x)" title="f( - x) = - f(x)" />，则为奇函数。偶函数的图像关于y轴对称，奇函数的图像关于x轴对称。

### 4. 周期性

&emsp;&emsp;设函数f(x)的定义域为D，如果存在一个正数<img src="https://latex.codecogs.com/gif.latex?l" title="l" />，使得对于任一<img src="https://latex.codecogs.com/gif.latex?x&space;\in&space;D" title="x \in D" />有<img src="https://latex.codecogs.com/gif.latex?(x&space;\pm&space;l)&space;\in&space;D" title="(x \pm l) \in D" />，且

<center><img src="https://latex.codecogs.com/gif.latex?f(x&space;&plus;&space;l)&space;=&space;f(x)" title="f(x + l) = f(x)" /></center>

恒成立，那么称f(x)为周期函数，<img src="https://latex.codecogs.com/gif.latex?l" title="l" />称为f(x)的周期。



## 函数的运算

设函数f(x)，g(x)的定义域依次为<img src="https://latex.codecogs.com/gif.latex?{D_f},{D_g}" title="{D_f},{D_g}" />，<img src="https://latex.codecogs.com/gif.latex?D&space;=&space;{D_f}&space;\cap&space;{D_g}&space;\ne&space;\emptyset" title="D = {D_f} \cap {D_g} \ne \emptyset" />，我们可以定义两个函数的运算：

| 运算                                                         | 性质                                                         |
| :----------------------------------------------------------- | ------------------------------------------------------------ |
| 和/差 <img src="https://latex.codecogs.com/gif.latex?f&space;\pm&space;g" title="f \pm g" /> | <img src="https://latex.codecogs.com/gif.latex?(f&space;\pm&space;g)x&space;=&space;f(x)&space;\pm&space;g(x),x&space;\in&space;D" title="(f \pm g)x = f(x) \pm g(x),x \in D" /> |
| 积 <img src="https://latex.codecogs.com/gif.latex?f&space;\cdot&space;g" title="f \cdot g" /> | <img src="https://latex.codecogs.com/gif.latex?(f&space;\cdot&space;g)x&space;=&space;f(x)&space;\cdot&space;g(x),x&space;\in&space;D" title="(f \cdot g)x = f(x) \cdot g(x),x \in D" /> |
| 商 <img src="https://latex.codecogs.com/gif.latex?{f&space;\over&space;g}" title="{f \over g}" /> | ![](https://latex.codecogs.com/gif.latex?%5Cleft%28%20%7B%7Bf%20%5Cover%20g%7D%7D%20%5Cright%29%28x%29%20%3D%20%7B%7Bf%28x%29%7D%20%5Cover%20%7Bg%28x%29%7D%7D%2Cx%20%5Cin%20D%5Cbackslash%20%5Cleft%5C%7B%20%7Bx%7Cg%28x%29%20%3D%200%2Cx%20%5Cin%20D%7D%20%5Cright%5C%7D) |



## 5种初等函数

- 幂函数：<img src="https://latex.codecogs.com/gif.latex?y&space;=&space;{x^\mu&space;}(\mu&space;\in&space;R)" title="y = {x^\mu }(\mu \in R)" />
- 指数函数：<img src="https://latex.codecogs.com/gif.latex?y&space;=&space;{a^x}(a&space;>&space;0,&space;a&space;\ne&space;1)" title="y = {a^x}(a > 0, a \ne 1)" />
- 对数函数：<img src="https://latex.codecogs.com/gif.latex?y&space;=&space;{\log&space;_a}x" title="y = {\log _a}x" />（<img src="https://latex.codecogs.com/gif.latex?a&space;>&space;0,a&space;\ne&space;1" title="a > 0,a \ne 1" />，当a=e时，记为<img src="https://latex.codecogs.com/gif.latex?y&space;=&space;\ln&space;x" title="y = \ln x" />
- 三角函数：<img src="https://latex.codecogs.com/gif.latex?y&space;=&space;\sin&space;x,y&space;=&space;\cos&space;x,y&space;=&space;\tan&space;x" title="y = \sin x,y = \cos x,y = \tan x" />
- 反三角函数：<img src="https://latex.codecogs.com/gif.latex?y&space;=&space;\arcsin&space;x,y&space;=&space;\arccos&space;x,y&space;=&space;\arctan&space;x" title="y = \arcsin x,y = \arccos x,y = \arctan x" />

