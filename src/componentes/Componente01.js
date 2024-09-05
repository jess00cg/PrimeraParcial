import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilos from './Estilos';

const Componente01 = () => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

  const items = [
    { id: '1', title: 'Props02', screen: 'Props02' },
    { id: '2', title: 'Axios03', screen: 'Axios03' },
    { id: '3', title: 'AsyncStorage04', screen: 'AsyncStorage04' },
  ];

  return (
    <View style={estilos.container}>
      <Text style={estilos.headingText}>Pantalla Principal</Text>
      <TextInput
        placeholder="Ingresa un texto"
        value={inputText}
        onChangeText={setInputText}
        style={estilos.textInput}
      />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen, { nombre: inputText, estado: false })}
          >
            <Text style={estilos.listItem}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Componente01;
