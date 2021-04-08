import React from 'react'
import { NavLinkDefault } from './navigationLink.styles'

export const NavigationLink = (props) => {
    switch (props.type) {
        case 'reversed':
            return
        default:
            return <NavLinkDefault>{props.children}</NavLinkDefault>
    }
}
