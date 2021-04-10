import styled from 'styled-components'

export const TextDefault = styled.p`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.fontSizes.text};
    color: ${(props) => props.theme.colors.text};
`
