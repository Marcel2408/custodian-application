import React from 'react'
import { TitleH2 } from './title.styles'

export const Title = (props) => {
    if (props.theme === 'heading-2') {
        return <TitleH2>{props.children}</TitleH2>
    } else {
        return null
    }
}
