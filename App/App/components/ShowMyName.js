//2、创建一个组件ShowMyName,返回hello+名字，名字在调用的时候传入.新创建一个文件夹
import React,{Component} from 'react';
import {View,Text} from 'react-native';

//函数组件：
const ShowMyName = (props) => {
    return (
            <View>
                <Text>{props.name}</Text>
            </View>
        )
  }
export default ShowMyName;

//类组件：
// export default class ShowMyName extends Component{
//     render(){
//         return(
//             <View>
//                 <Text>{this.props.name}name</Text>
//             </View>
//         )
//     }
// }