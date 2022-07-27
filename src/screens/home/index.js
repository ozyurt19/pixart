/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  Dimensions,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { ColorTable } from '../../components/colorTable';
import { ColorPalette } from '../../components/colorPalette';
import { SaveButton } from '../../components/saveButton';

import { setCellColor } from '../../utils/tableUtil';
import { setItem, getItem } from '../../utils/storage';

const Home = () => {
  const [selectedColor, setSelectedColor] = useState('#1f252b');
  const [currentColorTableData, setCurrentColorTableData] = useState({});
  const [arts, setArts] = useState([]);

  useEffect(() => {
    const savedArtsStr = getItem('savedArts');
    if (savedArtsStr) {
      setArts(JSON.parse(savedArtsStr));
    }
  }, []);

  const save = () => {
    const tmp = [...arts];
    tmp.push(currentColorTableData);
    setArts(tmp);
    setItem('savedArts', JSON.stringify(tmp));
    //setArts([].concat(arts).concat(currentColorTableData));
  };

  const artTableView = () => {
    return (
      <View
        style={{
          paddingTop: getStatusBarHeight(),
          height: Dimensions.get('window').height - 2 * getStatusBarHeight(),
        }}>
        <ColorTable
          data={currentColorTableData}
          onPressCell={(ri, ci) =>
            setCurrentColorTableData(
              setCellColor(currentColorTableData, ri, ci, selectedColor),
            )
          }
        />

        <ColorPalette onPressColor={setSelectedColor} />

        <SaveButton
          currentTable={currentColorTableData}
          setCurrentTable={setCurrentColorTableData}
          saveContent={save}
        />
      </View>
    );
  };

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
        ListHeaderComponent={artTableView}
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

export { Home };
