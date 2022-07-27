import React from 'react';
import { View, StyleSheet } from 'react-native';
import pt from 'prop-types';
import { Cell } from './cell';

const ColorTable = props => {
  const { rows, columns, data, onPressCell } = props;
  const rowsArray = new Array(rows).fill(0),
    columnsArray = new Array(columns).fill(0);

  return (
    <View style={styles.pixelContainer}>
      {rowsArray.map((r, ri) => (
        <View key={ri + ''} style={styles.row}>
          {columnsArray.map((c, ci) => {
            const row = data[ri];
            const color =
              row && Array.isArray(row) ? row[ci] || '#1f252b' : '#1f252b';

            return (
              <Cell color={color} onPressCell={() => onPressCell(ri, ci)} />
            );
          })}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  pixelContainer: {},
  row: {
    flexDirection: 'row',
  },
});

ColorTable.propTypes = {
  data: pt.object,
  rows: pt.number,
  columns: pt.number,
  onPressCell: pt.func,
};
ColorTable.defaultProps = {
  data: {},
  rows: 16,
  columns: 16,
  onPressCell: () => null,
};

export { ColorTable };
