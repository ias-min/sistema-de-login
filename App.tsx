import { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Linking
} from 'react-native';
import { styles } from './styles';

export default function App() {
  const [emailField, setEmailField] = useState<string>('');
  const [passwordField, setPasswordField] = useState<string>('');

  //Função Esqueci minha senha
  const handleForgotButton = () => {
    alert('Verifique seu email, pois lá estará sua nova senha para acessar o APP.')
  };

  //Função do Botão
  const handleLoginButton = () => {
    alert('Parabéns! Você está logado.')
  };

  //Função do Cadastra-se
  const handleSignUpButton = () => {};

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/logo2.png')} />
        <Text style={styles.h1}>Books Online</Text>
        <Text style={styles.h2}>Bem vindo(a)! Digite seus dados abaixo.</Text>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite seu email"
            placeholderTextColor="#d1d1d1"
            value={emailField}
            onChangeText={(t) => setEmailField(t)}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput
            style={styles.inputField}
            placeholder="**********"
            placeholderTextColor="#d1d1d1"
            value={passwordField}
            onChangeText={(t) => setPasswordField(t)}
            autoCapitalize="none"
            secureTextEntry
          />
        </View>

        <View style={styles.aditionals}>
          <TouchableOpacity
            style={styles.forgotBtnArea}
            onPress={handleForgotButton}>
            <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLoginButton}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.signUpArea}>
          <Text style={styles.signUpText}>Não tem conta?</Text>
          <TouchableOpacity onPress={handleSignUpButton}>
            <Text
              style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}
              onPress={() =>
                Linking.openURL(
                  'https://www.figma.com/file/AnlFdosJN2CkdMxihJYzLt/Untitled?type=design&node-id=0-1&mode=design&t=UnNnAjQsRrpjQmGb-0'
                )
              }>
              <Text style={styles.signUpBtnText}>Cadastre-se</Text>
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerArea}>
          <Text style={styles.footerText}>Criado por Iasmin Estevão</Text>
        </View>
      </View>
    </ScrollView>
  );
}
