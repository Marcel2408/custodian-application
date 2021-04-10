import styled from 'styled-components'

export const TaskArticle = styled.article`
    width: 45%;
`

export const TaskContent = styled.div`
    padding: 3rem;
    background-color: #fff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: ${(props) => props.theme.shadow.default};
`

export const ContentWrapper = styled.div`
    width: 87%;
`

export const ButtonWrapper = styled.div`
    margin-top: 2rem;
`
