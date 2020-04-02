import stateTypes from './stateTypes'

export const setCounter = (counter: number) => ({type: stateTypes.SET_COUNTER, counter})
