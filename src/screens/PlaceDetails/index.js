import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from "./style";

const PlaceDetails = ({ route, navigation }) => {
  const { place } = route.params;

  return (
    <View style={styles.container}>
      <Image source={place.image} style={styles.image} />


      {/* Botão de voltar para a Home */}
      <Pressable
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Voltar para Home</Text>
      </Pressable>


      <Text style={styles.title}>{place.name}</Text>

      {/* Exibir a descrição real */}
      <Text style={styles.description}>
        {place.description ? place.description : `Descrição detalhada sobre ${place.name}...`}
      </Text>

    </View>
  );
};

export default PlaceDetails;
