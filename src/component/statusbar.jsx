import React, { useState } from "react";
import { StatusBar ,Button,View} from "react-native";

const Statusbar = ()=>
{
    const [show , sethide]  = useState(false)
    return (
        <View style = {{width : 270 , paddingTop : 30, margin :30 , paddingLeft : 80}}>
        <StatusBar backgroundColor={'green'} hidden = {show}>
        </StatusBar>
        <Button title="Toggle StatusBar" on onPress={()=> sethide(!show)}></Button>
        </View>
    )
}

export default Statusbar