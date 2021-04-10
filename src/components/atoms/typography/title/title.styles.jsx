import styled from 'styled-components'

export const TitleH2 = styled.h2`
    font-weight: 600;
    margin-bottom: 1rem;
    font-weight: ${(props) => props.theme.fontWeight.bold};
    color: ${(props) => props.theme.colors.text};
`
