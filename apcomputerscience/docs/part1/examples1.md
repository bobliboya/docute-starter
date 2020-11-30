# 实例1

## Hello World!

```java
public class hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```



## 三位数确定各位数字

&emsp;&emsp;要求：随机生成800以内的正整数，判断各位上的数字。

```java
public class Main {
    public static void main(String[] args) {
        int a=(int)(Math.random()*800);
        int b=a/100;
        int c=a/10%10;
        int d=a%10;
        System.out.println("所取随机数="+a);
        System.out.println("它的百位数字="+b);
        System.out.println("它的十位数字="+c);
        System.out.println("它的个位数字="+d);
    }
}
```



## 整数并判断奇偶性

&emsp;&emsp;要求：随机生成50~200以内的整数，判断奇偶性，奇数则计算算术平方根，偶数则除以2。

```java
public class hello {
    public static void main(String[] args) {
        int x = (int) (50 + (Math.random() * 150));
        System.out.println("随机数字是：" + x);

        if ((x % 2) == 1) {
            System.out.println("奇数，算术平方根是：" + Math.sqrt(x));
        } else {
            System.out.println("偶数，除以2是" + (x / 2));
        }
    }
}

```