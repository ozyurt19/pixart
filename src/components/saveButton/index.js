/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import pt from 'prop-types';
import Entypo from 'react-native-vector-icons/Entypo';

const SaveButton = props => {
  const { saveContent } = props;
  return (
    <View>
      <TouchableOpacity
        style={{ alignItems: 'center', margin: 40 }}
        onPress={saveContent}>
        <Entypo name="save" size={50} color="gray" />
        <Text style={{ fontSize: 20 }}>Save your art for later!</Text>
      </TouchableOpacity>
    </View>
  );
};
/*
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
*/
SaveButton.propTypes = {
  saveContent: pt.func,
};
SaveButton.defaultProps = {
  saveContent: () => {},
};
export { SaveButton };
