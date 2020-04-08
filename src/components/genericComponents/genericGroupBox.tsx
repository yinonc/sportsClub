import { GameType } from '../../../schemas'
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

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
                <View style={styles.groupImageWrapper}>
                    <Image
                        style={styles.groupImage}
                        source={{ uri: this.props.imageUri }}
                    />
                </View>
                <Text style={styles.title}>{this.props.title}</Text>
                <MaterialCommunityIcons
                    style={styles.gameTypeIcon}
                    name={this.props.gameType}
                    size={30}
                    color="black"
                />
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
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    groupImageWrapper: {
        flex: 1,
        marginLeft: 6
    },
    groupImage: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'white'
    },
    title: {
        flex: 5
    },
    gameTypeIcon: {
        flex: 1
    }
})
