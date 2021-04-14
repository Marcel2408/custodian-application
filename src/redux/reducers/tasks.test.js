import * as types from '../actions/types'
import rootReducer from './index'

let mockState = [
    {
        title: 'Renew Parking Permit',
        body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna.',
        completed: false,
        id: 0,
        archived: false,
        reminder: null,
    },
    {
        title: 'Organise a Photoshoot',
        body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna.',
        completed: true,
        id: 1,
        archived: true,
        reminder: null,
    },
]

describe('rootReducer', () => {
    test('returns default initial state when no action is passed', () => {
        const newState = rootReducer(mockState, {})
        expect(newState).toEqual(mockState)
    })

    test('returns state with the modified `completed` prop upon receiving action of type `TOGGLE_COMPLETE_TASK`', () => {
        const newState = rootReducer(mockState, {
            type: types.TOGGLE_COMPLETE_TASK,
            id: 0,
        })
        expect(newState[0]).toEqual({
            title: 'Renew Parking Permit',
            body:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna.',
            completed: true,
            id: 0,
            archived: false,
            reminder: null,
        })
    })

    test('returns state with the modified `archived` prop upon receiving action of type `TOGGLE_ARCHIVE_TASK`', () => {
        const newState = rootReducer(mockState, {
            type: types.TOGGLE_ARCHIVE_TASK,
            id: 1,
        })
        expect(newState[1]).toEqual({
            title: 'Organise a Photoshoot',
            body:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna.',
            completed: true,
            id: 1,
            archived: false,
            reminder: null,
        })
    })
})
