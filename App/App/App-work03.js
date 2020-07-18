import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { Router, Scene, Tabs } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import TestGoods from './components/TestGoods';
import TestHome from './components/TestHome';
import TestCar from './components/TestCar';
import TestMy from './components/TestMy';
import MyPublish from './components/MyPublish';

console.disableYellowBox = true;//取消黄色警告

const styles = StyleSheet.create({

});

const App = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, [])
    return (
        <Router>
            <Scene key="root">
                <Tabs
                    key="tabbar"
                    hideNavBar
                    activeTintColor='red'
                    inactiveTintColor='#959595'
                    tabBarStyle={{ backgroundColor: '#fff' }}
                >
                    {/* 首页 */}
                    <Scene key='home'
                        title='首页'
                        icon={
                            ({ focused }) => <Icon
                                color={focused ? 'red' : '#959595'} name="home" />
                        }
                    >
                        <Scene key='home' hideNavBar={true} component={TestHome} />
                    </Scene>

                    {/* 商品分类 */}
                    <Scene key="goods"
                        title='商品分类'
                        icon={
                            ({ focused }) => <Icon color={focused ? 'red' : '#959595'} name='appstore' />
                        }
                    >
                        <Scene key='goods' hideNavBar={true} component={TestGoods} />
                    </Scene>

                    {/* 购物车 */}
                    <Scene
                        key='car'
                        title='购物车'
                        hideDrawerButton
                        icon={({ focused }) =>
                            <Icon color={focused ? 'red' : '#959595'} name='shopping-cart' />}>
                        <Scene key='car' hideNavBar={true} component={TestCar} />
                    </Scene>
                    {/* 我的发布 */}

                    {/* 我的 */}
                    <Scene
                        key='my'
                        title='我的'
                        hideDrawerButton
                        icon={({ focused }) =>
                            <Icon color={focused ? 'red' : '#959595'} name='user' />}>
                        <Scene key='my' hideNavBar={true} component={TestMy} />
                        {/* 我的发布 */}
                        <Scene
                            navigationBarStyle={{ backgroundColor: 'red' }}
                            backButtonImage={require('./assets/arrow-left.png')}
                            renderRightButton={<View style={{ marginRight: 20 }}>
                                <Icon color='#fff' name='ellipsis'></Icon></View>}
                            key="myPublish"
                            title='我的发布'
                            titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }}//标题的文本居中
                            hideTabBar
                            component={MyPublish}
                            icon={({ focused }) =>
                                <Icon color={focused ? 'red' : '#959595'} name='user' />}
                        />
                    </Scene>
                </Tabs>
            </Scene>
        </Router>
    );
};

export default App;
