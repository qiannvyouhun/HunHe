import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image, BackHandler,ToastAndroid } from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';

import Demo01 from './tsdemos/Demo01';
import Work from './tsdemos/Work';

console.disableYellowBox = true;

const App = () =>{
	return <View>
		<Work />
	</View>
}

export default App;