export type GameType =
    | 'soccer'
    | 'basketball'
    | 'tennis'
    | 'run'
    | 'cycling'
    | 'baseball'

export type userId = string

export interface Game {
    type: GameType
    icon: string
}

export interface UserData {
    id: userId
    firstName: string
    lastName: string
    nickName: string
    dateOfBirth: string
    rate: number
    profilePicture: string | null
    favoriteGames: GameType[]
    email?: string
    friends: userId[]
    gamesPlayed: number
    region: string
}

export interface Group {
    id: string
    users: userId[]
    private: boolean
    events: SportEvent[]
    admins: userId[]
}

export interface SportEvent {
    groupId?: Group['id']
    eventId: string
    userIds: userId[]
    gameType: GameType
    title: string
    maxUsers: number
    location: {
        latitude: number
        longitude: number
        addressTitle: string
    }
    date: Date
    eventItems: IEventItem[]
}

export interface IEventItem {
    id: string
    bringUsers: UserId[]
}

export interface ImageDef {
    uri: string
    width: number
    height: number
    base64: string
    cancelled?: boolean
}

export interface RegisterHeaders {
    Accept: string
    'Content-Type': string
}

export interface EditUserData {
    id: string
    firstName?: string
    lastName?: string
    nickName?: string
    dateOfBirth?: string
    rate?: number
    profilePicture?: string | null
    favoriteGames?: GameType[]
    email?: string
    friends?: userId[]
    gamesPlayed?: number
    region?: string
}

export interface RegisterBody {
    dateOfBirth: any
    email: string
    password: string
    region: string
    profilePicture: string
    firstName: string
    lastName: string
    nickName: string
}
