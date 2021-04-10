import styled from 'styled-components'
import completeSvg from '../../../assets/icons/completed.svg'
import { ReactComponent as Chevron } from '../../../assets/icons/chevron-thin-right.svg'
import { ReactComponent as Archive } from '../../../assets/icons/archive.svg'
import { ReactComponent as Reminder } from '../../../assets/icons/reminder.svg'

export const IconCompleted = styled.span`
    background-image: url(${completeSvg});
    display: inline-block;
    width: 1.3rem;
    height: 1.3rem;
    background-size: cover;
    position: absolute;
    top: 1px;
    left: 2px;
`

export const IconChevron = styled(Chevron)`
    fill: ${(props) => props.theme.colors.primaryLight};
    width: 1.3rem;
    height: 1.3rem;
`
export const IconArchive = styled(Archive)``
export const IconReminder = styled(Reminder)``
