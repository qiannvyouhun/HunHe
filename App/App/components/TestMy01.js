import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image,
    FlatList,
    ScrollView
} from 'react-native';
import { Icon } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 640;

const middle = [
    {
        title: '账户管理',
        icon: 'setting'
    },
    {
        title: '收货地址',
        icon: 'environment',
    },
    {
        title: '我的信息',
        icon: 'idcard'
    },
    {
        title: '我的订单',
        icon: 'profile'
    },
    {
        title: '我的二维码',
        icon: 'qrcode'
    },
    {
        title: '我的积分',
        icon: 'sketch'
    },
    {
        title: '我的收藏',
        icon: 'star'
    }
]

const bottom = [
    {
        title: '居家维修保养',
        icon: 'tool'
    },
    {
        title: '出行接送',
        icon: 'car'
    },
    {
        title: '我的受赠人',
        icon: 'user'
    },
    {
        title: '我的住宿优惠',
        icon: 'desktop'
    },
    {
        title: '我的活动',
        icon: 'flag'
    },
    {
        title: '我的发布',
        icon: 'edit'
    },
]

export default class TestMy extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
                    <View style={styles.header}>
                        <Image style={styles.image} source={require('../assets/my.png')}></Image>
                        <Text style={{ fontSize: 27 * s, color: '#fff' }}>BINNU DHILLON</Text>
                    </View>
                    <View style={styles.tit}>
                        <Icon style={{ fontSize: 30, marginRight: 10, color: '#c2c2c2' }} name='user' />
                        <Text style={{ fontSize: 20, color: '#4f4e4e' }}>我的个人中心</Text>
                    </View>
                    <FlatList
                        style={{ backgroundColor: '#fff' }}
                        data={middle}
                        numColumns={3}
                        renderItem={({ item }) => (
                            <View style={styles.middle}>
                                <Icon
                                    name={item.icon}
                                    style={{ fontSize: 30, marginBottom: 20 * s, color: '#c2c2c2' }}
                                />
                                <Text
                                    style={{ fontSize: 20, color: '#4f4e4e' }}
                                >{item.title}</Text>
                            </View>
                        )}
                    />
                    <View style={[styles.tit, { marginTop: 8 }]}>
                        <Icon style={{ fontSize: 30, marginRight: 10, color: '#c2c2c2' }} name='tag' />
                        <Text style={{ fontSize: 20, color: '#4f4e4e' }}>E族活动</Text>
                    </View>
                    <FlatList
                        style={{ backgroundColor: '#fff' }}
                        data={bottom}
                        numColumns={3}
                        renderItem={({ item }) => (
                            <View style={styles.middle}>
                                <Icon
                                    name={item.icon}
                                    style={{ fontSize: 30, marginBottom: 20 * s, color: '#c2c2c2' }}
                                />
                                <Text
                                    style={{ fontSize: 20, color: '#4f4e4e' }}
                                >{item.title}</Text>
                            </View>
                        )}
                    />
                    <View style={styles.out}>
                        <Text style={{ color: '#767676', fontSize: 18 }}>
                            BINNU DHILLON |退出
                    </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        height: 400 * s,
        width: width,
        backgroundColor: '#f23030',
        alignItems: 'center'
    },
    image: {
        marginTop: 85 * s,
        marginBottom: 20 * s,
        width: 160 * s,
        height: 160 * s,
    },
    tit: {
        height: 70,
        borderBottomWidth: 1,
        borderBottomColor: '#eeeeee',
        paddingLeft: 20 * s,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    middle: {
        width: 213 * s,
        backgroundColor: '#fff',
        marginTop: 40 * s,
        marginBottom: 20 * s,
        alignItems: 'center',
    },
    out: {
        backgroundColor: '#eeeeee',
        height: 100 * s,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
