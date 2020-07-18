import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, } from 'react-native';
import { Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal } from 'react-native-router-flux';
import { Grid, Icon } from '@ant-design/react-native';
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


// App logo : 将myApp\android\app\src\main\res下的文件夹下图片换成自己的 
// 启动画面 ：react-native-splash-screen
// 如果第一次安装，一般来说都有一个引导页（普通轮播图），注意本地存储记录下状态
// 看功能，是否需要先登录，如果需要先登录，登录完记录状态（用户信息）
// 再次进入的时候，也要从本地判断是否登录过


// 添加4.0.6版本的 react-native-router-flux
// yarn remove react-native-router-flux
// yarn add react-native-router-flux@4.0.6

//图标安装之后，要link，link成功之后卸载App，再重新npm run android
//重装完之后，App停止运行的，卸载除了react-native-router-flux之外的没用的包
//yarn remove 包名
//每新装完一个包服务就会停止



const styles = StyleSheet.create({

});

const App = () => {
  let now = 0;
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
                    <Scene key='home' hideNavBar={true} component={MyTs } />

                    {/* <Scene key='home' component={Home}/> */}
                    <Scene
                      hideTabBar
                      hideDrawerButton
                      key='mylist'
                      component={Mylist}
                    />
                  </Scene>
                  {/* <Scene
                    key='home'
                    title='首页'
                    hideDrawerButton
                    icon={({ focused }) =>
                      <Icon color={focused ? 'red' : 'blue'} name='file'>
                      </Icon>}>
                    <Scene key='home' component={Home} />
                  </Scene>
                  <Scene hideDrawerButton hideTabBar key='mylist' component={Mylist}></Scene> */}
                  {/* 消息栏：key很关键，以后跳转到哪一页就根据key */}
                  <Scene key="msg"
                    title='消息'
                    icon={
                      ({ focused }) => <Icon color={focused ? 'red' : 'green'}
                        name='home' />
                    }
                  // icon={
                  //   ({focused}) => <Image
                  //     style={{ width: 20, height: 20 }}
                  //     source={require('./assets/icon/user.png')}
                  //   />
                  // }
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
