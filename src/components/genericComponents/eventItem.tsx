import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IEventItem } from '../../../schemas'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

interface EventItemProps {
    id: string
    isSelected: boolean
    eventItemDef: IEventItem
    onPress(eventItem: IEventItem): void
}

interface EventItemState {
    isSelected: boolean
    count: number
}

export default class EventItem extends React.Component<
    EventItemProps,
    EventItemState
> {
    constructor(props) {
        super(props)
        this.state = {
            isSelected: this.props.isSelected,
            count: this.props.eventItemDef.bringUsers.length
        }
    }

    onItemPress = () => {
        const { count, isSelected } = this.state
        this.setState({
            isSelected: !isSelected,
            count: isSelected ? count - 1 : count + 1
        })
        this.props.onPress(this.props.eventItemDef)
    }

    render() {
        const { count } = this.state
        return (
            <TouchableOpacity
                style={[
                    styles.container,
                    this.state.isSelected
                        ? styles.styleSelected
                        : styles.styleDeselected
                ]}
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
