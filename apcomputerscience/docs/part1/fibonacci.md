# 斐波那契数列

&emsp;&emsp;斐波那契数列（Fibonacci sequence），又称黄金分割数列、因数学家莱昂纳多·斐波那契（Leonardoda Fibonacci）以兔子繁殖为例子而引入，故又称为“兔子数列”，指的是这样一个数列：0、1、1、2、3、5、8、13、21、34、……在数学上，斐波那契数列以如下被以递推的方法定义：F(0)=0，F(1)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 2，n ∈ N*）

&emsp;&emsp;斐波那契数列又因数学家莱昂纳多·斐波那契以兔子繁殖为例子而引入，故又称为“兔子数列”。一般而言，兔子在出生两个月后，就有繁殖能力，一对兔子每个月能生出一对小兔子来。如果所有兔子都不死，那么一年以后可以繁殖多少对兔子？

```java
public class rabbit {
    public static void main(String args[]) {
        double r_1 = 1D;
        double r_2 = 1D;
        double g_1 = 0D;
        double g_2 = 0D;
        double R = 0D;
        System.out.println("第1个月：" + r_1 * 2);
        System.out.println("第2个月：" + r_2 * 2);
        int M = 1000;
        for (int i = 3; i <= M; i++) {
            R = r_2;
            r_2 = r_1 + r_2;
            r_1 = R;
            System.out.println("第" + i + "个月：" + 2 * R);
        }
    }
}
```

&emsp;&emsp;输出结果如下：

```
第1个月：2.0
第2个月：2.0
第3个月：2.0
第4个月：4.0
第5个月：6.0
第6个月：10.0
第7个月：16.0
第8个月：26.0
第9个月：42.0
第10个月：68.0
第11个月：110.0
第12个月：178.0
......
第994个月：2.994137645620039E207
第995个月：4.844616477608811E207
第996个月：7.83875412322885E207
第997个月：1.268337060083766E208
第998个月：2.052212472406651E208
第999个月：3.320549532490417E208
第1000个月：5.372762004897068E208
```

