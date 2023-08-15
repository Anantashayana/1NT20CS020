import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TrainListPage from './components/TrainListPage';
import SingleTrainPage from './components/SingleTrainPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={TrainListPage} />
                <Route path="/train/:trainNumber" component={SingleTrainPage} />
            </Switch>
        </Router>
    );
}

export default App;
