import React from 'react'
import { connect } from 'react-redux'
import { Paragraph } from '../../components/atoms/typography/paragraph/paragraph'
import { Title } from '../../components/atoms/typography/title/title'
import Task from '../../components/organisms/task/task'
import Dashboard from '../../components/templates/dashboard/dashboard'
import { MainContainer } from './archive.styles'

const mapStateToProps = (state) => {
    return { tasks: state }
}

class Archive extends React.Component {
    render() {
        const archivedTasks = this.props.tasks.filter(
            (task) => task.archived === true
        )
        return (
            <MainContainer>
                {archivedTasks.length ? (
                    <Dashboard>
                        {archivedTasks.map((task) => (
                            <Task key={task.id} task={task} />
                        ))}
                    </Dashboard>
                ) : (
                    <>
                        <Title theme="heading-2">Ooops...</Title>
                        <Paragraph>No archived tasks yet</Paragraph>
                    </>
                )}
            </MainContainer>
        )
    }
}

export default connect(mapStateToProps)(Archive)
