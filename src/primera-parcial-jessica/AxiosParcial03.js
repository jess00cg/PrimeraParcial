import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';
import axios from 'axios';
import styles from './EstilosParcial';

const AxiosParcial03 = () => {
  const [albums, setAlbums] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(response => setAlbums(response.data))
      .catch(error => console.log(error));
  }, []);

  const filteredAlbums = albums.filter(album =>
    album.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar álbum"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredAlbums}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.listItem}>{item.title}</Text>}
      />
    </View>
  );
};

export default AxiosParcial03;
