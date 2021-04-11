import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Home from './pages/home/home'
import './App.css'
import { DesktopPageContainer } from './App.styles'
import Header from './components/organisms/header/header'
import { PageGrid } from './components/templates/page/page.styles'

const theme = {
    colors: {
        primary: '#008489',
        primaryLight: '#6AB9BC',
        background: '#fafafa',
        red: '#ff6464',
        text: '#676767',
    },
    fontSizes: {
        text: '1.2rem',
        titleH2: '1.5rem',
    },
    fontWeight: {
        semiBold: '600',
        bold: '700',
    },
    shadow: {
        default: '0.4rem 0.3rem 1rem rgba(0,0,0,.06)',
    },
}

class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Router>
                        <DesktopPageContainer>
                            <PageGrid>
                                <Header />
                                <Switch>
                                    <Route path="/" exact component={Home} />
                                </Switch>
                            </PageGrid>
                        </DesktopPageContainer>
                    </Router>
                </div>
            </ThemeProvider>
        )
    }
}

export default App
