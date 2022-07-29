/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Dimensions,
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import React, { useState, useEffect } from 'react';
import { ColorTable } from '../../components/colorTable';
import { getItem } from '../../utils/storage';

const Saved = ({ navigation }) => {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    const savedArtsStr = getItem('savedArts');
    if (savedArtsStr) {
      setArts(JSON.parse(savedArtsStr));
    }
  }, []);

  return (
    <View style={styles.main}>
      <StatusBar barStyle={'light-content'} translucent />
      <FlatList
        style={styles.saveElement}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={
          Dimensions.get('window').height - 2 * getStatusBarHeight()
        }
        //ListHeaderComponent={artTableView}
        data={arts}
        renderItem={({ item, index }) => (
          <View
            key={index}
            style={{
              borderWidth: 0,
              height:
                Dimensions.get('window').height - 2 * getStatusBarHeight(),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ColorTable data={item} />
          </View>
        )}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        keyExtractor={(d, i) => i + ''}
        disableIntervalMomentum
      />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: getStatusBarHeight(),
    backgroundColor: '#9db8d4',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: getStatusBarHeight(),
  },
  saveElement: {
    backgroundColor: '#9db8d4',
  },
});

export { Saved };
