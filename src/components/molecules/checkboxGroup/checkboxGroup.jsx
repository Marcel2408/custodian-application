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
    iconTheme,
}) => (
    <CheckboxGroupContainer>
        <CheckboxInput
            onChange={handleOnChange}
            type="checkbox"
            id={checkboxId}
        />
        <CheckboxLabel htmlFor={checkboxId} color={color}>
            <CheckboxButton color={color}>
                {isChecked ? <Icon theme={iconTheme} /> : ''}
            </CheckboxButton>
            {children}
        </CheckboxLabel>
    </CheckboxGroupContainer>
)
