import React from 'react';
import { StyleSheet, View ,Text, StatusBar } from 'react-native';
import * as Location from 'expo-location';



const Loading = () => (
    <View style={styles.container}>
        <StatusBar barStyle='light-content'/>
        <Text style={styles.text}>Getting the fucking weather</Text>
    </View>
)



const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent: 'flex-end',
        paddingHorizontal : 30,
        paddingVertical : 100,
        backgroundColor: '#FDF6AA',
    },
    text : {
        color : '#2c2c2c',
        fontSize : 30,
    }
});

export default Loading;