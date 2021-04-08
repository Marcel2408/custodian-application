import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavLinkDefault = styled(Link)`
    border: 2px solid #008489;
    border-radius: 5px;
    padding: 0.7rem 2.2rem;
    text-transform: uppercase;
    text-decoration: none;
    color: #008489;
    font-weight: 600;

    &:not(:last-of-type) {
        margin-right: 2rem;
    }
`
