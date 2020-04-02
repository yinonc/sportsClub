import 'react-native-gesture-handler';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import HomeScreen from "./src/components/homeScreen";
import LoginScreen from "./src/components/loginScreen";
import SearchScreen from "./src/components/searchScreen";
import ProfileScreen from "./src/components/profileScreen";
import GroupsScreen from "./src/components/groupsScreen";
import constants from "./src/constants";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        return <MaterialCommunityIcons
                            name={constants.SCREENS[route.name].symbolName}
                            size={size}
                            color={color}
                        />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name={constants.SCREENS.HOME.name} component={HomeScreen} />
                <Tab.Screen name={constants.SCREENS.SEARCH.name} component={SearchScreen} />
                <Tab.Screen name={constants.SCREENS.GROUPS.name} component={GroupsScreen} />
                <Tab.Screen name={constants.SCREENS.PROFILE.name} component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
