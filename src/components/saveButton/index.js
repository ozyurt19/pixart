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
import Entypo from 'react-native-vector-icons/Entypo';
import {saveArt} from '../../utils/saveUtil';

const SaveButton = props => {
  const {} = props;

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={{alignItems: 'center', margin: 40}}
        onPress={() => saveArt}>
        <Entypo name="save" size={50} color="gray" />
        <Text style={{fontSize: 20}}>Save your art for later!</Text>
      </TouchableOpacity>
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

SaveButton.propTypes = {
  saveArt: pt.func,
};
SaveButton.defaultProps = {
  saveArt: () => null,
};

export {SaveButton};
