import React from 'react'
import { connect } from 'react-redux'
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { AppState } from '../../appState/appInitialState'
import { setUserData } from '../../appState/stateActions'
import { UserData } from '../../../schemas'
import { getMockUserData } from '../../../mocks/userData'
import Icon from 'react-native-vector-icons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Input } from 'react-native-elements'

interface LoginScreenProps {
    setUserData(userData: UserData): void
}

const getUserData = async (): Promise<UserData> => {
    return getMockUserData()
}

class LoginScreenPure extends React.Component<LoginScreenProps> {

    constructor(props){
        super(props)


    }

    handleLoginPress() {
        getUserData().then((userData) => {
            this.props.setUserData(userData)
        })
    }

    handleLogin() {
        // const user =
    }

    handleForgotPassword = () => {
        console.log("forgot password")
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text}>Wolcome Back to Sprotify !</Text>
                </View>

                <View style={styles.content}>
                    <Input
                        label="UserName"
                        labelStyle={{ marginBottom: 10 }}
                        containerStyle={{ marginBottom: 20 }}
                        inputStyle={{ textAlign: 'center' }}
                        placeholder="Enter Email or UserName"
                        leftIcon={
                            <MaterialCommunityIcons
                                name="email"
                                size={30}
                                color=""
                            />
                        }
                    />
                    <Input
                        label="Password"
                        labelStyle={{ marginBottom: 10 }}
                        containerStyle={{ marginBottom: 5 }}
                        inputStyle={{ textAlign: 'center' }}
                        placeholder="Enter password"
                        leftIcon={
                            <MaterialCommunityIcons
                                name="lock"
                                size={30}
                                color=""
                            />
                        }
                    />
                    <View style={styles.forgotPassword}>
                        <TouchableOpacity style={{ }} onPress={this.handleForgotPassword} >
                            <Text>
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Button
                        onPress={this.handleLogin.bind(this)}
                        title="Login"
                    />
                    <Button
                        onPress={this.handleLoginPress.bind(this)}
                        title="Click here to set login"
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
        flex: 1,
        justifyContent: 'center'
    },
    header: {
        paddingTop: 20,
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text: {
        // fontFamily: 'moonlight',
        fontSize: 20
    },
    content: {
        flex: 6,
        width: '100%',
        paddingTop: '50%',
        paddingLeft: '10%',
        paddingRight: '10%',
        marginBottom: 20,
        backgroundColor: 'white'
    },
    forgotPassword: {
        alignItems: 'flex-end',
        color: '#00bfff'
    }
})
