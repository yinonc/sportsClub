import { UserData } from '../schemas'
import {GroupBoxProps} from "../src/components/genericComponents/genericGroupBox";

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
        favoriteGames: ['soccer', 'basketball'],
        rate: 8.7,
        gamesPlayed: 102
    }
}

export function getGroupsData(): GroupBoxProps[] {
    return [
        {
            title: '1 X 1 Tennis',
            imageUri:
                'https://png.pngtree.com/element_origin_min_pic/16/07/04/16577a199ed30bd.jpg',
            gameType: 'tennis'
        },
        {
            title: 'Ha-Ahukim',
            imageUri:
                'https://bootdey.com/img/Content/avatar/avatar1.png',
            gameType: 'basketball'
        },
        {
            title: 'FC Barcelona',
            imageUri:
                'https://www.fcbarcelonanoticias.com/uploads/s1/11/95/80/7/foto-de-equipo-del-fc-barcelona-slavia_4_641x361.jpeg',
            gameType: 'soccer'
        },
        {
            title: 'U.S.A Baseball',
            imageUri:
                'https://specials-images.forbesimg.com/imageserve/5cab7935a7ea436c70f20d71/1920x0.jpg?cropX1=74&cropX2=4425&cropY1=350&cropY2=2845',
            gameType: 'baseball'
        },
        {
            title: 'Soccer - Friday',
            imageUri:
                'https://www.explore-italian-culture.com/images/xitalian-national-soccer-team-01.jpg.pagespeed.ic.Nzizykzi8K.jpg',
            gameType: 'baseball'
        }
    ]
}
