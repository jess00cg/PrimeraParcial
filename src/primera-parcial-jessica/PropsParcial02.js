import React from 'react';
import { View, Text } from 'react-native';
import styles from './EstilosParcial';

const PropsParcial02 = ({ route }) => {
  const { carrera, duracion } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        La carrera: {carrera}, tiene una duración de {duracion} años.
      </Text>
    </View>
  );
};

export default PropsParcial02;
