

import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Button, StatusBar } from 'react-native';
import DoubleClick from 'react-native-double-tap';

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

    return (
        <View style={styles.main}>
            <StatusBar barStyle={'light-content'} translucent backgroundColor={'#1f252b'} />

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
                    <TouchableOpacity title='Turn color to red!' style={{ borderRadius: 50, margin: width / 20, width: width / 12, aspectRatio: 1, color: 'red', borderWidth: 1, backgroundColor: 'red' }} onPress={() => setColor('red')}>
                    </TouchableOpacity>
                    <TouchableOpacity title='Turn color to blue!' style={{ borderRadius: 50, margin: width / 20, width: width / 12, aspectRatio: 1, color: 'blue', borderWidth: 1, backgroundColor: 'blue' }} onPress={() => setColor('blue')}>
                    </TouchableOpacity>
                    <TouchableOpacity title='Turn color to green!' style={{ borderRadius: 50, margin: width / 20, width: width / 12, aspectRatio: 1, color: 'green', borderWidth: 1, backgroundColor: 'green' }} onPress={() => setColor('green')}>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity title='Turn color to white!' style={{ borderRadius: 50, margin: width / 20, width: width / 12, aspectRatio: 1, color: 'white', borderWidth: 1, backgroundColor: 'white' }} onPress={() => setColor('white')}>
                    </TouchableOpacity>
                    <TouchableOpacity title='Turn color to black!' style={{ borderRadius: 50, margin: width / 20, width: width / 12, aspectRatio: 1, color: 'black', borderWidth: 1, backgroundColor: 'black' }} onPress={() => setColor('black')}>
                    </TouchableOpacity>
                    <TouchableOpacity title='Turn color to brown!' style={{ borderRadius: 50, margin: width / 20, width: width / 12, aspectRatio: 1, color: 'brown', borderWidth: 1, backgroundColor: 'brown' }} onPress={() => setColor('brown')}>
                    </TouchableOpacity>
                    <TouchableOpacity title='Turn color to yellow!' style={{ borderRadius: 50, margin: width / 20, width: width / 12, aspectRatio: 1, color: 'yellow', borderWidth: 1, backgroundColor: 'yellow' }} onPress={() => setColor('yellow')}>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#14171A',
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