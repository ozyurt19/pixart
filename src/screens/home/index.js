import React, {useState} from 'react';
import {View, StyleSheet, StatusBar, TextInput} from 'react-native';
import {ColorTable} from '../../components/colorTable';
import {ColorPalette} from '../../components/colorPalette';
import {SaveButton} from '../../components/saveButton';
import {setCellColor} from '../../utils/tableUtil';
//import { MMKV, useMMKVString } from 'react-native-mmkv';
//const storage = new MMKV();

const Home = props => {
  const {} = props;
  const [selectedColor, setSelectedColor] = useState('white');
  const [currentColorTableData, setCurrentColorTableData] = useState({});
  const [arts, setArts] = useState([]);
  const [key, setKey] = useState('');

  const save = React.useCallback(
    i => {
      //arrayi kacıncı kayıtsa o numara key olacak sekilde kaydet  !!!num uygulamayı kaptınca 0lanıyor onu da storagede depolamak lazım
      console.log('setting...');
      setArts([...arts, currentColorTableData]);
      //storage.set(i, JSON.stringify(arts));
      console.log('set. array=', arts, 'num=', arts.length);
    },
    [arts, currentColorTableData],
  );

  const read = React.useCallback(
    i => {
      //kaydedilen arrayi ekrana yukle
      console.log('getting...');
      setCurrentColorTableData(arts[i]);
      console.log('read num=', i, ' got there:', arts[i]);
    },
    [arts],
  );

  return (
    <View style={styles.main}>
      <StatusBar barStyle={'light-content'} translucent />

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
        readContent={() => read(key)}
      />
      <TextInput
        placeholder="Key"
        style={styles.textInput}
        value={key}
        onChangeText={setKey}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#9db8d4',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {Home};
