export type GameType =
    | 'soccer'
    | 'basketball'
    | 'tennis'
    | 'run'
    | 'cycling'
    | 'baseball'

export interface Game {
    type: GameType
    icon: string
    displayName: string // Maybe we can use GameType as display name?
}

export interface UserData {
    id: string // Unique key
    firstName: string
    lastName: string
    nickName: string
    dateOfBirth: Date
    rate: number
    profileImage: string // should be URL / URI
    favoriteGames: GameType[]
    email?: string
    friends: User[]
    gamesPlayed: number
}

export type participantType = 'GroupManager' | 'Regular'

export interface Group {
    id: string
    users: {
        [userId: string]: participantType
    } // In this way we can save both the 'participantType' and to get user in group with o(1) complexity.
    private: boolean
    events: SportEvent[]
}

export interface SportEvent {
    groupId?: Group['id']
    eventId: string
    userIds: UserData['id'][]
    gameType: GameType
    title: string
    maxUsers: number
    location: {
        latitude: number
        longitude: number
        addressTitle: string
    }
    date: Date
}
