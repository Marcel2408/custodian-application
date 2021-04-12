import React from 'react'
import { connect } from 'react-redux'
import Task from '../../components/organisms/task/task'
import { MainContainer } from './home.styles'
import Header from '../../components/organisms/header/header'
import { PageGrid } from '../../components/templates/page/page.styles'
import { withRouter } from 'react-router'

// Dont worry about mobile UI. Pretend this is only for Desktop.
// Hence why the media query below has been added.
// Feel free to add styling to the Desktop page wrapper on this styled component directly
// rather than creating another one underneath.

const mapStateToProps = (state) => {
    return { tasks: state }
}

class Home extends React.Component {
    render() {
        const tasks = this.props.tasks.filter((task) =>
            this.props.location.pathname === '/current-tasks'
                ? task.archived === false
                : task.archived === true
        )
        return (
            <PageGrid>
                <Header />
                <MainContainer>
                    {tasks.map((task) => (
                        <Task key={task.id} task={task} />
                    ))}
                </MainContainer>
            </PageGrid>
        )
    }
}

export default connect(mapStateToProps)(withRouter(Home))
