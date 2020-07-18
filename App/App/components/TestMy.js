import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import { Icon } from '@ant-design/react-native';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 640;

const options = {
    title: '选择图片',
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '选择照片',
    cameraType: 'back',
    mediaType: 'photo',
    videoQuality: 'high',
    durationLimit: 10,
    maxWidth: 300,
    maxHeight: 300,
    quality: 0.8,
    angle: 0,
    rotation: 90,
    allowsEditing: false,
    noData: false,
    storageOptions: {
        skipBackup: true
    }
};

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

export default class TestMy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: require('../assets/my1.png')
        };
    }

    componentDidMount() {
        AsyncStorage.getItem('uri')
            .then((res) => {
                let imageUri = { uri: res }
                this.setState({
                    avatarSource: imageUri
                })
            })
    }
    choosePic() {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                console.log(1111, this.state.avatarSource)
                let source = { uri: response.uri };
                this.setState({
                    avatarSource: source
                });
                AsyncStorage.setItem('uri', response.uri, () => { console.log('store success', source.uri) })
            }
        });
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={this.choosePic.bind(this)}
                            style={styles.takephoto}
                        >
                            <Image style={styles.image} source={this.state.avatarSource}></Image>
                        </TouchableOpacity>
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
                    <View style={{ backgroundColor: '#fff', flexDirection: 'row' }}>
                        <View style={styles.middle}>
                            <Icon
                                name='tool'
                                style={{ fontSize: 30, marginBottom: 20 * s, color: '#c2c2c2' }}
                            />
                            <Text
                                style={{ fontSize: 20, color: '#4f4e4e' }}
                            >居家维修保养</Text>
                        </View>
                        <View style={styles.middle}>
                            <Icon
                                name='car'
                                style={{ fontSize: 30, marginBottom: 20 * s, color: '#c2c2c2' }}
                            />
                            <Text
                                style={{ fontSize: 20, color: '#4f4e4e' }}
                            >出行接送</Text>
                        </View>
                        <View style={styles.middle}>
                            <Icon
                                name='user'
                                style={{ fontSize: 30, marginBottom: 20 * s, color: '#c2c2c2' }}
                            />
                            <Text
                                style={{ fontSize: 20, color: '#4f4e4e' }}
                            >我的受赠人</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#fff', flexDirection: 'row' }}>
                        <View style={styles.middle}>
                            <Icon
                                name='desktop'
                                style={{ fontSize: 30, marginBottom: 20 * s, color: '#c2c2c2' }}
                            />
                            <Text
                                style={{ fontSize: 20, color: '#4f4e4e' }}
                            >我的住宿优惠</Text>
                        </View>
                        <View style={styles.middle}>
                            <Icon
                                name='flag'
                                style={{ fontSize: 30, marginBottom: 20 * s, color: '#c2c2c2' }}
                            />
                            <Text
                                style={{ fontSize: 20, color: '#4f4e4e' }}
                            >我的活动</Text>
                        </View>

                        <View style={styles.middle}>
                            <Icon
                                name='edit'
                                style={{ fontSize: 30, marginBottom: 20 * s, color: '#c2c2c2' }}
                                onPress={() => Actions.myPublish()}
                            />
                            <Text
                                style={{ fontSize: 20, color: '#4f4e4e' }}
                                onPress={() => Actions.myPublish()}
                            >我的发布</Text>
                        </View>

                    </View>
                    <View style={styles.out}>
                        <Text style={{ color: '#767676', fontSize: 18 }}>
                            BINNU DHILLON |退出
                    </Text>
                    </View>
                </View>
            </ScrollView >
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
        width: 157 * s,
        height: 157 * s,
        borderRadius: 80 * s,
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
        height: 100 * s,
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
    },
    takephoto: {
        marginTop: 85 * s,
        marginBottom: 20 * s,
        width: 160 * s,
        height: 160 * s,
        borderRadius: 80 * s,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    }
})
