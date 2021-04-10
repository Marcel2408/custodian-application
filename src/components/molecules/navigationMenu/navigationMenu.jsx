import React from 'react'
import { Button } from '../../atoms/button/button'
import { NavMenuContainer } from './navigationMenu.styles'

export const NavigationMenu = (props) => (
    <NavMenuContainer>
        <div>
            <Button type="link-default" to="/">
                Current Tasks
            </Button>
            <Button type="link-default" to="/">
                Archived Tasks
            </Button>
        </div>
        <Button type="link-reversed" to="/">
            Create Task
        </Button>
    </NavMenuContainer>
)
