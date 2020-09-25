import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IEventItem, UserData, userId } from '../../../schemas'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ParticipantsBox from './genericParticipantsBox'
import Popover from 'react-native-popover-view'

interface EventItemProps {
    id: string
    isSelected: boolean
    popoverWidth: number
    eventItemDef: IEventItem
    onPress(eventItem: IEventItem): void
    getParticipantsData(userIds: userId[]): UserData[]
}

interface EventItemState {
    count: number
    isSelected: boolean
    showTooltip: boolean
}

export default class EventItem extends React.Component<
    EventItemProps,
    EventItemState
> {
    constructor(props) {
        super(props)
        this.state = {
            showTooltip: false,
            isSelected: this.props.isSelected,
            count: this.props.eventItemDef.bringUsers.length
        }
    }
    touchable = null

    onItemPress = () => {
        const { count, isSelected } = this.state
        this.setState({
            isSelected: !isSelected,
            count: isSelected ? count - 1 : count + 1
        })
        this.props.onPress(this.props.eventItemDef)
    }

    togglePopover = (showTooltip: boolean) => {
        this.setState({ showTooltip })
    }

    render() {
        const { count } = this.state
        return (
            <View>
                <TouchableOpacity
                    ref={(ref) => (this.touchable = ref)}
                    style={[
                        styles.container,
                        this.state.isSelected
                            ? styles.styleSelected
                            : styles.styleDeselected
                    ]}
                    onLongPress={() => this.togglePopover(true)}
                    onPress={this.onItemPress}
                >
                    <MaterialCommunityIcons
                        name={this.props.eventItemDef.id}
                        size={25}
                        color={'white'}
                    />
                    <Text style={styles.number}>{`${
                        count > 0 ? '+' : ''
                    }${count}`}</Text>
                </TouchableOpacity>
                <Popover
                    isVisible={this.state.showTooltip}
                    fromView={this.touchable}
                    onRequestClose={() => this.togglePopover(false)}
                >
                    <ParticipantsBox
                        width={this.props.popoverWidth - 20 || 200}
                        participants={this.props.getParticipantsData(
                            this.props.eventItemDef.bringUsers
                        )}
                    />
                </Popover>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 50,
        height: 50,
        marginRight: 15,
        borderRadius: 65
    },
    styleSelected: {
        backgroundColor: 'gray'
    },
    styleDeselected: {
        backgroundColor: 'black'
    },
    number: {
        fontSize: 16,
        color: 'white'
    }
})
