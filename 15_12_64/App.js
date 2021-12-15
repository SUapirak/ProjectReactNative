import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'
import AlertExample from './components/AlertExample'
import Footer from './components/Footer'
import Logo from './components/Logo'
import ModalExample from './components/ModalExample'


const App = () => {
  const showData = () => {
    alert('hello world')
  }

  return (
      {/* <Logo/>
      <Text>hello react native</Text>
      <Text>sawasdee react native</Text><Button title='click' onPress={showData}/>
      <Footer/> */},

      //<AlertExample/>
      <ModalExample/>
  )
}

export default App

const styles = StyleSheet.create({})
