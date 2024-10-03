import React from "react";
import { Image,View} from "react-native";

const ImageCompo = ()=>
{
    return (
        <View style={{paddingTop: 30}}>
        <Image style = {{height : 100 , width : 100}}source={require('../assets/image/tt.jpeg')}></Image>

        <Image style = {{height : 100 , width : 100}} source = {{uri : 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg'}}></Image>
        </View>
        
    )
}

export default ImageCompo