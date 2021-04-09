import React from 'react'
import { NavigationLink } from '../../atoms/navigationLink/navigationLink'
import { NavMenuContainer } from './navigationMenu.styles'

export const NavigationMenu = (props) => (
    <NavMenuContainer>
        <div>
            <NavigationLink to="/">Current Tasks</NavigationLink>
            <NavigationLink to="/">Archived Tasks</NavigationLink>
        </div>
        <NavigationLink to="/" type="reversed">
            Create Task
        </NavigationLink>
    </NavMenuContainer>
)
