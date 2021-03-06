import { TOGGLE_ARCHIVE_TASK, TOGGLE_COMPLETE_TASK } from '../actions/types'

export const initialState = [
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
    {
        title: 'Call insurance company',
        body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna.',
        completed: false,
        id: 2,
        archived: false,
        reminder: null,
    },
    {
        title: 'Change the tires',
        body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna.',
        completed: false,
        id: 3,
        archived: false,
        reminder: null,
    },
]

export default function tasks(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_ARCHIVE_TASK:
            return state.map((task) => {
                if (task.id === action.id) {
                    task.archived = !task.archived
                }

                return task
            })

        case TOGGLE_COMPLETE_TASK:
            return state.map((task) => {
                if (task.id === action.id) {
                    task.completed = !task.completed
                }

                return task
            })

        default:
            return state
    }
}
