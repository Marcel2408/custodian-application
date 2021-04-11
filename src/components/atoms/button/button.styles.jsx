import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

const defaultStyles = css`
    border-radius: 5px;
    font-size: ${(props) => props.theme.fontSizes.text};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    cursor: pointer;
    transition: all 0.1s;
`
const buttonStyles = css`
    padding: 0.9rem 2.3rem;
    outline: none;
    &:not(:last-child) {
        margin-right: 1rem;
    }
`

const linkStyles = css`
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.9rem 2.7rem;

    &:not(:last-child) {
        margin-right: 2.5rem;
    }
`

const defaultHover = css`
    border: 2px solid ${(props) => props.theme.colors.primaryLight};
    color: ${(props) => props.theme.colors.primaryLight};
    background-color: transparent;
    :hover {
        background-color: ${(props) => props.theme.colors.primaryLight};
        color: #fff;
    }
`

const reversedHover = css`
    color: #fff;
    background-color: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.primary};
    letter-spacing: 2px;
    :hover {
        border: 2px solid ${(props) => props.theme.colors.primaryLight};
        background-color: ${(props) => props.theme.colors.primaryLight};
    }
`

export const ButtonDefault = styled.button`
    ${defaultStyles}
    ${buttonStyles}
    ${defaultHover}
    :hover * {
        fill: #fff;
    }
`

export const NavLinkDefault = styled(NavLink)`
    ${defaultStyles}
    ${linkStyles}
    ${defaultHover}
    &.selected {
        background-color: ${(props) => props.theme.colors.primaryLight};
        color: #fff;
    }
`

export const NavLinkReversed = styled(NavLink)`
    ${defaultStyles}
    ${linkStyles}
    ${reversedHover}
    &.selected {
        border: 2px solid ${(props) => props.theme.colors.primaryLight};
        background-color: ${(props) => props.theme.colors.primaryLight};
    }
`
export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;

    & > span {
        margin-left: 0.7rem;
    }
`
