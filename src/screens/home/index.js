/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import { MMKV, useMMKVString } from 'react-native-mmkv';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { ColorTable } from '../../components/colorTable';
import { ColorPalette } from '../../components/colorPalette';
import { SaveButton } from '../../components/saveButton';
import { setCellColor } from '../../utils/tableUtil';
const storage = new MMKV();

const Home = props => {
  const {} = props;
  const [selectedColor, setSelectedColor] = useState('white');
  const [currentColorTableData, setCurrentColorTableData] = useState({});
  const [arts, setArts] = useState([]);
  const [key, setKey] = useState('');

  const save = React.useCallback(() => {
    //arrayi kacıncı kayıtsa o numara key olacak sekilde kaydet  !!!num uygulamayı kaptınca 0lanıyor onu da storagede depolamak lazım
    console.log('setting...');
    setArts([].concat(arts).concat(currentColorTableData));
    //setArts([...arts, currentColorTableData]);
    //storage.set(i, JSON.stringify(arts));
    console.log('set. array=', arts, 'num=', arts.length);
  }, [arts, currentColorTableData]);

  const read = React.useCallback(
    i => {
      //kaydedilen arrayi ekrana yukle
      console.log('getting...');
      setCurrentColorTableData(arts[i]);
      console.log('read num=', i, ' got there:', arts[i]);
    },
    [arts],
  );

  const artTableView = () => {
    return (
      <View>
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
          saveContent={() => save()}
          readContent={() => read(key)}
        />
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <StatusBar barStyle={'light-content'} translucent />

      <FlatList
        ListHeaderComponent={artTableView}
        data={arts}
        renderItem={({ item, index }) => (
          <View
            style={{
              borderWidth: 1,
              height: Dimensions.get('window').height - getStatusBarHeight(),
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
        //snapToAlignment="start"
        //decelerationRate="fast"
        //snapToInterval={Dimensions.get('window').height}
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
  },
});

export { Home };
