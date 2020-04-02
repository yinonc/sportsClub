import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { setCounter } from '../appState/stateActions'
import { AppState } from '../appState/appInitialState'

interface HomeScreenProps {
    counter: number
    setCounter(count: number): void
}

class HomeScreenPure extends React.Component<HomeScreenProps> {
    render() {
        return (
            <View style={styles.container}>
                <Text>{`Home Screen - counter: ${this.props.counter}`}</Text>
                <Button
                    onPress={() =>
                        this.props.setCounter(this.props.counter + 1)
                    }
                    title="Count with me !"
                />
            </View>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
    setCounter: (counter) => dispatch(setCounter(counter))
})

const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreenPure)
export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
