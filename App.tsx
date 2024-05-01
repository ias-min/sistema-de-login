import { useState } from 'react'
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { styles } from './styles'

export default function App() {
  const [emailField, setEmailField] = useState<string>('')
  const [passwordField, setPasswordField] = useState<string>('')
  const [loginPage, setLoginPage] = useState<string>('true')
  const [registerPage, setRegisterPage] = useState<string>('false')
  const [recoverPage, setRecoverPage] = useState<string>('false')
  const [userPage, setUserPage] = useState<string>('false')
  const [ cpfField, setCpfField] = useState<string>('')
  const [ dataNascimentoField, setDataNascimentoField] = useState<string>('')


  //Função voltar
  const handleBackButton = () => {
    setLoginPage('true')
    setUserPage('false')
    setRecoverPage('false')
    setRegisterPage('false')
  }
  

  //Função Esqueci minha senha
  const handleForgotButton = () => {
    alert('Verifique seu email, pois lá estará sua nova senha para acessar o APP.')
  }

  //Função do Botão
  const handleLoginButton = () => {
    setLoginPage('false')
    setUserPage('true')
  };

  //Função do Cadastra-se 
  const handleSignUpButton = () => {
    setLoginPage('false')
    setRegisterPage('true')
  }

  //Entrar pós cadastro
  const handleRegisterButton = () => {
    setRegisterPage('false')
    setUserPage('true')
  };

  return (
    <ScrollView style={styles.scrollview}>
    {loginPage == 'true' &&
        <>
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
              onPress={handleSignUpButton}>
              <Text style={styles.signUpBtnText}>Cadastre-se</Text>
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerArea}>
          <Text style={styles.footerText}>Criado por Iasmin Estevão</Text>
        </View>
      </View>
      </>
      } 
      {
        userPage == 'true' &&
        <>
        <View style = {styles.home}>
					<View>
            <TouchableOpacity onPress={handleBackButton}>
            	<Text style={styles.txtButton}>Books Online</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.linha}></Text>
          </View>
          <View>
            <Text style={styles.txtEscolhe}>Escolha seu genêro:</Text>
           <TextInput
              style={styles.inputField}
              placeholder="Qual genêro textual você quer ler?"
              placeholderTextColor="#d1d1d1"
            />
          </View>
          <View>
            <Text style={styles.linha}></Text>
          </View>
          <View style={styles.viewLinha}>
            <Image style={styles.image} source={require('./assets/desenho.jpg')}/>
            <Image style={styles.image} source={require('./assets/comedia.png')}/>
            <Image style={styles.image} source={require('./assets/romance.jpeg')}/>
          </View>
          <View style={styles.textLinha}>
            <Text style={styles.textOrgazinar1}>Infantil</Text>
            <Text style={styles.textOrgazinar2}>Comédia</Text>
            <Text style={styles.textOrgazinar3}>Romance</Text>
          </View>
          <View style={styles.viewLinha}>
            <Image style={styles.image} source={require('./assets/ficcao.jpeg')}/>
            <Image style={styles.image} source={require('./assets/novela.jpg')}/>
            <Image style={styles.image} source={require('./assets/bio.png')}/>
          </View>
          <View style={styles.textLinha}>
            <Text style={styles.textOrgazinar4}>Ficção</Text>
            <Text style={styles.textOrgazinar5}>Novela</Text>
            <Text style={styles.textOrgazinar6}>Biografia</Text>
          </View>
          <View style={styles.viewLinha}>
            <Image style={styles.image} source={require('./assets/cozinha.png')}/>
            <Image style={styles.image} source={require('./assets/images.jpeg')}/>
            <Image style={styles.image} source={require('./assets/terror.jpg')}/>
          </View>
          <View style={styles.textLinha}>
            <Text style={styles.textOrgazinar7}>Gastronomia</Text>
            <Text style={styles.textOrgazinar8}>Aventura</Text>
            <Text style={styles.textOrgazinar9}>Terror</Text>
          </View>          
          <View>
            <Text style={styles.linhaDois}></Text>
          </View>
          <View style={styles.menuLinha}>
            <Image style={styles.menu} source={require('./assets/icons8-casa-48.png')}/>
            <Image style={styles.menu} source={require('./assets/icons8-pesquisar-50.png')}/>
            <Image style={styles.menu} source={require('./assets/icons8-literatura-50.png')}/>
            <Image style={styles.menu} source={require('./assets/icons8-pessoa-do-sexo-masculino-64.png')}/>
          </View>
        </View>
        </>
      }
      
      {
        registerPage == 'true' &&
        <>
          <View>
            <TouchableOpacity onPress={handleBackButton}>
            	<Text style={styles.txtButton}>Books Online</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.linha}></Text>
          </View>
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
          <Text style={styles.inputLabel}>CPF</Text>
          <TextInput
            style={styles.inputField}
            placeholder="000.000.000-00"
            placeholderTextColor="#d1d1d1"
            value={cpfField}
            onChangeText={(t) => setCpfField(t)}
          />
        </View>
         <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Data de Nascimento</Text>
          <TextInput
            style={styles.inputField}
            placeholder="00/00/0000"
            placeholderTextColor="#d1d1d1"
            value={dataNascimentoField}
            onChangeText={(t) => setDataNascimentoField(t)}
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
        <TouchableOpacity style={styles.buttonC} onPress={handleRegisterButton}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        </>
      }
    </ScrollView>
  )
}
