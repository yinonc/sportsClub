import { UserData } from '../schemas'
import { GroupBoxProps } from '../src/components/genericComponents/genericGroupBox'

export function getMockUserData(): UserData {
    return {
        id: 'some_user_id',
        firstName: 'Leonel',
        lastName: 'Messi',
        email: 'leomessi@gmail.com',
        dateOfBirth: new Date(1992, 11, 6),
        nickName: 'Leo',
        friends: [],
        profileImage: 'https://bootdey.com/img/Content/avatar/avatar1.png',
        favoriteGames: ['soccer', 'basketball'],
        rate: 8.7,
        gamesPlayed: 102
    }
}

export function getAllMockUsers(): UserData[] {
    return [
        {
            profileImage:
                'https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.0-9/82181983_10220991409917975_2722998403691708416_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=3pc0K4cYBaIAX8gxaSf&_nc_ht=scontent.fhfa1-1.fna&oh=76684b1044bfe5b7cac1298c2d66d6b2&oe=5EB639BA',
            rate: 8.7,
            id: '1',
            nickName: 'Leo',
            friends: [],
            email: 'leomessi@gmail.com',
            firstName: 'Yinon',
            lastName: 'Cohen',
            dateOfBirth: new Date(1992, 11, 6),
            gamesPlayed: 102,
            favoriteGames: ['soccer', 'basketball']
        },
        {
            profileImage:
                'https://scontent.fhfa1-2.fna.fbcdn.net/v/t1.0-9/23755648_10214682637922618_8526853554069157632_n.jpg?_nc_cat=104&_nc_sid=13bebb&_nc_ohc=IWxgTORN9SIAX9u4g_Y&_nc_ht=scontent.fhfa1-2.fna&oh=96e7aa15802f372166e3c513a9f3fd67&oe=5EB737BA',
            rate: 8.8,
            id: '2',
            nickName: 'Leo',
            friends: [],
            email: 'leomessi@gmail.com',
            firstName: 'Noam',
            lastName: 'Mizrachi',
            dateOfBirth: new Date(1992, 11, 6),
            gamesPlayed: 102,
            favoriteGames: ['soccer', 'basketball']
        },
        {
            profileImage:
                'https://scontent.fhfa1-2.fna.fbcdn.net/v/t31.0-8/s960x960/28947857_10213631739446210_1287137819099110066_o.jpg?_nc_cat=105&_nc_sid=7aed08&_nc_ohc=KQTsdHAj3Q0AX-Kz-3b&_nc_ht=scontent.fhfa1-2.fna&_nc_tp=7&oh=404e7fecf16d1f984f6469369e91dac6&oe=5EB4A188',
            rate: 9.2,
            id: '3',
            nickName: 'Leo',
            friends: [],
            email: 'leomessi@gmail.com',
            firstName: 'Oriel',
            lastName: 'Basson',
            dateOfBirth: new Date(1992, 11, 6),
            gamesPlayed: 102,
            favoriteGames: ['soccer', 'basketball']
        },
        {
            profileImage:
                'https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.0-9/40243233_2083668025001303_9081320133888049152_n.jpg?_nc_cat=111&_nc_sid=7aed08&_nc_ohc=Y6naR2OPi40AX844B3W&_nc_ht=scontent.fhfa1-1.fna&oh=fbce1d75cc53ba6944c313517ec5e603&oe=5EB581CD',
            rate: 8.3,
            id: '4',
            nickName: 'Leo',
            friends: [],
            email: 'leomessi@gmail.com',
            firstName: 'Lior',
            lastName: 'Cohen',
            dateOfBirth: new Date(1992, 11, 6),
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
