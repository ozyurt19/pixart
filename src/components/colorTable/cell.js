/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import pt from 'prop-types';

const Cell = props => {
  const { color, onPressCell } = props;
  const { width } = Dimensions.get('window');

  return (
    <TouchableOpacity onPress={onPressCell}>
      <View style={{ width: width / 18, aspectRatio: 1 }}>
        <View
          style={{
            width: '86%',
            aspectRatio: 1,
            backgroundColor: color,
            borderRadius: 4,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

Cell.propTypes = {
  color: pt.string,
  onPressCell: pt.func,
};
Cell.defaultProps = {
  color: '',
  onPressCell: () => null,
};

export { Cell };
