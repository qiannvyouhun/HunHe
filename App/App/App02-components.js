import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,//实现滚动
  View,//相当于div
  Text,//文本
  StatusBar,
  Image,
  ImageBackground,//背景图的组件
  TextInput,//文本输入框
  Button,
  TouchableOpacity,
  FlatList,
  Dimensions,
  BackHandler,
  ToastAndroid,
} from 'react-native';
import ShowMyName from './components/ShowMyName';
import Counter from './components/Counter';
import ImageBg from './components/ImageBg';

const styles = StyleSheet.create({
  //属性：属性值（属性值是一个对象）
  box:{
		width:"40%",
		height:100,
		margin: 10,
		backgroundColor:'blue'
	},
	txt:{
		color:"red",
	},
	size:{
		fontSize:30
	}
});

//4、自定义组件ImageBg

//JS：动态弱类型
//TypeScript：RN,Angular,Vue3都基于此。声明的时候可以指定特定的类型
const App = () => {
  let [val, setVal] = useState('1');
  let [isFresh, setFresh] = useState(false);
  let data = [];
  useEffect(() => {
    for (var i = 0; i < 100; i++) {
      data.push({ key: i + '', title: i + 'abc' })
    }
  }, [])

  let [da, setDa] = useState(data);
  let addData = () => {
    for (var i = 100; i < 200; i++) {
      data.push({ key: i + '', title: i + 'abc' })
    }
    setDa(data);
  }
  let upDateData = () => {
    setFresh(true);
    setTimeout(() => {
      setFresh(false);
    }, 2000)
  }

  const { width, height, scale } = Dimensions.get('window');
  console.log(width, height, scale);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          {/*
             直接显示图片默认大小。本地图片
             1、resizeMode="center"：居中不拉伸
             2、resizeMode="cover"：平铺
             网络图片 ：必须设置大小
           */}
          {/* <View>
          <Image source={require('./assets/icon/user.png')}></Image>
          <Image style={{ width: 200, height: 200 }} source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582177770487&di=50e297fdbf709859bab3c1e074d23a01&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3663663312%2C3397280610%26fm%3D214%26gp%3D0.jpg' }}></Image>
        </View> */}


          {/* 文本输入框。受控组件 */}
          {/* <Text>{val}</Text>
        <TextInput
          placeholder="请输入内容"
          onChangeText={(val) => { setVal(val) }}
          style={{
            borderColor: 'red',
            borderWidth: 1,
            borderRadius: 20,
            height: 50,
          }}
        >
        </TextInput> */}

          {/* <ScrollView> */}
          {/* 背景图 */}
          {/* <ImageBackground style={{ width: 500, height: 300 }} source={require('./assets/14.jpg')}>
            <Text style={[styles.txt, styles.size]}>hello</Text>
          </ImageBackground> */}
          {/* 背景图的组件 ImageBg */}
          {/* <ImageBg
            source={require('./assets/14.jpg')}
            style={{ width: 500, height: 300 }}
          >
            <Text style={[styles.txt, styles.size]}>hello</Text>
          </ImageBg> */}

          {/* <ImageBackground style={{ width: 300, height: 200 }} source={require('./assets/14.jpg')}>
            <View style={styles.box}></View>
            <Text style={[styles.txt, styles.size]}>hello</Text>
          </ImageBackground>
          <ImageBg
            source={require('./assets/14.jpg')}
            style={{ width: 300, height: 200 }}
          >
            <View style={styles.box}></View>
            <Text style={[styles.txt, styles.size]}>hello</Text>
          </ImageBg>
          <ImageBackground style={{ width: 300, height: 200 }} source={require('./assets/14.jpg')}>
            <View style={styles.box}></View>
            <Text style={[styles.txt, styles.size]}>hello</Text>
          </ImageBackground>
          <ImageBg
            source={require('./assets/14.jpg')}
            style={{ width: 300, height: 200 }}
          >
            <View style={styles.box}></View>
            <Text style={[styles.txt, styles.size]}>hello</Text>
          </ImageBg> */}



          {/* flex布局 */}
          {/* 在rn中，View默认设置了flex属性，默认主轴是竖轴*/}
          {/* 主轴对齐方式：justifyContent */}
          {/* 定义主轴交叉轴：alignItems  */}
          {/* justifyContent:'space-around',左右间距一样 */}
          {/* justifyContent: 'space-between',各占两边 */}
          {/* <View style={{
            flexDirection: 'row',//设置成横轴
            flexWrap: 'wrap',//换行
            justifyContent: 'space-evenly',
          }}>
            <View style={styles.box}>
              <Text>1</Text>
            </View>
            <View style={styles.box}>
              <Text>2</Text>
            </View>
            <View style={styles.box}>
              <Text>3</Text>
            </View>
            <View style={styles.box}>
              <Text>4</Text>
            </View>
            <View style={styles.box}>
              <Text>5</Text>
            </View>
            <View style={styles.box}>
              <Text>6</Text>
            </View>
          </View> */}




          {/* 钉钉头部搜索框 */}
          <View style={{
            flexDirection: 'row',
            height: 40,
            justifyContent: 'center',
          }}>
            <View style={{ justifyContent: 'center', flexDirection: 'row', height: 40 }}>
              <View style={{
                width: "80%",
                backgroundColor: '#EDEDEE',
                borderRadius: 20,
                flexDirection: 'row',
                alignContent: 'center',
                paddingLeft: 20,
              }}>
                <Image style={{ width: 20, height: 20, marginTop: 8 }} source={require('./assets/icon/user.png')}></Image>
                <TextInput
                  placeholder='搜索'
                >
                </TextInput>
              </View>
            </View>
            <View style={{ marginLeft: 20, justifyContent: 'center' }}>
              <TouchableOpacity
                style={{
                  width: 36,
                  height: 36,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 18,
                  borderWidth: 1,
                  borderColor: '#ccc'
                }}>
                <Text style={{ fontSize: 20 }}>+</Text>
              </TouchableOpacity>
            </View>

            {/* Button按钮：默认宽高是34，所以外面的view必须设置成34 */}
            {/* <View style={{
                width: 34,
                height: 34,
                backgroundColor: 'blue',
                borderRadius: 17,
                overflow: "hidden"
                }}>
                <Button
                  onPress={() => { }}
                  title="+"
                  style={{ width: 40, height: 40 }}>
                </Button>
              </View> */}

          </View>
        </ScrollView>


        {/* ScrollView:滚动的时候是把所有的内容全部渲染，花费的时间比较多。 */}
        {/* FlatList:滚动的功能，先加载当前的页面 */}
        <FlatList
          data={da}
          onRefresh={upDateData}
          refreshing={isFresh}
          onEndReached={addData}
          renderItem={({ item, index }) => (
            <View><Text>{item.title}</Text></View>
          )}
        >

        </FlatList>
      </SafeAreaView>
    </>
  );
};

export default App;
