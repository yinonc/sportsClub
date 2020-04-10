import { UserData } from '../../../schemas'
import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'

export interface ParticipantsView {
    userId: UserData['id']
    image?: UserData['profileImage']
    rate: UserData['rate']
    name: string
}

export interface ParticipantsBoxProps {
    participants: ParticipantsView[]
    width: number
}

export default class ParticipantsBox extends React.Component<
    ParticipantsBoxProps
> {
    render() {
        return (
            <View
                style={Object.assign(
                    { width: this.props.width },
                    styles.container
                )}
            >
                <ScrollView>
                    {this.props.participants.map((participant, index) => (
                        <View
                            key={participant.userId}
                            style={Object.assign(
                                {
                                    borderBottomWidth:
                                        index ===
                                        this.props.participants.length - 1
                                            ? 0
                                            : 1
                                },
                                styles.participantContainer
                            )}
                        >
                            <View style={styles.participantImageWrapper}>
                                <Image
                                    source={{ uri: participant.image }}
                                    style={styles.participantImage}
                                />
                            </View>
                            <View style={styles.participantNameWrapper}>
                                <Text style={styles.participantName}>
                                    {participant.name}
                                </Text>
                            </View>
                            <View style={styles.participantRateWrapper}>
                                <Text
                                    style={styles.participantRate}
                                >{`Rate: ${participant.rate}`}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flex: 1,
        flexDirection: 'column'
    },
    participantContainer: {
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        height: 35,
        borderColor: 'white',
        alignItems: 'center',
        flexDirection: 'row'
    },
    participantImageWrapper: {
        flex: 1
    },
    participantImage: {
        width: 30,
        height: 30,
        borderRadius: 63,
        borderWidth: 2,
        borderColor: 'white'
    },
    participantNameWrapper: {
        flex: 4
    },
    participantName: {
        color: 'white'
    },
    participantRateWrapper: {
        flex: 2,
        marginRight: 5
    },
    participantRate: {
        color: 'white'
    }
})
