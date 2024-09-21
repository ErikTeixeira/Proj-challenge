import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center', // Centraliza verticalmente o conteúdo
    padding: 20, 
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    margin: 20,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    paddingBottom: '20%',
    textShadowColor: 'rgba(0, 0, 0, 0.95)',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 4,
  },
  button: {
    width: '55%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 100,
  },
  text: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000',
  },
});

export default styles;