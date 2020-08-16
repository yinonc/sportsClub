import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { AppState } from '../../appState/appInitialState'

interface EventsScreenProps {}

class EventsScreenPure extends React.Component<EventsScreenProps> {
    render() {
        return (
            <View style={styles.container}>
                <Text>{`Events`}</Text>
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
