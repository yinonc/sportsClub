import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import EventItem from './eventItem'
import PlusItem from './plusItem'
import { IEventItem, UserData, userId } from '../../../schemas'
interface EventItemSliderProps {
    popoverWidth: number
    currentUserId: userId
    eventItems: IEventItem[]
    onItemClick(eventItem: IEventItem): void
    getParticipantsData(userIds: userId[]): UserData[]
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
                        <EventItem
                            popoverWidth={this.props.popoverWidth}
                            getParticipantsData={this.props.getParticipantsData}
                            isSelected={eventItem.bringUsers.includes(
                                this.props.currentUserId
                            )}
                            eventItemDef={eventItem}
                            key={eventItem.id}
                            onPress={this.props.onItemClick}
                            {...eventItem}
                        />
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
