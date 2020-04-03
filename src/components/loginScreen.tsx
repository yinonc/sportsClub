import React from 'react'
import { connect } from 'react-redux'
import { Button, StyleSheet, Text, View } from 'react-native'
import { AppState } from '../appState/appInitialState'
import { setIsLogged } from '../appState/stateActions'
import { UserData } from '../../schemas'
import {getMockUserData} from "../../mocks/userData";

interface LoginScreenProps {
    setIsLogged(userData: UserData): void
}

const getUserData = async (): Promise<UserData> => {
    return getMockUserData();
}

class LoginScreenPure extends React.Component<LoginScreenProps> {

    handleLoginPress() {
        getUserData().then(userData => {
            this.props.setIsLogged(userData)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Login Screen:</Text>
                <Button
                    onPress={this.handleLoginPress.bind(this)}
                    title="Click here to set login"
                />
            </View>
        )
    }
}

const mapStateToProps = (state: AppState) => ({})

const mapDispatchToProps = (dispatch) => ({
    setIsLogged: (userData) => dispatch(setIsLogged(userData))
})

const LoginScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreenPure)

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
