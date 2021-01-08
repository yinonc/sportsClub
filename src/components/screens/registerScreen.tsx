import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Input, CheckBox } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'

function getCurrentDate(): string {
    let d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [year, month, day].join('-')
}

interface RegisterScreenProps {}

interface RegisterScreenState {
    userName: string
    email: string
    password: string
    rePassword: string
    nationality: string
    dateOfBirth: string
    date: string
    termsChecked: boolean
}

export default class RegisterScreen extends React.Component<
    RegisterScreenProps,
    RegisterScreenState
> {
    constructor(props) {
        super(props)
        const currentDate = getCurrentDate()
        this.state = {
            userName: '',
            email: '',
            password: '',
            rePassword: '',
            nationality: '',
            dateOfBirth: currentDate,
            date: currentDate,
            termsChecked: false
        }
    }
    allInputsValid = (): boolean => {
        return false
    }
    handleRegister = () => {
        console.log(this.state)
        if (this.allInputsValid()) {
            // post('url', {body: {}})
        } else {
            // Error to the user
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.registerForm}>
                    <Input
                        containerStyle={styles.generalInput}
                        placeholder="Nationality"
                        label="Nationality"
                        onChangeText={(nationality) =>
                            this.setState({ nationality })
                        }
                    />
                    <Input
                        containerStyle={styles.generalInput}
                        placeholder="UserName"
                        label="Username"
                        onChangeText={(userName) => this.setState({ userName })}
                    />
                    <Input
                        containerStyle={styles.generalInput}
                        placeholder="Password"
                        label="Password"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password })}
                    />
                    <Input
                        containerStyle={styles.generalInput}
                        placeholder="Re-Password"
                        label="Re-Password"
                        secureTextEntry={true}
                        onChangeText={(rePassword) =>
                            this.setState({ rePassword })
                        }
                    />
                    <Input
                        containerStyle={styles.generalInput}
                        placeholder="Email"
                        label="Email"
                        onChangeText={(email) => this.setState({ email })}
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
