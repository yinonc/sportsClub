import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { SportEvent } from '../../../schemas'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
type EventsFilters = 'TIME' | 'DISTANCE' | 'MYGROUPS'

interface EventsScreenProps {
    events?: SportEvent[]
}

interface EventsScreenState {
    filters: EventsFilters[]
}

export default class EventsScreen extends React.Component<
    EventsScreenProps,
    EventsScreenState
> {
    state = {
        filters: []
    }

    onDistancePress = () => {
        console.log('Pressed')
        if (!this.state.filters.includes('DISTANCE')) {
            this.setState({
                filters: [...this.state.filters, 'DISTANCE']
            })
        }
    }

    onTimePress = () => {
        console.log('Pressed')
        if (!this.state.filters.includes('TIME')) {
            this.setState({
                filters: [...this.state.filters, 'TIME']
            })
        }
    }

    onMyGroupsPress = () => {
        console.log('Pressed')
        if (!this.state.filters.includes('MYGROUPS')) {
            this.setState({
                filters: [...this.state.filters, 'MYGROUPS']
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>Events</Text>
                    <TextInput placeholder="search" />
                    <View style={styles.filters}>
                        <View>
                            <MaterialCommunityIcons
                                name="map-marker"
                                size={20}
                                color="#FFFFFF"
                            />
                            <Button
                                title="Distance"
                                onPress={this.onDistancePress}
                                color="black"
                            />
                        </View>
                        <View>
                            <MaterialCommunityIcons
                                name="map-marker"
                                size={20}
                                color="#FFFFFF"
                            />
                            <Button
                                title="Time"
                                onPress={this.onTimePress}
                                color="black"
                            />
                        </View>
                        <View>
                            <MaterialCommunityIcons
                                name="map-marker"
                                size={20}
                                color="#FFFFFF"
                            />
                            <Button
                                title="MyGroups"
                                onPress={this.onMyGroupsPress}
                                color="black"
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.content}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00BFFF'
    },
    content: {
        flex: 6
    },
    filters: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        marginTop: 10
    }
})
