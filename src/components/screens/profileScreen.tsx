import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableHighlight,
    Dimensions
} from 'react-native'
import { AppState } from '../../appState/appInitialState'
import { connect } from 'react-redux'
import { UserData } from '../../../schemas'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import GroupBox from '../genericComponents/genericGroupBox'
import { getGroupsData } from '../../../mocks/userData'
import generalStyle from '../../styles/generalStyle'
import Popover, { Rect } from 'react-native-popover-view'
import SettingsPopover from '../genericComponents/settingsPopover'

interface ProfileScreenStateProps {
    userData: UserData
}

function calculateAge(date: Date): number {
    const ageDifMs = Date.now() - date.getTime()
    const ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}

interface ProfileScreenState {
    showSettingsMenu: boolean
    popoverWidth: number
}

class ProfileScreenPure extends React.Component<
    ProfileScreenStateProps,
    ProfileScreenState
> {
    state = { showSettingsMenu: false, popoverWidth: 200 }
    profileScreenRef = null
    toggleSettingsMenu = () => {
        this.setState({ showSettingsMenu: !this.state.showSettingsMenu })
    }

    render() {
        return (
            <View
                style={styles.container}
                ref={(ref) => (this.profileScreenRef = ref)}
                onLayout={(event) => {
                    this.setState({
                        popoverWidth: event.nativeEvent.layout.width
                    })
                }}
            >
                <Popover
                    placement={'bottom'}
                    isVisible={this.state.showSettingsMenu}
                    fromView={this.profileScreenRef}
                    onRequestClose={() => this.toggleSettingsMenu()}
                >
                    <SettingsPopover width={this.state.popoverWidth} />
                </Popover>
                <View style={styles.header}>
                    <View style={styles.headerLeftItem}>
                        <MaterialCommunityIcons
                            name="format-list-bulleted"
                            size={20}
                            color="#FFFFFF"
                        />
                    </View>
                    <View style={styles.headerContent}>
                        <Image
                            style={styles.avatar}
                            source={{
                                uri: this.props.userData.profileImage
                            }}
                        />
                        <Text
                            style={styles.name}
                        >{`${this.props.userData.firstName} ${this.props.userData.lastName}`}</Text>
                        <View style={styles.locationInfo}>
                            <MaterialCommunityIcons
                                name="map-marker"
                                size={20}
                                color="#FFFFFF"
                            />
                            <Text style={styles.locationText}>Tel Aviv</Text>
                        </View>
                    </View>
                    <View style={styles.headerRightItem}>
                        <TouchableHighlight onPress={this.toggleSettingsMenu}>
                            <MaterialCommunityIcons
                                name="format-list-bulleted"
                                size={30}
                                color="#FFFFFF"
                            />
                        </TouchableHighlight>
                    </View>
                </View>

                <View style={styles.body}>
                    <View style={styles.boxesWrapper}>
                        <View style={styles.menuBox}>
                            <Text style={styles.info}>
                                {this.props.userData.rate}
                            </Text>
                            <Text style={styles.info}>Rate</Text>
                        </View>

                        <View style={styles.menuBox}>
                            <Text style={styles.info}>
                                {this.props.userData.gamesPlayed}
                            </Text>
                            <Text style={styles.info}>Games</Text>
                        </View>

                        <View style={styles.menuBox}>
                            <View style={styles.favoriteGameWrapper}>
                                {this.props.userData.favoriteGames
                                    .slice(0, 2)
                                    .map((game) => (
                                        <MaterialCommunityIcons
                                            key={game}
                                            name={game}
                                            size={20}
                                            color={
                                                generalStyle.GENERAL.BOX
                                                    .ICON_COLOR
                                            }
                                        />
                                    ))}
                            </View>
                            <Text style={styles.info}>Sports</Text>
                        </View>
                    </View>
                    <View style={styles.age}>
                        <Text style={styles.ageName}>{`Age: ${calculateAge(
                            this.props.userData.dateOfBirth
                        )}`}</Text>
                    </View>
                    <View style={styles.groupsHeader}>
                        <MaterialCommunityIcons
                            name="account-group"
                            size={20}
                            color={generalStyle.GENERAL.MAIN_ICON_COLOR}
                            style={{ marginRight: 5, marginTop: 3 }}
                        />
                        <Text style={styles.groupsHeaderName}>Groups:</Text>
                    </View>
                    <ScrollView style={styles.groupsListContainer}>
                        {getGroupsData().map((item) => (
                            <GroupBox key={item.id} {...item} />
                        ))}
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state: AppState): ProfileScreenStateProps => ({
    userData: state.userData
})

const mapDispatchToProps = (dispatch) => ({})

const ProfileScreen = connect(
    mapStateToProps, // called every time state is changed
    mapDispatchToProps // Calls once when init
)(ProfileScreenPure)

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: generalStyle.GENERAL.MAIN_BACKGROUND_COLOR
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 70,
        marginRight: 12,
        marginLeft: 12
    },
    headerLeftItem: {
        // Next two are temp hack for aligning header content
        width: 40,
        opacity: 0
    },
    headerRightItem: {},
    headerContent: {
        alignItems: 'center'
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: 'white',
        marginBottom: 10
    },
    locationInfo: {
        flexDirection: 'row'
    },
    locationText: {
        marginTop: 2,
        color: 'white'
    },
    name: {
        fontSize: 22,
        color: '#FFFFFF',
        fontWeight: '600'
    },
    body: {
        alignItems: 'center',
        padding: 5,
        flexDirection: 'column'
    },
    textInfo: {
        fontSize: 18,
        marginTop: 20,
        color: '#696969'
    },
    boxesWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '95%',
        justifyContent: 'space-around',
        backgroundColor: generalStyle.GENERAL.BOX.MAIN_BACKGROUND_COLOR,
        borderRadius: 10
    },
    favoriteGameWrapper: {
        flexDirection: 'row'
    },
    menuBox: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {
            height: 2,
            width: -2
        },
        elevation: 4
    },
    age: {
        marginTop: 2,
        marginRight: 'auto',
        marginLeft: 10
    },
    ageName: {
        marginRight: 5,
        fontSize: 22,
        color: generalStyle.GENERAL.MAIN_TEXT_COLOR,
        fontWeight: '600'
    },
    groupsHeader: {
        marginTop: 14,
        flexDirection: 'row',
        marginRight: 'auto',
        marginLeft: 10
    },
    groupsHeaderName: {
        marginRight: 5,
        fontSize: 22,
        color: generalStyle.GENERAL.MAIN_TEXT_COLOR,
        fontWeight: '600'
    },
    info: {
        fontSize: 18,
        color: generalStyle.GENERAL.BOX.MAIN_TEXT_COLOR
    },
    groupsListContainer: {
        alignSelf: 'stretch'
    }
})
