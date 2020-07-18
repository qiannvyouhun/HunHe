import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

import { Router, Scene } from 'react-native-router-flux';
import Doc from './components/Doc';
import Msg from './components/Msg';
import MsgDetail from './components/MsgDetail';

const styles = StyleSheet.create({

});

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
   
}, [])

  return (
    <Router>
      <Scene key="root">
        {/* 默认显示第一个scene *，如果没放在第一个可以加上initial属性就会默认成第一个*/}
        <Scene
          key="msg"
          title="消息"
          component={Msg}
          titleStyle={{ flex: 1, textAlign: 'center', color: "red" }}
        />
        <Scene
          key="msgdetail"
          title="消息详情"
          backTitle="消息"
          backButtonImage={require('./assets/icon/user.png')}
          component={MsgDetail}
          titleStyle={{ flex: 1, textAlign: 'center', color: 'red' }}//标题的文本居中
          renderRightButton={<View></View>}//返回箭头
        />
        <Scene
          key="doc"
          title="文档"
          component={Doc}
          titleStyle={{ flex: 1, textAlign: 'center' }}//标题的文本居中
          renderRightButton={<View></View>}//返回箭头
        />
      </Scene>
    </Router>
  );
};

export default App;
