import React from 'react'
import { DashboardContainer } from './dashboard.styles'

class Dashboard extends React.Component {
    render() {
        return <DashboardContainer>{this.props.children}</DashboardContainer>
    }
}

export default Dashboard
