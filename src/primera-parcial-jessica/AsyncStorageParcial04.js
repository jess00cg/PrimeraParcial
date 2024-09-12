import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './EstilosParcial';

const AsyncStorageParcial04 = () => {
  const [codigo, setCodigo] = useState('');
  const [materia, setMateria] = useState('');
  const [calificaciones, setCalificaciones] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const saveData = async () => {
    const newData = { codigo, materia, calificaciones };
    const jsonValue = JSON.stringify([...data, newData]);
    await AsyncStorage.setItem('datos', jsonValue);
    setData([...data, newData]);
  };

  const loadData = async () => {
    const jsonValue = await AsyncStorage.getItem('datos');
    if (jsonValue !== null) {
      setData(JSON.parse(jsonValue));
    }
  };

  const deleteData = async (index) => {
    const newData = data.filter((_, i) => i !== index);
    const jsonValue = JSON.stringify(newData);
    await AsyncStorage.setItem('datos', jsonValue);
    setData(newData);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Codigo"
        value={codigo}
        onChangeText={setCodigo}
      />
      <TextInput
        style={styles.input}
        placeholder="Materia"
        value={materia}
        onChangeText={setMateria}
      />
      <TextInput
        style={styles.input}
        placeholder="Calificaciones"
        value={calificaciones}
        onChangeText={setCalificaciones}
      />
      <Button title="Guardar" onPress={saveData} />
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text>{item.codigo} - {item.materia} - {item.calificaciones}</Text>
            <Button title="Eliminar" onPress={() => deleteData(index)} />
          </View>
        )}
      />
    </View>
  );
};

export default AsyncStorageParcial04;
