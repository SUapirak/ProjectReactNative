import React from 'react'
import { useState, useMemo, useCallback } from "react";
import {
    View, 
    Text, 
    StyleSheet,
    TextInput,
    Button,
    ScrollView,
    SafeAreaView,
    RefreshControl
} from "react-native";

const TextInputReview = () => {

    const [text,onChangeText] = useState("");
    return (
    <SafeAreaView style = {styles.container}>
      <TextInput
        style = {styles.input}
        onChangeText = {onChangeText}
        value = {text}
      />
      <Text>{text}</Text>
    </SafeAreaView>
    )
}

export default TextInputReview

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'black',
    },
    input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: 'white',
    color: 'black'
    },
  });
