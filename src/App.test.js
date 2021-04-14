import { shallow } from 'enzyme'
import App from './App'
import Header from './components/organisms/header/header'
import PageTemplate from './components/templates/page/page'
/**
 * Setup fn for the App component
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />)

test('renders page template without error', () => {
    const wrapper = setup()
    const app = wrapper.find(PageTemplate)
    expect(app).toHaveLength(1)
})

test('renders header without error', () => {
    const wrapper = setup()
    const header = wrapper.find(Header)
    expect(header).toHaveLength(1)
})
