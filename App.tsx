import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ComponenteParcial01 from './src/primera-parcial/ComponenteParcial01';
import PropsParcial02 from './src/primera-parcial/PropsParcial02';
import AxiosParcial03 from './src/primera-parcial/AxiosParcial03';
import AsyncStorageParcial04 from './src/primera-parcial/AsyncStorageParcial04';
import ComponenteParcial00 from './src/simulacro_parcial/ComponenteParcial00';
import PropsParcial00 from './src/simulacro_parcial/PropsParcial00';
import AxiosParcial00 from './src/simulacro_parcial/AxiosParcial00';
import AsyncStorageParcial00 from './src/simulacro_parcial/AsyncStorageParcial00';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ComponenteParcial00">
        <Stack.Screen name="ComponenteParcial00" component={ComponenteParcial00} />
        <Stack.Screen name="PropsParcial00" component={PropsParcial00} />
        <Stack.Screen name="AxiosParcial00" component={AxiosParcial00} />
        <Stack.Screen name="AsyncStorageParcial00" component={AsyncStorageParcial00} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
