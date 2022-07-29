import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, Dimensions, Button } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { ColorTable } from '../../components/colorTable';
import { ColorPalette } from '../../components/colorPalette';
import { SaveButton } from '../../components/saveButton';

import { setCellColor } from '../../utils/tableUtil';
import { getItem, setItem } from '../../utils/storage';
import { Saved } from '../saved';

const Home = ({ navigation }) => {
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
    //const tmp = [].concat(arts).concat([currentColorTableData]);
    const tmp = [...arts];
    tmp.push(currentColorTableData);
    setArts(tmp);
    setItem('savedArts', JSON.stringify(tmp));
    //setArts([].concat(arts).concat(currentColorTableData));
  };

  return (
    <View style={styles.main}>
      <StatusBar barStyle={'light-content'} translucent />
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
        <Button
          title="Go to Saved Arts"
          onPress={() => navigation.navigate(Saved)}
        />
      </View>
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
