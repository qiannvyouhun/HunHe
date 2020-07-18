import React, { Component } from 'react'
import { Text, View } from 'react-native'

//类型断言：可以确定的指定一个值的类型
//形式：
//<Type>值，在jsx中不能用
//值as类型

interface Person{
    name:string;
    age:number;
}

let user1:Person = {
    name:"zhangsan",
    age:20
}//确定了名字的年龄可以这样操作

let user2 = {} as Person;//确定是Person类型，不确定里面内容时可以这样操作
user2.name ="zhangsan";
user2.age=18;

//联合类型：或者any类型(任意类型)
function getLength(p1:string|number):number{
    //p1是string或者number类型，返回的是number类型，必须返回值否则报错
    // return 2
    return (p1 as string).length
}

//类定义
//用es5的方式：创建一个Person类，有name和age属性，调用的时候传入
// function Pertson ( name:string,age:number){
//     this.name=name;
//     this.age=age;
// }


class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        //在前面进行声明，在构造函数中可以进行赋值
        this.name=name;
        this.age=age;
    }
    sayName(){

    }
} 
let user = new Person('zhang',20);

class Worker extends Person{
    //静态属性：
    static money : number;
    static job:string='程序员';//静态方法
    constructor(name:string,age:number,joob:string){
        super(name,age);
        // this.job=job
    }
}
Worker.money=100;
let user3=new Worker('zhang',18,'程序员')
console.log(Worker.job)

function identity<T>(arg:T):T{
    return arg;
}

console.log(identity<string>('params1'))
identity<number>(100)
export default class Demo01 extends Component {
    constructor(props:any){
        super(props);
    }
    render() {
        return (
            <View>
                <Text> Demo01 </Text>
            </View>
        )
    }
}
