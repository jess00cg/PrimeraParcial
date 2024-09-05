import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import estilos from './EstilosParcial'; // Ajustar la importación según la ubicación del archivo de estilos

const AsyncStorageParcial04 = () => {
  const [codigo, setCodigo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [materia, setMateria] = useState('');
  const [items, setItems] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null); // Estado para manejar la edición

  const loadItems = async () => {
    const storedItems = await AsyncStorage.getItem('items');
    if (storedItems) setItems(JSON.parse(storedItems));
  };

  useEffect(() => {
    loadItems();
  }, []);

  const storeItem = async () => {
    if (editingItemId) {
      // Si estamos editando, actualizar el item existente
      const updatedItems = items.map(item => 
        item.id === editingItemId ? { id: item.id, codigo, carrera, materia } : item
      );
      setItems(updatedItems);
      await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
      setEditingItemId(null); // Limpiar estado de edición
    } else {
      // Si no estamos editando, crear un nuevo item
      const newItem = { id: Date.now().toString(), codigo, carrera, materia };
      const updatedItems = [...items, newItem];
      setItems(updatedItems);
      await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
    }
    setCodigo('');
    setCarrera('');
    setMateria('');
  };

  const editItem = (item) => {
    setCodigo(item.codigo);
    setCarrera(item.carrera);
    setMateria(item.materia);
    setEditingItemId(item.id); // Marcar el item para edición
  };

  return (
    <View style={estilos.container}>
      <TextInput
        placeholder="Código"
        value={codigo}
        onChangeText={setCodigo}
        style={estilos.textInput}
      />
      <TextInput
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
        style={estilos.textInput}
      />
      <TextInput
        placeholder="Materia"
        value={materia}
        onChangeText={setMateria}
        style={estilos.textInput}
      />
      <Button title={editingItemId ? "Actualizar" : "Guardar"} onPress={storeItem} />

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={estilos.listItem}>
            <Text>{item.codigo} - {item.carrera} - {item.materia}</Text>
            <Button title="Editar" onPress={() => editItem(item)} />
          </View>
        )}
      />
    </View>
  );
};

export default AsyncStorageParcial04;
