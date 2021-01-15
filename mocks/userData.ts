import { UserData } from '../schemas'
import { GroupBoxProps } from '../src/components/genericComponents/genericGroupBox'

export function getMockUserData(): UserData {
    return getAllMockUsers()[Math.floor(Math.random() * 5) + 1]
}

export function getAllMockUsers(): UserData[] {
    return [
        {
            profilePicture:
                'https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.0-9/82181983_10220991409917975_2722998403691708416_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=KqIDl4sfKM8AX-W-kIo&_nc_ht=scontent.fhfa1-1.fna&oh=72943a1bb4e9e5c70553687c96f20f74&oe=5F93B5BA',
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
            profilePicture:
                'https://instagram.fhfa1-2.fna.fbcdn.net/v/t51.2885-19/s320x320/91678577_1181080608898119_1029039611109703680_n.jpg?_nc_ht=instagram.fhfa1-2.fna.fbcdn.net&_nc_ohc=lLxI9SYf9qIAX_27idW&oh=c23c05a63bfda4491986910a68f23793&oe=5F95A729',
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
            profilePicture:
                'https://scontent.fhfa1-2.fna.fbcdn.net/v/t1.0-9/90877461_10219270495211580_1610044773819744256_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=iuLwl-ROShMAX8LdL1z&_nc_ht=scontent.fhfa1-2.fna&oh=0f8707667db0f8a1ef09124b09541f70&oe=5F952BD7',
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
            profilePicture:
                'https://instagram.fhfa1-2.fna.fbcdn.net/v/t51.2885-19/s320x320/56905173_2232296596864973_8253886163098533888_n.jpg?_nc_ht=instagram.fhfa1-2.fna.fbcdn.net&_nc_ohc=LecCDP_PbK0AX-kT4xJ&oh=486accab543355bf3a21e37cfc7e3be3&oe=5F9767BF',
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
            profilePicture:
                'https://scontent.fhfa1-2.fna.fbcdn.net/v/t1.0-9/46516775_10156716297985690_1188493196846432256_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=0q38P7xPFU4AX_MF0Q4&_nc_ht=scontent.fhfa1-2.fna&oh=bb1743e24b4e01890fc9a141e2bf905a&oe=5F920455',
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
