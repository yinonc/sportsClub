import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ScrollView
} from 'react-native'
import { SearchBar } from 'react-native-elements'
import { SportEvent } from '../../../schemas'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { getMockEvents } from '../../../mocks/events'
import GroupBox from '../genericComponents/genericGroupBox'
type EventsFilter = 'TIME' | 'DISTANCE' | 'MYGROUPS'

interface EventsScreenProps {
    events?: SportEvent[]
}

interface EventsScreenState {
    filters: EventsFilter[]
    searchText: string
    events: SportEvent[]
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
        searchText: '',
        events: []
    }

    componentDidMount(): void {
        this.setState({
            events: getMockEvents()
        })
    }

    onFilterPress = (filterName: EventsFilter) => {
        const { filters } = this.state
        const filterIndex = filters.indexOf(filterName)
        if (filterIndex > -1) {
            filters.splice(filterIndex, 1)
            this.setState({ filters })
        } else {
            this.setState({
                filters: [...filters, filterName]
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
                        {filtersData.map((filterData) => {
                            const itemInFilters = this.state.filters.includes(
                                filterData.filterName
                            )
                            return (
                                <View key={filterData.text}>
                                    <TouchableHighlight
                                        style={styles.filter}
                                        activeOpacity={0.6}
                                        underlayColor="transparent"
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
                                                color={
                                                    itemInFilters
                                                        ? 'gray'
                                                        : '#FFFFFF'
                                                }
                                                style={{ alignSelf: 'center' }}
                                            />
                                            <Text
                                                style={
                                                    itemInFilters
                                                        ? styles.filterTextGray
                                                        : styles.filterText
                                                }
                                            >
                                                {filterData.text}
                                            </Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                            )
                        })}
                    </View>
                </View>
                <View style={styles.content}>
                    <ScrollView style={styles.eventsListContainer}>
                        {this.state.events.map((event) => (
                            <GroupBox key={event.title} {...event} />
                        ))}
                    </ScrollView>
                </View>
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
    filter: {},
    filterText: {
        color: 'white'
    },
    filterTextGray: {
        color: 'gray'
    },
    content: {
        flex: 6
    },
    eventsListContainer: {}
})
