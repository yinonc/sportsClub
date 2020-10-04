import 'react-native-gesture-handler'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { connect } from 'react-redux'

import LocationsScreen from './screens/locationsScreen'
import EventsScreen from './screens/eventsScreen'
import NotificationsScreen from './screens/notificationsScreen'
import SearchScreen from './screens/searchScreen'
import ProfileScreen from './screens/profileScreen'
import EventScreen from './screens/eventScreen'
import RegisterScreen from './screens/registerScreen'
import LoginScreen from './screens/loginScreen'

import constants from '../constants'
import { AppState } from '../appState/appInitialState'
import { createStackNavigator } from '@react-navigation/stack'
import generalStyle from '../styles/generalStyle'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

interface ScreensContainerStateProps {
    isUserLoggedIn: boolean
}

const SearchScreensStack = createStackNavigator()

function SearchStackScreen() {
    return (
        <SearchScreensStack.Navigator>
            <SearchScreensStack.Screen
                name={constants.SCREENS.SEARCH.name}
                options={{ headerShown: false }}
                component={SearchScreen}
            />
            <SearchScreensStack.Screen
                name={constants.SCREENS.EVENT.name}
                component={EventScreen}
            />
        </SearchScreensStack.Navigator>
    )
}

class ScreensContainerPure extends React.Component<ScreensContainerStateProps> {
    constructor(props) {
        super(props)
    }

    getScreens() {
        return !this.props.isUserLoggedIn ? (
            <Stack.Navigator>
                <Stack.Screen
                    name={constants.SCREENS.LOGIN.name}
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={constants.SCREENS.REGISTER.name}
                    component={RegisterScreen}
                />
            </Stack.Navigator>
        ) : (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <MaterialCommunityIcons
                                name={constants.SCREENS[route.name].symbolName}
                                size={size}
                                color={color}
                            />
                        )
                    }
                })}
                tabBarOptions={{
                    activeTintColor: generalStyle.BOTTOM.BAR_ICONS_ACTIVE,
                    inactiveTintColor: generalStyle.BOTTOM.BAR_ICONS_INACTIVE,
                    labelStyle: {
                        fontSize: generalStyle.BOTTOM.LABEL.FONT_SIZE
                    },
                    activeBackgroundColor: generalStyle.BOTTOM.BAR_COLOR,
                    inactiveBackgroundColor: generalStyle.BOTTOM.BAR_COLOR
                }}
            >
                <Tab.Screen
                    name={constants.SCREENS.SEARCH.name}
                    component={SearchStackScreen}
                />
                <Tab.Screen
                    name={constants.SCREENS.LOCATIONS.name}
                    component={LocationsScreen}
                />
                <Tab.Screen
                    name={constants.SCREENS.EVENTS.name}
                    component={EventsScreen}
                />
                <Tab.Screen
                    name={constants.SCREENS.NOTIFICATIONS.name}
                    component={NotificationsScreen}
                />
                <Tab.Screen
                    name={constants.SCREENS.PROFILE.name}
                    component={ProfileScreen}
                />
            </Tab.Navigator>
        )
    }

    render() {
        return this.getScreens()
    }
}

const mapStateToProps = (state: AppState): ScreensContainerStateProps => ({
    isUserLoggedIn: !!state.userData
})

const mapDispatchToProps = (dispatch) => ({})

const ScreensContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ScreensContainerPure)

export default ScreensContainer
