import * as types from './types'

// action creators
// For Example :

export const toggleArchiveTask = (id) => ({
    type: types.TOGGLE_ARCHIVE_TASK,
    id,
})

export const toggleCompleteTask = (id) => ({
    type: types.TOGGLE_COMPLETE_TASK,
    id,
})
