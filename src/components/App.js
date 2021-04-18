import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './landing/Home';
import SubmitForm from './submit/SubmitForm.js';
import Leads from './leads/Leads'
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();
import ReactGA from 'react-ga';
ReactGA.initialize('G-RKTN2744F1');


const App = () => {
    return (
        <div >
            <Router history={history}>
                <div>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/submit" component={SubmitForm} />
                        <Route path="/leads" component={Leads} />
                    </Switch>

                </div>

            </Router>
        </div>
    );
};


export default App;