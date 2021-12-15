import React, {useState, useEffect} from 'react'
import { Button, StyleSheet, Text, View, Alert } from 'react-native'

const Footer = () => {
    const users = [
        {id:1, name:'John'},
        {id:2, name:'Mary'}
    ]

    const [count,setCount] = useState(0) // count = 0
    const [title,setTitle] = useState('hello')

    //always updates when rendered
    useEffect (()=>{
        console.log('useEffect1')
    })

    //only runs once
    useEffect (()=>{
        console.log('useEffect2')
    },[])

    //only runs when data in [] has changed
    useEffect (()=>{
        console.log('useEffect3')
    },[count])

    return (
        <View>
            <Text style={styles.title}>Thai Nichi Institute of Technology {count}</Text>
            {
                users.map((user, index)=>{
                    return <Text key={user.id}>{index+1} {user.name}</Text>
                })
            }
            <Button
             title='click me'
             onPress={()=>{
                 //setCount(5) //update count
                 setCount(count+1)
             }}/>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    title:{
        fontSize:20,
    }
})
