import React from 'react'
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Home from './pages/home/home'
import './App.css'
import { DesktopPageContainer, theme } from './App.styles'
import Header from './components/organisms/header/header'
import PageTemplate from './components/templates/page/page'
import Archive from './pages/archive/archive'

class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Router>
                    <DesktopPageContainer>
                        <PageTemplate>
                            <Header />
                            <Switch>
                                <Route
                                    path="/current-tasks"
                                    exact
                                    component={Home}
                                />
                                <Route
                                    path="/archived"
                                    exact
                                    component={Archive}
                                />
                                <Route
                                    path="/"
                                    exact
                                    render={() => (
                                        <Redirect to="/current-tasks" />
                                    )}
                                />
                            </Switch>
                        </PageTemplate>
                    </DesktopPageContainer>
                </Router>
            </ThemeProvider>
        )
    }
}

export default App
