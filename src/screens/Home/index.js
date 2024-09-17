import React from 'react';
import { View, Text, Pressable, ImageBackground, ScrollView, Image } from 'react-native';
import { getAuth } from 'firebase/auth';
import { app } from '../../../firebaseConfig';

import styles from "./style";

const HomeScreen = ({ navigation }) => {

  const logout = () => {
    const auth = getAuth(app);
    auth.signOut().then(() => {
      navigation.navigate('Login');
    }).catch((error) => {
      console.log("Erro ao deslogar:", error);
    });
  };

  const handleSaveItinerary = (newItineraryData) => {
    setItineraries([...itineraries, { id: Date.now(), data: newItineraryData }]);
  };


  const recommendedPlaces = [
    {
      name: 'MASP',
      image: require('../../../assets/masp.jpg'),
      description: 'O MASP é um museu icônico localizado na Avenida Paulista, conhecido por sua vasta coleção de arte moderna e contemporânea.',
    },
    {
      name: 'Teatro Municipal de São Paulo',
      image: require('../../../assets/Teatro-Municipal-sp.jpg'),
      description: 'O Mercado Municipal de São Paulo é famoso por suas barracas de alimentos e o sanduíche de mortadela.',
    },
    // Adicione mais lugares aqui com descrição
  ];


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>
          TechPeach
        </Text>
        
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? '#908A8A' : '#908A8A' }
          ]}
          onPress={logout}
        >
          <img style={styles.icon} src='../../assets/perfil-de-usuario.png' />
        </Pressable>
      </View>

      <View style={styles.containerButtons}>
        <ImageBackground 
          source={require('../../../assets/av-paulista.jpg')}
          style={styles.divText}
          imageStyle={{ borderRadius: 15 }} 
        >
          <View style={styles.overlay}>
            <Text style={styles.textOverlay}> 
              Explore São Paulo de uma forma totalmente personalizada com os itinerários exclusivos. Deixe-nos guiar você em uma experiência única pela vibrante São Paulo.
            </Text>  
          </View>
        </ImageBackground>

        <View style={styles.buttonRow}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#908A8A' : '#E8E8E8' }
            ]}
            onPress={() => navigation.navigate('MeusItinerarios', { handleSaveItinerary })} 
          >
            <Text style={styles.text}>MEUS ITINERÁRIOS</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#908A8A' : '#E8E8E8' }
            ]}
            onPress={() => navigation.navigate('Formulario')}
          >
            <Text style={styles.text}>CRIAR ITINERÁRIOS</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.recommendedSection}>
        <Text style={styles.recommendedTitle}>Lugares Com Cupons</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {recommendedPlaces.map((place, index) => (
            <Pressable
              key={index}
              style={styles.recommendedItem}
              onPress={() => navigation.navigate('Detalhes', { place })} // Passando o lugar como parâmetro
            >
              <Image source={place.image} style={styles.recommendedImage} />
              <Text style={styles.recommendedText}>{place.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <View style={styles.recommendedSection}>
        <Text style={styles.recommendedTitle}>Lugares Recomendados</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {recommendedPlaces.map((place, index) => (
            <Pressable
              key={index}
              style={styles.recommendedItem}
              onPress={() => navigation.navigate('Detalhes', { place })} // Passando o lugar como parâmetro
            >
              <Image source={place.image} style={styles.recommendedImage} />
              <Text style={styles.recommendedText}>{place.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>


    </ScrollView>
  );
}

export default HomeScreen;
