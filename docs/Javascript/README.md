---
title: theme-reco
date: 2020-05-29
---

This is theme-reco.



---
前言：这是一份林一一同学学习typescript4.0的笔记，希望能对前端er有帮助。
---

# 一.介绍Typescript
## Typescript 是什么？
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ff97bb860d0d43b693342e00188b339f~tplv-k3u1fbpfcp-watermark.image)（ **图片来源网络，侵权删除**）
 ![图灵](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0d9880991fb47039cab41a3f8646a89~tplv-k3u1fbpfcp-watermark.image) 

* Typescript 是 JavaScript 的**超集**，两者是所属关系。
* Typescript 是 JavaScript 的增强，包含 JavaScript 的最新特性，非常适合创建大型项目
* Typescript 是静态语言与动态语言 JavaScript 不同，TS 是和 JS 都是弱类型语言
* Typescript 也是前端的趋势，各大著名的前端框架都使用了 TS 重构，如 Vue, React 等

## 下载安装及使用
* 本地环境需要先下载 node vscode，随后打开 vscode 终端，使用 `npm install -g typescript` 即可
* `tsc -v `查看版本号，这份教程是最新的 typescript 4.0
* 建议安装 TSlint 插件规范代码
* 编写 TS 文件代码，使用 `tsc xx.ts` 命令运行 ts 文件，运行 ts 文件后会生成相应的 js 文件，这个 js 文件时 tsc 将 xx.ts 代码编译成 xx.js的代码

## 动态语言和静态语言的差别
* 静态语言在编写代码的时候就能发现潜在的错误.  
* 静态语言更容易读懂代码，像上面的data参数静态语言能直接读出里面的属性 x, y，但是动态语言参数 data 显然不能直接读出里面包含什么属性。
``` TS
// TS
function tsFunc (data: {x: number, y: number}) {
    console.log('demo ts')
    return Math.sqrt(data.x ** 2 + data.y ** 2)
}

// tsFunc()  // 没有传入参数，这里的代码 vscode 会提示错误,这就是静态语言在编写代码的时候就可以知道有错误。
tsFunc({x: 3, y: 4})  //需要将参数代码一起写入。

// 再比如传入参数的个数，ts 能直接检测，但是生成的 js 文件不能检测
function get(param) {
    return param
}

get('hello')

get('hello', 1)	// 应有 1 个参数，但获得 2 个
```
* 编写代码时静态语言能识别到可能使用到的属性等,但动态语言不一定能提示的正确。
``` js
// 静态类型和动态类型的差别，静态类型在编写代码时就可以发现错误像C++,Java等，动态类型的语言则需要代码运行时才可以知道错误，像JavaScript，python。
// js-code

function jsFunc (data) {
    return Math.sqrt(x ** 2 + y ** 2)
}

jsFunc()  // 没有传入参数，但这里的代码 vscode不会提示错误，但实际运行会发生报错。
```

# 二. 静态类型
## 静态类型
__就像前面看到的那样静态类型可以是基础类型 number string null undefined symbol boolean void enum 还可以是对象类型 Object，Array, class, function，还可以是自定义类型 interface 或任何类型 any 等详情 [typescript官网](https://www.typescriptlang.org/)__

* 定义为相应类型后可以直接使用对应类型的方法或属性如 number,vscode 直接提示
![类型属性提示](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5bbd5f71b11947e9bfe33a7f273ae9cb~tplv-k3u1fbpfcp-watermark.image)

. **基础类型 number string null undefined symbol boolean any void never。。。**
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
* **null 类型** 。null 类型不可以赋值给 undefined 类型和 联合类型（后面介绍）
``` TS
let n: null = null
```
* **undefined 类型**
``` TS
let u: undefined = undefined
```
 **undefined 类型**。可以作用到可选类型，因为可选的类型默认会有一个undefined 类型
``` TS
interface E {
    b: number
    c?: number
}

let e: E = {b: 12, c: 12}

e = {b: 23, c: undefined}
```
 * **any 类型**。已经定义变量的类型不能再修改，否则报错。注意 any 类型，any 类型定义后可以修改为其他的类型
``` TS
// any 类型可以修改成其他任何类型，TS 不对 any 类型作类型检测
let not: any
not = 2
not = '2'
not = true

// 处理不确定的数组类型 any 比较合适。
let listArr: any[] = ['1', 2, true]
```
* **void 类型** 和 any 类型相反，表示没有任何类型，通常作用在函数中代表没有返回值，虽然也可以作为其他变量的类型，但只能赋值成  undefined。换一个方向想函数总是有返回值的，如果不是一个确定的值那么就是 undefined 值，所以 void 其实是属于 undefined 的，所以一个变量类型是 void 时，值只能 undefined 值。但是 不能将类型“void”分配给类型“undefined”详情看例子
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
* **function 函数类型**, 下面的函数类型要求返回值是 number 数字类型，写成其他类型如 string 会报错。
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
* 在 typescript 里面 name 是一个预留关键字，不能直接当变量来用

# 三.类型注解和类型推断

## type annotation 类型注解。
* 直接声明的类型，告诉TS变量是什么类型。比如这里的 count 是 number 类型
```
// type annotation 类型注解。
let count: number
count = 23
```
## type inference 类型推断。
* 没有直接声明类型，TS 会尝试去分析变量类型，如这里的 countB，推断是 number 类型。（此处加图说明）
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3e30052cc42b4a8dabf7848a9ed2c583~tplv-k3u1fbpfcp-watermark.image)
``` TS
let countB = 23
```
* 但是声明的变量没有直接在一行赋值 TS 将默认变量为 any 类型，如这里的变量 countC，鼠标箭头移动到 countC 上方就可以看到类型。正确写法是加上类型注解。
``` TS
let countC	// any 类型
countC = 233
```

__TS 并不能所有的类型都能推断出来，那么什么时候使用类型注解呢？具体情况需要具体分析__
* 一般简单的变量声明可以不写类型注解。如这里的 num1 num2 sum。TS 能直接判断。
* 一般函数的参数需要类型注解，返回值可以不用写类型注解，TS 能自动判断
* 已经有未确定的 any 类型，需要加类型注解，如 total 显示为 any,原因是类型 a b 不确定。
``` TS
let num1 = 1
let num2 = 2
let sum = num1 + num2	// TS 推断出 sum 是 number 类型

let obj = {
    name: 'LinYY',
    age: 18
}

// obj.name = 23 // TS 推断出来的类型 同样不能再修改

// 需要类型注解
function getSum(a, b) {
    return a + b
}

const total = getSum(2, 3)
```

# 四.TS 函数
## TS 定义函数的方法和 JS 基本一样，不同的是 TS 可以要求有无返回值。
* TS 返回值的类型可以是 number string 等类型 也可以是 void 类型即没有返回值，也可以是联合类型。
``` TS
// 要求返回值是 number 数字类型，下面两种写法等价。
const fooFunc = (a: number, b: number): number => {
    return a + b
}

//: (a: number, b: number) => number' 这里的具体意义是函数参数 a, b 类型是 number 型，返回值是 number 型，后面的 = 是跟函数的具体实现
const foo1: (a: number, b: number) => number = (a, b) => {
    return a + b
}

// 返回值是 void 空类型
function sum2(a: number, b: number): void {
    console.log(a + b)
}

// 联合类型
function sum2(a: number, b: string): number | string {
    return a || b
}
```
## TS 函数的类型解构正确用法
* 加入类型注解能避免意外的bug，具体看实例
``` TS
// 避免意外的 bug，当传入的 person 中没有 name 属性时下面的代码会报错，TS 能规避这个问题给出报错提示
const getNameA = (person: {}) => {
    console.log(person.name)  // ==> undefined
}

const getName1 = (person: { name: string }) => {
    console.log(person.name)
}
```
* 解构一个函数的参数是 对象 的方式是在后面跟着一个对象类型注解，像函数 add
* 一般函数的参数需要类型注解，返回值可以不用写类型注解，TS 能自动判断
``` TS
// 不加入对象类型的注解{a: number, b: number}，返回值则不能保证是预期的类型.
function add({ a, b }: { a: number, b: number }): number {
    const c = a + b
    return c
}
const sum1 = add({ a: 1, b: 2 })

// 参数为对象的正确注解方式
function getNumberA({ a }: { a: number }) {
    return a
}
const totalA = getNumberA({ a: 1 })

// 如这里不能保证放回值是number类型，因为a, b类型为any类型。
function add2({ a, b }): number {
    const c = a + b
    return c
}
```

## TS 中的 this，TS 是 JS 的超集，this 的指向法则都一样
* 理解 **this 指向** 对我们使用 JS TS 特别重要，记住最关键的一点：**this 永远指向最后调用它的那个对象**
* 解决 es5 的 this 使用的坑可以使用 **箭头函数**，**箭头函数在创建时就保存了最近上下文的 this 的值**。
__this 指向最后调用 this 的对象__

**this 指向 示例一**
```js
let name = 'foo'
let f = {
    name: "Lin",
    a: function () {
        console.log(this.name) // ==> Lin
    }
}

f.a() // f.a() == window.f.a()  
// 为什么是 Lin？因为 对象 f 调用了函数 a()，再调用了 this。上面 window 调用了 f 对象，但是 f 才是最后调用 this 的对象
```
**再看示例二**
``` js
var age = 18

function foo() {
    let age = 20
    console.log(this.age) // ==>18
}

foo() // == window.foo()
//为什么是18，不是20呢？上面 foo() 函数是 window 对象调用了，所以 this 指向 window，那么 使用的 age 也就是window下的 age

```
**再看示例三**
``` js
let name = 'LinYY'
let a = {
    name: 'lin',
    c: function () {
        return function () {
            console.log(this.name)
        }
    }
}
let b = a.c()
b()     // window.b()
// 为什么这里 打印的是 LinYY 呢？和示例二类似，b() 最后是被 window 对象调用了，所以还是 “this 指向最后调用 this 的对象”
```
![this打印结果](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2378b46859548419b209af4c328ad02~tplv-k3u1fbpfcp-watermark.image)

**箭头函数解决 this指向**
``` js
// 问：如果就是想要使用对象 a 上下文呢？那么就可以使用 箭头函数。保存最近的上下文的this，也就是这里的对象 a
let name = 'LinYY'
let a = {
    name: 'lin',
    c: function () {
        return () =>  {
            console.log(this.name)
        }
    }
}
let b = a.c()
b()
```
![箭头函数打印结果](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f02aa80c3b1c4ce9ad58ff9954db206b~tplv-k3u1fbpfcp-watermark.image)

# 五.数组和元组
## 数组的类型注解
* 同变量的类型注解，数组也可以具备多个类型，number，string等。
```  TS
// 单类型注解数组 [ ]
const numberArr: number[] = [1, 2, 3]
const stringArr: string[] = ['1', '2', '3']
const undefinedArr: undefined[] = [undefined]

// 多类型注解数组 [ ]
const arr: (number | string)[] = [1, 2, '2']

// 对象数组
const objectArr: { name: string, age: 18 }[] = [{
    name: 'LinYY',
    age: 18
}]
```
* 对于复杂的对象数组，可以采用类型别名 type alias。
``` TS
// 采用类型别名 type alias
type User = { name: string, age: 18 }

const objectArr1: User[] = [{
    name: 'LinYY',
    age: 18
}]
```
* 传入的数据结构和定义的 type alias 或 class 一致，也是可以的。
``` TS
// 数据结构一致 TS 不会报错
class Teacher {
    name: string = ''
    age: number = 0
}

// 这里是一个 Teacher 类，那么每一个元素都应该是 Teacher 的实例，但是由于下面的对象数据结构和 Teacher类一致，所以 TS 没有报错。
const objectArr2: Teacher[] = [
    new Teacher(),
    {
        name: 'LinYY',
        age: 18
    }]

// 反例：因为 Teacher 类中没有 other 属性，TS 会提示 “other”不在类型“Teacher”中
 const objectArr3: Teacher[] = [
     new Teacher(),
     {
     name: 'LinYY',
     age: 18,
     other: 0
 }]
```
## 元组 tuple 是一种特殊的数组 (TS 新增)
* 简单的说元组是**每个元素都有固定的类型且有限数目**的数组。
* 元组解决了普通数组不能规定每一项元素类型的问题。
* 元组的元素同样有对象的类型操作方法
* 使用场景：读取 excel csv文件，描述一个三维的坐标点等等
* 在 3.1 及之前版本中，超出规定个数的元素称作越界元素，但是只要越界元素的类型是定义的类型中的一种即可。比如我们定义的类型有两种：string 和 number，越界的元素是 string 或 number 类型，属于联合类型，但是在 3.1 之后的版本，去掉了这个越界元素是联合类型的子类型即可的条件，要求元组赋值必须类型和个数都对应。越界元素直接时 undefined 类型

``` TS
// tuple 元组的定义
let arrT: [number, string, number]
arrT = [18, 'LinYY', 3]

// 元素操作方法
arrT[0].toExponential(1)
arrT[1].split('i')
arrT[2] = 4

// 类型不对应就会报错
arrT = [18, 'LinYY', '1']

// 越界元素，直接报错
arrT[3] = '12' // 不能将类型“"12"”分配给类型“undefined”

type tupleArr =  [number, string, number]
const arrTB: tupleArr = [18, 'LinYY', 3]

const attTC: tupleArr[] =[
    [18, 'LinYY', 3],
    [1, 'LinYY', 23],
    [2, 'LinYY', 13]
]

// 普通数组不能约束每一项元素的类型，下面元素的类型就不可以约束
let list: (number | string)[] = ['LinYY', 18] 
let listB: (number | string)[] = [18, 'LinYY']
```
# 六.interface 接口
* 简单点理解 **interface 接口其实是一个类对象，类对象里面有属性或方法，同样通过 '.' 元字符操控属性和方法**，属性和方法又有相应的类型 string，number 等
* 能定义对象类型和函数类型，一般使用在类型中，接口类型一般大写首字母
``` TS
// 一个简单实例示例说明 interface 是一个类对象
interface PersonA {
    firstName: string,
    lastName: string
}

function greeter(person: PersonA) {
    return person.firstName + person.lastName
}

let userA = {
    firstName: 'lin',
    lastName: 'YY'
}

greeter(userA)
```
* 还能定义以后**可能用到的属性，在属性后面加上`'?'`**，类似函数可选参数，如示例
``` TS
// 可能用到的属性，在属性后面加上'?'，
interface Person {
    name: string,
    age: number,
    age1?: number,   // age1 是接口可能用到的属性。
    readonly ID: number
}

const person: Person = {
    name: 'LinYY',
    age: 18,
    // age1: 0,
    ID: 101
}
```
* **只读属性** 能对属性定义进行**只读操作 readonly**，在对应属性面前加上 readonly 就能限定只读操作。只读属性被初始化后的值不能在被修改。
``` TS
// 只读操作 readonly 不传入 age1 也可以通过校验
const getName = (person: Person) => {	// Person 是上面的 interface 接口
    console.log(person.age)
    // console.log(person.age1)  ==> 0
    console.log(person.ID)
    // person.ID = 200     // 报错 ID只能读取，不能修改==> error TS2540: Cannot assign to 'ID' because it is a read-only property
}

getName(person)
```
* **interface 中还能定义方法，跟着的类型表示返回值类型。**
``` TS
// interface 中定义方法
interface Search{
    (a: number, b: number): boolean
}

let search: Search
search = function(a: number, b: number): boolean {
    return a >= b
}
search(2, 3)

// 或
interface Action {
    name: string,
    age: number,
    say(): string
}

const applySay = (action: Action) => {
    console.log(action.say())
}

const action = {
    name: 'LinYY',
    age: 18,
    say() {
        return 'hello TS'
    }
}

applySay(action)

// 下面定义了一个 say 类型的接口 接受一个 string 的参数，返回 string 类型的字符串
interface Say {
    (word: string): string
}

const foo: Say = (word: string) => {
    return word
}

foo('hello TS')   //  ==> 'hello TS'
```
* 也可以被类 class 通过 implement 使用，实现（implements）是面向对象中的一个重要概念，简单点理解就是实现接口 interface 中属性和方法，详情参考[官网 implements](https://www.typescriptlang.org/docs/handbook/interfaces.html)
``` TS
// implements 和 extend 不同 extend 是继承父类，implement 是继承接口 interface 而且可以使用多个接口，用逗号隔开。
// class A extends B implements C,D,E

interface Person {
    name: string,
    age: number,
    age1?: number,   // age1 是接口可能用到的属性。
    readonly ID: number
}

class test implements Person {
    name = 'LinYY'
    age = 18
    ID = 301
}
```
* interface 还可以被其他接口继承 extends
``` TS
// 被其他接口继承 extends
interface Music {
    click: boolean
}

interface Sentence {
    color: string
}

interface Classic extends Music, Sentence {
    time: number
}

let classic = {} as Classic
classic.click = false
classic.color = 'white'
classic.time = 220

// 或
interface PersonB {
    name: string,
    age: number,
    age1?: number,   // age1 是接口可能用到的属性。
    readonly ID: number
}

interface Teach extends PersonB {
    action(): string
}

const teach: Teach = {
    name: 'LinYY',
    age: 28,
    ID: 501,
    action() {
        return '222'
    }
}
```
* interface 可以继承类吗？可以！
``` TS
// interface 继承 class 示例
class Animal {
     fly: any
}

interface Dog extends Animal {
    run(): void
}
```
## 注意点
* interface 接口中不强制规定后来加上的属性，只要传入参数满足 interface 接口已有的属性，也能通过 如示例二，age，sex 属性不在接口 Person 中也能通过校验
``` TS
// 示例二
function printName(obj: { name: string }) {
    console.log(obj.name)
}

let myObj = { name: 'LinYY', age: 18 }
printName(myObj)

// 或
const getAge = (person1: Person) => {
    console.log(person1.age)
}

const per = {
    name: 'LinYY',
    age: 18,
    ID: 201,
    sex: 'male'     // 不在 Person 接口内，也可以通过校验
}
getAge(per)
```
* 但是以字面量形式传入不在接口中的属性，TS 会强校验导致报错。
* interface 实际上在编译成 JS 后并没有相应的代码，其实 interface 就是 TS 来约束代码代码规范的。
``` TS
// 以字面量的形式传入，TS 会强校验导致校验不通过。
 getAge({
     name: 'LinYY',
     age: 18,
     ID: 201,
     sex: 'male'     // ==>  'sex' does not exist in type 'Person'
 })
```
### 怎么有效解决以后开发的过程中可能会加入的属性呢？
* 可以直接在 interface 接口中加入以后可能会用到的属性如，string 类型 [propName: string]: any，如示例三
``` TS
// 示例三 [propName: string]: any
interface User {
    name: string,
    age: number,
    [propName: string]: any // 后期可能用到的 string 类型的属性
}

const getSex = (user: User) => {
    console.log(user.age)
}

const user = {
    name: 'LinYY',
    age: 18,
    ID: 201,
    sex: 'male'     // 不在 User 接口内，但也能通过
}

getSex(user)

// 以字面量的形式传入也可以。
getSex({
    name: 'LinYY',
    age: 18,
    ID: 201,
    sex: 'male'
})
```
# 七.class 类

## TS 中类的继承和定义和 JS 基本一致
* 同样也能重写父类的属性
* 子类中有构造器 就必须要调用 super()。
``` TS
// TS 中类的定义
class PersonA {
    name: string
    constructor(msg) {
        this.name = msg
    }
    getName() {
        return this.name
    }
}

const personA = new PersonA('LinYY')
console.log(personA.getName())   // ==> LinYY

// TS 类的继承
class Student extends Person {
    say() {
        return this.name
    }
    getName() {
        return 'LinYY'  // 重写父类 getName方法
    }
}
const student = new Student()
console.log(student.say())   // ==> LinYY
```

## TS 类中的访问类型，构造器和 JS 也基本一致
.访问类型 private，public，protected
* 当类的属性不写访问类型时，默认是public。public在类的内外都可以访问。
* private，protected都只能在类内使用，另外protected可以在继承的子类中使用。
**. constructor 构造器，在类实例初始化时执行**。
* TS 中运用 constructor 示例如下。
* 子类继承父类，子类中使用 constructor，就需要调用 super()函数。

``` TS
// constructor 示例
class PersonB {
    public name: string
    constructor( name: string) {
        this.name = name
    }
}

// 简化写法，推荐。
// class PersonB {
//     constructor(public name: string) {
//     }
// }

const personB = new PersonB('LinYY')

class TeacherA extends PersonB {
    constructor(public age: number ) {
        super('LinYY')  // 初始化父类的 name
    }
}

const teacher = new TeacherA(18)
```
* **class 的基本概念和用法可以访问 阮老师的 [ES6入门教程](https://es6.ruanyifeng.com/##docs/class)**
* **TS 静态属性 static 和 JS 一样。在类的内外都是通过类名来直接访问，且不能被继承，在静态方法中使用另一个静态方法可以直接调用 this。非静态方法不行****
``` TS
// static 
class GetAge {
    static  age = 18
    static printAge() {
        console.log(GetAge.age)
    }
    static setAge(msg: number) {
        this.age = msg
        this.printAge()
    }
}
```
* **和 interface 一样 class 也可以当作接口使用**
``` TS
// 将 class 当作接口使用
class A {
    x: number
    y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}

interface B extends A {
    z: number
}

let printA: A = {x: 2, y: 3}

```

## TS 类中的静态属性，取值函数（getter）和存值函数（setter），对某个属性设置存值函数和取值函数，拦截该属性的存取行为。
.**Getter 的使用**
* 定义 get 的属性表面上是一个函数，在调用时不需要加上 '()'，这是 get 的写法。
* 访问类中的私有属性可以通过 get 属性，写入一个‘方法’返回私有属性

.**Setter 的使用**
* 设置私有属性可以通过 set 属性，同样也是写入一个‘方法’，简单的说也就是赋值
``` TS
class Person {
    constructor(private _name: string){}    // 私有属性一般加下划线 '_'
    get name() {
        return this._name
    }
    set name(rename: string) {
        this._name = rename
    }
}

// get
const person = new Person('LinYY')
console.log(person.name)    // ==> LinYY 调用 get 下面的 name 属性

// set
person.name = 'LinYYB'  // 调用 set 下面的 name 属性同时赋值
console.log(person.name)    // ==> LinYYB
```

__修饰器 readonly 也可以设置类的只读属性__
``` TS
/ 装饰器`readonly`用来装饰“类”的`name`属性。
class PersonB {
    readonly name: string
    constructor(private _name: string){
        this.name = _name
    }    // 私有属性一般加下划线 '_'
}
```

## 抽象类 abstract 目的是将有很多共性的方法或属性抽离出来 
* **抽象类一般拿来做公共的类**。
* 抽象类里面可以写入抽象方法，**抽象方法不能具体的实现**，如 `getApiData()`。
* **抽象类只能被继承不能被实例化**。
* **子类继承抽象类后，抽象类的抽象方法必须在子类里面实现**，否则报错。
* 抽象类和 interface 有相似，interface 同样也可以抽离一些公用方法和被继承。
``` TS
import axios from 'axios'

// 抽象类 abstract
abstract class Classic {
    name: string
   async submit() {
        return 'LinYY'
    }
    abstract getApiData()   // 一个抽象方法
}

// const classic = new Classic()   //  error: 无法创建抽象类的实例，只能被继承

class Music extends Classic {
    async getApiData() {
      return await axios.get('api1URL').then( res => {
          console.log(res)
      }).catch( e => {
        console.log(e)
    })
    }
}

class Book extends Classic {
    async getApiData() {
      return await axios.get('api2URL').then( res => {
          console.log(res)
      }).catch( e => {
          console.log(e)
      })
    }
}

class Sentence extends Classic {
   async getApiData() {
      return await axios.get('api3URL').then( res => {
          console.log(res)
      }).catch( e => {
        console.log(e)
    })
    }
}
```

# 八.TS 交叉类型和联合类型和类型保护
## 交叉类型
* 交叉类型通过`'&'` 将两个或多个类型合并到一起
* **交叉类型可以获取合并类型的所有属性**
``` TS
// 交叉类型
interface Colors {
    red: string
}

interface Rectangle {
    height: number
    width: number
    area: () => number
}

// param 参数可以访问类型 Colors 和 Rectangle 所有属性
function getArea(param: Colors & Rectangle) {
    param.height = 2
    param.width = 3
    param.red = 'red'
    param.area = (): number => {
        return param.height * param.width
    }
}
```
## 联合类型
* 通过 `'|'` 运算符将两个类型组合在一起
* **联合类型可以直接提示出共有属性，但不能提示出私有属性**
``` TS
//  联合类型
let bar: string | number = 12
bar = '12'


interface Bird {
    fly: Boolean;
    sing: () => {}
}

interface Dog {
    fly: Boolean;
    dark: () => {}
}

// animal 参数可以是 Bird 或 Dog，语法提示可以直接提示出共有属性 fly，但是不能直接提示出 sing 和 dark。
function trainAnimal(animal: Bird | Dog) {
    animal.fly
    // animal.dark() 这里直接报错，因为不能确保 animal 包含 dark 方法。
}
```
## 类型保护
* 类型断言：让编辑器采用开发者的类型声明
* **类型断言，通过 `as`，告诉 TS 当前的类型**
``` TS
/类型保护——类型断言 as
function trainAnimal1(animal: Bird | Dog) {
    if (animal.fly) {
        (animal as Bird).sing() //直接告诉 TS 这里 animal 是 Bird 类型
        // 或下面的一种写法
        // (<Bird>animal).sing()
    } else {
        (animal as Dog).dark()
    }
}
```
* **通过 ` in ` 判断含有的私有属性**
``` TS
// in 判断
function trainAnimal2(animal: Bird | Dog) {
    if ("sing" in animal) {   // 判断 animal中是否含有私有属性 sing
        animal.sing()
    } else {
        animal.dark()
    }
}
```
* **typeof，instanceof 类型于上面两种都可以作类型保护**
``` TS
// typeof 类型保护
function trainAnimal3(paramA: number | string, paramB: number | String) {
    if (typeof paramA === "string" && typeof paramB === "string") {
        return paramA + paramB
    }
    return
}
```
* **null 的类型保护 可以通过 `'!'` 操作符**
``` TS
// null 类型保护
function fn(params: string | null) {
    // params.length   // 对象可能为 "null"
    return params!.length   // 将参数的可能类型 null 类型排除
}

fn('12121')
fn(null)
```
# Enum 枚举类型
* 概念：**枚举是什么？** 枚举是一种数据类型，是对 JavaScript 类型的补充，**其实也是一个对象**
* 用途：一般是对相似的类型赋予一个友好的名字，如颜色有很多种通称为 Color 等
* 使用：同样类似于 interface 接口，**enum 也是通过元字符 '.' 操控属性**
* **每一个枚举类型都有一个下标，默认从 0 开始**，下标值可以用等号赋值修改
* 从哪里改变枚举下标值，则按那里开始下标加一，如 ONLINE = 3，则OTHERS将会打印出4，OFFLINE 不变还是0
* 引用 enum 的下标，同样也可以打印出下标对应的值。
``` TS
// 枚举是一种数据类型
enum Color {
    Red,
    Blue,
    Black
}


let color: Color
// 类型也只能是枚举 Color 类型
color = Color.Red
color = Color.Blue
console.log('color', color) // ==> 打印出下标 1

// 枚举一般首字母大写
enum Status  {
    // OFFLINE = 1,
    OFFLINE,
    ONLINE,
    OTHERS
}

// 对比常用的 JS 代码
// const Status = {
//     OFFLINE : 0,
//     ONLINE: 1,
//     OTHERS: 2
// }

function getStatus(status: Number) {
    if(status === Status.ONLINE) {
        return 'online'
    }else if (status === Status.OFFLINE) {
        return 'offline'
    }else if(status === Status.OTHERS) {
        return 'others'
    }
    return 'error'
}

const result = getStatus(Status.OFFLINE)
console.log(result)

// 下面代码直接打印出 enum 的下标值
console.log(Status.OFFLINE)
console.log(Status.ONLINE)
console.log(Status.OTHERS)

// 打印下标对应的属性
console.log(Status[0])
console.log(Status[1])
console.log(Status[2])
```
### 原理：为什么枚举可以通过下标的方式索引 key 和 反索引 value呢？
* 通过 tsc 编译后的 js 文件可以看到 enum 其实一个对象，如 **Color[Color["Red"] = 0] = "Red"** ; 通过 "Red"可以查看下标 0，通过下标 0 也可以查看 "Red"
``` js
// 经过 tsc 编译后的 js 文件
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Black"] = 2] = "Black";
})(Color || (Color = {}));
```

# 九.TS 泛型
#### 泛型概念：泛指的类型不具体针对某一特定的类型。
* 使用` '<类型>' `表示泛型，类型可以是任意变量
``` TS
//泛型简单示例
function foo<T>(a, b, c) {
    return a || b || c
}

// 或
function foo<U>(a, b, c) {
    return a || b || c
}

function id<T>(a: T, b: T, c: T): T {
    return a || b || c
}

// 不针对某一特定类型，可以是 number，string，Boolean，interface等类型，且使用的类型必须一致。
interface Type {
    a: number
    b: number
    c: number
}
let t: Type = {a: 2, b: 3, c: 4}

id(1,2,3)
id('1', '2', '3')
id(false, true, false)
id(t.a, t.b, t.c)

// 接口泛型 推荐写法，直接使用泛型参数 T 代表指定类型
interface Uni<T> {
    a: T
    b: T
    c: T
}
let uni: Uni<number> = {a: 2, b:3, c:4}
id(uni.a, uni.b, uni.c)
```
## 函数泛型 Generics，泛指的类型和普通类型用法基本一致
* TS 的泛型是 TS 比较高级的用法，关于更多的 TS 泛型可以参考这篇 [你不知道的 TypeScript 泛型](https://segmentfault.com/a/1190000022993503)
* 泛型起到的作用有点类似待指的中间类型，具体看例子
``` TS
function add(a: number | string, b: number | string) {
    return `${a}${b}`
}

// 如果要求输入的参数 a, b只能是同一个类型的参数该怎么实现？下面几种写法都不能实现
add(1, 2)
add('1', 1)
add(1, '1')

// 下面引用函数泛型实现，<T> 就是函数 add 要泛指的类型，后面的参数 a，b都要是这个类型。
function add<T>(a: T, b: T){
    return `${a}${b}`
}


//让输入的类型是 number 或 string，即<T>代表类型 Number或String
add<number>(1, 1)
add<string>('1', '2')


add<number>(1, '1') //提示报错 "1"的类型不是 number 型
add<string>('1', 2)  //提示报错 2 的类型不是 string 型
```
* **泛型同样可以继承 interface。**
``` TS
// 泛型同样可以继承 interface。
interface LengthPro {
    age: number | null
    moreAge: number
}

function arg<T extends LengthPro>(params: T) {
    return params.age || params.moreAge
}

arg({age: 18, moreAge: 20})
arg({age: null, moreAge: 20})
```
* **还可以对函数泛型进行约束**
``` TS
//将函数的泛型指定为 ABC，参数的泛型是数组类型ABC，返回值也是数组类型ABC。
function func<ABC>(a:ABC[]): ABC[]{
    return a
}

// 或
 function func1<ABC>(a:Array<ABC>): Array<ABC> {
     return a
 }
func<number>([123])

// 错误的输入
func<number>(123)  // 类型“123”的参数不能赋给类型“Number[]”的参数
```
* **泛型中可以写入多个泛型，对函数的参数有不同的类型约束**
``` TS
// 多泛型约束
function moreT<T, Y>(a:T, b: Y) {
    return `${a}${b}`
}

moreT<number, string>(1, '2')

// K extends keyof T，让泛型 K 继承 T 的 keyof 的属性
function getObjVal<T, K extends keyof T>(obj:T, key: K) {
    return obj[key]
}

let o = {a: 1, b: 3, c: 4}

getObjVal(o, 'a')
getObjVal(o, 'd')   // 'd' 不是 对象 o 下面的 keyof 属性。
```
## 类的泛型

``` TS
// 类泛型的普通写法
class GenericType<T> {
    numberVal: T
    constructor(numberVal: T) {
        this.numberVal = numberVal;
      } 
    add(x: T, y: T) {
    }
}

let numberType = new GenericType<number>(2)
numberType.numberVal = 1
numberType.add(2, 8)

let stringType = new GenericType<string>('a')
stringType.numberVal = 'b'
stringType.add('a', 'b')

// 或
class GetItem<T>{
    constructor(private data: T[]) { }
    getName(index: number) {
        return this.data[index]
    }
}

const getItem = new GetItem(['LinYY'])
const res = getItem.getName(0)
console.log(res)
```
* **泛型可以被继承，继承后必须全部含有继承对象的所有属性**
``` TS
// 继承示例 extends
interface personA {
    name: string,
    age: number
}

class GetItemSecond<T extends personA>{
    constructor(private data: T[]) { }
    getName(index: number) {
        return this.data[index].name
    }
}

const getItemSecond = new GetItemSecond([
    {
        name: 'LinYY',
        age: 18            // 这里不传入 age 时会飘红，必须传入所有属性
    }
])
const res1 = getItem.getName(0)
console.log(res1)
```
* **也可以约束泛型的类型范围，number 或 string**
``` TS
// 约束泛型的范围
function getData<T extends number | string>(param: T) {
    return param
}

getData(1)
getData('1')
```
* **多泛型的约束用逗号分隔，泛型之间也通过继承 extends 来相互约束**
``` TS
// 多泛型约束
function moreT<T, Y>(a:T, b: Y) {
    return `${a}${b}`
}

moreT<number, string>(1, '2')

// K extends keyof T，让泛型 K 继承 T 的 keyof 的属性
function getObjVal<T, K extends keyof T>(obj:T, key: K) {
    return obj[key]
}

let o = {a: 1, b: 3, c: 4}

getObjVal(o, 'a')
getObjVal(o, 'd')   // 'd' 不是 对象 o 下面的 keyof 属性。
```
**上面泛型的使用规则不局限在类或函数内**
# 十.TS 配置项
[tsconfig.json文件文档](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
## tsconfig.json是 TS 编译成 JS 代码的辅助文件
* 调用 tsconfig.json 文件直接使用 tsc 命令即可，需要注意的是这样会编译所有 ts 文件
* `"compilerOptions"`是各编译的选项，可以添加额外的配置项比如 "include"指定要编译的 TS 文件, "exclude"指定不要编译的 TS 文件，示例` "include": ["/demo.ts"]`。

### 常用的 compilerOptions 编译配置项
* `"removeComments": true，`编译过程中自动去掉注释
* `"noImplicitAny": true，`要求编译的 TS 代码不能带有未指定的类型，即便是any 也需要显示的写明
* `"strictNullChecks": true, ` 强制进行 null 校验。
* `"rootDir" 和 "outDir", `rootDir 是指定要  build 打包的文件，而 outDir 是 build 后的生成文件，两者后面都是跟指定的目录文件。
* `"allowJs": true，`是将 js 文件也编译一遍，编译成 es5 的文件
* `"checkJs": true，`能直接像 TS 一样检测 JS 的语法错误，不需要在运行后才提示有错
* `"noUnusedLocals",` "noUnusedParameters"用来检测定义了却没有被使用的变量或函数参数。
