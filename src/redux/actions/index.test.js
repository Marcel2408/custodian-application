import * as types from './types'
import { toggleArchiveTask, toggleCompleteTask } from './index'

describe('toggleArchiveTask', () => {
    test('returns an action with type `TOGGLE_ARCHIVE_TASK` and the task id passed as parameter', () => {
        const action = toggleArchiveTask(0)
        expect(action).toEqual({
            type: types.TOGGLE_ARCHIVE_TASK,
            id: 0,
        })
    })
})

describe('toggleCompleteTask', () => {
    test('returns an action with type `TOGGLE_COMPLETE_TASK` and the task id passed as parameter', () => {
        const action = toggleCompleteTask(0)
        expect(action).toEqual({
            type: types.TOGGLE_COMPLETE_TASK,
            id: 0,
        })
    })
})
