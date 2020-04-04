import { GameType } from '../../../schemas'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from 'react-native-vector-icons'

export interface GroupBoxProps {
    title: string
    description?: string
    gameType: GameType
    imageUri?: string
}

export default class GroupBox extends React.Component<GroupBoxProps> {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.title}</Text>
                <MaterialCommunityIcons
                    name={this.props.gameType}
                    size={20}
                    color="black"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
