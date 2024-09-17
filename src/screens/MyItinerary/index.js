import { Ionicons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { useItineraries } from '../../components/ItineraryContext';

import styles from "./style";

const MyItinerary = ({ navigation }) => {
  // Obtém os itinerários e a função deleteItinerary do contexto
  const { itineraries, deleteItinerary, updateCounter } = useItineraries();

  const handleItineraryPress = (itinerary) => {
    navigation.navigate('DetalhesItinerario', { itinerary: itinerary.data });
  };

  // Adiciona um useEffect para forçar a re-renderização quando updateCounter mudar
  useEffect(() => {
    // Este useEffect será executado sempre que o updateCounter mudar
  }, [updateCounter]);

  const renderItineraryItem = ({ item }) => (
    <View style={styles.itineraryItem} key={item.id}>
      <TouchableOpacity
        onPress={() => handleItineraryPress(item)}
        style={styles.itineraryContent}
      >
        <Text style={styles.itineraryTitle}>Itinerário</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          const index = itineraries.findIndex(it => it.id === item.id);
          if (index > -1) {
            deleteItinerary(index);
          } else {
            console.error("Itinerário não encontrado para exclusão.");
          }
        }}
        style={styles.deleteButton}
      >
        <Ionicons name="trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.arrow}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Meus Itinerários</Text>
      </View>

      {itineraries.length === 0 ? (
        <Text style={styles.emptyText}>Nenhum itinerário encontrado.</Text>
      ) : (
        <FlatList
          data={itineraries}
          renderItem={renderItineraryItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          &#169; TechPeach Copyright 2024
        </Text>
      </View>
    </View>
  );
};

export default MyItinerary;
