import { SportEvent } from '../schemas'

export function getMockEvents(): SportEvent[] {
    return [
        {
            gameType: 'soccer',
            userIds: ['1', '2', '3', '4'],
            maxUsers: 10,
            title: 'Friday Soccer',
            location: 'Tel Aviv',
            date: new Date(2020, 5, 5)
        },
        {
            gameType: 'soccer',
            userIds: ['1', '2', '3', '4'],
            maxUsers: 15,
            title: 'Come 2 Win',
            location: 'Tel Aviv',
            date: new Date(2020, 5, 5)
        },
        {
            gameType: 'basketball',
            userIds: ['1', '2', '3', '4'],
            maxUsers: 9,
            title: '3 Vs 3',
            location: 'Tel Aviv',
            date: new Date(2020, 5, 5)
        },
        {
            gameType: 'tennis',
            userIds: ['1', '2', '3', '4'],
            maxUsers: 10,
            title: '1 X 1',
            location: 'Tel Aviv',
            date: new Date(2020, 5, 5)
        },
        {
            gameType: 'soccer',
            userIds: ['1', '2', '3', '4'],
            maxUsers: 10,
            title: 'Soccer 5 X 5',
            location: 'Tel Aviv',
            date: new Date(2020, 5, 5)
        },
        {
            gameType: 'baseball',
            userIds: ['1', '2', '3', '4'],
            maxUsers: 10,
            title: 'Group baseball',
            location: 'Tel Aviv',
            date: new Date(2020, 5, 5)
        },
        {
            gameType: 'basketball',
            userIds: ['1', '2', '3', '4'],
            maxUsers: 10,
            title: 'our basketball',
            location: 'Tel Aviv',
            date: new Date(2020, 5, 5)
        },
        {
            gameType: 'run',
            userIds: ['1', '2', '3', '4'],
            maxUsers: 10,
            title: 'Group run',
            location: 'Tel Aviv',
            date: new Date(2020, 5, 5)
        },
        {
            gameType: 'tennis',
            userIds: ['1', '2', '3', '4'],
            maxUsers: 4,
            title: '2 X 2',
            location: 'Tel Aviv',
            date: new Date(2020, 5, 5)
        }
    ]
}
