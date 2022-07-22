// screen shootn sadece cizilen resmi alması
//
import React, {useState} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {ColorTable} from '../../components/colorTable';
import {ColorPalette} from '../../components/colorPalette';
import {setCellColor} from '../../utils/tableUtil';

const Home = props => {
  const {} = props;
  const [selectedColor, setSelectedColor] = useState('white');
  const [currentColorTableData, setCurrentColorTableData] = useState({});

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
