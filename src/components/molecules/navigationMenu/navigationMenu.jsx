import React from 'react'
import { Button } from '../../atoms/button/button'
import { NavMenuContainer } from './navigationMenu.styles'

const NavigationMenu = () => {
    return (
        <NavMenuContainer>
            <div>
                <Button theme="link-default" to="/current-tasks">
                    Current Tasks
                </Button>
                <Button theme="link-default" to="/archived">
                    Archived Tasks
                </Button>
            </div>
            <Button theme="link-reversed" to="/new-task">
                Create Task
            </Button>
        </NavMenuContainer>
    )
}

export default NavigationMenu
