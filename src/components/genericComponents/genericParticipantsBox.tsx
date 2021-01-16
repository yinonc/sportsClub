import { UserData } from '../../../schemas'
import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { getUserProfilePictureSource } from '../../userUtils'

export interface ParticipantsBoxProps {
    participants: UserData[]
    width: number
}

const POPOVER_HEIGHT_BY_PARTICIPANTS_COUNT = {
    1: 48,
    2: 98,
    3: 146,
    4: 160
}

export default class ParticipantsBox extends React.Component<
    ParticipantsBoxProps
> {
    resolvePopoverHeight = () => {
        const participantsCount = this.props.participants.length
        if (POPOVER_HEIGHT_BY_PARTICIPANTS_COUNT[participantsCount]) {
            return POPOVER_HEIGHT_BY_PARTICIPANTS_COUNT[participantsCount]
        }
        return POPOVER_HEIGHT_BY_PARTICIPANTS_COUNT[4]
    }

    render() {
        return (
            <View
                style={Object.assign(
                    {
                        width: this.props.width - 40,
                        height: this.resolvePopoverHeight()
                    },
                    styles.container
                )}
            >
                <ScrollView style={{ height: 100 }}>
                    {this.props.participants.map((participant, index) => (
                        <View
                            key={participant.id}
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
                                    source={getUserProfilePictureSource(
                                        participant
                                    )}
                                    style={styles.participantImage}
                                />
                            </View>
                            <View style={styles.participantNameWrapper}>
                                <Text style={styles.participantName}>
                                    {`${participant.firstName} ${participant.lastName}`}
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
        flex: 1
    },
    participantContainer: {
        justifyContent: 'space-around',
        // borderColor: 'black',
        padding: 5,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    participantImageWrapper: {
        paddingLeft: 10,
        flex: 2
    },
    participantImage: {
        width: 38,
        height: 38,
        borderRadius: 63,
        borderWidth: 2,
        borderColor: 'white'
    },
    participantNameWrapper: {
        flex: 5
    },
    participantName: {
        color: 'black'
    },
    participantRateWrapper: {
        flex: 2,
        marginRight: 5
    },
    participantRate: {
        color: 'black'
    }
})
