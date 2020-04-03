import 'react-native-gesture-handler'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { Provider, connect } from 'react-redux'

import HomeScreen from './homeScreen'
import SearchScreen from './searchScreen'
import GroupsScreen from './groupsScreen'
import ProfileScreen from './profileScreen'

import constants from '../constants'
import { AppState } from '../appState/appInitialState'
import LoginScreen from './loginScreen'
import RegisterScreen from './registerScreen'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from './welcomeScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

interface ScreensContainerStateProps {
    isUserLoggedIn: boolean
}

class ScreensContainerPure extends React.Component<ScreensContainerStateProps> {
    constructor(props) {
        super(props)
    }

    getScreens() {
        return !this.props.isUserLoggedIn ? (
            <Stack.Navigator>
                <Stack.Screen
                    name={constants.SCREENS.WELCOME.name}
                    component={WelcomeScreen}
                />
                <Stack.Screen
                    name={constants.SCREENS.LOGIN.name}
                    component={LoginScreen}
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
                    name={constants.SCREENS.HOME.name}
                    component={HomeScreen}
                />
                <Tab.Screen
                    name={constants.SCREENS.SEARCH.name}
                    component={SearchScreen}
                />
                <Tab.Screen
                    name={constants.SCREENS.GROUPS.name}
                    component={GroupsScreen}
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
