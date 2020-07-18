import React, { Component } from 'react'
import { Text, View } from 'react-native'

//声明变量
const str = 'abc';//声明常量
let num: number = 100;//声明变量

//数组：
// let arr:Array<String> = ['1',3]
// let brr:Array<number> = ['1',3]
let crr: string[] = ['aaa', 'bbb']

//对象：
// let obj:object={name:'zhangsan'}
let objj: { name: string } = { name: 'sili' }

//元组：
let tupleArr: [string, number, boolean] = ['ss', 2, true]

//枚举：
enum lev { one = 100, two, three = 200 };//代替,two=101,可以随便取数
let myLev: lev = lev.two;
console.log(myLev);

enum week { sun, mon, th };//sun=0,mon=1,th=2,默认从0开始

//any:
let a: any = 'any type';

//接口：定义了一个类
interface Couse{
    title:string,
    intro:string,
    num?:number,//可有可无
}

let hybird:Couse={//声明一门课程
    title:'hybrid',
    intro:'混合应用开发',
    num:10,
}

//函数接口：
interface MyFunc {
    (params1:string):boolean//返回的是boolean值
}

let fun:MyFunc = function(pa:string){
    //传入的参数名可以不一样，类型必须一样，返回的是boolean类型
    return true;
}

//声明一个普通的函数：
function fun1(pa1:string,pa2:number):boolean{
    //返回类型是boolean类型
    return true;
}
fun1('12',3);//调用函数

//类接口：implements
interface User{
    name:string,
    age:number,
    pwd:string
}
class User1 implements User{
    name='zhangsan';
    age=20;
    pwd='123456'
}
console.log(new User1());

interface Person{

}

interface User extends Person{
    pwd:string
}

//继承(extends)
//接口继承接口
//接口继承类
//类实现接口，而不能继承接口

interface User2 extends User1{
    work:string
}



interface Props{
    name:string
}

export default class MyTs extends Component<Props>{
    render() {
        return (
            <View>
                <Text
                    style={{ fontSize: 20 }}
                >
                    {objj.name}
                </Text>
            </View>
        )
    }
}
