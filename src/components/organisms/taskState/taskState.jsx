import React from 'react'
import { connect } from 'react-redux'
import { toggleCompleteTask } from '../../../redux/actions'
import { Icon } from '../../atoms/icon/icon'
import { CheckboxGroup } from '../../molecules/checkboxGroup/checkboxGroup'
import { TaskStateContainer } from './taskState.styles'

const actionCreators = {
    toggleCompleteTask,
}

class TaskState extends React.Component {
    handleOnChange = () => {
        this.props.toggleCompleteTask(this.props.taskId)
    }

    render() {
        const { isCompleted, taskId } = this.props
        const checkboxColor = isCompleted ? 'primaryLight' : 'red'
        return (
            <TaskStateContainer>
                <CheckboxGroup
                    handleOnChange={this.handleOnChange}
                    color={checkboxColor}
                    isChecked={isCompleted}
                    iconTheme="completed"
                    checkboxId={taskId}
                >
                    {isCompleted ? 'completed' : 'outstanding'}
                </CheckboxGroup>
                <Icon theme="chevron" />
            </TaskStateContainer>
        )
    }
}

export default connect(null, actionCreators)(TaskState)
