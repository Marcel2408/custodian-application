import React from 'react'
import { Icon } from '../../atoms/icon/icon'
import {
    CheckboxButton,
    CheckboxGroupContainer,
    CheckboxInput,
    CheckboxLabel,
} from './checkboxGroup.styles'

export const CheckboxGroup = ({
    handleOnChange,
    color,
    checkboxId,
    children,
    isChecked,
    iconType,
}) => (
    <CheckboxGroupContainer>
        <CheckboxInput
            onChange={handleOnChange}
            type="checkbox"
            id={checkboxId}
        />
        <CheckboxLabel htmlFor={checkboxId} color={color}>
            <CheckboxButton color={color}>
                {isChecked ? <Icon type={iconType} /> : ''}
            </CheckboxButton>
            {children}
        </CheckboxLabel>
    </CheckboxGroupContainer>
)
