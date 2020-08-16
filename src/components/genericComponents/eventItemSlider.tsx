import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import type { EventItemProps } from './eventItem'
import EventItem from './eventItem'
import PlusItem from './plusItem'
interface EventItemSliderProps {
    eventItems: EventItemProps[]
}

export default class EventItemSlider extends React.Component<
    EventItemSliderProps
> {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer} horizontal={true}>
                    <PlusItem key="plus-item" onPress={() => {}} />
                    {this.props.eventItems.map((eventItem) => (
                        <EventItem key={eventItem.id} {...eventItem} />
                    ))}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15
    },
    scrollContainer: {
        width: '100%'
    }
})
