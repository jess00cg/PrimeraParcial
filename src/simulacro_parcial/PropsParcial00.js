import React from 'react';
import { View, Text } from 'react-native';
import styles from './EstilosParcial';

const PropsParcial00 = ({ route }) => {
  const { materia, nota } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        En la materia: {materia}, recibí la siguiente nota: {nota}
      </Text>
    </View>
  );
};

export default PropsParcial00;
