import React from 'react'
import { connect } from 'react-redux'
import { archiveTask } from '../../../redux/actions'
import { HeaderImage } from '../atoms/header/header'
import { DesktopPageContainer } from './home.styles'

// Dont worry about mobile UI. Pretend this is only for Desktop.
// Hence why the media query below has been added.
// Feel free to add styling to the Desktop page wrapper on this styled component directly
// rather than creating another one underneath.

const actionCreators = {
    archiveTask,
}

const mapStateToProps = (state) => {
    return { tasks: state.tasks }
}

class Home extends React.Component {
    render() {
        return (
            <DesktopPageContainer>
                <HeaderImage />

                <button
                    onClick={() => {
                        this.props.archiveTask(3)
                    }}
                >
                    Redux action example: by clicking this, you archive the task
                    of ID 3.
                </button>

                {/* On clicking, check what happens in the Redux Dev Tools. It is going to be helpful for your own debugging. */}
            </DesktopPageContainer>
        )
    }
}

export default connect(mapStateToProps, actionCreators)(Home)
