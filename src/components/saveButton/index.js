/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState, useRef, useEffect, captureRef, string} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button,
  StatusBar,
  TextInput,
} from 'react-native';
import pt from 'prop-types';
import Entypo from 'react-native-vector-icons/Entypo';
import {saveArt} from '../../utils/saveUtil';
import {MMKV, useMMKVString} from 'react-native-mmkv';
const storage = new MMKV();

const SaveButton = props => {
  const {} = props;

  const [text, setText] = React.useState('');
  const [key, setKey] = React.useState('');
  const [example, setExample] = useMMKVString('yeeeet');

  const save = React.useCallback(() => {
    console.log('setting...');
    storage.set(key, text);
    console.log('set.');
  }, [key, text]);
  const read = React.useCallback(() => {
    console.log('getting...');
    const value = storage.getString(key);
    console.log('got:', value);
  }, [key]);
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={{alignItems: 'center', margin: 40}}
        onPress={save}>
        <Entypo name="save" size={50} color="gray" />
        <Text style={{fontSize: 20}}>Save your art for later!</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Key"
        style={styles.textInput}
        value={key}
        onChangeText={setKey}
      />
      <TextInput
        placeholder="Value"
        style={styles.textInput}
        value={text}
        onChangeText={setText}
      />
      <Button onPress={save} title="Save to MMKV" />
      <Button onPress={read} title="Read from MMKV" />
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
  //saveArt: pt.func,
};
SaveButton.defaultProps = {
  //saveArt: () => null,
};
export {SaveButton, storage};

/*
onPress={() => {
          save;
          console.log('tarrr');
        }}>      calismiyo
*/
