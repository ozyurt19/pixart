/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState, useRef, useEffect, captureRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button,
  StatusBar,
} from 'react-native';
import pt from 'prop-types';

const ColorPalette = props => {
  const {onPressColor} = props;
  const [colorArray] = useState([
    '#100F0F',
    '#0F3D3E',
    '#E2DCC8',
    '#F1F1F1',
    '#5A8F7B',
    '#81CACF',
    '#FFEA11',
    '#EF5B0C',
    '#3CCF4E',
    '#61481C',
    '#7F5283',
    '#3D3C42',
    '#293462',
    '#D61C4E',
    '#2C3639',
  ]);
  const {width} = Dimensions.get('window');

  return (
    <View style={styles.buttonContainer}>
      {colorArray.map(d => (
        <TouchableOpacity
          style={{
            backgroundColor: d,
            width: width / 12,
            aspectRatio: 1,
            borderRadius: 999,
            borderColor: 'red',
            marginHorizontal: 4,
            marginVertical: 2,
          }}
          onPress={() => onPressColor(d)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    backgroundcolor: 'black',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '90%',
    overflow: 'hidden',
    flexWrap: 'wrap',
    marginTop: 16,
  },
});

ColorPalette.propTypes = {
  onPressColor: pt.func,
};
ColorPalette.defaultProps = {
  onPressColor: () => null,
};

export {ColorPalette};
