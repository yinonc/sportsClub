import React from 'react'
import { connect } from 'react-redux'
import { Button, Text, View } from 'react-native'
import constants from '../../constants'

export default function WelcomeScreen({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Button
                title="Login"
                onPress={() =>
                    navigation.navigate(constants.SCREENS.LOGIN.name)
                }
            />
            <Button
                title="Register"
                onPress={() =>
                    navigation.navigate(constants.SCREENS.REGISTER.name)
                }
            />
        </View>
    )
}
