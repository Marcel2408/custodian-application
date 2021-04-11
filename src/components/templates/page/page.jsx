import React from 'react'
import { PageGrid } from './page.styles'

class PageTemplate extends React.Component {
    render() {
        return <PageGrid>{this.props.children}</PageGrid>
    }
}

export default PageTemplate
