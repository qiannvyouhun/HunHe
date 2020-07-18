import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,//实现滚动
    View,//相当于div
    Text,//文本
    StatusBar,
    Image,
    ImageBackground,//背景图的组件
    TextInput,//文本输入框
    Button,
    TouchableOpacity,
    FlatList,
    Dimensions,
    BackHandler,
    ToastAndroid,
} from 'react-native';
import ShowMyName from './components/ShowMyName';
import Counter from './components/Counter';

const styles = StyleSheet.create({
    //属性：属性值（属性值是一个对象）
    box: {
        width: 100,
        height: 100,
        margin: 10,
        borderColor: 'red',
        borderWidth: 1,
    },
    box1: {
        width: 100,
        height: 100,
        margin: 10,
        borderColor: 'red',
        borderWidth: 1 / 1.5,
    },
    txt: {
        color: "red",
    },
    size: {
        fontSize: 30
    }
});



//1、创建一个组件，名为Hello，返回Hello，在App组件当中调用
const Hello = () => {
    return (
        <Text>hello</Text>
    )
}

//2、创建一个组件ShowMyName,返回hello+名字，名字在调用的时候传入

//3、创建一个组件Counter，返回一个数字的文本和一个按钮，点击按钮，数字加一

const App = () => {
    return (
        <>
        <StatusBar barStyle="dark-content" />
            <SafeAreaView>
            {/* 
            1、如果需要给文本加入样式，text会继承父级text的样式，
                但是不会继承view的样式 ，并且排列方式会从“有上到下排列”改变为“由左到右”
            2、加多个样式需要加上数组
            */}
            {/* <View style={styles.box}>
                    <Text style={[styles.txt,styles.size]}>
                    <Text>inner01</Text>
                    <Text>inner02</Text>
                    </Text>
                </View> 
            */}
            <View>
                <Hello />
                <ShowMyName name='dongxiaoqian' />
                <Counter />
            </View>
            </SafeAreaView>
        </>
    );
};

export default App;
