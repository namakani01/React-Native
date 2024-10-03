import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Datecompo from './datepicker';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon4 from 'react-native-vector-icons/Entypo';

const SignUp = props => {
  const [open, setOpen] = useState(false); // password eye

  const [email, setEmail] = useState('');
  const [checkEmail, setcheckEmail] = useState(true);
  const [emailerror, setEmailerror] = useState('');

  const [Password, setPassword] = useState('');
  const [checkPassword, setcheckPassword] = useState(true);
  const [passworderror, setPassworderror] = useState('');

  const [cnfPassword, setcnfPassword] = useState('');
  const [checkcnfPassword, setcheckcnfPassword] = useState(true);
  const [cnfpassworderror, setcnfpassworderror] = useState('');

  const validateEmail = () => {
    var emailregex = /[a-zA-Z0-9\.\-_]+[@]+[a-z]+[\.]+[a-z]{2,3}/;

    if (email == '' || email == undefined || email == null) {
      setEmailerror('Please Enter the email');
      setcheckEmail(false);
    } else if (!emailregex.test(email)) {
      // checks the regex that is present in the email.
      setEmailerror('Please Enter the valid email address');
      setcheckEmail(false);
    } else {
      setEmailerror('');
      setcheckEmail(true);
    }
  };

  const validatePassword = () => {
    var passwordregex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]*$/;

    if (Password == '' || Password == undefined || Password == null) {
      setPassworderror('Please Enter the password');
      setcheckPassword(false);
    } else if (Password.length < 6) {
      setPassworderror('Your password must contain atleast 6 characters');
      setcheckPassword(false);
    } else if (Password.length > 10) {
      setPassworderror('Your password is too long');
      setcheckPassword(false);
    } else if (!passwordregex.test(Password)) {
      setPassworderror(
        'A minimum 6 characters password contains a combination of uppercase and lowercase letter and number are required.',
      );
      setcheckPassword(false);
    } else {
      setPassworderror('');
      setcheckPassword(true);
    }
  };

  const validateconfirmpassword = () => {
    if (cnfPassword == '' || cnfPassword == undefined || cnfPassword == null) {
      setcnfpassworderror('Please Enter the confirm password');
      setcheckcnfPassword(false);
      return false;
    }
    if (Password !== cnfPassword) {
      setcnfpassworderror('The password doesnot match');
      setcheckcnfPassword(false);
    } else {
      setcnfpassworderror('');
      setcheckcnfPassword(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{borderWidth: 1, height: 150}}>
        <ImageBackground
          style={{height: 150, width: 420}}
          source={require('../assets/image/purpleimage.jpg')}></ImageBackground>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 25,
          marginTop: 25,
          borderRadius: 12,
          borderColor: 'purple',
          borderWidth: 2,
        }}>
        <Icon
          name="email"
          size={19}
          color={'purple'}
          style={{paddingVertical: 16, paddingHorizontal: 8}}></Icon>
        <TextInput
          style={styles.emailtextinput}
          placeholder="Email"
          placeholderTextColor={'black'}
          onChangeText={setEmail}
          onEndEditing={validateEmail}></TextInput>
      </View>

      {checkEmail == true ? null : (
        <Text
          style={{
            color: 'red',
            marginHorizontal: 30,
            fontWeight: '500',
            marginTop: 10,
          }}>
          {emailerror}
        </Text>
      )}

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 25,
          marginTop: 25,
          borderRadius: 12,
          borderColor: 'purple',
          borderWidth: 2,
        }}>
        <Icon1
          name="lock"
          size={19}
          color={'purple'}
          style={{paddingVertical: 16, paddingHorizontal: 8}}></Icon1>
        <TextInput
          style={styles.passtextinput}
          placeholder="Password"
          placeholderTextColor={'black'}
          secureTextEntry={open}
          onChangeText={setPassword}
          onEndEditing={validatePassword}
          value={Password}></TextInput>

        <TouchableOpacity onPress={() => setOpen(!open)}>
          {
            open === false ?
            <Icon3
            name="eye"
            size={20}
            color={'purple'}
            style={{marginTop: 15, paddingright: 50}}></Icon3>
             : <Icon4
             name="eye-with-line"
             size={20}
             color={'purple'}
             style={{marginTop: 15, paddingright: 50}}></Icon4>
          }


          
        </TouchableOpacity>
      </View>
      {checkPassword == true ? null : (
        <Text
          style={{
            color: 'red',
            marginHorizontal: 30,
            fontWeight: '500',
            marginTop: 10,
          }}>
          {passworderror}
        </Text>
      )}

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 25,
          marginTop: 25,
          borderRadius: 12,
          borderColor: 'purple',
          borderWidth: 2,
        }}>
        <Icon2
          name="lock"
          size={19}
          color={'purple'}
          style={{paddingVertical: 16, paddingHorizontal: 8}}></Icon2>
        <TextInput
          style={styles.passtextinput}
          placeholder="Confirm Password"
          placeholderTextColor={'black'}
          onChangeText={setcnfPassword}
          onEndEditing={validateconfirmpassword}
          value={cnfPassword}></TextInput>
      </View>
      {checkcnfPassword == true ? null : (
        <Text
          style={{
            color: 'red',
            marginHorizontal: 30,
            fontWeight: '500',
            marginTop: 10,
          }}>
          {cnfpassworderror}
        </Text>
      )}

      <Dropdown />

      <Datecompo />

      <TouchableOpacity
        style={{
          marginHorizontal: 60,
          backgroundColor: 'purple',
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 15,
          marginTop: 35,
        }}>
        <Text style={styles.signuptext}>Sign Up</Text>
      </TouchableOpacity>

      <View style={{flex: 1, flexDirection: 'row'}}>
        <Text
          style={{
            paddingLeft: 78,
            marginTop: 25,
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Already have a account
        </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('LogIn')}>
          <Text style={styles.logintext}>Login</Text>
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
    width: '89%',
    fontSize: 15,
    fontWeight: '500',
  },
  passtextinput: {
    width: '83%',
    fontSize: 15,
    fontWeight: '500',
  },
  textinput: {
    borderWidth: 2,
    borderColor: 'purple',
    marginTop: 35,
    borderRadius: 17,
    marginLeft: 20,
    marginRight: 45,
    paddingLeft: 18,
    fontWeight: 'bold',
    fontSize: 17,
    fontWeight: '500',
  },
  text: {
    margin: 20,
    fontSize: 17,
    paddingLeft: 70,
    fontWeight: '700',
  },

  signuptext: {
    fontSize: 17,
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
  },
  logintext: {
    marginLeft: 7,
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
    marginTop: 25,
  },
});

export default SignUp;
