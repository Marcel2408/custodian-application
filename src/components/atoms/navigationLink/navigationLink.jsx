import React from 'react'
import { NavLinkDefault, NavLinkReversed } from './navigationLink.styles'

export const NavigationLink = (props) => {
    if (props.type === 'reversed') {
        return <NavLinkReversed to={props.to}>{props.children}</NavLinkReversed>
    } else {
        return <NavLinkDefault to={props.to}>{props.children}</NavLinkDefault>
    }
}
