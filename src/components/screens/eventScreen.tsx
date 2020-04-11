import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SportEvent } from '../../../schemas'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

interface EventScreenProps {
    route: {
        params: {
            sportEvent: SportEvent
        }
    }
}

export default class EventScreen extends React.Component<EventScreenProps> {
    render() {
        const { sportEvent } = this.props.route.params
        return (
            <View style={styles.container}>
                <Text>{`${sportEvent.title}:`}</Text>
                <MaterialCommunityIcons
                    name={sportEvent.gameType}
                    size={30}
                    color="black"
                />
                <Text>{`location: ${sportEvent.location}`}</Text>
                <Text>{`MaxUsers: ${sportEvent.maxUsers}`}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
