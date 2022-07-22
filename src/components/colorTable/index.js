// screen shootn sadece cizilen resmi alması
//  
import React, { useState, useRef, useEffect, captureRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Button, StatusBar } from 'react-native';
import pt from 'prop-types';

const ColorTable = props => {
  const { rows, columns, data, onPressCell } = props;
  const rowsArray = new Array(rows).fill(0), columnsArray = new Array(columns).fill(0);

  const { width } = Dimensions.get('window');

  return (
    <View style={styles.pixelContainer}>
      {rowsArray.map((r, ri) => (
        <View style={styles.row}>
          {columnsArray.map((c, ci) => {
            const row = data[ri];
            const color = row && Array.isArray(row) ? (row[ci] || '#1f252b') : '#1f252b';
            return (
              <TouchableOpacity onPress={() => onPressCell(ri, ci)}>
                <View style={{ width: width / 20, aspectRatio: 1 }}>
                  <View style={{ width: '86%', aspectRatio: 1, backgroundColor: color, borderRadius: 4, }} />
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  pixelContainer: {

  },
  row: {
    flexDirection: 'row'
  },
});

ColorTable.propTypes = {
  data: pt.object,
  rows: pt.number,
  columns: pt.number,
  onPressCell: pt.func
};
ColorTable.defaultProps = {
  data: {},
  rows: 16,
  columns: 16,
  onPressCell: () => null,
};

export { ColorTable };