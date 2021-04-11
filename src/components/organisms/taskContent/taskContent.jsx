import React from 'react'
import { connect } from 'react-redux'
import { archiveTask } from '../../../redux/actions'
import { Button } from '../../atoms/button/button'
import { Paragraph } from '../../atoms/typography/paragraph/paragraph'
import { Title } from '../../atoms/typography/title/title'
import {
    ButtonWrapper,
    ContentWrapper,
    TaskContentContainer,
} from './taskContent.styles'

const actionCreators = {
    archiveTask,
}

class TaskContent extends React.Component {
    handleOnArchive = () => {
        this.props.archiveTask(this.props.taskId)
    }

    render() {
        const { title, body } = this.props
        return (
            <TaskContentContainer>
                <ContentWrapper>
                    <Title>{title}</Title>
                    <Paragraph>{body}</Paragraph>
                    <ButtonWrapper>
                        <Button
                            theme="archive-default"
                            handleOnClick={this.handleOnArchive}
                        >
                            archive the task
                        </Button>
                        <Button theme="reminder-default">set a reminder</Button>
                    </ButtonWrapper>
                </ContentWrapper>
            </TaskContentContainer>
        )
    }
}

export default connect(null, actionCreators)(TaskContent)
