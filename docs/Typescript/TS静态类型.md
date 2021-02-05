---
title: TS 静态类型
date: 2021-02-04
categories:
 - Typescript
tags:
 - TS 类型
sidebar: 'auto'
---

# 二. 静态类型
## 静态类型
__就像前面看到的那样静态类型可以是基础类型 number string null undefined symbol boolean void enum 还可以是对象类型 Object，Array, class, function，还可以是自定义类型 interface 或任何类型 any 等详情 [typescript官网](https://www.typescriptlang.org/)__

* 定义为相应类型后可以直接使用对应类型的方法或属性如 number,vscode 直接提示
![类型属性提示](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5bbd5f71b11947e9bfe33a7f273ae9cb~tplv-k3u1fbpfcp-watermark.image)

### **基础类型**
number, string, null, undefined, symbol, boolean, any, void, never

 * **number 类型**
``` TS
const num: number = 123
```
 * **string 类型**
``` TS
const Name: string = 'LinYY'
```
* **boolean 类型**
``` TS
const boolean: Boolean = true
```
* **null 类型** 。
::: tip tip
null 类型不可以赋值给 undefined 类型和 联合类型（后面介绍）
:::
``` TS
let n: null = null
```
* **undefined 类型**
``` TS
let u: undefined = undefined
```
::: tip
 **undefined 类型**。可以作用到可选类型，因为可选的类型默认会有一个undefined 类型
:::
``` TS
interface E {
    b: number
    c?: number
}

let e: E = {b: 12, c: 12}

e = {b: 23, c: undefined}
```
 * **any 类型**。已经定义变量的类型不能再修改，否则报错。
::: warning
注意 any 类型，any 类型定义后可以修改为其他的类型
:::

``` TS
// any 类型可以修改成其他任何类型，TS 不对 any 类型作类型检测
let not: any
not = 2
not = '2'
not = true

// 处理不确定的数组类型 any 比较合适。
let listArr: any[] = ['1', 2, true]
```
* **void 类型** 和 any 类型相反，表示没有任何类型。

::: warning
通常作用在函数中代表没有返回值，虽然也可以作为其他变量的类型，但只能赋值成  undefined。换一个方向想函数总是有返回值的，如果不是一个确定的值那么就是 undefined 值，所以 void 其实是属于 undefined 的，所以一个变量类型是 void 时，值只能 undefined 值。但是 不能将类型“void”分配给类型“undefined”详情看例子
:::
``` TS
// void 空类型，一般用于函数，
function noReturn(): void {
    console.log('no value return')
}

function fn(): void {
    // Error
    return 3;
  }

function fn5(): void {
}
let un: undefined = fn5(); // Error 不能将类型“void”分配给类型“undefined”

let voidValue: void = undefined
let voidValue2: void = null   // 不能将类型“null”分配给类型“void”

```
* **never 一个特殊类型**。简单的说如果函数是一个永远不会执行完的函数，返回值就是 never 类型，像函数 errorFunc，abs。
``` TS
// never 类型，不会执行结束的函数类型
function errorFunc(): never {
    throw new Error()
    console.log('never')    // 抛出错误后 这段代码不打印。
}

function abs(): never {
    while (true) {
    }
    console.log('never')    // 上面的代码永远是true 这段代码不打印。
}
```
### **对象类型**
* **对象类型 object type**。object {}，array [], class {}， function
``` TS
let person: {
    name: string,
    age: number
} = {
    name: 'LinYY',
    age: 12
}
```
*  **数组类型 也是对象类型**，下面声明number型数组只能写入数字来初始化，写入字符串将会报错。
``` TS
const list: number[] = [12, 23, 34]

//等同于，下面的数组泛型，泛型是什么之后会讲，先留一个印象。
const listA: Array<number> = [1, 2, 3]

// const listB: number[] = ['12', 23, 34]
```
* **class类 类型**
``` TS
class Person {}
const LinYY: Person  = new Person()
```
* **函数类型 function**, 下面的函数类型要求返回值是 number 数字类型，写成其他类型如 string 会报错。
``` TS
const getNumber: () => number = () => {
    // return 'LinYY'   报错
    return 123
}

// 要求返回值是string 字符类型
const getString: () => string = () => {
    return 'LinYY'
    // return 123
}
```
* **interface 自定义类型**，也就是接口
``` TS
interface Point {
    x: number,
    y: number
}

const point: Point = {
    x: 2,
    y: 4
}
```
* **多类型**。变量的类型可以有多个，比如可以是number或string类型 
``` TS
// 变量的类型可以有多个，比如可以是number或string类型。
let temp: number | string = 23
temp = '23'
```
::: danger
在 typescript 里面 name 是一个预留关键字，不能直接当变量来用
:::