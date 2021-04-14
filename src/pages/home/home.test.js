import React from 'react'
import { shallow } from 'enzyme'
import Home from './home'

import { storeFactory } from '../../test/testUtils'
import { MainContainer } from './home.styles'
import { Title } from '../../components/atoms/typography/title/title'
import { Paragraph } from '../../components/atoms/typography/paragraph/paragraph'
import { initialState } from '../../redux/reducers/tasks'
import Dashboard from '../../components/templates/dashboard/dashboard'
import Task from '../../components/organisms/task/task'

const setup = (state = []) => {
    const store = storeFactory(state)
    const wrapper = shallow(<Home store={store} />)
        .dive()
        .dive()
    return wrapper
}
setup()
describe('render', () => {
    describe('no tasks to render', () => {
        let wrapper
        beforeEach(() => {
            wrapper = setup()
        })
        test('renders component without error', () => {
            const component = wrapper.find(MainContainer)
            expect(component.length).toBe(1)
        })

        test('renders title without error', () => {
            const title = wrapper.find(Title)
            expect(title.length).toBe(1)
        })

        test('renders paragraph without error', () => {
            const paragraph = wrapper.find(Paragraph)
            expect(paragraph.length).toBe(1)
        })
    })

    describe('some tasks to render', () => {
        let wrapper
        beforeEach(() => {
            wrapper = setup(initialState)
        })
        test('renders component without error', () => {
            const component = wrapper.find(MainContainer)
            expect(component.length).toBe(1)
        })

        test('renders dashboard without error', () => {
            const dashboard = wrapper.find(Dashboard)
            expect(dashboard.length).toBe(1)
        })

        test('renders all tasks without error', () => {
            const task = wrapper.find(Task)
            expect(task.length).toBe(4)
        })
    })
})
