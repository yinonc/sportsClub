import stateTypes from './stateTypes'
import {UserData} from "../../schemas";

export const setCounter = (counter: number) => ({type: stateTypes.SET_COUNTER, counter})

export const setUserData = (userData: UserData) => ({type: stateTypes.LOGIN, userData})
