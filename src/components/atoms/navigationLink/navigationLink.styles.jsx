import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const NavLink = css`
    border-radius: 5px;
    padding: 0.9rem 2.7rem;
    text-transform: uppercase;
    text-decoration: none;
    font-size: ${(props) => props.theme.sizes.fontSizeText};
    font-weight: 600;

    &:not(:last-child) {
        margin-right: 2.5rem;
    }
`

export const NavLinkDefault = styled(Link)`
    ${NavLink}
    border: 2px solid ${(props) => props.theme.colors.colorPrimaryLight};
    color: ${(props) => props.theme.colors.colorPrimaryLight};
    transition: all 0.2s;

    :hover {
        background-color: ${(props) => props.theme.colors.colorPrimaryLight};
        color: #fff;
    }
`

export const NavLinkReversed = styled(Link)`
    ${NavLink}
    color: #fff;
    background-color: ${(props) => props.theme.colors.colorPrimary};
    border: 2px solid ${(props) => props.theme.colors.colorPrimary};
    letter-spacing: 2px;
    transition: all 0.2s;

    &:hover {
        border-color: ${(props) => props.theme.colors.colorPrimaryLight};
        background-color: ${(props) => props.theme.colors.colorPrimaryLight};
    }
`
