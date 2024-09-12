import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './EstilosParcial';

const ComponenteParcial00 = () => {
  const [materia, setMateria] = useState('');
  const [nota, setNota] = useState('');
  const navigation = useNavigation();

  const data = [
    { key: '1', screen: 'PropsParcial00', label: 'PropsParcial00' },
    { key: '2', screen: 'AxiosParcial00', label: 'AxiosParcial00' },
    { key: '3', screen: 'AsyncStorageParcial00', label: 'AsyncStorageParcial00' },
  ];

  const handleNavigate = (screen) => {
    navigation.navigate(screen, { materia, nota });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Examen Primera Parcial</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresar nombre de materia"
        value={materia}
        onChangeText={setMateria}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingresar nota"
        value={nota}
        onChangeText={setNota}
        keyboardType="numeric"
      />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleNavigate(item.screen)}>
            <Text style={styles.listItem}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ComponenteParcial00;
