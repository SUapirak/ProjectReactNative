import React, { useState } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const TouchablePractice = () => {
    const [email,SetEmail] = useState('');
    const [password,SetPassword] = useState('');

    const ShowEmailPass = () => {
        alert('email: ' + email + '\n' +
              'password: ' + password)
    }

    return (
        <SafeAreaView style = {{flex:1, backgroundColor:'red'}}>
            <View style = {styles.container}>
                <TextInput
                    placeholder = 'email'
                    placeholderTextColor = 'black'
                    style = {styles.inputTextStyle}
                    onChangeText = {SetEmail}
                />
                <TextInput
                    placeholder = 'password'
                    placeholderTextColor = 'black'
                    style = {styles.inputTextStyle}
                    onChangeText = {SetPassword}
                />
                <TouchableOpacity
                style = {styles.touchableStyle}
                onPress = {ShowEmailPass}
                >
                    <Text>submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default TouchablePractice

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: 'green',
        padding: 5
    },
    inputTextStyle: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 5,
        padding: 5,
        color: 'black'
    },
    touchableStyle: {
        marginTop: 5,
        backgroundColor: 'blue',
        justifyContent: 'center',
        padding: 5,
        height: 40
    }
})
