import React, { Component } from 'react'
import { Animated, View, Text, StyleSheet, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import {WebView} from 'react-native-webview'

export default class Mybox extends Component {
    constructor() {
        super();
        this.state = {
            opacity: new Animated.Value(0)
        }
    }
    componentDidMount() {

        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 2000

        }).start()

    }
    back=()=>{
        Animated.timing(this.state.opacity,{
            toValue:0,
            duration:2000
        }).start(Actions.pop)
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.innerBox], { opacity: this.state.opacity }}>
                    <Button
                        title='返回'
                        onPress={
                            this.back
                        }
                    // onPress={()=>{this.zoom()}}
                    >
                    </Button>
                    <WebView source={{uri:'https://www.baidu.com'}}></WebView>
                </Animated.View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {//弹出框的定位：四个方向定位为0可以设为全屏
        // backgroundColor:'transparent',//transparent透明
        backgroundColor: 'rgba(50,50,50,0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerBox: {
        width: '80%',
        height: '50%',
        backgroundColor: 'red'
    }
})
