import styled from 'styled-components'
import headerImage from '../../../assets/images/garage.jpg'

export const ImageDiv = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${headerImage});
    background-position: 100% 38%;
    background-size: cover;
`

export const ImageContainer = styled.div`
    height: 25rem;
    overflow: hidden;

    &:hover ${ImageDiv} {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
`
