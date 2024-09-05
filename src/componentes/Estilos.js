import { StyleSheet } from 'react-native';

const Estilos = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#e6e6fa',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    padding: 10,
    backgroundColor: 'pink',
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#4b0082',
    marginBottom: 10,
    padding: 5,
    color: '#000000',
    width: '100%', // Asegúrate de que el TextInput tenga un ancho adecuado
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#4b0082',
  },
  buttonText: {
    color: '#ffffff',
  },
  headingText: {
    fontSize: 24,
    color: '#000080',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20, // Espacio entre el texto y el TextInput
  },
  regularText: {
    fontSize: 16,
    color: '#000000',
  },
});

export default Estilos;
