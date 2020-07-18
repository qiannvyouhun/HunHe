//3、写一个Counter，返回一个数字的文本和一个按钮，点击按钮，数字加一

import React,{Component,useState} from 'react';
import {View,Text,Button} from 'react-native';

//函数组件：函数里面没有this
const Counter = () => {
    let [num,setNum] = useState(0);
    return(
        <View>
            <Text>{num}</Text>
            <Button onPress = {() => {setNum(num+1)}} title = '点击+1'/>
        </View>
    )
}
export default Counter;


//类组件：
// export default class Counter extends Component{
//     constructor(){
//         super();
//         this.state={
//             num:0//声明状态
//         }
//     }
//     handle = () =>{
//         this.setState((state) => {//函数
//             return{
//                 num:++state.num
//             }
//         })
//     }
//     render(){
//         return(
//             <View>
//                 <Text>{this.state.num}</Text>
//                 <Button onPress = {this.handle} title='+1'/>
//             </View>
//         )
//     }
// }




