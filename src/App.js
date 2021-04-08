import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Home from './components/pages/home/home'

const theme = {
    colorPrimary: '#008489',
}

class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Router>
                        <Switch>
                            <Route path="/" exact component={Home} />
                        </Switch>
                    </Router>
                </div>
            </ThemeProvider>
        )
    }
}

export default App
