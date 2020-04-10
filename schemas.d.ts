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
    users: {
        [userId: string]: participantType
    } // In this way we can save both the 'participantType' and to get user in group with o(1) complexity.
    private: boolean
    events: SportEvent[]
}

export interface SportEvent {
    eventId: string
    userIds: UserData['id'][]
    // game: Game
    gameType: GameType
    title: string
    maxUsers: number
    location: string // Google place id / something else ?
    date: Date
}
