import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './@types/Root';
import Hello from './components/Hello';
import Home from './components/Home';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Hello" component={Hello} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
