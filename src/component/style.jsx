import React from "react";
import { StyleSheet,View ,Text} from "react-native";


const Words = ()=>
{
    return(
        <View style = {{paddingTop: 30}}>
        <Text style={styles.abc}>React Native</Text>
        <Text style={styles.abc}>React Native</Text>
        <Text style={styles.abc}>React Native</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    abc : 
    {
        fontSize : 30,
        color : 'red',
        backgroundColor : 'lightblue',
        marginBottom : 20,
        padding : 5,
        borderRadius : 13,
        textAlign : 'center',
        borderColor : "pink",
        borderWidth : 4
    }
})

export {Words , styles}