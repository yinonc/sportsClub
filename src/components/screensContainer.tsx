import 'react-native-gesture-handler'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Provider, connect } from 'react-redux'

import LocationsScreen from './screens/locationsScreen'
import EventsScreen from './screens/eventsScreen'
import ProfileScreen from './screens/profileScreen'
import EventScreen from './screens/eventScreen'
import RegisterScreen from './screens/registerScreen'
import LoginScreen from './screens/loginScreen'

import constants from '../constants'
import { AppState } from '../appState/appInitialState'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

interface ScreensContainerStateProps {
    isUserLoggedIn: boolean
}

const EventsScreensStack = createStackNavigator()

function EventsStackScreen() {
    return (
        <EventsScreensStack.Navigator>
            <EventsScreensStack.Screen
                name={constants.SCREENS.EVENTS.name}
                options={{ headerShown: false }}
                component={EventsScreen}
            />
            <EventsScreensStack.Screen
                name={constants.SCREENS.EVENT.name}
                component={EventScreen}
            />
        </EventsScreensStack.Navigator>
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
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray'
                }}
            >
                <Tab.Screen
                    name={constants.SCREENS.EVENTS.name}
                    component={EventsStackScreen}
                />
                <Tab.Screen
                    name={constants.SCREENS.LOCATIONS.name}
                    component={LocationsScreen}
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
