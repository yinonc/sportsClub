import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SportEvent, UserData } from '../../../schemas'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

interface EventScreenProps {
    route: {
        params: {
            sportEvent: SportEvent
            participantsData: UserData[]
        }
    }
}

export default class EventScreen extends React.Component<EventScreenProps> {
    render() {
        const { sportEvent, participantsData } = this.props.route.params
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <MaterialCommunityIcons
                        name={sportEvent.gameType}
                        size={30}
                        color="black"
                    />
                    <Text>{`${sportEvent.title}:`}</Text>
                </View>
                <View style={styles.participants}>
                    {participantsData.map((participant) => (
                        <Image
                            key={participant.id}
                            source={{ uri: participant.profileImage }}
                            style={styles.participantImage}
                        />
                    ))}
                </View>
                <View style={styles.mapContainer}>
                    <Image
                        style={styles.mapImage}
                        source={{
                            uri:
                                'https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png'
                        }}
                    />
                </View>
                <View style={styles.chatContainer}>
                    <Text>Chat here</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    participants: {
        flex: 1,
        flexDirection: 'row'
    },
    participantImage: {
        height: 34,
        width: 34,
        borderRadius: 63,
        borderWidth: 1,
        borderColor: 'black',
        marginLeft: -6
    },
    mapContainer: {
        flex: 3
    },
    mapImage: {
        width: 320,
        height: 150
    },
    chatContainer: {
        flex: 6,
        justifyContent: 'center'
    }
})
