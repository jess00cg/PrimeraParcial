import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import estilos from './Estilos';

const AsyncStorage04 = () => {
  const [nombre, setNombre] = useState('');
  const [cedula, setCedula] = useState('');
  const [items, setItems] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null);

  const loadItems = async () => {
    const storedItems = await AsyncStorage.getItem('items');
    if (storedItems) setItems(JSON.parse(storedItems));
  };

  useEffect(() => {
    loadItems();
  }, []);

  const storeItem = async () => {
    if (editingItemId) {
      const updatedItems = items.map(item => 
        item.id === editingItemId ? { id: item.id, nombre, cedula } : item
      );
      setItems(updatedItems);
      await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
      setEditingItemId(null);
    } else {
      const newItem = { id: Date.now().toString(), nombre, cedula };
      const updatedItems = [...items, newItem];
      setItems(updatedItems);
      await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
    }
    setNombre('');
    setCedula('');
  };

  const deleteItem = async (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const editItem = (item) => {
    setNombre(item.nombre);
    setCedula(item.cedula);
    setEditingItemId(item.id);
  };

  return (
    <View style={estilos.container}>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={estilos.textInput}
      />
      <TextInput
        placeholder="Cédula"
        value={cedula}
        onChangeText={setCedula}
        style={estilos.textInput}
      />
      <Button title={editingItemId ? "Actualizar" : "Guardar"} onPress={storeItem} color='#4b0082' />

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={estilos.listItem}>
            <Text>{item.nombre} - {item.cedula}</Text>
            <View style={estilos.buttonContainer}>
              <Button title="Editar" onPress={() => editItem(item)} color='#4b0082' />
              <Button title="Eliminar" onPress={() => deleteItem(item.id)} color='#8b0000' />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default AsyncStorage04;
