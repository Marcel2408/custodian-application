import React from 'react'
import { shallow } from 'enzyme'
import { CheckboxGroup } from './checkboxGroup'
import { CheckboxGroupContainer, CheckboxLabel } from './checkboxGroup.styles'

const defaultProps = {
    handleOnChange: jest.fn(),
    color: 'primaryLight',
    children: 'completed',
    isChecked: true,
    iconTheme: 'chevron',
}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<CheckboxGroup {...setupProps} />)
}

describe('render', () => {
    describe('isChecked true', () => {
        let wrapper
        beforeEach(() => {
            wrapper = setup()
        })
        test('renders without error', () => {
            const component = wrapper.find(CheckboxGroupContainer)
            expect(component.length).toBe(1)
        })

        test('renders `<Icon />completed` as the label', () => {
            const checkboxLabel = wrapper.find(CheckboxLabel)
            expect(checkboxLabel.text()).toBe('<Icon />completed')
        })
    })

    describe('isChecked false', () => {
        let wrapper
        beforeEach(() => {
            wrapper = setup({
                handleOnChange: jest.fn(),
                color: 'red',
                children: 'outstanding',
                isChecked: false,
                iconTheme: 'chevron',
            })
        })
        test('renders without error', () => {
            const component = wrapper.find(CheckboxGroupContainer)
            expect(component.length).toBe(1)
        })

        test('renders `outstanding` as the label', () => {
            const checkboxLabel = wrapper.find(CheckboxLabel)
            expect(checkboxLabel.text()).toBe('outstanding')
        })
    })
})
