import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E0FFFF', // Celeste claro
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  item: {
    padding: 15,
    backgroundColor: '#87CEFA', // Azul claro
    marginBottom: 10,
    textAlign: 'center',
  },
  boton: {
    backgroundColor: '#4682B4', // Azul oscuro
  },
  listItem: {
    padding: 10,
    backgroundColor: 'lightgray',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default estilos;
