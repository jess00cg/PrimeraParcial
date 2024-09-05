import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilos from './EstilosParcial';

const ComponenteParcial01 = () => {
  const [materia, setMateria] = useState('');
  const [nota, setNota] = useState('');
  const navigation = useNavigation();

  const items = [
    { id: '1', title: 'PropsParcial02', screen: 'PropsParcial02' },
    { id: '2', title: 'AxiosParcial03', screen: 'AxiosParcial03' },
    { id: '3', title: 'AsyncStorageParcial04', screen: 'AsyncStorageParcial04' },
  ];

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Examen Primera Parcial</Text>
      <TextInput
        placeholder="Ingresar nombre de materia"
        value={materia}
        onChangeText={setMateria}
        style={estilos.input}
      />
      <TextInput
        placeholder="Ingresar nota"
        value={nota}
        onChangeText={setNota}
        style={estilos.input}
        keyboardType="numeric"
      />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen, { materia, nota })}
          >
            <Text style={estilos.item}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ComponenteParcial01;
