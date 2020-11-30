# 数列的极限

## 计算根号2的值

<center>1.4 → 1.414 →1.4141 → … →<img src="https://latex.codecogs.com/svg.latex?\sqrt&space;{\rm{2}}" title="\sqrt {\rm{2}}" /></center>

&emsp;&emsp;可以发现，随着小数位数越来越多，我们得到的值也更加接近于<img src="https://latex.codecogs.com/svg.latex?\sqrt&space;{\rm{2}}" title="\sqrt {\rm{2}}" />的实际值。故我们可以写作

<center><img src="https://latex.codecogs.com/svg.latex?\mathop&space;{\lim&space;}\limits_{n&space;\to&space;\infty&space;}&space;{a_n}&space;=&space;A" title="\mathop {\lim }\limits_{n \to \infty } {a_n} = A" /></center>



## 定义

&emsp;&emsp;设<img src="https://latex.codecogs.com/svg.latex?\left\{&space;{{x_n}}&space;\right\}" title="\left\{ {{x_n}} \right\}" />为一数列，如果存在常数a，对于任意给定的正数<img src="https://latex.codecogs.com/svg.latex?\varepsilon" title="\varepsilon" />，总存在正整数N，使得当n&gt;N时，不等式![](https://latex.codecogs.com/svg.latex?%5Cleft%7C%20%7B%7Bx_n%7D%20-%20a%7D%20%5Cright%7C%20%3C%20%5Cvarepsilon)都成立，那么就称常数a是数列<img src="https://latex.codecogs.com/svg.latex?\left\{&space;{{x_n}}&space;\right\}" title="\left\{ {{x_n}} \right\}" />的**极限**，或者称数列<img src="https://latex.codecogs.com/svg.latex?\left\{&space;{{x_n}}&space;\right\}" title="\left\{ {{x_n}} \right\}" />**收敛于**a，记为<img src="https://latex.codecogs.com/svg.latex?\mathop&space;{\lim&space;}\limits_{n&space;\to&space;\infty&space;}&space;{x_n}&space;=&space;a" title="\mathop {\lim }\limits_{n \to \infty } {x_n} = a" />或者<img src="https://latex.codecogs.com/svg.latex?{x_n}&space;\to&space;a{\rm{,}}(n&space;\to&space;\infty&space;)" title="{x_n} \to a{\rm{,}}(n \to \infty )" />。

&emsp;&emsp;如果不存在这样的常数a，数列<img src="https://latex.codecogs.com/svg.latex?\left\{&space;{{x_n}}&space;\right\}" title="\left\{ {{x_n}} \right\}" />不存在极限，那马就说数列<img src="https://latex.codecogs.com/svg.latex?\left\{&space;{{x_n}}&space;\right\}" title="\left\{ {{x_n}} \right\}" />是**发散**的，习惯上也说<img src="https://latex.codecogs.com/svg.latex?\mathop&space;{\lim&space;}\limits_{n&space;\to&space;\infty&space;}&space;{x_n}" title="\mathop {\lim }\limits_{n \to \infty } {x_n}" />不存在。



## 定理1 (极限的唯一性)

如果数列<img src="https://latex.codecogs.com/svg.latex?\left\{&space;{{x_n}}&space;\right\}" title="\left\{ {{x_n}} \right\}" />收敛，那么它的极限唯一。



## 定理2 (收敛数列的有界性)

如果数列<img src="https://latex.codecogs.com/svg.latex?\left\{&space;{{x_n}}&space;\right\}" title="\left\{ {{x_n}} \right\}" />收敛，那么数列<img src="https://latex.codecogs.com/svg.latex?\left\{&space;{{x_n}}&space;\right\}" title="\left\{ {{x_n}} \right\}" />一定有界。



## 定理3 (收敛数列的保号性)

如果<img src="https://latex.codecogs.com/svg.latex?\mathop&space;{\lim&space;}\limits_{n&space;\to&space;\infty&space;}&space;{x_n}&space;=&space;a" title="\mathop {\lim }\limits_{n \to \infty } {x_n} = a" />，且a&gt;0（或者a&lt;0），那么存在正整数N，当n&gt;N时，都有<img src="https://latex.codecogs.com/svg.latex?{x_n}&space;>&space;0" title="{x_n} > 0" />（或者![](https://latex.codecogs.com/svg.latex?%7Bx_n%7D%20%3C%200)）。



## 定理4 (收敛数列与其子数列之间的关系)