import { getAuth } from 'firebase/auth';
import React from 'react';
import { Image, ImageBackground, Pressable, ScrollView, Text, View } from 'react-native';
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
      description: `
        O MASP (Museu de Arte de São Paulo) é um museu icônico localizado na Avenida Paulista, projetado pela arquiteta Lina Bo Bardi. Conhecido pelo seu famoso vão livre de mais de 70 metros, o espaço abaixo do museu funciona como uma praça pública e oferece uma vista incrível da cidade.
  
        Localização:
        O MASP está localizado na Avenida Paulista, um dos principais pontos turísticos de São Paulo. O edifício do museu é famoso pelo seu vão livre de mais de 70 metros, proporcionando uma vista deslumbrante.
  
        Acervo:
        O MASP possui a mais importante coleção de arte ocidental da América Latina e do hemisfério sul, com cerca de 10 mil peças, abrangendo arte africana, americana, asiática, brasileira e europeia. A coleção inclui pinturas, esculturas, fotografias e outras formas de arte, desde a Antiguidade até o século 21.
  
        Exposições:
        O museu apresenta uma mostra de longa duração, chamada Acervo em Transformação, que é complementada por exposições temporárias, muitas vezes focadas em temas históricos e culturais, como a série Histórias.
  
        Cavaletes de Cristal:
        Uma das características marcantes da experiência no MASP são os cavaletes de cristal desenhados por Lina Bo Bardi. Eles suspendem as obras de arte em suportes transparentes, permitindo que os visitantes possam observar as peças de diferentes ângulos, aproximando o público das obras.
  
        Importância Cultural:
        O MASP é um dos museus mais importantes e visitados do Brasil, sendo frequentemente listado entre os melhores do mundo. Ele foi pioneiro em acolher tendências artísticas modernas e contemporâneas.
  
        Expansão:
        O MASP está em fase de expansão com a construção de um novo edifício chamado Pietro Maria Bardi, que será conectado ao prédio principal por uma passagem subterrânea. A inauguração está prevista para 2024, e o novo espaço contará com galerias, salas de aula, restaurante e outras facilidades para os visitantes.
      `,
    },
    {
      name: 'Teatro Municipal de São Paulo',
      image: require('../../../assets/Teatro-Municipal-sp.jpg'),
      description: `
      O Teatro Municipal de São Paulo é um dos mais importantes e icônicos teatros do Brasil, conhecido por sua arquitetura esplêndida e sua rica programação cultural. Localizado no centro de São Paulo, o teatro é um marco histórico e cultural da cidade.

      Localização:
      O Teatro Municipal está situado na Praça Ramos de Azevedo, no centro de São Paulo. A sua localização central torna-o acessível a partir de várias partes da cidade e é próximo de outros pontos turísticos e centros culturais.

      Arquitetura:
      O teatro é um exemplo notável da arquitetura neoclássica e foi inspirado em grandes teatros europeus. Projetado pelo arquiteto Ramos de Azevedo, o edifício é conhecido por sua fachada imponente, seus grandiosos salões e seu luxuoso interior. O Teatro Municipal foi inaugurado em 1911 e passou por várias reformas ao longo dos anos para preservar sua beleza e funcionalidade.

      Programação:
      O Teatro Municipal de São Paulo oferece uma vasta programação cultural que inclui óperas, ballets, concertos e peças teatrais. É conhecido por receber apresentações de alta qualidade e por seu papel na promoção das artes cênicas na cidade.

      Importância Cultural:
      O Teatro Municipal é um importante centro cultural e artístico de São Paulo, frequentemente listado entre os melhores teatros do país. Sua importância vai além das performances que oferece, servindo como um símbolo do patrimônio cultural e histórico da cidade.

      Visitação:
      O teatro está aberto ao público para visitas guiadas e apresentações. As visitas permitem que os visitantes explorem os belos interiores e aprendam sobre a história e a arquitetura do local. Recomenda-se verificar a programação e reservar ingressos com antecedência para assistir a uma das muitas apresentações oferecidas.

      Renovação:
      O Teatro Municipal passou por várias renovações e restaurações ao longo dos anos para garantir que continue a ser um dos principais centros culturais de São Paulo. Essas reformas visam preservar a integridade histórica do edifício enquanto modernizam suas instalações para o conforto dos visitantes.
    `,
    },
    // Adicione mais lugares aqui com descrição
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>TechPeach</Text>

        {/* Botão de Logout substituindo o ícone */}
        <Pressable
          style={({ pressed }) => [
            styles.logoutButton,
            { backgroundColor: pressed ? '#d9534f' : '#eca406' }
          ]}
          onPress={logout}
        >
          <Text style={styles.logoutText}>Log Out</Text>
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
