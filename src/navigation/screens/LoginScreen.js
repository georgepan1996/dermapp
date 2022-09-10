import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { signIn } from '../../firebase/config';

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
        ></Image>
        <Text style={styles.loginHeaderText}>
          Stay informed about your skin's protection any time!
        </Text>
      </View>
      <View style={styles.loginSection}>
        <View style={styles.userConnectionInputs}>
          <TextInput
            placeholder='Email'
            style={styles.userInfoInput}
            value={email}
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
          <TextInput
            placeholder='Password'
            style={styles.userInfoInput}
            value={password}
            onChangeText={(text) => setPassword(text)}
          ></TextInput>
        </View>
        <TouchableOpacity
          style={styles.userSubmitButton}
          onPress={() => signIn(email, password)}
        >
          <Text style={styles.userSubmitButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace('Signup')}>
          <Text style={[styles.beforeFooterText, styles.shadowText]}>
            or create an account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.onlyTextButton}>
          <Text style={[styles.onlyTextButtonText, styles.shadowText]}>
            forgot password?
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginFooter}>
        <Icon style={styles.loginIcon} name='google' color='black' />
        <Icon style={styles.loginIcon} name='facebook-square' color='black' />
        <Icon style={styles.loginIcon} name='instagram' color='black' />
      </View>
    </View>
  );
};

export default LoginScreen;
