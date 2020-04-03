import { UserData } from '../schemas'

export function getMockUserData(): UserData {
    return {
        id: 'some_user_id',
        firstName: 'Leonel',
        lastName: 'Messi',
        email: 'leomessi@gmail.com',
        dateOfBirth: new Date(1992, 11, 6),
        nickName: 'Leo',
        friends: [],
        profileImage: 'messi.png',
        favoriteGames: ['soccer'],
        rate: 99
    }
}
