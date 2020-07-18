import React, { Component, Children } from 'react'
import {View,StyleSheet,Image} from 'react-native'
// StyleSheet:样式

export default class ImageBg extends Component {
    render() {
        let {style,source,children} = this.props;
        return (
            <View style={style}>
                <Image style={[style,styles.absoluteImg]} source={source}></Image>
                {children}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    absoluteImg:{
        position:'absolute',
        left:0,
        top:0
    }
})
