import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const AboutScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>about page</Text>
            <Button
              title='to about page again'
              onPress={() => navigation.push('About')}
            />
            <Button
              title='to home'
              onPress={() => navigation.navigate('Home')}
            />
            <Button
              title='go back'
              onPress={() => navigation.goBack()}
            />
            <Button
              title='go back to first page'
              onPress={() => navigation.popToTop()}
            />
        </View>
    )
}

export default AboutScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
