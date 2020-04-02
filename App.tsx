import 'react-native-gesture-handler'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import HomeScreen from './src/components/homeScreen'
import SearchScreen from './src/components/searchScreen'
import GroupsScreen from './src/components/groupsScreen'
import ProfileScreen from './src/components/profileScreen'

import constants from './src/constants'
import stateReducer from './src/appState/stateReducer'

const Tab = createBottomTabNavigator()
const store = createStore(stateReducer)

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                <MaterialCommunityIcons
                                    name={
                                        constants.SCREENS[route.name].symbolName
                                    }
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
            </NavigationContainer>
        </Provider>
    )
}
