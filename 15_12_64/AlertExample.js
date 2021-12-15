import React from 'react'
import { StyleSheet, Text, View, Alert, SafeAreaView, Button } from 'react-native'

const AlertExample = () => {
    const simpleAlertHandler = () => {
        alert('I am simple alert')
    }
    const twoOptionAlertHandler = () => {
        Alert.alert(
            'hello', //title
            'two option alert', //body
            [
                {
                    text:'yes',
                    onPress:()=>console.log('yes pressed')
                },
                {
                    text:'no',
                    onPress:()=>console.log('no pressed')
                }
            ],
            {cancelable:true}
        )
    }
    const threeOptionAlertHandler = () => {
        Alert.alert(
            'hello', //title
            'three option alert', //body
            [
                {
                    text:'yes',
                    onPress:()=>console.log('yes pressed')
                },
                {
                    text:'no',
                    onPress:()=>console.log('no pressed'),
                    cancelable:true
                },
                {
                    text:'ok',
                    onPress:()=>console.log('ok pressed'),
                }
            ],
            {cancelable:true}
        )
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Button
                 title='Simple Alert'
                 onPress={simpleAlertHandler}/>
                 <Button
                 title='Two Options Alert'
                 onPress={twoOptionAlertHandler}/>
                 <Button
                 title='Three Options Alert'
                 onPress={threeOptionAlertHandler}/>
            </View>
        </SafeAreaView>
        
    )
}

export default AlertExample

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        },
})
