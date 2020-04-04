import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function SearchScreen() {
    return (
        <View style={styles.container}>
            <Text>Search screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})