/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect, captureRef, string } from 'react';
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
import { MMKV, useMMKVString } from 'react-native-mmkv';
const storage = new MMKV();

const SaveButton = props => {
  const { currentTable, setCurrentTable, saveContent, readContent } = props;

  //const num = useRef(0);
  //const [text, setText] = React.useState('');
  /*
  const save = React.useCallback(() => {
    //arrayi kacıncı kayıtsa o numara key olacak sekilde kaydet  !!!num uygulamayı kaptınca 0lanıyor onu da storagede depolamak lazım
    console.log('setting...');
    storage.set(key, text);
    num.current = num.current + 1;
    console.log('set. key=', key, 'value=', text);
  }, [key, text]);

  const read = React.useCallback(() => {
    //kaydedilen arrayi ekrana yukle
    console.log('getting...');
    const value = storage.getString(key);
    setCurrentTable(value);
    console.log('for key=', key, ' got:', value);
  }, [key, setCurrentTable]);
  */
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={{ alignItems: 'center', margin: 40 }}
        onPress={saveContent}
        //key={num.current}
        text={currentTable}>
        <Entypo name="save" size={50} color="gray" />
        <Text style={{ fontSize: 20 }}>Save your art for later!</Text>
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
  currentTable: pt.object,
  setCurrentTable: pt.func,
  saveContent: pt.func,
  readContent: pt.func,
};
SaveButton.defaultProps = {
  currentTable: {},
  setCurrentTable: () => {},
  saveContent: () => {},
  readContent: () => {},
};
export { SaveButton, storage };

/*
onPress={() => {
          save;
          console.log('tarrr');
        }}>      calismiyo
*/
/*
      <TextInput
        placeholder="Value"
        style={styles.textInput}
        value={text}
        onChangeText={setText}
      />
*/
