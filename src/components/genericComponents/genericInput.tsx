import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
interface GenericInputProps {
    placeHolder: string
    onChangeText(e: Event): void
    onFocus(e: Event): void
}

export default function GenericInput(props) {
    return (
        <TextInput
            style={styles.textInput}
            placeholder={props.placeHolder}
            placeholderTextColor='white'
            onChangeText={props.onChangeText}
            onFocus={props.onFocus}
        />
    )
}

const styles = StyleSheet.create({
    textInput: {
        alignSelf: 'stretch',
        margin: 10,
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#0294F6",
        color: "white",
        textAlign: "center",
        fontSize: 20,        
      }
})
