import styled from 'styled-components'

export const TaskStateContainer = styled.div`
    padding: 2rem 3rem;
    background-color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: ${(props) => props.theme.shadow.default};
    margin-bottom: 0.2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
