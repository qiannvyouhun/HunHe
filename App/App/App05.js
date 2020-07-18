import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, } from 'react-native';
import { Router, Scene, Tabs, Drawer, Lightbox, Modal } from 'react-native-router-flux';
import { Grid, Icon } from '@ant-design/react-native';
import Doc from './components/Doc';
import Msg from './components/Msg';
import MsgDetail from './components/MsgDetail';
import Mybox from './components/Mybox';
import ShowMyName from './components/ShowMyName';

// 添加4.0.6版本的 react-native-router-flux
// yarn remove react-native-router-flux
// yarn add react-native-router-flux@4.0.6

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
          inactiveTintColor='blue'
          tabBarStyle={{ backgroundColor: '#ccc' }}
        >
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
    </Router >
  );
};

export default App;
