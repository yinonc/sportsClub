import React from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import { AppState } from '../../appState/appInitialState'
import { connect } from 'react-redux'
import { UserData } from '../../../schemas'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import GroupBox, { GroupBoxProps } from '../genericComponents/genericGroupBox'

interface ProfileScreenStateProps {
    userData: UserData
}

function calculateAge(date: Date): number {
    const ageDifMs = Date.now() - date.getTime()
    const ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}

function getGroupsData(): GroupBoxProps[] {
    return [
        {
            title: 'Habolbolim1',
            imageUri:
                'https://png.pngtree.com/element_origin_min_pic/16/07/04/16577a199ed30bd.jpg',
            gameType: 'soccer'
        },
        {
            title: 'Habolbolim2',
            imageUri:
                'https://png.pngtree.com/element_origin_min_pic/16/07/04/16577a199ed30bd.jpg',
            gameType: 'soccer'
        },
        {
            title: 'Habolbolim3',
            imageUri:
                'https://png.pngtree.com/element_origin_min_pic/16/07/04/16577a199ed30bd.jpg',
            gameType: 'soccer'
        }
    ]
}

class ProfileScreenPure extends React.Component<ProfileScreenStateProps> {
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Image
                            style={styles.avatar}
                            source={{
                                uri:
                                    'https://bootdey.com/img/Content/avatar/avatar1.png'
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
                                            color="black"
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
                            color="gray"
                            style={{ marginRight: 5, marginTop: 3 }}
                        />
                        <Text style={styles.groupsHeaderName}>Groups:</Text>
                    </View>
                    <View style={styles.groupsListContainer}>
                        <FlatList
                            data={getGroupsData()}
                            renderItem={({ item }) => (
                                <GroupBox
                                    gameType={item.gameType}
                                    imageUri=""
                                    title={item.title}
                                />
                            )}
                            keyExtractor={(item) => item.title}
                        />
                    </View>
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
    header: {
        paddingTop: 20,
        backgroundColor: '#00BFFF'
    },
    headerContent: {
        padding: 30,
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
        borderWidth: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    favoriteGameWrapper: {
        flexDirection: 'row'
    },
    menuBox: {
        width: 90,
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
        marginRight: 'auto',
        marginLeft: 20
    },
    ageName: {
        marginRight: 5,
        fontSize: 22,
        color: 'gray',
        fontWeight: '600'
    },
    groupsHeader: {
        marginTop: 5,
        flexDirection: 'row',
        marginRight: 'auto',
        marginLeft: 20
    },
    groupsHeaderName: {
        marginRight: 5,
        fontSize: 22,
        color: 'gray',
        fontWeight: '600'
    },
    info: {
        fontSize: 18,
        color: '#696969'
    },
    groupsListContainer: {}
})
