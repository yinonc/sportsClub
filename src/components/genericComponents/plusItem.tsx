import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export interface PlusItemProps {
    onPress(): void
}

export default class PlusItem extends React.Component<PlusItemProps> {
    render() {
        return (
            <TouchableOpacity
                style={[styles.container]}
                onPress={this.props.onPress}
            >
                <MaterialCommunityIcons name="plus" size={30} color="white" />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        width: 50,
        height: 50,
        marginRight: 15,
        borderRadius: 65
    },
    plus: {
        fontSize: 30,
        color: 'white'
    }
})
