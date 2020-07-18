import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,Image,StyleSheet,AsyncStorage} from 'react-native';
import ImagePicker from 'react-native-image-picker'
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
  rotation:90,
  allowsEditing: false, 
  noData: false,
  storageOptions: {
      skipBackup: true  
  }
};


export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null
        };
     }

    componentDidMount(){
      AsyncStorage.getItem('avatarSource')
          .then((res)=>{
            console.log(44444,AsyncStorage.getItem('avatarSource').avatarSource)
          });
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
                console.log(1111,this.state.avatarSource)
                let source = { uri: response.uri };
                this.setState({
                    avatarSource: source.uri
                    
                });
                console.log(333,this.state.avatarSource)
                var avatarImage = source.uri;
                AsyncStorage.setItem('avatarSource',avatarImage,()=>{console.log('store success')})
                // console.log(1111,AsyncStorage.getItem('avatarSource'))
                // AsyncStorage.getItem('avatarSource')
        //   .then((res)=>{
        //       this.setState({avatarSource:res})
        //   });
    
            }
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.item} onPress={this.choosePic.bind(this)}>选择照片</Text>
                <Image source={{uri:this.state.avatarSource}} style={styles.image} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      marginTop:25
    },
    item:{
      margin:15,
      height:30,
      borderWidth:1,
      padding:6,
      borderColor:'#ddd',
      textAlign:'center'
    },
    image:{
     height:198,
     width:300,
     alignSelf:'center',
   },
  });