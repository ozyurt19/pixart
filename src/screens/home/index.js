// screen shootn sadece cizilen resmi alması
//  
import React, { useState, useRef, useEffect, captureRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Button, StatusBar } from 'react-native';
import { ViewShot, captureScreen } from "react-native-view-shot";

const Home = () => {
    const { width, height } = Dimensions.get('window');

    const [selectedColor, setColor] = useState('white')

    const [colorArray, setColorArray] = useState({});

    const rows = 16;
    const colums = 16;

    const rowsArray = new Array(rows).fill(0);
    const columsArray = new Array(colums).fill(0);

    const setCellColor = (ri, ci, color) => {
        const tmp = { ...colorArray }; //spread operator
        if (!tmp[ri]) {
            tmp[ri] = [];
        }

        tmp[ri][ci] = color;

        setColorArray(tmp);
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
            <View style={styles.pixelContainer}>
                {rowsArray.map((r, ri) => (
                    <View style={styles.row}>
                        {columsArray.map((c, ci) => {
                            const row = colorArray[ri];
                            const color = row && Array.isArray(row) ? (row[ci] || '#1f252b') : '#1f252b';
                            return (
                                <TouchableOpacity
                                    onPress={() => setCellColor(ri, ci, selectedColor)}
                                    doubleTap={() => setCellColor(ri, ci, '#1f252b')}
                                    delay={200}>
                                    <View style={{ width: width / 20, aspectRatio: 1 }}>
                                        <View style={{ width: '86%', aspectRatio: 1, backgroundColor: color, borderRadius: 4, }} />
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                ))}
            </View>

            <View style={styles.buttonContainer}>
                <View style={{ flexDirection: 'row', }}>
                    <TouchableOpacity style={{ borderColor: 'white', width: width / 12, aspectRatio: 1, borderWidth: 1, backgroundColor: 'red' }} onPress={() => setColor('red')}></TouchableOpacity>
                    <TouchableOpacity style={{ borderColor: 'white', width: width / 12, aspectRatio: 1, borderWidth: 1, backgroundColor: 'blue' }} onPress={() => setColor('blue')}></TouchableOpacity>
                    <TouchableOpacity style={{ borderColor: 'white', width: width / 12, aspectRatio: 1, borderWidth: 1, backgroundColor: 'green' }} onPress={() => setColor('green')}></TouchableOpacity>
                    <TouchableOpacity style={{ borderColor: 'white', width: width / 12, aspectRatio: 1, borderWidth: 1, backgroundColor: 'grey' }} onPress={() => setColor('grey')}></TouchableOpacity>
                    <TouchableOpacity style={{ borderColor: 'white', width: width / 12, aspectRatio: 1, borderWidth: 1, backgroundColor: 'purple' }} onPress={() => setColor('purple')}></TouchableOpacity>
                    <TouchableOpacity style={{ borderColor: 'white', width: width / 12, aspectRatio: 1, borderWidth: 1, backgroundColor: 'pink' }} onPress={() => setColor('pink')}></TouchableOpacity>
                    <TouchableOpacity style={{ borderColor: 'white', width: width / 12, aspectRatio: 1, borderWidth: 1, backgroundColor: 'green' }} onPress={() => setColor('green')}></TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity title='Turn color to turquoise!' style={{ width: width / 12, aspectRatio: 1, borderColor: 'white', borderWidth: 1, backgroundColor: 'turquoise' }} onPress={() => setColor('turquoise')}></TouchableOpacity>
                    <TouchableOpacity title='Turn color to black!' style={{ width: width / 12, aspectRatio: 1, borderColor: 'white', borderWidth: 1, backgroundColor: 'black' }} onPress={() => setColor('black')}></TouchableOpacity>
                    <TouchableOpacity title='Turn color to brown!' style={{ width: width / 12, aspectRatio: 1, borderColor: 'white', borderWidth: 1, backgroundColor: 'brown' }} onPress={() => setColor('brown')}></TouchableOpacity>
                    <TouchableOpacity title='Turn color to yellow!' style={{ width: width / 12, aspectRatio: 1, borderColor: 'white', borderWidth: 1, backgroundColor: 'yellow' }} onPress={() => setColor('yellow')}></TouchableOpacity>
                    <TouchableOpacity style={{ borderColor: 'white', width: width / 12, aspectRatio: 1, borderWidth: 1, backgroundColor: 'orange' }} onPress={() => setColor('orange')}></TouchableOpacity>
                    <TouchableOpacity style={{ borderColor: 'white', width: width / 12, aspectRatio: 1, borderWidth: 1, backgroundColor: '#AAB8C2' }} onPress={() => setColor('#AAB8C2')}></TouchableOpacity>
                    <TouchableOpacity style={{ borderColor: 'white', width: width / 12, aspectRatio: 1, borderWidth: 1, backgroundColor: '#8B4513' }} onPress={() => setColor('#8B4513')}></TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => onPress = takeScreenShot()}>
                    <Text> To save the image, click!</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.textStyle}>
                {
                    savedImagePath ?
                        `Saved Image Path\n ${savedImagePath}` : ''
                }
            </Text>
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
        //flex: 1,
        backgroundcolor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 10
    },
});

export { Home };