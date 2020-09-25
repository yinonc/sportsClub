import { SportEvent } from '../schemas'

export function getMockEvents(): SportEvent[] {
    return [
        {
            eventId: '1',
            gameType: 'soccer',
            userIds: ['1', '3', '4'],
            maxUsers: 10,
            title: 'Friday Soccer',
            location: {
                longitude: 35.010397,
                latitude: 31.890267,
                addressTitle: 'Ironi A'
            },
            date: new Date(2020, 3, 11, 3, 24, 0),
            eventItems: [
                { id: 'bottle-wine', bringUsers: ['1', '3'] },
                { id: 'soccer', bringUsers: ['3'] }
            ]
        },
        {
            eventId: '2',
            gameType: 'soccer',
            userIds: ['1', '2', '5'],
            maxUsers: 15,
            title: 'Come 2 Win',
            location: {
                longitude: 34.951977,
                latitude: 32.573905,
                addressTitle: `Zichron Yaakov`
            },
            date: new Date(2020, 5, 5),
            eventItems: [
                { id: 'bottle-wine', bringUsers: ['1', '2'] },
                { id: 'soccer', bringUsers: ['5'] }
            ]
        },
        {
            eventId: '3',
            gameType: 'basketball',
            userIds: ['1', '2', '3', '4', '5'],
            maxUsers: 9,
            title: '3 Vs 3',
            location: {
                longitude: 35.010397,
                latitude: 31.890267,
                addressTitle: `Deshe Modi'in`
            },
            date: new Date(2020, 5, 5),
            eventItems: [
                { id: 'bottle-wine', bringUsers: ['4', '2'] },
                { id: 'basketball', bringUsers: ['5', '3'] }
            ]
        },
        {
            eventId: '4',
            gameType: 'tennis',
            userIds: ['1'],
            maxUsers: 2,
            title: '1 X 1',
            location: {
                longitude: 34.78176759999999,
                latitude: 32.0852999,
                addressTitle: `Tel Aviv`
            },
            date: new Date(2020, 5, 5),
            eventItems: [
                { id: 'bottle-wine', bringUsers: ['1'] },
                { id: 'tennis', bringUsers: ['1'] }
            ]
        },
        {
            eventId: '5',
            gameType: 'soccer',
            userIds: ['2', '3', '4'],
            maxUsers: 10,
            title: 'Soccer 5 X 5',
            location: {
                longitude: 34.78176759999999,
                latitude: 32.0852999,
                addressTitle: `Tel Aviv`
            },
            date: new Date(2020, 5, 5),
            eventItems: []
        },
        {
            eventId: '6',
            gameType: 'baseball',
            userIds: ['1', '4', '5'],
            maxUsers: 10,
            title: 'Group baseball',
            location: {
                longitude: 34.951977,
                latitude: 32.573905,
                addressTitle: `Zichron Yaakov`
            },
            date: new Date(2020, 5, 5),
            eventItems: [
                { id: 'bottle-wine', bringUsers: ['1'] },
                { id: 'ball', bringUsers: ['1'] }
            ]
        },
        {
            eventId: '7',
            gameType: 'basketball',
            userIds: ['1', '2', '4'],
            maxUsers: 10,
            title: 'our basketball',
            location: {
                longitude: 35.010397,
                latitude: 31.890267,
                addressTitle: 'Deshe'
            },
            date: new Date(2020, 5, 5),
            eventItems: [
                { id: 'bottle-wine', bringUsers: ['1'] },
                { id: 'ball', bringUsers: ['1'] }
            ]
        },
        {
            eventId: '8',
            gameType: 'run',
            userIds: ['2', '5'],
            maxUsers: 10,
            title: 'Group run',
            location: {
                longitude: 35.010397,
                latitude: 31.890267,
                addressTitle: 'Deshe Modiin'
            },
            date: new Date(2020, 5, 5),
            eventItems: [{ id: 'bottle-wine', bringUsers: ['2', '5'] }]
        },
        {
            eventId: '9',
            gameType: 'tennis',
            userIds: ['1', '2', '3', '4'],
            maxUsers: 4,
            title: '2 X 2',
            location: {
                longitude: 35.010397,
                latitude: 31.890267,
                addressTitle: 'Deshe'
            },
            date: new Date(2020, 5, 5),
            eventItems: [
                { id: 'bottle-wine', bringUsers: ['1'] },
                { id: 'ball', bringUsers: ['1'] }
            ]
        },
        {
            eventId: '10',
            gameType: 'soccer',
            userIds: ['1', '2', '3', '4'],
            maxUsers: 6,
            title: 'Saturday soccer',
            location: {
                longitude: 35.010397,
                latitude: 31.890267,
                addressTitle: `Modi'in`
            },
            date: new Date(2020, 5, 5),
            eventItems: [
                { id: 'bottle-wine', bringUsers: ['1'] },
                { id: 'ball', bringUsers: ['1'] }
            ]
        },
        {
            eventId: '11',
            gameType: 'run',
            userIds: ['1', '2', '3', '4'],
            maxUsers: 20,
            title: 'Running together',
            location: {
                longitude: 35.010397,
                latitude: 31.890267,
                addressTitle: `Modi'in`
            },
            date: new Date(2020, 5, 5),
            eventItems: [
                { id: 'bottle-wine', bringUsers: ['1'] },
                { id: 'ball', bringUsers: ['1'] }
            ]
        },
        {
            eventId: '12',
            gameType: 'basketball',
            userIds: ['1', '2', '5'],
            maxUsers: 9,
            title: 'Street basketball',
            location: {
                longitude: 34.78176759999999,
                latitude: 32.0852999,
                addressTitle: `Tel Aviv`
            },
            date: new Date(2020, 5, 5),
            eventItems: [
                { id: 'bottle-wine', bringUsers: ['1'] },
                { id: 'ball', bringUsers: ['1'] }
            ]
        },
        {
            eventId: '13',
            gameType: 'tennis',
            userIds: ['1'],
            maxUsers: 2,
            title: 'Singles Tennis',
            location: {
                longitude: 34.78176759999999,
                latitude: 32.0852999,
                addressTitle: `Tel Aviv`
            },
            date: new Date(2020, 5, 5),
            eventItems: [
                { id: 'bottle-wine', bringUsers: ['1'] },
                { id: 'ball', bringUsers: ['1'] }
            ]
        },
        {
            eventId: '14',
            gameType: 'tennis',
            userIds: ['1', '5'],
            maxUsers: 4,
            title: 'Doubles Tennis',
            location: {
                longitude: 34.78176759999999,
                latitude: 32.0852999,
                addressTitle: `Tel Aviv`
            },
            date: new Date(2020, 5, 5),
            eventItems: [
                { id: 'bottle-wine', bringUsers: ['1'] },
                { id: 'ball', bringUsers: ['1'] }
            ]
        }
    ]
}
