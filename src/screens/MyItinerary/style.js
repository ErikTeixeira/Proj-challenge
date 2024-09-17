import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Alinha o botão de voltar à esquerda
    padding: 20,
    marginBottom: 20, 
  },
  arrow: {
    marginRight: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itineraryContent: {
    flex: 1, // O conteúdo do itinerário ocupa o espaço disponível
  },
  deleteButton: {
    padding: 10, 
  },
  itineraryItem: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#fff', 
    flexDirection: 'row', // Adicione esta linha
    alignItems: 'center'  // Alinhe os itens verticalmente ao centro
  },
  itineraryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
  
export default styles;