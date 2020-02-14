type GameType = 'soccer' | 'basketball' | 'tennis' | 'running' | 'cycling';

interface Game {
    type: GameType;
    icon: string;
    displayName: string; // Maybe we can use GameType as display name?
}

interface User {
    id: string; // Unique key
    firstName: string;
    lastName: string;
    nickName: string;
    age: Date;
    rate: number;
    profileImage: string; // should be URL / URI
    favoriteGame: Game;
    email?: string;
}

interface Group {
    users: User[];
    private: boolean;
    events: SportEvent[];
}

interface SportEvent {
    users: User[];
    gameType: GameType;
    maxUsers: number;
    location: string; // Google place id / something else ?
    date: Date;
}
