import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TextInput,
    Dimensions,
} from 'react-native';
import { Icon } from '@ant-design/react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    searchBox: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
        height: 40,
    },
    search: {
        width: width * 0.88,
        backgroundColor: '#EDEDEE',
        flexDirection: 'row',
        alignContent: 'center',
        borderRadius: 2
    },
    icon: {
        fontSize: 28,
        marginLeft: 240,
        marginTop: 5
    },
    titleBox: {
        marginTop: 10,
        height: 55,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#eeeeee',
    },
    title: {
        justifyContent: 'center',
        flexDirection: 'row',
        height: 55,
        alignItems: 'center',
    },
    bottom: {
        backgroundColor: '#f4f4f4',
        width: width,
        height: 310,
        flexDirection: "row"
    },
    last: {
        backgroundColor: '#f4f4f4',
        width: width,
        height: 400,
        flexDirection: "row"
    },
    img: {
        width: width * 0.47,
        height: 330,
        backgroundColor: '#fff',
        marginLeft: width * 0.02,
        marginTop: 10,
    },
    text: {
        color: '#747474',
        marginLeft: 15,
        marginRight: 10
    },
    red: {
        marginLeft: 15,
        marginTop: 8,
        color: 'red'
    }
});

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.searchBox}>
                        <View style={styles.search}>
                            <TextInput
                                placeholder='请输入商品名称'
                                placeholderTextColor='#999999'
                                style={{ fontSize: 15 }}
                            />
                            <Icon color="#a0a0a0" name="search" style={styles.icon} />
                        </View>
                    </View>
                    <View style={styles.titleBox}>
                        <View style={styles.title}>
                            <Text style={{ fontSize: 16, color: 'red' }}>综合</Text>
                            <Text style={{ fontSize: 16, marginLeft: 65 }}>销量</Text>
                            <Text style={{ fontSize: 16, marginLeft: 65 }}>新品</Text>
                            <Text style={{ fontSize: 16, marginLeft: 65 }}>价格</Text>
                            <Text style={{ fontSize: 16, marginLeft: 65 }}>信用</Text>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.img}>
                            <Image style={{ width: 220, height: 225 }} source={require('./assets/left.png')} />
                            <Text style={styles.text}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={styles.red}>36.0</Text>
                        </View>
                        <View style={styles.img}>
                            <Image style={{ width: 220, height: 225 }} source={require('./assets/right.png')} />
                            <Text style={styles.text}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={styles.red}>36.0</Text>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.img}>
                            <Image style={{ width: 220, height: 225 }} source={require('./assets/left.png')} />
                            <Text style={styles.text}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={styles.red}>36.0</Text>
                        </View>
                        <View style={styles.img}>
                            <Image style={{ width: 220, height: 225 }} source={require('./assets/right.png')} />
                            <Text style={styles.text}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={styles.red}>36.0</Text>
                        </View>
                    </View>
                    <View style={styles.last}>
                        <View style={styles.img}>
                            <Image style={{ width: 220, height: 225 }} source={require('./assets/left.png')} />
                            <Text style={styles.text}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={styles.red}>36.0</Text>
                        </View>
                        <View style={styles.img}>
                            <Image style={{ width: 220, height: 225 }} source={require('./assets/right.png')} />
                            <Text style={styles.text}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={styles.red}>36.0</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default App;