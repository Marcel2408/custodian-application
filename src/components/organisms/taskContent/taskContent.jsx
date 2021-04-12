import React from 'react'
import { connect } from 'react-redux'
import { toggleArchiveTask } from '../../../redux/actions'
import { Button } from '../../atoms/button/button'
import { Paragraph } from '../../atoms/typography/paragraph/paragraph'
import { Title } from '../../atoms/typography/title/title'
import {
    ButtonWrapper,
    ContentWrapper,
    TaskContentContainer,
} from './taskContent.styles'

const actionCreators = {
    toggleArchiveTask,
}

class TaskContent extends React.Component {
    handleOnArchive = () => {
        this.props.toggleArchiveTask(this.props.taskId)
    }

    render() {
        const { title, body, archived } = this.props
        return (
            <TaskContentContainer>
                <ContentWrapper>
                    <Title theme="heading-2">{title}</Title>
                    <Paragraph>{body}</Paragraph>
                    <ButtonWrapper>
                        <Button
                            theme="archive-default"
                            handleOnClick={this.handleOnArchive}
                        >
                            {archived
                                ? 'unarchive the task'
                                : 'archive the task'}
                        </Button>
                        <Button theme="reminder-default">set a reminder</Button>
                    </ButtonWrapper>
                </ContentWrapper>
            </TaskContentContainer>
        )
    }
}

export default connect(null, actionCreators)(TaskContent)
