import React from 'react'
import { connect } from 'react-redux'
import { Paragraph } from '../../components/atoms/typography/paragraph/paragraph'
import { Title } from '../../components/atoms/typography/title/title'
import Task from '../../components/organisms/task/task'
import Dashboard from '../../components/templates/dashboard/dashboard'
import { MainContainer } from './home.styles'

// Dont worry about mobile UI. Pretend this is only for Desktop.
// Hence why the media query below has been added.
// Feel free to add styling to the Desktop page wrapper on this styled component directly
// rather than creating another one underneath.

const mapStateToProps = (state) => {
    return { tasks: state }
}

class Home extends React.Component {
    render() {
        const currentTasks = this.props.tasks.filter(
            (task) => task.archived === false
        )
        return (
            <MainContainer>
                {currentTasks.length ? (
                    <Dashboard>
                        {currentTasks.map((task) => (
                            <Task key={task.id} task={task} />
                        ))}
                    </Dashboard>
                ) : (
                    <>
                        <Title theme="heading-2">You can relax!!</Title>
                        <Paragraph>No current tasks at the moment</Paragraph>
                    </>
                )}
            </MainContainer>
        )
    }
}

export default connect(mapStateToProps)(Home)
