import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
export interface EventItemProps {
    icon: React.FunctionComponent
    count: number
    id: string
    onPress(): void
    isSelected: boolean
}

export default class EventItem extends React.Component<EventItemProps> {
    render() {
        const Icon = this.props.icon
        return (
            <TouchableOpacity
                style={[
                    styles.container,
                    this.props.isSelected
                        ? styles.styleSelected
                        : styles.styleDeselected
                ]}
                onPress={this.props.onPress}
            >
                <Icon />
                <Text style={styles.number}>{`${
                    this.props.count > 0 ? '+' : ''
                }${this.props.count}`}</Text>
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
