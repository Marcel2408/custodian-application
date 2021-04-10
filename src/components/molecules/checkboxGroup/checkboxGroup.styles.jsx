import styled from 'styled-components'

export const CheckboxGroupContainer = styled.div`
    position: relative;
`

export const CheckboxInput = styled.input`
    position: absolute;
    opacity: 0;
`
export const CheckboxLabel = styled.label`
    font-size: ${(props) => props.theme.sizes.fontSizeText};
    font-weight: 600;
    cursor: pointer;
    color: ${(props) => props.theme.colors[props.color]};
`
export const CheckboxButton = styled.span`
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border: 2px solid ${(props) => props.theme.colors[props.color]};
    margin-right: 1.2rem;
    position: relative;
    top: 5px;
`
