import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Input, CheckBox } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'
import { connect } from 'react-redux'
import { Dropdown } from 'react-native-material-dropdown'
import {
    registerUser,
    UserInputField,
    UserInputFields,
    DEFAULT_USER_REGION,
    userFieldsValidations
} from '../../userUtils'
import { AppState } from '../../appState/appInitialState'
import { getUserDataAction } from '../../appState/stateActions'
import { UserData } from '../../../schemas'

export const userInputsData: UserInputField[] = [
    { key: 'email', placeholder: 'Email' },
    { key: 'password', placeholder: 'Password' },
    { key: 'rePassword', placeholder: 'RePassword' },
    { key: 'nickname', placeholder: 'Nickname' }
]

const securedInputs = new Set<UserInputFields>(['password', 'rePassword'])

function getCurrentDate(): string {
    let d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [year, month, day].join('-')
}

const countriesData = [
    {
        value: 'Israel',
        locale: 'il'
    },
    {
        value: 'USA',
        locale: 'en'
    },
    {
        value: 'France',
        locale: 'fr'
    },
    {
        value: 'Germany',
        locale: 'de'
    },
    {
        value: 'Italy',
        locale: 'it'
    },
    {
        value: 'Spain',
        locale: 'es'
    }
]

interface RegisterScreenProps {
    setUserData(userData: UserData): void
}

export type InvalidMessages = {
    [key in UserInputFields]?: string
}

export interface RegisterScreenState {
    date: string
    email: string
    region: string
    password: string
    nickname: string
    rePassword: string
    dateOfBirth: string
    termsChecked: boolean
    invalidMessages: InvalidMessages
}

class RegisterScreenPure extends React.Component<
    RegisterScreenProps,
    RegisterScreenState
> {
    constructor(props) {
        super(props)
        const currentDate = getCurrentDate()
        this.state = {
            nickname: '',
            email: '',
            password: '',
            rePassword: '',
            region: DEFAULT_USER_REGION,
            dateOfBirth: currentDate,
            date: currentDate,
            termsChecked: false,
            invalidMessages: {}
        }
    }
    allInputsValid = (): boolean => {
        return userInputsData.every(
            ({ key }) => !userFieldsValidations[key](this.state)
        )
    }

    highlightInvalidInputs = () => {
        const { invalidMessages } = this.state
        userInputsData.forEach(({ key }) => {
            invalidMessages[key] = userFieldsValidations[key](this.state)
        })
        this.setState({ invalidMessages })
    }

    handleRegister = () => {
        if (this.allInputsValid()) {
            registerUser(this.state).then((userData: UserData) => {
                this.props.setUserData(userData)
            })
        } else {
            this.highlightInvalidInputs()
        }
    }

    onInputBlur = (key: UserInputFields) => {
        const { invalidMessages } = this.state
        invalidMessages[key] = userFieldsValidations[key](this.state)
        this.setState({ invalidMessages })
    }

    onUserInputFieldChange = (key: UserInputFields, value: string) => {
        const currentState = { ...this.state }
        currentState[key] = value
        this.setState(currentState)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.registerForm}>
                    {userInputsData.map(
                        ({ key, placeholder }: UserInputField) => (
                            // @ts-ignore
                            <Input
                                key={key}
                                placeholder={placeholder}
                                label={placeholder}
                                onBlur={() => this.onInputBlur(key)}
                                onChangeText={(value) =>
                                    this.onUserInputFieldChange(key, value)
                                }
                                containerStyle={styles.generalInput}
                                secureTextEntry={securedInputs.has(key)}
                                renderErrorMessage={
                                    !!this.state.invalidMessages[key]
                                }
                                errorStyle={styles.generalInputInvalid}
                                errorMessage={this.state.invalidMessages[key]}
                            />
                        )
                    )}
                    <Dropdown
                        label="Region"
                        value={this.state.region}
                        data={countriesData}
                        containerStyle={styles.dropDownStyle}
                        onChangeText={(region) => this.setState({ region })}
                    />
                    <View style={styles.datePickerWrapper}>
                        <Text style={styles.datePickerText}>
                            Date of Birth:
                        </Text>
                        <DatePicker
                            style={styles.datePicker}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="1900-01-01"
                            maxDate={this.state.date}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            onChange={(dateOfBirth) =>
                                this.setState({ dateOfBirth })
                            }
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                            }}
                            onDateChange={(date) => {
                                this.setState({ date: date })
                            }}
                        />
                    </View>
                    <CheckBox
                        containerStyle={styles.checkBoxStyle}
                        title="I agree to the Terms and Conditions."
                        checked={this.state.termsChecked}
                        onPress={() =>
                            this.setState({
                                termsChecked: !this.state.termsChecked
                            })
                        }
                    />
                </View>
                <View style={styles.contentRegisterButton}>
                    <TouchableOpacity
                        disabled={!this.state.termsChecked}
                        onPress={this.handleRegister}
                    >
                        <View
                            style={[
                                styles.registerButton,
                                this.state.termsChecked
                                    ? {}
                                    : styles.registerButtonDisabled
                            ]}
                        >
                            <Text style={styles.registerText}>Register</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state: AppState) => ({})

const mapDispatchToProps = (dispatch) => ({
    setUserData: (userData) => dispatch(getUserDataAction(userData))
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreenPure)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },
    registerForm: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 8
    },
    contentRegisterButton: {
        alignSelf: 'stretch',
        backgroundColor: 'transparent',
        flex: 2
    },
    registerButton: {
        marginTop: 25,
        backgroundColor: '#253B80',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 36,
        borderRadius: 63
    },
    registerButtonDisabled: {
        backgroundColor: 'gray'
    },
    registerText: {
        color: 'white'
    },
    generalInput: {},
    generalInputInvalid: {
        color: 'red'
    },
    dropDownStyle: {
        alignSelf: 'stretch',
        paddingLeft: 10,
        paddingRight: 10
    },
    inputIcon: {
        marginRight: 10
    },
    datePickerWrapper: {
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row'
    },
    datePicker: {
        width: 160
    },
    datePickerText: {
        color: 'gray',
        fontWeight: 'bold'
    },
    checkBoxStyle: {
        marginTop: 10,
        backgroundColor: 'white',
        borderWidth: 0
    }
})
