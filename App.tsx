import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import stateReducer from './src/appState/stateReducer'
import ScreensContainer from './src/components/screensContainer'

const store = createStore(stateReducer)

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <ScreensContainer />
            </NavigationContainer>
        </Provider>
    )
}
