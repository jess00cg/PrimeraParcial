import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Avatar, SpeedDial } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import styles from './EstilosParcial';

const ComponenteParcial01 = () => {
  const [carrera, setCarrera] = useState('');
  const [duracion, setDuracion] = useState('');
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();

  const data = [
    { key: '1', screen: 'PropsParcial02', label: 'PropsParcial02' },
    { key: '2', screen: 'AxiosParcial03', label: 'AxiosParcial03' },
    { key: '3', screen: 'AsyncStorageParcial04', label: 'AsyncStorageParcial04' },
  ];

  const handleNavigate = (screen) => {
    navigation.navigate(screen, { carrera, duracion });
  };

  return (
    <View style={styles.container}>
      <Avatar
        size="xlarge"
        rounded
        source={{ uri: 'https://example.com/avatar.png' }}
        containerStyle={styles.avatar}
      />
      <Text style={styles.title}>Examen Primera Parcial</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresar carrera"
        value={carrera}
        onChangeText={setCarrera}
      />
      <TextInput
        style={styles.input}
        placeholder="Duración de carrera"
        value={duracion}
        onChangeText={setDuracion}
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
      <SpeedDial
        isOpen={open}
        icon={{ name: 'edit', color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
      />
    </View>
  );
};

export default ComponenteParcial01;
