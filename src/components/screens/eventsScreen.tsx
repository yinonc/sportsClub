import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Button } from 'react-native-elements'
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
                            <Button
                                type="clear"
                                icon={
                                    <MaterialCommunityIcons
                                        name="map-marker-distance"
                                        size={30}
                                        color="#FFFFFF"
                                        style={{ alignSelf: 'center' }}
                                    />
                                }
                                title="Distance"
                                titleStyle={{ color: 'white', fontSize: 15 }}
                                onPress={this.onDistancePress}
                            />
                        </View>
                        <View>
                            <Button
                                type="clear"
                                icon={
                                    <MaterialCommunityIcons
                                        name="timelapse"
                                        size={30}
                                        color="#FFFFFF"
                                        style={{ alignSelf: 'center' }}
                                    />
                                }
                                title="Time"
                                titleStyle={{ color: 'white', fontSize: 15 }}
                                onPress={this.onTimePress}
                            />
                        </View>
                        <View>
                            <Button
                                type="clear"
                                icon={
                                    <MaterialCommunityIcons
                                        name="account-group"
                                        size={30}
                                        color="#FFFFFF"
                                        style={{ alignSelf: 'center' }}
                                    />
                                }
                                title="MyGroups"
                                titleStyle={{ color: 'white', fontSize: 15 }}
                                onPress={this.onMyGroupsPress}
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
