import React from 'react'
import { IconArchive, IconReminder } from '../icon/icon.styles'
import {
    ButtonDefault,
    ContentWrapper,
    NavLinkDefault,
    NavLinkReversed,
} from './button.styles'

export const Button = (props) => {
    switch (props.type) {
        case 'link-reversed':
            return (
                <NavLinkReversed to={props.to}>
                    {props.children}
                </NavLinkReversed>
            )
        case 'link-default':
            return (
                <NavLinkDefault to={props.to}>{props.children}</NavLinkDefault>
            )
        case 'archive-default':
            return (
                <ButtonDefault>
                    <ContentWrapper>
                        <IconArchive />
                        <span>{props.children}</span>
                    </ContentWrapper>
                </ButtonDefault>
            )
        case 'reminder-default':
            return (
                <ButtonDefault>
                    <ContentWrapper>
                        <IconReminder />
                        <span>{props.children}</span>
                    </ContentWrapper>
                </ButtonDefault>
            )
        default:
            return <ButtonDefault>{props.children}</ButtonDefault>
    }
}
