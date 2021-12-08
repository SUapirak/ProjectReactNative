import React from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View, Image } from 'react-native'

const ImageWithTextInput = () => {
    
    return (
        <SafeAreaView style = {{flex:1, backgroundColor:'green'}}>
            <View style={styles.container}>
                <View style={styles.sectionStyle}>
                    <Image
                        source = {require('../images/input_username.png')}
                        style = {styles.imageStyle}
                    />
                    <TextInput
                        style = {{flex:1}}
                        placeholder = "Enter your name here"
                        underlineColorAndroid = "transparent"
                        backgroundColor = 'blue'
                    />

                </View>
                <View style={styles.sectionStyle}>
                    <Image
                        source = {require('../images/input_phone.png')}
                        style = {styles.imageStyle}
                    />
                    <TextInput
                        style = {{flex:1}}
                        placeholder = "Enter your mobile no here"
                        underlineColorAndroid = "transparent"
                        backgroundColor = 'orange'
                    />
                    
                </View>

            </View>

        </SafeAreaView>
    )
}

export default ImageWithTextInput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'red'
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,
    },
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
});
