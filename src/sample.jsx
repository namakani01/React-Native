import React , {useState} from "react"
import { Text,View,Button,ImageBackground, ActivityIndicator, TextInput} from "react-native"



const Cat = ()=>
{
    return (
        <Text>Hello I am Cat</Text>
    )
}


// State
const User = ()=>
{ 
const [name , setname] = useState("Rajesh")
function changename()
{
    setname("Harish")
}
return (
    <View style={{paddingTop: 30}}>
    <Text style = {{fontSize : 25}}>{name}</Text>
    <Button title = "Press to change" onPress={changename}/>
    </View>
 )
}


// Back ground Image

const Imagebackgrnd = ()=>
{
    return (
    <ImageBackground style = {{height: 200 , width : 500}} source={{uri:'https://png.pngtree.com/thumb_back/fw800/background/20230817/pngtree-lotus-flower-jpg-pink-lotus-flower-image_13023952.jpg'}}>
    <Text style = {{color : 'red' , paddingLeft : 50 , paddingTop:50 , fontWeight : 'bold' , fontSize : 30}}>Hello World!</Text>
    </ImageBackground>
    )
}


// Activity Indicator

const Loader = ()=>
{
    return (
        <View style = {{paddingTop : 24}}>
        <ActivityIndicator color = {'red'} size={'large'}></ActivityIndicator>       
        </View>
    )
}

const Textinput1 = ()=>
{
    return (
        <View style={{paddingTop: 10}}>
        <TextInput
          placeholder="Enter your Name"
          style={{borderColor: 'grey', borderWidth: 2}}></TextInput>
      </View>
    )
}




export default Cat;
export {User,Imagebackgrnd,Loader,Textinput1}