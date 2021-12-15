import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Logo = () => {
    const title = 'TNI'
    const isTitle = true

    const showData = () => <Text>hello december</Text>

    return (
        <View>
            <Text style = {{color:'blue', fontSize:20}}>Thai-nichi</Text>
            {
                isTitle === true //condition
                &&<Text>{title}</Text> //if true
            }
            {
                isTitle === false //condition
                ?<Text>{title}</Text> //if true
                :<Text>Thai-nichi</Text> //if false
            }
            {showData()}
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({})
