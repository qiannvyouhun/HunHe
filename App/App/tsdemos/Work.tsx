import React, { Component } from 'react'
import { Text, View } from 'react-native'

// 1、属性接口：
interface Course {
    title: string,
    intro: string,
    num?: number,
    [propName: string]: any   //不确定的属性
}

//声明对象：
let hybird: Course = {
    title: 'hybird',
    intro: '混合应用开发',
    name: 100
}

//2、函数接口：
interface MyFunc {
    (params1: string): boolean//返回的是boolean值
}

let fun: MyFunc = function (pa: string) {
    //传入的参数名可以不一样，类型必须一样，返回的是boolean类型
    return true;
}

//声明一个普通的函数：可以指定参数的类型
function fun1(pa1: string, pa2: number): boolean {
    //返回类型是boolean类型
    return true;
}
fun1('12', 3);//调用函数，传入指定类型的参数

//3、类接口：implements实现(关键字)
interface User {
    name: string,
    age: number,
    pwd: string
}
//声明一个类：
class User1 implements User {
    name = 'zhangsan';
    age = 20;
    pwd = '123456'
}
console.log(new User1());

//继承(extends):
//接口继承接口
//接口继承类
//类实现接口，而不能继承接口
//声明一个接口继承接口:
interface Person {
    name:string,
    age:number,
}

interface User extends Person {
    pwd: string
}
//声明一个接口继承类:
class User2 implements User {
    name = 'zhangsan';
    age = 20;
    pwd = '123456'
}
interface User3 extends User2 {
    work: string
}

interface Props {
    name: string
}



export default class Work extends Component <Props>{
    //Props的作用:在其他组件中如果调用该组件，需要传入name属性
    render() {
        return (
            <View>
                <Text>
                    总结 TypeScript 在 React Naitve 中的应用，并编写实例代码。
                    例如：
                    元组 、枚举等在 React Native 中应用并不典型，可不总结；
                    泛型、接口以及装饰器，有很实用的功能，要总结，并写出应用场景的代码
                </Text>
            </View>
        )
    }
}
