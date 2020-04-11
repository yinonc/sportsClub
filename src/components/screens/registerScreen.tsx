import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'

function formatDate() {
    let d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [year, month, day].join('-')
}

export default class RegisterScreen extends React.Component {
    state = {
        date: formatDate()
    }
    onChangeText = () => {
        console.log('onChangeText called')
    }
    handleRegister = () => {}

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.registerForm}>
                    <Input
                        containerStyle={styles.generalInput}
                        placeholder="Nationality"
                        label="Nationality"
                    />
                    <Input
                        containerStyle={styles.generalInput}
                        placeholder="UserName"
                        label="Username"
                    />
                    <Input
                        containerStyle={styles.generalInput}
                        placeholder="Password"
                        label="Password"
                    />
                    <Input
                        containerStyle={styles.generalInput}
                        placeholder="Re-Password"
                        label="Re-Password"
                    />
                    <Input
                        containerStyle={styles.generalInput}
                        placeholder="Email"
                        label="Email"
                    />
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
                <View style={styles.contentRegisterButton}>
                    <TouchableOpacity onPress={this.handleRegister}>
                        <View style={styles.registerButton}>
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
        flex: 6
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
    registerText: {
        color: 'white'
    },
    generalInput: {
        marginBottom: 20
    },
    inputIcon: {
        marginRight: 10
    },
    datePicker: {
        width: 160
    }
})
