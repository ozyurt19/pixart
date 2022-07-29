import React from 'react';
import { StyleSheet } from 'react-native';
import { Home } from './screens/home';
import { Saved } from './screens/saved';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer style={styles.main}>
      <Navigator
      //screenOptions={{
      //  headerShown: false,
      //}}
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: '#9db8d4',
            },
          }}
        />
        <Screen
          name="Saved"
          component={Saved}
          options={{
            headerStyle: {
              backgroundColor: '#9db8d4',
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundcolor: 'white',
  },
});

export { App };
