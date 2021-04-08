import React from 'react'
import { NavLinkDefault, NavLinkReversed } from './navigationLink.styles'

export const NavigationLink = (props) => {
    if (props.type === 'reversed') {
        return <NavLinkReversed>{props.children}</NavLinkReversed>
    } else {
        return <NavLinkDefault>{props.children}</NavLinkDefault>
    }
}
