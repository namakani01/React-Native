import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Entypo';

const LogIn = (props) => {

  // console.log(props)
  const [open ,setOpen] = useState(false)


  const[email , setEmail] = useState('')
  const[chEmail , setchEmail] = useState(true)
  const [emailerror , setEmailerror] = useState('')


  const[Password , setPassword] = useState('')
  const[checkPassword , setcheckPassword] = useState(true)
  const[passworderror , setPassworderror]  = useState('')


  const validateEmail = ()=>
    {
       var emailregex = (/[a-zA-Z0-9\.\-_]+[@]+[a-z]+[\.]+[a-z]{2,3}/)
   
       if(email == '' || email == undefined || email == null)
       {
          setEmailerror("Please Enter the email")
          setchEmail(false)
          return false
       }
       else if (!emailregex.test(email))
       {
          setEmailerror("Please Enter the valid email address")
          setchEmail(false)
          return false
       }
       else{
        setEmailerror('');
        setchEmail(true)
        return true
       }
    }



    const validatePassword = ()=>
      {
        var passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{6,10}$/;
      
         if(Password == '' || Password ==  undefined || Password ==  null)
         {
          setPassworderror("Please Enter the password")
          setcheckPassword(false)
          return false
         }
         else if (Password.length < 6)
         {
          setPassworderror("Your password must contain atleast 6 characters")
          setcheckPassword(false)
          return false
         }
         else if (Password.length > 10)
         {
          setPassworderror("Your password is too long")
          setcheckPassword(false)
          return false
         }
      
         else if (!passwordregex.test(Password))
         {
          setPassworderror("A minimum 6 characters password contains a combination of uppercase and lowercase letter and number are required.")
          setcheckPassword(false)
          return false;
         }
      
         else
         {
           setPassworderror('')
           setcheckPassword(true)
           return true
         }
      }


  return (
    <View style={styles.container}>
      <Image
        style={styles.imgstyle}
        source={require('../assets/image/login.png')}></Image>

      <View style={styles.viewinput}>
        <Icon
          name="email"
          size={19}
          color={'purple'}
          style={{paddingVertical: 15}}></Icon>
        <TextInput
          style={styles.emailtextinput}
          placeholder="Email"
          placeholderTextColor={'black'}
          onChangeText={setEmail}
          onEndEditing={validateEmail}/>
      </View>
 {chEmail == true ? null : <Text style = {{color  :'red' , marginHorizontal : 30 , fontWeight : '500' , marginTop : 10}}>{emailerror}</Text> }

      <View style={[styles.viewpasswordtextinput]}>
        <Icon1
          name="lock"
          size={19}
          color={'purple'}
          style={{paddingVertical: 15, paddingHorizontal: 8}}></Icon1>

        <TextInput
          style={styles.passtextinput}
          placeholder="Password"
          placeholderTextColor={'black'}
          secureTextEntry = {open}
          onChangeText={setPassword}
          onEndEditing={validatePassword}></TextInput>

          <TouchableOpacity onPress={
            ()=>setOpen(!open)
          }>
        <Icon2
          name="eye"
          size={20}
          color={'purple'}
          style = {{marginTop : 15}}
          />
          </TouchableOpacity>
      </View>
      {checkPassword == true ? null : <Text style = {{color  :'red' , marginHorizontal : 30,fontWeight : '500' , marginTop : 10}}>{passworderror}</Text> }

      <Text style={styles.forgetpass}>Forgot Password ?</Text>
      <TouchableOpacity activeOpacity={0.6} style={styles.loginBtn}>
        <Text
          style={{
            fontSize: 17,
            color: 'white',
            textAlign: 'center',
            fontWeight: '700',
          }}>
          Log In
        </Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.text}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => props.navigation.reset({
          index : 0,
          routes  : [{name : 'Sign Up'}]
        })}>
          <Text
            style={{
              fontSize: 17,
              color: 'red',
              fontWeight: 'bold',
              paddingLeft: 8,
              marginTop: 35,
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf0',
  },
  emailtextinput: {
    marginLeft: 7,
    paddingLeft: 5,
    fontSize: 17,
    fontWeight: '500',
    width: '90%',
  },
  loginBtn: {
    marginHorizontal: 50,
    backgroundColor: 'purple',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    marginTop: '10%',
  },
  forgetpass: {
    paddingTop: 9,
    marginLeft: 250,
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
  },
  text: {
    marginTop: 35,
    fontSize: 17,
    paddingLeft: 65,
    fontWeight: '500',
    color: 'black',
  },

  imgstyle: {
    marginTop:'20%',
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginBottom:20
  },
  viewinput: {
    flexDirection: 'row',
    paddingLeft: 10,
    borderColor: 'purple',
    borderWidth: 2,
    borderRadius: 12,
    marginHorizontal: 25,
    marginTop : 25,
    height: 55,
  },
  viewpasswordtextinput: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'purple',
    borderRadius: 12,
    marginHorizontal: 25,
    marginTop  :25,
    height: 55,
  },
  passtextinput: {
    paddingLeft: 5,
    fontSize: 17,
    fontWeight: '500',
    width: '76%',
    paddingHorizontal: 10,
    marginRight: 17,
  },
});

export default LogIn;
