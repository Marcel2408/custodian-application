import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Home from './pages/home/home'
import './App.css'

const theme = {
    colors: {
        colorPrimary: '#008489',
        colorPrimaryLight: '#6AB9BC',
        colorBackground: '#fafafa',
        colorRed: '#ff6464',
    },
    sizes: {
        fontSizeText: '1.2rem',
    },
    shadow: {
        default: '0.4rem 0.3rem 1rem rgba(0,0,0,.1)',
    },
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
