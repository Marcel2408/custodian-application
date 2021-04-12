import React from 'react'
import { HeaderImage } from '../../atoms/headerImage/headerImage'
import NavigationMenu from '../../molecules/navigationMenu/navigationMenu'
import { HeaderContainer } from './header.styles'

class Header extends React.Component {
    render() {
        return (
            <HeaderContainer>
                <HeaderImage />
                <NavigationMenu />
            </HeaderContainer>
        )
    }
}

export default Header
