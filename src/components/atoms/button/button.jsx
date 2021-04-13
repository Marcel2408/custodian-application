import React from 'react'
import { Icon } from '../icon/icon'
import {
    ButtonDefault,
    ContentWrapper,
    NavLinkDefault,
    NavLinkReversed,
} from './button.styles'

export const Button = (props) => {
    switch (props.theme) {
        case 'link-reversed':
            return (
                <NavLinkReversed to={props.to} activeClassName="selected">
                    {props.children}
                </NavLinkReversed>
            )
        case 'link-default':
            return (
                <NavLinkDefault to={props.to} activeClassName="selected">
                    {props.children}
                </NavLinkDefault>
            )
        case 'archive-default':
            return (
                <ButtonDefault type="button" onClick={props.handleOnClick}>
                    <ContentWrapper>
                        <Icon theme="archive" />
                        <span>{props.children}</span>
                    </ContentWrapper>
                </ButtonDefault>
            )
        case 'reminder-default':
            return (
                <ButtonDefault type="button" onClick={props.handleOnClick}>
                    <ContentWrapper>
                        <Icon theme="reminder" />
                        <span>{props.children}</span>
                    </ContentWrapper>
                </ButtonDefault>
            )
        default:
            return (
                <ButtonDefault onClick={props.handleOnClick} type="button">
                    {props.children}
                </ButtonDefault>
            )
    }
}
