import React from 'react'
import { connect } from 'react-redux'
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { AppState } from '../../appState/appInitialState'
import { setUserData } from '../../appState/stateActions'
import { UserData } from '../../../schemas'
import { getMockUserData } from '../../../mocks/userData'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Input } from 'react-native-elements'
import constants from '../../constants'

interface LoginScreenProps {
    setUserData(userData: UserData): void
    navigation: any
}

const getUserData = async (): Promise<UserData> => {
    return getMockUserData()
}

class LoginScreenPure extends React.Component<LoginScreenProps> {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        headerMode: null
    }
    handleLoginPress() {
        getUserData().then((userData) => {
            this.props.setUserData(userData)
        })
    }

    handleLogin() {
        // const user =
    }

    handleGoToRegister = () => {
        this.props.navigation.navigate(constants.SCREENS.REGISTER.name)
    }

    handleForgotPassword = () => {
        console.log('forgot password')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text}>Welcome Back to Sportify !</Text>
                </View>

                <View style={styles.formContent}>
                    <Input
                        containerStyle={styles.emailInput}
                        placeholder="Email or UserName"
                        leftIcon={
                            <MaterialCommunityIcons
                                name="email"
                                size={20}
                                color="gray"
                                style={styles.inputIcon}
                            />
                        }
                    />
                    <Input
                        containerStyle={{ marginBottom: 5 }}
                        placeholder="Password"
                        leftIcon={
                            <MaterialCommunityIcons
                                name="lock"
                                size={20}
                                color="gray"
                                style={styles.inputIcon}
                            />
                        }
                    />
                    <View style={styles.forgotPassword}>
                        <TouchableOpacity
                            style={{}}
                            onPress={this.handleForgotPassword}
                        >
                            <Text style={styles.forgotPasswordText}>
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.contentRegisterButton}>
                    <TouchableOpacity onPress={this.handleGoToRegister}>
                        <View style={styles.goToRegister}>
                            <Text style={styles.goToRegisterText}>
                                New to Sportify? Sign Up
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentLoginButton}>
                    <TouchableOpacity onPress={this.handleLogin}>
                        <View style={styles.loginButton}>
                            <Text style={styles.loginText}>Log In</Text>
                        </View>
                    </TouchableOpacity>
                    <Button
                        onPress={this.handleLoginPress.bind(this)}
                        title="Click here mocked login"
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state: AppState) => ({})

const mapDispatchToProps = (dispatch) => ({
    setUserData: (userData) => dispatch(setUserData(userData))
})

const LoginScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreenPure)

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        padding: 30
    },
    emailInput: {
        marginBottom: 20
    },
    inputIcon: {
        marginRight: 10
    },
    header: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    },
    formContent: {
        flex: 2,
        marginBottom: 20
    },
    contentLoginButton: {
        backgroundColor: 'transparent',
        flex: 2
    },
    loginButton: {
        marginTop: 25,
        backgroundColor: '#253B80',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 36,
        borderRadius: 63
    },
    loginText: {
        color: 'white'
    },
    contentRegisterButton: {
        flex: 1
    },
    goToRegister: {
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    goToRegisterText: {
        color: '#253B80',
        fontWeight: 'bold'
    },
    forgotPassword: {
        alignItems: 'flex-end',
        color: '#00bfff',
        marginTop: 5
    },
    forgotPasswordText: {
        color: 'gray'
    }
})
