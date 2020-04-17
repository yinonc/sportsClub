import React from 'react'
import { connect } from 'react-redux'
import * as Facebook from 'expo-facebook';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { AppState } from '../../appState/appInitialState'
import { setUserData } from '../../appState/stateActions'
import { UserData } from '../../../schemas'
import { getMockUserData } from '../../../mocks/userData'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { SocialIcon, Input } from 'react-native-elements'
import constants from '../../constants'

interface LoginScreenProps {
    setUserData(userData: UserData): void
    navigation: any
}

interface FacebookUserData {
    email: string
    first_name: string
    last_name: string
    picture: {
        data: {
            url: string
        }
    }
    birthday: string
}

function getDateOfBirthFromFacebookBirthDay(birthday: string): Date | null {
    if (!birthday) {
        return null;
    }
    const dateAsArray = birthday.split('/').map(Number)
    return new Date(dateAsArray[2], dateAsArray[0], dateAsArray[1])
}

const getUserData = async (): Promise<UserData> => {
    return getMockUserData()
}

class LoginScreenPure extends React.Component<LoginScreenProps> {
    constructor(props) {
        super(props)
    }

    handleMockLogin() {
        getUserData().then((userData) => {
            this.props.setUserData(userData)
        })
    }

    handleLogin = () => {}

    handleGoToRegister = () => {
        this.props.navigation.navigate(constants.SCREENS.REGISTER.name)
    }

    handleForgotPassword = () => {
        console.log('forgot password')
    }

    /**
     * Facebook app login:
     * Expo-Facebook sdk doc in here: https://docs.expo.io/versions/latest/sdk/facebook/
     * Fetching user data with: https://developers.facebook.com/docs/graph-api/reference/user/
     */
    handleFacebookLogin = async () => {
        await Facebook.initializeAsync('685137492030190', 'SportsClub')
        const {
            type,
            // @ts-ignore
            token,
            // expires,
            // permissions,
            // declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile'],
        });
        if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?fields=birthday,email,first_name,last_name,picture&access_token=${token}`)
            const resJson = await response.json() as FacebookUserData
            const userData: UserData = {
                firstName: resJson.first_name,
                lastName: resJson.last_name,
                email: resJson.email,
                nickName: resJson.first_name,
                profileImage: resJson.picture.data.url,
                dateOfBirth: getDateOfBirthFromFacebookBirthDay(resJson.birthday),
                rate: 8.7,
                gamesPlayed: 102,
                favoriteGames: ['soccer', 'basketball'],
                id: '10',
                friends: [],
            }
            this.props.setUserData(userData);
        } else {
            console.log('failed to get ')
        }
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
                    <SocialIcon
                        onPress={this.handleFacebookLogin}
                        title='Sign In With Facebook'
                        button
                        type='facebook'
                    />
                    <Button
                        onPress={this.handleMockLogin.bind(this)}
                        title="Click here to mock login"
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
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    },
    formContent: {
        flex: 2
    },
    contentLoginButton: {
        backgroundColor: 'transparent',
        flex: 2
    },
    loginButton: {
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
