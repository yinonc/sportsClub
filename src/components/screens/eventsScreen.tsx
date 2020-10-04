import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { AppState } from '../../appState/appInitialState'
import generalStyle from '../../styles/generalStyle'

interface EventsScreenProps {}

class EventsScreenPure extends React.Component<EventsScreenProps> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>{`Events`}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state: AppState) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreenPure)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: generalStyle.GENERAL.MAIN_BACKGROUND_COLOR,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        color: generalStyle.GENERAL.MAIN_TEXT_COLOR
    }
})
