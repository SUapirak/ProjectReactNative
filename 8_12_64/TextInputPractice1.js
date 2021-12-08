import React, { useState } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'

const TextInputPractice1 = () => {

    const [name,Setname] = useState('');
    const [email,Setemail] = useState('');

    const checkEmpty = () =>{
        if(!name.trim())
        {
            alert("blank name");
        }
        else if(!email.trim())
        {
            alert("blank email")
        }
        else
        {
            alert("success")
        }
      };

    return (
        <SafeAreaView style={{flex:1, backgroundColor:'blue', padding: 5}}>
            <View style={styles.container}>
                <TextInput
                    style = {styles.textInputStyle}
                    placeholder = 'enter name'
                    //onChangeText = {(name) => {Setname(name)}}
                    onChangeText = {Setname}
                />
                <TextInput
                    style = {styles.textInputStyle}
                    placeholder = 'enter email'
                    //onChangeText = {(email) => {Setemail(email)}}
                    onChangeText = {Setemail}
                />
                <View style = {styles.buttonStyle}>
                <Button
                    onPress = {checkEmpty}
                    title = 'submit'
                    color = 'pink'
                />
            </View>
            </View>
            
        </SafeAreaView>
    )
}

export default TextInputPractice1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        backgroundColor: 'red'
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
        backgroundColor: 'green'
    },
    buttonStyle: {
        marginTop: 15,
        backgroundColor: 'yellow'
    }
});
