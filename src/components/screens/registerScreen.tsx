import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import GenericInput from '../genericComponents/genericInput'

const steps = {
    firstStep: 'firstStep',
    secondStep: 'secondStep'
}

export default class RegisterScreen extends React.Component {

    onChangeText = () => {
        console.log("onChangeText called");
    }
    onFocus = () => {
        console.log("onFocus called");
    }

    onContinue = () => {
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Register here:</Text>
                <GenericInput
                    placeHolder="Email"
                    onChangeText={this.onChangeText}
                    onFocus={this.onFocus}
                />
                <GenericInput
                    placeHolder="User Name"
                    onChangeText={this.onChangeText}
                    onFocus={this.onFocus}
                />
                <GenericInput
                    placeHolder="Password"
                    onChangeText={this.onChangeText}
                    onFocus={this.onFocus}
                />
                <Button title="Continue" onPress={this.onContinue} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
