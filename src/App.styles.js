import styled from 'styled-components'

export const DesktopPageContainer = styled.div`
    @media (max-width: 768px) {
        display: none;
    }

    max-width: 120rem;
    margin: 7.3rem 10.3rem;
`
export const theme = {
    colors: {
        primary: '#008489',
        primaryLight: '#6AB9BC',
        background: '#fafafa',
        red: '#ff6464',
        text: '#676767',
    },
    fontSizes: {
        text: '1.2rem',
        titleH2: '1.5rem',
    },
    fontWeight: {
        semiBold: '600',
        bold: '700',
    },
    shadow: {
        default: '0.4rem 0.3rem 1rem rgba(0,0,0,.06)',
    },
}
