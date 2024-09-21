import React, { useState } from 'react';
import { View, Text, Pressable, ImageBackground, ScrollView, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { app } from '../../../firebaseConfig';

import InputText from '../../components/InputText/index'; 

import styles from './style'; 

const Register = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(null);

  const auth = getAuth(app);
  const db = getFirestore(app);

  const handleIdadeChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, ''); // Permite apenas números
    setIdade(numericText);
  };

  const handleCadastro = async () => {
    const idadeNum = parseInt(idade, 10);

    if (idadeNum < 10) {
      Alert.alert('Erro', 'Você precisa ter pelo menos 10 anos para se cadastrar.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: nome,
      });

      await setDoc(doc(db, 'users', user.uid), {
        nome: nome,
        idade: idade,
        endereco: endereco,
        email: email,
      });

      navigation.navigate('Home'); 

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/login.jpg')}
      style={styles.image}
      blurRadius={1}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Text style={styles.title}>TechPeach - Cadastro</Text>

          {error && <Text style={styles.errorText}>{error}</Text>}

          <InputText 
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />

          <InputText 
            style={styles.input}
            placeholder="Idade"
            value={idade}
            onChangeText={handleIdadeChange} 
            keyboardType="numeric" 
          />

          <InputText 
            style={styles.input}
            placeholder="Endereço"
            value={endereco}
            onChangeText={setEndereco}
          />

          <InputText 
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address" 
          />

          <InputText 
            style={styles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          {/* Botão Cadastrar */}
          <Pressable
            onPress={handleCadastro}
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#D49203FF' : '#FFBE31FF' }
            ]}
          >
            <Text style={styles.text}>Cadastrar</Text>
          </Pressable>

          {/* Botão Voltar */}
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#D49203FF' : '#FFBE31FF' }
            ]}
            onPress={() => navigation.navigate('Login')} 
          >
            <Text style={styles.text}>Voltar</Text>
          </Pressable>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Register;