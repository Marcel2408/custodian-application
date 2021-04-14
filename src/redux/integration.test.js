import { storeFactory } from '../test/testUtils'
import { toggleArchiveTask, toggleCompleteTask } from './actions'

describe('action dispatchers', () => {
    let store
    const initialState = [
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
            archived: false,
            reminder: null,
        },
    ]

    beforeEach(() => {
        store = storeFactory(initialState)
    })

    test('updates state correctly for archiving a task', () => {
        store.dispatch(toggleArchiveTask(0))
        const expectedState = [
            { ...initialState[0], archived: true },
            initialState[1],
        ]
        const newState = store.getState()
        expect(newState).toEqual(expectedState)
    })

    test('updates state correctly for completing a task', () => {
        store.dispatch(toggleCompleteTask(1))
        const expectedState = [
            initialState[0],
            { ...initialState[1], completed: false },
        ]
        const newState = store.getState()
        expect(newState).toEqual(expectedState)
    })
})
