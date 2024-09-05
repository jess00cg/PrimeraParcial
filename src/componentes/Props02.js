import React from 'react';
import { View, Text } from 'react-native';
import estilos from './Estilos';

const Props02 = ({ route }) => {
  const { nombre, estado } = route.params;

  return (
    <View style={estilos.container}>
      <Text style={estilos.regularText}>Nombre: {nombre}</Text>
      <Text style={estilos.regularText}>Estado: {estado.toString()}</Text>
    </View>
  );
};

export default Props02;
