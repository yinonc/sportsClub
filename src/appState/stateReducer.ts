import stateTypes from './stateTypes'
import { appInitialState, AppState } from './appInitialState'

const {
    LOGIN,
    LOGOUT,
    FETCH_USER_DATA,
    SET_COUNTER,
    SET_USER_DATA
} = stateTypes

export default function stateReducer(
    state: AppState = appInitialState,
    action
) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                userData: action.userData
            }
        case LOGOUT:
            return {
                ...state,
                userData: null
            }
        case FETCH_USER_DATA:
            return {
                ...state,
                isFetchingUserData: true
            }
        case SET_COUNTER:
            return {
                ...state,
                counter: action.counter
            }
        case SET_USER_DATA:
            return {
                ...state,
                userData: action.userData
            }
        default:
            return state
    }
}
