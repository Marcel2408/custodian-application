import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const NavLink = css`
    border-radius: 5px;
    padding: 0.9rem 2.9rem;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;

    &:not(:last-child) {
        margin-right: 2rem;
    }
`

export const NavLinkDefault = styled(Link)`
    ${NavLink}
    border: 2px solid ${(props) => props.theme.colorPrimaryLight};
    color: ${(props) => props.theme.colorPrimaryLight};
    transition: all 0.2s;

    :hover {
        background-color: ${(props) => props.theme.colorPrimaryLight};
        color: #fff;
    }
`

export const NavLinkReversed = styled(Link)`
    ${NavLink}
    color: #fff;
    background-color: ${(props) => props.theme.colorPrimary};
    border: 2px solid ${(props) => props.theme.colorPrimary};
    letter-spacing: 2px;
    transition: all 0.2s;

    &:hover {
        border-color: ${(props) => props.theme.colorPrimaryLight};
        background-color: ${(props) => props.theme.colorPrimaryLight};
    }
`
