import { SportEvent } from '../schemas'

export function getMockEvents(): SportEvent[] {
    return [
        {
            eventId: '1',
            gameType: 'soccer',
            userIds: ['1', '3', '4'],
            maxUsers: 10,
            title: 'Friday Soccer',
            location: 'Tel Aviv',
            date: new Date(2020, 3, 11, 3, 24, 0)
        },
        {
            eventId: '2',
            gameType: 'soccer',
            userIds: ['1', '2', '5'],
            maxUsers: 15,
            title: 'Come 2 Win',
            location: "Modi'in",
            date: new Date(2020, 5, 5)
        },
        {
            eventId: '3',
            gameType: 'basketball',
            userIds: ['1', '2', '3', '4', '5'],
            maxUsers: 9,
            title: '3 Vs 3',
            location: 'Petah Tikva',
            date: new Date(2020, 5, 5)
        },
        {
            eventId: '4',
            gameType: 'tennis',
            userIds: ['1'],
            maxUsers: 2,
            title: '1 X 1',
            location: 'Tel Aviv',
            date: new Date(2020, 5, 5)
        },
        {
            eventId: '5',
            gameType: 'soccer',
            userIds: ['2', '3', '4'],
            maxUsers: 10,
            title: 'Soccer 5 X 5',
            location: 'Beer Sheva',
            date: new Date(2020, 5, 5)
        },
        {
            eventId: '6',
            gameType: 'baseball',
            userIds: ['1', '4', '5'],
            maxUsers: 10,
            title: 'Group baseball',
            location: 'Holon',
            date: new Date(2020, 5, 5)
        },
        {
            eventId: '7',
            gameType: 'basketball',
            userIds: ['1', '2', '4'],
            maxUsers: 10,
            title: 'our basketball',
            location: 'Tel Aviv',
            date: new Date(2020, 5, 5)
        },
        {
            eventId: '8',
            gameType: 'run',
            userIds: ['2', '5'],
            maxUsers: 10,
            title: 'Group run',
            location: 'Tel Aviv',
            date: new Date(2020, 5, 5)
        },
        {
            eventId: '9',
            gameType: 'tennis',
            userIds: ['1', '2', '3', '4'],
            maxUsers: 4,
            title: '2 X 2',
            location: 'Tel Aviv',
            date: new Date(2020, 5, 5)
        },
        {
            eventId: '10',
            gameType: 'soccer',
            userIds: ['1', '2', '3', '4'],
            maxUsers: 6,
            title: 'Saturday soccer',
            location: "Modi'in",
            date: new Date(2020, 5, 5)
        },
        {
            eventId: '11',
            gameType: 'run',
            userIds: ['1', '2', '3', '4'],
            maxUsers: 20,
            title: 'Running together',
            location: 'Zichron Yaakov',
            date: new Date(2020, 5, 5)
        },
        {
            eventId: '12',
            gameType: 'basketball',
            userIds: ['1', '2', '5'],
            maxUsers: 9,
            title: 'Street basketball',
            location: 'Tel Aviv',
            date: new Date(2020, 5, 5)
        },
        {
            eventId: '13',
            gameType: 'tennis',
            userIds: ['1'],
            maxUsers: 2,
            title: 'Singles Tennis',
            location: 'Jerusalem',
            date: new Date(2020, 5, 5)
        }
    ]
}
