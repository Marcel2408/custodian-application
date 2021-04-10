import styled from 'styled-components'

export const TaskStateContainer = styled.div`
    padding: 2rem;
    background-color: #fff;
    width: 45%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: ${(props) => props.theme.shadow.default};

    display: flex;
    align-items: center;
    justify-content: space-between;
`
