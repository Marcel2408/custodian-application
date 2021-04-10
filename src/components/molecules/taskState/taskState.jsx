import React from 'react'
import { connect } from 'react-redux'
import { toggleCompleteTask } from '../../../redux/actions'
import { Icon } from '../../atoms/icon/icon'
import { CheckboxGroup } from '../checkboxGroup/checkboxGroup'
import { TaskStateContainer } from './taskState.styles'

const actionCreators = {
    toggleCompleteTask,
}

const mapStateToProps = (state) => {
    return { tasks: state }
}

class TaskState extends React.Component {
    handleOnChange = (e) => {
        this.props.toggleCompleteTask(this.props.taskId, e.target.checked)
    }

    render() {
        const { tasks, taskId } = this.props
        const currentTask = tasks.find((task) => task.id === taskId)
        const isCompleted = currentTask.completed
        const checkboxColor = isCompleted ? 'primaryLight' : 'red'
        return (
            <TaskStateContainer>
                <CheckboxGroup
                    handleOnChange={this.handleOnChange}
                    color={checkboxColor}
                    isChecked={isCompleted}
                    checkboxId="taskState"
                    iconType="completed"
                >
                    {isCompleted ? 'completed' : 'outstanding'}
                </CheckboxGroup>
                <Icon type="chevron" />
            </TaskStateContainer>
        )
    }
}

export default connect(mapStateToProps, actionCreators)(TaskState)
