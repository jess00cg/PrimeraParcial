import React from 'react';
import { View, Text } from 'react-native';
import estilos from './EstilosParcial';

const PropsParcial02 = ({ route }) => {
  const { materia, nota } = route.params;

  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>
        En la materia: {materia}, recibí la siguiente nota: {nota}
      </Text>
    </View>
  );
};

export default PropsParcial02;
