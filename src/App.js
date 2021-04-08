import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './components/pages/home/home'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App
