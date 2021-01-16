import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { connect } from 'react-redux'
import { AppState } from '../../appState/appInitialState'
import PrivacyScreen from '../../components/screens/privacyScreen'

interface SettingItem {
    name: string
    handler: () => void
    iconName: string
}

export interface SettingsPopoverStateProps {
    settingItems: SettingItem[]
}

export interface SettingsPopoverProps extends SettingsPopoverStateProps {
    width: number
}

const SETTINGS_POPOVER_HEIGHT = 200

class SettingsPopover extends React.Component<SettingsPopoverProps> {
    render() {
        return (
            <View style={[styles.container, { width: this.props.width }]}>

                <ScrollView style={{ height: SETTINGS_POPOVER_HEIGHT }}>
                    {this.props.settingItems.map((settingItem, index) => (
                        <View
                            key={settingItem.name}
                        >
                            <TouchableOpacity onPress={settingItem.handler} style={[
                                styles.settingItem,
                                index === this.props.settingItems.length - 1
                                    ? styles.noBorder
                                    : styles.withBorder
                            ]}>
                                <MaterialCommunityIcons
                                    name={settingItem.iconName}
                                    size={20}
                                    color="#000"
                                />
                                <View style={styles.settingItemNameWrapper}>
                                    <Text style={styles.settingItemName}>
                                        {settingItem.name}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        height: SETTINGS_POPOVER_HEIGHT
    },
    settingItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 40,
        paddingLeft: 10
    },
    settingItemNameWrapper: {
        marginLeft: 10
    },
    settingItemName: {},
    withBorder: { borderBottomWidth: 1, borderColor: 'gray' },
    noBorder: {}
})

const mapStateToProps = (state: AppState): SettingsPopoverStateProps => {
    return {
        settingItems: [
            {
                name: 'Settings',
                iconName: 'account-settings',
                handler: () => {}
            },
            {
                name: 'Notifications',
                iconName: 'bell',
                handler: () => {}
            },
            {
                name: 'Friends',
                iconName: 'nature-people',
                handler: () => {}
            },
            {
                name: 'Privacy',
                iconName: 'security',
                handler: () => {
                    console.log('moving -> Privacy sc')
                    
                }
            },
            {
                name: 'Archive',
                iconName: 'archive',
                handler: () => {}
            },
            {
                name: 'Log Out',
                iconName: 'logout',
                handler: () => {}
            }
        ]
    }
}

export default connect(mapStateToProps)(SettingsPopover)
