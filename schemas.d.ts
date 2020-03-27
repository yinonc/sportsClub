type GameType = 'soccer' | 'basketball' | 'tennis' | 'running' | 'cycling'

interface Game {
    type: GameType
    icon: string
    displayName: string // Maybe we can use GameType as display name?
}

interface User {
    id: string // Unique key
    firstName: string
    lastName: string
    nickName: string
    age: Date
    rate: number
    profileImage: string // should be URL / URI
    favoriteGame: Game
    email?: string
    friends: User[]
}

type participantType = 'GroupManager' | 'Regular'

interface Group {
    users: {
        [userId: string]: participantType
    } // In this way we can save both the 'participantType' and to get user in group with o(1) complexity.
    private: boolean
    events: SportEvent[]
}

interface SportEvent {
    users: User[]
    game: Game
    maxUsers: number
    location: string // Google place id / something else ?
    date: Date
}
