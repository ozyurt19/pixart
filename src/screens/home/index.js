// screen shootn sadece cizilen resmi alması
//  
import React, { useState, useRef, useEffect, captureRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Button, StatusBar, AppState } from 'react-native';
import { ViewShot, captureScreen } from "react-native-view-shot";
import { ColorTable } from '../../components/colorTable';

const Home = () => {
    const { width, height } = Dimensions.get('window');

    const [selectedColor, setSelectedColor] = useState('white')

    const [currentColorTableData, setCurrentColorTableData] = useState({});
    const [colorArray, setColorArray] = useState(['red', 'green', 'blue', 'red', 'green', 'blue', 'red', 'green', 'blue', 'red', 'green', 'blue', 'red', 'green', 'blue',]);

    const rows = 16;
    const colums = 16;

    const rowsArray = new Array(rows).fill(0);
    const columsArray = new Array(colums).fill(0);

    const setCellColor = (ri, ci) => {
        const tmp = { ...currentColorTableData }; //spread operator
        if (!tmp[ri]) {
            tmp[ri] = [];
        }

        tmp[ri][ci] = selectedColor;

        setCurrentColorTableData(tmp);
    }


    const [imageURI, setImageURI] = useState(
        '',
    );
    const [savedImagePath, setSavedImagePath] = useState('');

    const takeScreenShot = () => {
        captureScreen({
            format: 'jpg',
            quality: 0.8,
        }).then(
            (imageURI) => {
                setSavedImagePath(imageURI);
                setImageURI(imageURI);
            },
            (error) => console.error('Oops, Something Went Wrong', error),
        );
    };

    return (
        <View style={styles.main}>
            <StatusBar barStyle={'light-content'} translucent />

            <ColorTable rows={rows} columns={colums} data={currentColorTableData} onPressCell={setCellColor} />

            <View style={styles.buttonContainer}>
                {colorArray.map((d, i) => (
                    <TouchableOpacity style={{ backgroundColor: d, width: width / 12, aspectRatio: 1, borderRadius: 999, marginHorizontal: 4, marginVertical: 2, }} onPress={() => setSelectedColor(d)} />
                ))}
            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#9db8d4',
        justifyContent: 'center',
        alignItems: 'center',
    },

    pixelContainer: {

    },
    row: {
        flexDirection: 'row'
    },

    buttonContainer: {
        flexDirection: 'row',
        backgroundcolor: 'black',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '90%',
        overflow: 'hidden',
        flexWrap: 'wrap',
        marginTop: 16
    },
});

export { Home };