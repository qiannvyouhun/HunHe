import React  from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene, Tabs } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import TestGoods from './components/TestGoods';
import TestHome from './components/TestHome';
import TestCar from './components/TestCar';
import TestMy from './components/TestMys';

console.disableYellowBox = true;//取消黄色警告

const styles = StyleSheet.create({

});

const App = () => {
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

                    {/* 我的 */}
                    <Scene
                        key='my'
                        title='我的'
                        hideDrawerButton
                        icon={({ focused }) =>
                            <Icon color={focused ? 'red' : '#959595'} name='user' />}>
                        <Scene key='my' hideNavBar={true} component={TestMy} />
                    </Scene>
                </Tabs>
            </Scene>
        </Router>
    );
};

export default App;
