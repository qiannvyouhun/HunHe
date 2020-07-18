import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';
import { Icon } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 640;
const goods = [
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36.00,
        img: require('../assets/good1.png')
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36.00,
        img: require('../assets/good2.png')
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36.00,
        img: require('../assets/good1.png')
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36.00,
        img: require('../assets/good2.png')
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36.00,
        img: require('../assets/good1.png')
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36.00,
        img: require('../assets/good2.png')
    }
]

export default class TestGoods extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={styles.header}>
                    <View style={styles.search}>
                        <TextInput
                            placeholder='请输入商品名称'
                            placeholderTextColor='#999999'
                            style={{
                                width: 500 * s,
                                height: 50 * s,
                                paddingLeft: 10,
                                fontSize: 15
                            }}
                        />
                        <Icon color='#a0a0a0' name='search' style={{ fontSize: 15 }} />
                    </View>
                </View>
                <View style={styles.nav}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 19, color: 'red' }}>综合</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 19 }}>销量</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 19 }}>新品</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 19 }}>价格</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 19 }}>信用</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{ backgroundColor: '#f4f4f4' }}
                    data={goods}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <View style={styles.good}>
                            <Image
                                resizeMode="contain"
                                source={item.img}
                                style={{ height: 180 * s, marginTop: 60 * s }}
                            />
                            <Text
                                style={{ marginTop: 20 }}

                            >{item.title}</Text>
                            <Text
                                style={{ width: '100%', color: 'red' }}
                            >{item.price}</Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        height: 70 * s,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        height: 50 * s,
        width: 544 * s,
        backgroundColor: '#EEEEEE',
        flexDirection: 'row',
        alignItems: 'center'
    },
    nav: {
        height: 73 * s,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    good: {
        width: 290 * s,
        backgroundColor: '#fff',
        marginLeft: 20 * s,
        marginTop: 20 * s,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        alignItems: 'center'
    },
})

// npm run android 或者 react-native run-android,在模拟器或者真机上装的
// 是测试版本的安装包，不要每天装一次，以后只需要执行 npm start起服务即可，
// 然后点开 App，服务界面就会编译文件

// adb reverse tcp:8081 tcp:8081

// 执行 ./gradlew，打包出一个签名好的可用于发布的版本的安装包，不用调试
// 手机调试：
// 1、打开开发者选项（选一种方式连接手机）
// 2、测试： adb devices
// 3、react-native run-android
// 拔掉数据后，再接入的时候，不用再装，还是执行npm start，
// adb reverse tcp:8081 tcp:8081
// 点卡 App 即可