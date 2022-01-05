import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

const FirstPageScreen = ({navigation}) => {
    const [name, setName] = useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>React Native Value From The First Screen</Text>
            <Text style={styles.textStyle}>Please insert your name to pass it to the second screen</Text>
            <TextInput
                style={styles.inputStyle}
                onChangeText={setName}
            />
            <Button
                title="Go next"
                onPress={() => navigation.navigate('SecondPage',{name})}
            />
        </View>
    )
}

export default FirstPageScreen

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
