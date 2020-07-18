import React, { Component } from 'react'
import { Animated,Easing,View, Text, FlatList, Dimensions, ScrollView, StyleSheet} from 'react-native';
import Button from 'react-native-button'
import { MessageBarManager } from 'react-native-message-bar'
import { Actions } from 'react-native-router-flux';
import ImageCropPicker from 'react-native-image-crop-picker';

const { width } = Dimensions.get('window')
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};


export default class Home extends Component {
    constructor(){
        super();
        let data = [];
        for(var i=0; i<10; i++){
            data.push({tit:i,key:i});
        }
        this.state = {
            data,
            width: new Animated.Value(20),
            imageUrl:''
        }
    }
    takephoto = ()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else {
                
              const source = { uri: response.uri };
              this.setState({
                imageUrl: source,
              });
            }
          });
    } 
    zoom=()=>{
        Animated.timing(this.state.width,{
        toValue:200

        }).start()
    }
    render() {
        console.log('home')
        return (
            <View style={{flex:1}}>
                {/* numColumns:实现分栏布局 */}
                {/* FlatList垂直滚动 */}
                {/* ListHeaderComponent里面可以加组件 */}
                {/* <ActivityIndicator size="large" color="#0000ff" /> */}
                <Image 
                    style={{width:300,height:300}} 
                    source={this.state.imageUrl}
                />
                <View style={{alignItems:'center',marginBottom:20}}>
                    <Button 
                        onPress={()=>{Actions.mylist()}}
                        style={styles.btn}
                    >跳转 Mylist</Button>
                </View>
                <Button 
                    onPress={()=>{this.zoom()}}
                    style={styles.btn}
                >变大</Button>
                <Button 
                    onPress={()=>{this.takephoto()}}
                    style={styles.btn}
                >拍照</Button>
                <Animated.View
                    style={{
                        width: this.state.width,
                        height: 200,
                        backgroundColor: 'red'
                    }}
                ></Animated.View>

              

                {/* <FlatList
                    ListHeaderComponent={
                        <Button onPress={() => {
                            MessageBarManager.showAlert({
                                title: '提示标题',//弹出来的提示标题
                                message: '详细信息',
                                alertType: 'info',
                                stylesheetInfo: { backgroundColor: 'red' }
                            })
                        }}
                            style={styles.btn}>头部</Button>}
                    ListFooterComponent={<Text>尾部</Text>}
                    numColumns={2}
                    data={this.state.data}
                    renderItem={
                        ({ item }) => <View style={styles.slide}>
                            <Text>{item.tit}</Text>
                        </View>
                    }
                /> */}


                {/* ScrollView水平滑动  */}
                {/* horizontal:实现水平滚动 */}
                {/* <ScrollView 
                    pagingEnabled={true} 
                    horizontal={true}
                    style={{height:300}}
                    showsHorizontalScrollIndicator={false}//没有滚动条
                >
                    <View style={styles.slide}>
                        <Text>1</Text>
                    </View>
                    <View style={styles.slide}>
                        <Text>2</Text>
                    </View>
                    <View style={styles.slide}>
                        <Text>3</Text>
                    </View>
                </ScrollView> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    btn: {
        width: 200,
        height: 40,
        borderRadius: 20,
        color: '#fff',
        textAlignVertical: 'center',//垂直居中
        backgroundColor: 'red'
    },
    slide: {
        width: width * 0.4,
        height: 300,
        marginLeft: width * 0.07,
        marginTop: 10,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
})