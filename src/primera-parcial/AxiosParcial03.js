import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import axios from 'axios';
import estilos from './EstilosParcial';

const AxiosParcial03 = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsuarios(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={estilos.container}>
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={estilos.item}>{item.username}</Text>
        )}
      />
    </View>
  );
};

export default AxiosParcial03;
