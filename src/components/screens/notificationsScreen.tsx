import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { AppState } from '../../appState/appInitialState'
import generalStyle from '../../styles/generalStyle'

interface NotificationsScreenProps {}

class NotificationsScreenPure extends React.Component<
    NotificationsScreenProps
> {
    render() {
        return (
            <View style={styles.container}>
                <Text>{`Notifications`}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state: AppState) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotificationsScreenPure)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: generalStyle.GENERAL.MAIN_BACKGROUND_COLOR,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
