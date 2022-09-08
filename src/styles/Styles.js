import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  //login
  loginContainer: {
    height: '100%',
    borderStyle: 'solid',
    borderColor: '#CC4D08',
  },
  loginHeader: {
    height: '35%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F9F9FB',
    padding: 10,
  },
  loginLogo: {
    width: 130,
    height: 130,
    borderRadius: 100,
    margin: 10,
  },
  loginLogoText: {
    fontWeight: '500',
    fontSize: 15,
    padding: 5,
    textAlign: 'center',
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 5,
  },
  loginHeaderText: {
    fontWeight: '500',
    fontSize: 15,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
    textAlign: 'center',
    fontStyle: 'italic',
    paddingLeft: 60,
    paddingRight: 60,
    // color: '#95D7F1'
    color: '#0C528E',
  },
  loginSection: {
    backgroundColor: 'white',
    height: '55%',
  },
  loginTabs: {
    backgroundColor: '#95D7F1',
  },
  loginFooter: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F9F9FB',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '10%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  loginIcon: {
    fontSize: 24,
  },
  //login, signup
  userConnectionInputs: {
    padding: 15,
  },
  userInfoInput: {
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#0C528E',
    padding: 8,
    margin: 12,
  },
  userSubmitButton: {
    backgroundColor: '#0C528E',
    alignItems: 'center',
    padding: 15,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 15,
  },
  //other cases
  onlyTextButton: {
    padding: 20,
  },
  onlyTextButtonText: {
    fontWeight: '500',
    fontSize: 15,
    padding: 5,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  shadowText: {
    color: 'black',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 0.5 },
    textShadowRadius: 2,
  },
  userSubmitButtonText: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 15,
  },
  beforeFooterTextContainer: {
    marginTop: 'auto',
  },
  beforeFooterText: {
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'notoserif',
    textTransform: 'uppercase',
    textAlign: 'center',
    position: 'relative',
    bottom: 0,
  },
  //login footer

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
  },
  iconsContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconStyle: {
    padding: 20,
  },
  headerContainer: {
    height: '35%',
  },
  sectionContainer: {
    height: '35%',
  },
  footerContainer: {
    height: '30%',
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold',
  },
  smallLinkText: {
    color: 'blue',
    fontSize: 12,
    paddingLeft: 20,
  },
  card: {
    width: 350,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#101010',
    margin: 10,
    padding: 10,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
    color: '#ffd700',
    marginBottom: 5,
  },
  buttonContainer: {
    borderRadius: 5,
    padding: 20,
    paddingBottom: 0,
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputContainer: {
    // width: '80%',
    padding: 10,
    paddingBottom: 0,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
});
