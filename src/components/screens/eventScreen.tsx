import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { IEventItem, SportEvent, UserData } from '../../../schemas'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MapView, { Marker } from 'react-native-maps'
import EventItemSlider from '../genericComponents/eventItemSlider'
import { AppState } from '../../appState/appInitialState'
import { connect } from 'react-redux'
import {
    getParticipantsData,
    getUserProfilePictureSource
} from '../../userUtils'

interface EventScreenProps {
    currentUserData: UserData
    route: {
        params: {
            sportEvent: SportEvent
            participantsData: UserData[]
        }
    }
}

interface EventScreenState {
    popoverWidth: number
}

class EventScreenPure extends React.Component<
    EventScreenProps,
    EventScreenState
> {
    state = {
        popoverWidth: 200
    }
    // componentDidMount() {
    //     navigator.geolocation.getCurrentPosition((location) => {
    //         this.setState({
    //             latitude: location.coords.latitude,
    //             longitude: location.coords.longitude
    //         })
    //     })
    // }

    onEventItemClick = (eventItem: IEventItem) => {}

    render() {
        const { sportEvent, participantsData } = this.props.route.params
        return (
            <View
                onLayout={(event) => {
                    this.setState({
                        popoverWidth: event.nativeEvent.layout.width
                    })
                }}
                style={styles.container}
            >
                <View style={styles.header}>
                    <View style={styles.eventHeaderInfo}>
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
                                source={getUserProfilePictureSource(
                                    participant
                                )}
                                style={styles.participantImage}
                            />
                        ))}
                    </View>
                </View>
                <View style={styles.mapContainer}>
                    <MapView
                        minZoomLevel={7}
                        style={styles.map}
                        initialRegion={{
                            latitude: sportEvent.location.latitude,
                            longitude: sportEvent.location.longitude,
                            latitudeDelta: 0.04,
                            longitudeDelta: 0.05
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: sportEvent.location.latitude,
                                longitude: sportEvent.location.longitude
                            }}
                            title={sportEvent.location.addressTitle}
                            description={'description'}
                        />
                    </MapView>
                </View>
                <View style={styles.eventItems}>
                    <EventItemSlider
                        popoverWidth={this.state.popoverWidth}
                        getParticipantsData={getParticipantsData}
                        currentUserId={this.props.currentUserData.id}
                        eventItems={sportEvent.eventItems}
                        onItemClick={this.onEventItemClick}
                    />
                </View>
                <View style={styles.chatContainer}>
                    <Text>Chat here</Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    currentUserData: state.userData
})

export default connect(mapStateToProps)(EventScreenPure)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    header: {
        height: 50,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    eventHeaderInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    participants: {
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
        width: '90%',
        overflow: 'hidden',
        borderRadius: 10,
        flex: 3
    },
    map: {
        height: 150
    },
    eventItems: {
        width: '100%'
    },
    chatContainer: {
        flex: 6,
        justifyContent: 'center'
    }
})
