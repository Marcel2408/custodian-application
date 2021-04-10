import React from 'react'
import {
    IconArchive,
    IconChevron,
    IconCompleted,
    IconReminder,
} from './icon.styles'

export const Icon = (props) => {
    switch (props.type) {
        case 'completed':
            return <IconCompleted />
        case 'chevron':
            return <IconChevron />
        case 'archive':
            return <IconArchive />
        case 'reminder':
            return <IconReminder />
        default:
            return null
    }
}
