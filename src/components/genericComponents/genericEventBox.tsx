import { SportEvent } from '../../../schemas'
import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function datesDiff(date1: Date, dateNow: number) {
    const diffMs = date1.getTime() - dateNow
    const diffDays = Math.floor(diffMs / 86400000)
    const diffHrs = Math.floor((diffMs % 86400000) / 3600000) + diffDays * 24
    const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000)
    return diffHrs + ':' + diffMins + ' h'
}

interface EventBoxProps extends SportEvent {
    onItemClick(): void
}

export default class EventBox extends React.Component<EventBoxProps> {
    render() {
        const currentDate = Date.now()
        return (
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="transparent"
                onPress={this.props.onItemClick}
            >
                <View style={styles.container}>
                    <MaterialCommunityIcons
                        style={styles.gameTypeIcon}
                        name={this.props.gameType}
                        size={30}
                        color="black"
                    />
                    <View style={styles.info}>
                        <View style={styles.infoTop}>
                            <View>
                                <Text style={styles.title}>
                                    {this.props.title}
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.title}>{`in: ${datesDiff(
                                    this.props.date,
                                    currentDate
                                )}`}</Text>
                            </View>
                        </View>
                        <View style={styles.infoBottom}>
                            <View style={styles.locationContainer}>
                                <MaterialCommunityIcons
                                    style={styles.marker}
                                    name="map-marker"
                                    size={15}
                                    color="black"
                                />
                                <Text>{this.props.location}</Text>
                            </View>
                            <View>
                                <Text
                                    style={styles.title}
                                >{`Approved: ${this.props.userIds.length}/${this.props.maxUsers}`}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.arrow}>
                        <MaterialCommunityIcons
                            style={styles.gameTypeIcon}
                            name="subdirectory-arrow-right"
                            size={30}
                            color="gray"
                        />
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    locationContainer: {
        flexDirection: 'row'
    },
    info: {
        paddingLeft: 6,
        paddingRight: 6,
        flex: 6
    },
    infoTop: {
        marginBottom: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    infoBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        flex: 5
    },
    marker: {},
    gameTypeIcon: {
        marginTop: 3,
        marginLeft: 8,
        flex: 1
    },
    arrow: {
        flex: 1
    }
})
