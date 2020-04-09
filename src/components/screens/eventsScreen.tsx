import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { SportEvent } from '../../../schemas'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
type EventsFilter = 'TIME' | 'DISTANCE' | 'MYGROUPS'

interface EventsScreenProps {
    events?: SportEvent[]
}

interface EventsScreenState {
    filters: EventsFilter[]
    searchText: string
}

interface FilterData {
    text: string
    icon: string
    filterName: EventsFilter
}

const filtersData: FilterData[] = [
    {
        text: 'Distance',
        icon: 'map-marker-distance',
        filterName: 'DISTANCE'
    },
    {
        text: 'Time',
        icon: 'timelapse',
        filterName: 'TIME'
    },
    {
        text: 'My Groups',
        icon: 'account-group',
        filterName: 'MYGROUPS'
    }
]

export default class EventsScreen extends React.Component<
    EventsScreenProps,
    EventsScreenState
> {
    state = {
        filters: [],
        searchText: ''
    }

    onFilterPress = (filterName: EventsFilter) => {
        if (!this.state.filters.includes(filterName)) {
            this.setState({
                filters: [...this.state.filters, filterName]
            })
        }
    }

    updateSearch = (text: string) => {
        this.setState({
            searchText: text
        })
    }

    onClearSearch = () => {
        this.setState({
            searchText: ''
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Events</Text>
                    <SearchBar
                        placeholder="Search"
                        onChangeText={this.updateSearch}
                        value={this.state.searchText}
                        onClear={this.onClearSearch}
                        lightTheme={true}
                        round={true}
                        containerStyle={styles.searchBarContainerStyle}
                        inputContainerStyle={styles.searchBarInputStyle}
                    />
                    <View style={styles.filters}>
                        {filtersData.map((filterData) => (
                            <View key={filterData.text}>
                                <TouchableHighlight
                                    onPress={() =>
                                        this.onFilterPress(
                                            filterData.filterName
                                        )
                                    }
                                >
                                    <View>
                                        <MaterialCommunityIcons
                                            name={filterData.icon}
                                            size={30}
                                            color="#FFFFFF"
                                            style={{ alignSelf: 'center' }}
                                        />
                                        <Text style={styles.filterText}>
                                            {filterData.text}
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        ))}
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
        paddingTop: 20,
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00BFFF'
    },
    headerText: {
        color: 'white',
        fontSize: 20
    },
    searchBarContainerStyle: {
        backgroundColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        justifyContent: 'space-around',
        alignSelf: 'stretch',
        marginLeft: 30,
        marginRight: 30
    },
    searchBarInputStyle: {
        backgroundColor: 'white'
    },
    filters: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        marginTop: 10
    },
    filterText: {
        color: 'white'
    },
    content: {
        flex: 6
    }
})
