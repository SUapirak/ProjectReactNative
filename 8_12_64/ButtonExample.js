import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const ButtonExample = () => {

    const OnPressAlert = () => {
        alert('Hello')
    }

    return (
        <SafeAreaView style={{flex:1, backgroundColor:'red'}}>
            <View style={styles.container}>
                <Text>Button Example</Text>
                <Button
                    onPress = {OnPressAlert}
                    title = 'click me'
                    color = 'red'
                />
            </View>
        </SafeAreaView>
    )
}

export default ButtonExample

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green'
    }
});
