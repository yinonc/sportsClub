import { UserData } from '../schemas'
import { GroupBoxProps } from '../src/components/genericComponents/genericGroupBox'

export function getMockUserData(): UserData {
    return getAllMockUsers()[Math.floor(Math.random() * 5) + 1]
}

export function getAllMockUsers(): UserData[] {
    return [
        {
            profilePicture: null,
            rate: 8.7,
            id: '1',
            nickName: 'yinon',
            friends: [],
            email: 'yinonmail@gmail.com',
            region: 'il',
            firstName: 'Yinon',
            lastName: 'Cohen',
            dateOfBirth: new Date(1992, 11, 6).toString(),
            gamesPlayed: 102,
            favoriteGames: ['soccer', 'basketball']
        },
        {
            profilePicture: null,
            rate: 8.8,
            id: '2',
            nickName: 'Noma',
            friends: [],
            region: 'il',
            email: 'leomessi@gmail.com',
            firstName: 'Noam',
            lastName: 'Mizrachi',
            dateOfBirth: new Date(1992, 11, 6).toString(),
            gamesPlayed: 102,
            favoriteGames: ['soccer', 'basketball']
        },
        {
            profilePicture: null,
            rate: 9.2,
            id: '3',
            nickName: 'Leo',
            friends: [],
            region: 'en',
            email: 'leomessi@gmail.com',
            firstName: 'Oriel',
            lastName: 'Basson',
            dateOfBirth: new Date(1992, 11, 6).toString(),
            gamesPlayed: 102,
            favoriteGames: ['soccer', 'basketball']
        },
        {
            profilePicture: null,
            rate: 8.3,
            id: '4',
            nickName: 'Sean',
            friends: [],
            email: 'leomessi@gmail.com',
            firstName: 'Sean',
            region: 'il',
            lastName: 'Pindo',
            dateOfBirth: new Date(1992, 11, 6).toString(),
            gamesPlayed: 102,
            favoriteGames: ['soccer', 'basketball']
        },
        {
            profilePicture: null,
            rate: 8.3,
            id: '5',
            nickName: 'Leo',
            friends: [],
            region: 'il',
            email: 'leomessi@gmail.com',
            firstName: 'Eyal',
            lastName: 'Cohen',
            dateOfBirth: new Date(1992, 11, 6).toString(),
            gamesPlayed: 102,
            favoriteGames: ['soccer', 'basketball']
        }
    ]
}

export function getGroupsData(): GroupBoxProps[] {
    return [
        {
            id: 'group-1',
            title: '1 X 1 Tennis',
            imageUri:
                'https://png.pngtree.com/element_origin_min_pic/16/07/04/16577a199ed30bd.jpg',
            gameType: 'tennis'
        },
        {
            id: 'group-2',
            title: 'Ha-Ahukim',
            imageUri: 'https://bootdey.com/img/Content/avatar/avatar1.png',
            gameType: 'basketball'
        },
        {
            id: 'group-3',
            title: 'Soccer - Friday',
            imageUri:
                'https://www.explore-italian-culture.com/images/xitalian-national-soccer-team-01.jpg.pagespeed.ic.Nzizykzi8K.jpg',
            gameType: 'baseball'
        },
        {
            id: 'group-4',
            title: 'FC Barcelona',
            imageUri:
                'https://www.fcbarcelonanoticias.com/uploads/s1/11/95/80/7/foto-de-equipo-del-fc-barcelona-slavia_4_641x361.jpeg',
            gameType: 'soccer'
        },
        {
            id: 'group-5',
            title: 'U.S.A Baseball',
            imageUri:
                'https://specials-images.forbesimg.com/imageserve/5cab7935a7ea436c70f20d71/1920x0.jpg?cropX1=74&cropX2=4425&cropY1=350&cropY2=2845',
            gameType: 'baseball'
        },
        {
            id: 'group-6',
            title: 'Soccer - Friday',
            imageUri:
                'https://www.explore-italian-culture.com/images/xitalian-national-soccer-team-01.jpg.pagespeed.ic.Nzizykzi8K.jpg',
            gameType: 'baseball'
        }
    ]
}
