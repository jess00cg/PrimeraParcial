import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import estilos from './EstilosParcial';

const AsyncStorageParcial04 = () => {
  const [codigo, setCodigo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [materia, setMateria] = useState('');
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
        item.id === editingItemId ? { id: item.id, codigo, carrera, materia } : item
      );
      setItems(updatedItems);
      await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
      setEditingItemId(null);
    } else {
      const newItem = { id: Date.now().toString(), codigo, carrera, materia };
      const updatedItems = [...items, newItem];
      setItems(updatedItems);
      await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
    }
    setCodigo('');
    setCarrera('');
    setMateria('');
  };

  const deleteItem = async (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const editItem = (item) => {
    setCodigo(item.codigo);
    setCarrera(item.carrera);
    setMateria(item.materia);
    setEditingItemId(item.id);
  };

  return (
    <View style={estilos.container}>
      <TextInput
        placeholder="Código"
        value={codigo}
        onChangeText={setCodigo}
        style={estilos.input}
      />
      <TextInput
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
        style={estilos.input}
      />
      <TextInput
        placeholder="Materia"
        value={materia}
        onChangeText={setMateria}
        style={estilos.input}
      />
      <Button title={editingItemId ? "Actualizar" : "Guardar"} onPress={storeItem} color={estilos.boton.backgroundColor} />

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={estilos.listItem}>
            <Text>{item.codigo} - {item.carrera} - {item.materia}</Text>
            <View style={estilos.buttonContainer}>
              <Button title="Editar" onPress={() => editItem(item)} color={estilos.boton.backgroundColor} />
              <Button title="Eliminar" onPress={() => deleteItem(item.id)} color={estilos.boton.backgroundColor} />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default AsyncStorageParcial04;
