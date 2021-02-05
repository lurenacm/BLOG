---
title: 介绍Typescript
date: 2021-02-04
categories:
 - Typescript
tags:
 - TS 介绍
sidebar: 'auto'
---

::: tip
前言：这是一份林一一同学学习typescript4.0的笔记，希望能对前端er有帮助。
:::

# 一.介绍Typescript
## Typescript 是什么？
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ff97bb860d0d43b693342e00188b339f~tplv-k3u1fbpfcp-watermark.image)（ **图片来源网络，侵权删除**）
 ![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0d9880991fb47039cab41a3f8646a89~tplv-k3u1fbpfcp-watermark.image) 

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