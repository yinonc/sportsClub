import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { AppState } from '../../appState/appInitialState'
import { connect } from 'react-redux'
import { UserData } from '../../../schemas'

interface ProfileScreenStateProps {
    userData: UserData
}

class ProfileScreenPure extends React.Component<ProfileScreenStateProps> {
    render() {
        return (
            <View style={styles.container}>
                <Text>Profile screen</Text>
                <Image
                    style={styles.image}
                    source={require(`../../../mocks/messi.png`)}
                />
                <Text>{`${this.props.userData.firstName} ${this.props.userData.lastName}`}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state: AppState): ProfileScreenStateProps => ({
    userData: state.userData
})

const mapDispatchToProps = (dispatch) => ({})

const ProfileScreen = connect(
    mapStateToProps, // called every time state is changed
    mapDispatchToProps // Calls once when init
)(ProfileScreenPure)

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        maxWidth: 70,
        maxHeight: 70,
        borderRadius: 100
    }
})
