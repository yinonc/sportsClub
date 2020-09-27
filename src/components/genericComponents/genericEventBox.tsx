import { SportEvent, UserData } from '../../../schemas'
import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Popover from 'react-native-popover-view'
import ParticipantsBox from '../genericComponents/genericParticipantsBox'
import generalStyle from '../../styles/generalStyle'

function datesDiff(date1: Date, dateNow: number) {
    const diffMs = date1.getTime() - dateNow
    const diffDays = Math.floor(diffMs / 86400000)
    const diffHrs = Math.floor((diffMs % 86400000) / 3600000) + diffDays * 24
    const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000)
    return diffHrs + ':' + diffMins + ' h'
}

interface EventBoxProps extends SportEvent {
    onItemClick(): void
    getParticipantsData(userIds: UserData['id'][]): UserData[]
}

export default class EventBox extends React.Component<EventBoxProps> {
    touchable = null
    state = {
        showTooltip: false,
        boxLayout: {
            width: 200
        }
    }

    openPopover = () => {
        if (this.props.userIds.length > 0) {
            this.setState({ showTooltip: true })
        }
    }

    closePopover() {
        this.setState({ showTooltip: false })
    }

    render() {
        const currentDate = Date.now()
        return (
            <View>
                <TouchableHighlight
                    ref={(ref) => (this.touchable = ref)}
                    activeOpacity={0.6}
                    underlayColor="transparent"
                    onLongPress={this.openPopover}
                    onPress={this.props.onItemClick}
                >
                    <View
                        style={styles.container}
                        onLayout={(event) => {
                            this.setState({
                                boxLayout: event.nativeEvent.layout
                            })
                        }}
                    >
                        <MaterialCommunityIcons
                            style={styles.gameTypeIcon}
                            name={this.props.gameType}
                            size={30}
                            color={generalStyle.GENERAL.BOX.ICON_COLOR}
                        />
                        <View style={styles.info}>
                            <View style={styles.infoLeft}>
                                <View>
                                    <Text style={styles.title}>
                                        {this.props.title}
                                    </Text>
                                </View>
                                <View style={styles.locationContainer}>
                                    <MaterialCommunityIcons
                                        style={styles.marker}
                                        name="map-marker"
                                        size={15}
                                        color={generalStyle.GENERAL.BOX.MARKER_COLOR}
                                    />
                                    <Text style={styles.address}>
                                        {this.props.location.addressTitle}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.infoRight}>
                                <View>
                                    <Text style={styles.time}>{`in: ${datesDiff(
                                        this.props.date,
                                        currentDate
                                    )}`}</Text>
                                </View>
                                <View>
                                    <Text
                                        style={styles.approve}
                                    >{`Approved: ${this.props.userIds.length}/${this.props.maxUsers}`}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.arrow}>
                            <MaterialCommunityIcons
                                style={styles.gameTypeIcon}
                                name="subdirectory-arrow-right"
                                size={30}
                                color={generalStyle.GENERAL.BOX.ARROW_COLOR}
                            />
                        </View>
                    </View>
                </TouchableHighlight>
                <Popover
                    isVisible={this.state.showTooltip}
                    fromView={this.touchable}
                    onRequestClose={() => this.closePopover()}
                >
                    <ParticipantsBox
                        width={this.state.boxLayout.width}
                        participants={this.props.getParticipantsData(
                            this.props.userIds
                        )}
                    />
                </Popover>
            </View>
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
        height: 56,
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: generalStyle.GENERAL.BOX.MAIN_BACKGROUND_COLOR
    },
    locationContainer: {
        flexDirection: 'row',
    },
    info: {
        maxHeight: 40,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flex: 6,
        color: generalStyle.GENERAL.BOX.MAIN_TEXT_COLOR
    },
    infoLeft: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    infoRight: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    title: {
        marginBottom: 5,
        color: generalStyle.GENERAL.BOX.MAIN_TEXT_COLOR
    },
    marker: {},
    gameTypeIcon: {
        marginTop: 3,
        marginLeft: 8,
        flex: 1
    },
    arrow: {
        flex: 1
    },
    popover: {},

    approve: {
        color: generalStyle.GENERAL.BOX.MAIN_TEXT_COLOR
    },
    time: {
        marginBottom: 5,
        color: generalStyle.GENERAL.BOX.MAIN_TEXT_COLOR
    },
    address: {
        color: generalStyle.GENERAL.BOX.MAIN_TEXT_COLOR
    }
})
