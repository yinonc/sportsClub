import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ScrollView
} from 'react-native'
import { SearchBar } from 'react-native-elements'
import { SportEvent, UserData } from '../../../schemas'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { getMockEvents } from '../../../mocks/events'
import EventBox from '../genericComponents/genericEventBox'
import constants from '../../constants'
import { getUserDataById, getParticipantsData } from '../../userUtils'
import generalStyle from '../../styles/generalStyle'
type EventsFilter = 'EVENTS' | 'GROUPS' | 'PROFILES'

interface SearchScreenProps {
    events?: SportEvent[]
    navigation: any
}

interface SearchScreenState {
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
        text: 'Events',
        icon: 'notification-clear-all',
        filterName: 'EVENTS'
    },
    {
        text: 'Groups',
        icon: 'account-group',
        filterName: 'GROUPS'
    },
    {
        text: 'Profiles',
        icon: 'human',
        filterName: 'PROFILES'
    }
]

export default class SearchScreen extends React.Component<
    SearchScreenProps,
    SearchScreenState
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

    onItemClick = (sportEvent: SportEvent) => {
        this.props.navigation.navigate(constants.SCREENS.EVENT.name, {
            sportEvent,
            participantsData: getParticipantsData(sportEvent.userIds)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Search</Text>
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
                                                size={
                                                    generalStyle.GENERAL.SEARCH
                                                        .FILTERS.ICON_SIZE
                                                }
                                                color={
                                                    itemInFilters
                                                        ? generalStyle.GENERAL
                                                              .SEARCH.FILTERS
                                                              .ICON_COLOR_ACTIVE
                                                        : generalStyle.GENERAL
                                                              .SEARCH.FILTERS
                                                              .ICON_COLOR_INACTIVE
                                                }
                                                style={{ alignSelf: 'center' }}
                                            />
                                            <Text
                                                style={
                                                    itemInFilters
                                                        ? styles.filterTextActive
                                                        : styles.filterTextInactive
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
                        {this.state.events.map((sportEvent) => (
                            <EventBox
                                getParticipantsData={getParticipantsData}
                                onItemClick={() => this.onItemClick(sportEvent)}
                                key={sportEvent.eventId}
                                {...sportEvent}
                            />
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
        backgroundColor: generalStyle.GENERAL.MAIN_BACKGROUND_COLOR
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
    filterTextActive: {
        color: generalStyle.GENERAL.SEARCH.FILTERS.LABEL_COLOR_ACTIVE
    },
    filterTextInactive: {
        color: generalStyle.GENERAL.SEARCH.FILTERS.LABEL_COLOR_INACTIVE
    },
    content: {
        flex: 6,
        backgroundColor: generalStyle.GENERAL.MAIN_BACKGROUND_COLOR
    },
    eventsListContainer: {}
})
