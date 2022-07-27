import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Home } from './screens/home';

const App = () => {
  return (
    <View style={styles.main}>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundcolor: 'white',
  },
});

export { App };
