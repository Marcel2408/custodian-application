import styled from 'styled-components'

export const PageGrid = styled.div`
    display: grid;
    grid-template-rows: repeat(3, max-content);
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
        'head head'
        'head head'
        'main main';
`
