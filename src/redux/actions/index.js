import * as types from './types'

// action creators
// For Example :

export const archiveTask = (id) => ({ type: types.ARCHIVE_TASK, id })

export const toggleCompleteTask = (id, isCompleted) => ({
    type: types.TOGGLE_COMPLETE_TASK,
    id,
    isCompleted,
})
