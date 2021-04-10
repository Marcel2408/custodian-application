import React from 'react'
import { IconChevron, IconCompleted } from './icon.styles'

export const Icon = (props) => {
    if (props.type === 'completed') {
        return <IconCompleted />
    } else if (props.type === 'chevron') {
        return <IconChevron />
    }
}
