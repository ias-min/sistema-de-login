import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: '#9B82C2',
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  container: {
    alignItems: 'center'
  },
  logo: {
    width: 150,
    height: 150,
  },
  h1: {
    color: '#32004a',
    fontSize: 27,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  h2: {
    color: '#fff',
    fontSize: 15,
  },
  inputArea: {
    width: '100%',
    paddingTop: 20,
  },
  inputLabel: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 7,
    
  },
  inputField: {
    color: '#000',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#ddd',
    fontSize: 15,
    padding: 10,
  },
  aditionals: {
    width: '100%',
  },
  forgotBtnArea: {
    paddingVertical: 20,
    alignSelf: 'flex-end',
  },
  forgotBtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#32004a'
  },
  button: {
    backgroundColor: '#32004a',
    width: '100%',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
  },
  signUpArea: {
    flexDirection: 'row',
    marginTop: 30,
  },
  signUpText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 3
  },
  signUpBtnText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#32004a',
    marginLeft: 5,
    marginBottom: 68
  },
  footerArea: {
    marginVertical: 30,
  },
  footerText: {
    fontSize: 13,
    color: '#fff',
  },
})