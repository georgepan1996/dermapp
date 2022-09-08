import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {handleLogin} from '../../../firebase.js'

import styles from '../../styles/Styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
      <View style={styles.loginContainer}>
        <View style={styles.loginHeader}>
          <Image
              style={styles.loginLogo}
              source={require('../../../assets/skincare-logo-face-drop.jpg')}
          >
          </Image>
          <Text style={styles.loginHeaderText}>
            Stay informed about your skin's protection any time!
          </Text>
        </View>
        <View style={styles.loginSection}>

          <View style={styles.userConnectionInputs}>
            <TextInput
                placeholder='Email'
                style={styles.userInfoInput}
            >
            </TextInput>
            <TextInput
                placeholder='Password'
                style={styles.userInfoInput}
            >
            </TextInput>
          </View>
          <TouchableOpacity
              style={styles.userSubmitButton}
              onPress={() => handleLogin('admin@admin.com', '12345678')}
          >
            <Text style={styles.userSubmitButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.onlyTextButton}
          >
            <Text style={[styles.onlyTextButtonText, styles.shadowText]}>forgot password?</Text>
          </TouchableOpacity>
          <View
              style={styles.beforeFooterTextContainer}
          >
            <Text
                style={[styles.beforeFooterText, styles.shadowText]}
            >
              Or sign up with
            </Text>
          </View>
        </View>
        <View style={styles.loginFooter}>
          <Icon
              style={styles.loginIcon}
              name='google'
              color='red'
          />
          <Icon
              style={styles.loginIcon}
              name='facebook-square'
              color='blue'
          />
          <Icon
              style={styles.loginIcon}
              name='instagram'
              color='purple'
          />
        </View>
      </View>
  )
};

export default LoginScreen;
