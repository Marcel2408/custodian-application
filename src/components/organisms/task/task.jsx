import React from 'react'
import { Button } from '../../atoms/button/button'
import { Paragraph } from '../../atoms/typography/paragraph/paragraph'
import { Title } from '../../atoms/typography/title/title'
import TaskState from '../../molecules/taskState/taskState'
import {
    ButtonWrapper,
    ContentWrapper,
    TaskArticle,
    TaskContent,
} from './task.styles'

class Task extends React.Component {
    render() {
        return (
            <TaskArticle>
                <TaskState taskId={3} />
                <TaskContent>
                    <ContentWrapper>
                        <Title>Renew Parking Permit</Title>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incidid unt ut labore et
                            dolore magna.
                        </Paragraph>
                        <ButtonWrapper>
                            <Button type="archive-default">
                                archive the task
                            </Button>
                            <Button type="reminder-default">
                                set a reminder
                            </Button>
                        </ButtonWrapper>
                    </ContentWrapper>
                </TaskContent>
            </TaskArticle>
        )
    }
}

export default Task
