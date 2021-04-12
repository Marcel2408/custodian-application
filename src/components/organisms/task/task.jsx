import React from 'react'
import TaskState from '../taskState/taskState'
import TaskContent from '../taskContent/taskContent'
import { TaskArticle } from './task.styles'

class Task extends React.Component {
    render() {
        const { task } = this.props
        return (
            <TaskArticle>
                <TaskState taskId={task.id} isCompleted={task.completed} />
                <TaskContent
                    taskId={task.id}
                    title={task.title}
                    body={task.body}
                    archived={task.archived}
                />
            </TaskArticle>
        )
    }
}

export default Task
