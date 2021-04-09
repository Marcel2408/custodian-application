import React from 'react'
import { HeaderImage } from '../../atoms/headerImage/headerImage'
import { NavigationMenu } from '../../molecules/navigationMenu/navigationMenu'

class Header extends React.Component {
    render() {
        return (
            <header>
                <HeaderImage />
                <NavigationMenu />
            </header>
        )
    }
}

export default Header
