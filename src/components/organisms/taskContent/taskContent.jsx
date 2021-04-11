import React from 'react'
import { Button } from '../../atoms/button/button'
import { Paragraph } from '../../atoms/typography/paragraph/paragraph'
import { Title } from '../../atoms/typography/title/title'
import {
    ButtonWrapper,
    ContentWrapper,
    TaskContentContainer,
} from './taskContent.styles'

class TaskContent extends React.Component {
    render() {
        const { title, body } = this.props
        return (
            <TaskContentContainer>
                <ContentWrapper>
                    <Title>{title}</Title>
                    <Paragraph>{body}</Paragraph>
                    <ButtonWrapper>
                        <Button theme="archive-default">
                            archive the task
                        </Button>
                        <Button theme="reminder-default">set a reminder</Button>
                    </ButtonWrapper>
                </ContentWrapper>
            </TaskContentContainer>
        )
    }
}

export default TaskContent
