import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const NavLink = css`
    border: 2px solid ${(props) => props.theme.colorPrimary};
    border-radius: 5px;
    padding: 0.7rem 2.2rem;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 600;

    &:not(:last-child) {
        margin-right: 2rem;
    }
`

export const NavLinkDefault = styled(Link)`
    ${NavLink}
    color: ${(props) => props.theme.colorPrimary}
`

export const NavLinkReversed = styled(Link)`
    ${NavLink}
    color: #fff;
    background-color: ${(props) => props.theme.colorPrimary};
`
