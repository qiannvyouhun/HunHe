import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, } from 'react-native';
import { Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal } from 'react-native-router-flux';
import { Grid, Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen'
import Doc from './components/Doc';
import Msg from './components/Msg';
import MsgDetail from './components/MsgDetail';
import Mybox from './components/Mybox';
import ShowMyName from './components/ShowMyName';
import Home from './components/Home';
import Message from './components/Message';
import Mylist from './components/Mylist';
import LoadPage from './components/LoadPage';
import Test from './components/TestGoods';
import MyTs from './tsdemos/MyTs';


console.disableYellowBox = true;//取消黄色警告

//App logo:将App\android\app\src\main\res下的文件夹下的图片进行替换


//启动画面：react-native-splash-screen，启动的图片依然放在App\android\app\src\main\res文件下，但是名字不一样
//如果第一次安装，一般来说都有一个引导页(轮播图)
//注意本地存储下状态(即只要不是第一次安装就不要总是进行轮播图引导)
//看功能是否需要先登录，(判断)如果需要先登录的话，登陆完记录状态(包括用户的信息)
//再次介入的时候也要从本地判断是否登陆过，(判断)如果登陆过直接进入首页，否则进行登录
//react native 中本地存储是异步的，所以会闪一下，安装启动页就会掩盖掉

const styles = StyleSheet.create({

});

const rootUrl = 'https://www.fastmock.site/mock/0c652f4d46e039ad17cabdc001c488c1/api'


const App = () => {
    let now = 0;
    useEffect(() => {
        SplashScreen.hide();
        fetch(rootUrl+'/topics?limit=5')
            .then(res=>res.json())
            .then(res=>console.log(JSON.stringify(res)))
    }, [])
    return (
        <Router
            backAndroidHandler={() => {
                if (Actions.currentScene != 'home') {
                    Actions.pop();
                    return true;
                } else {
                    if (new Date().getTime() - now < 2000) {
                        BackHandler.exitApp();
                    } else {
                        ToastAndroid.show('确定要退出吗', 100);
                        now = new Date().getTime();
                        return true;
                    }
                }

            }}>
            <Overlay>
                {/* 路由中return里面有router，而router里面只能有一个组件 */}
                <Modal key='modal' hideNavBar>
                    <Lightbox
                    //弹出来的一个框
                    >
                        <Drawer
                            //Drawer左边的菜单栏
                            key='drawer'
                            contentComponent={() => <Text>drawer</Text>}
                            drawerWidth={400}
                            drawerIcon={() => <Icon name='menu' />}
                        >
                            <Scene key="root">
                                <Tabs
                                    key="tabbar"
                                    hideNavBar
                                    activeTintColor='red'
                                    inactiveTintColor='blue'
                                    tabBarStyle={{ backgroundColor: '#ccc' }}
                                >
                                    {/* 首页 */}
                                    <Scene key='home'
                                        title='首页'
                                        icon={
                                            ({ focused }) => <Icon
                                                color={focused ? 'red' : 'blue'}
                                                name="home"
                                            />
                                        }
                                    >
                                        <Scene key='home' hideNavBar={true} component={MyTs} />

                                        <Scene
                                            hideTabBar
                                            hideDrawerButton
                                            key='mylist'
                                            component={Mylist}
                                        />
                                    </Scene>

                                    {/* 消息栏：key很关键，以后跳转到哪一页就根据key */}
                                    <Scene key="msg"
                                        title='消息'
                                        icon={
                                            ({ focused }) => <Icon color={focused ? 'red' : 'green'}
                                                name='home' />
                                        }
                                    >
                                        <Scene key='ms' component={Msg} />
                                        <Scene key='msgdetail' hideTabBar component={MsgDetail} />
                                    </Scene>
                                    {/* 文档拦 */}
                                    <Scene
                                        key='doc'
                                        title='文档'
                                        hideDrawerButton
                                        icon={({ focused }) =>
                                            <Icon color={focused ? 'red' : 'blue'} name='file'>
                                            </Icon>}>
                                        <Scene key='docs' component={Doc} />
                                    </Scene>
                                </Tabs>
                            </Scene>
                        </Drawer>
                        <Scene key="light" component={Mybox}></Scene>
                    </Lightbox>
                    <Scene key='login' component={ShowMyName}></Scene>
                </Modal>
                <Scene component={Message} />
            </Overlay>
        </Router>
    );
};

export default App;
