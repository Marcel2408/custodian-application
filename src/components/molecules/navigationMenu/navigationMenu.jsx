import React from 'react'
import { Button } from '../../atoms/button/button'
import { NavMenuContainer } from './navigationMenu.styles'

export const NavigationMenu = (props) => (
    <NavMenuContainer>
        <div>
            <Button theme="link-default" to="/">
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
