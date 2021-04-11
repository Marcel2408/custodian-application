import React from 'react'
import { connect } from 'react-redux'
import { DesktopPageContainer } from './home.styles'
import Header from '../../components/organisms/header/header'
import Task from '../../components/organisms/task/task'

// Dont worry about mobile UI. Pretend this is only for Desktop.
// Hence why the media query below has been added.
// Feel free to add styling to the Desktop page wrapper on this styled component directly
// rather than creating another one underneath.

const mapStateToProps = (state) => {
    return { tasks: state }
}

class Home extends React.Component {
    render() {
        const { tasks } = this.props
        return (
            <DesktopPageContainer>
                <Header />
                {tasks.map((task) => (
                    <Task key={task.id} task={task} />
                ))}
            </DesktopPageContainer>
        )
    }
}

export default connect(mapStateToProps)(Home)
