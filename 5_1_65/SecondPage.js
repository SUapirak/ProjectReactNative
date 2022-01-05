import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const SecondPageScreen = ({route}) => {
    const {name} = route.params;
    return (
        <View style={(styles.container)}>
            <Text style={styles.heading}>React Native Value From The First Screen</Text>
            <Text style={styles.textStyle}>Value Pass From First Page : {name}</Text>
        </View>
    )
}

export default SecondPageScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 10,
        color:'black',
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
        color:'black',
    },
    inputStyle: {
        width: '80%',
        height: 44,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#DBDBD6',
        color:'black',
    },
});