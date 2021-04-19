import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './landing/Home';
import SubmitForm from './submit/SubmitForm.js';
import Leads from './leads/Leads'
import Sourced from './sourced/Sourced';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();
//import ReactGA from 'react-ga';
//ReactGA.initialize('G-RKTN2744F1');
//ReactGA.pageview(window.location.pathname + window.location.search);


const App = () => {
    return (
        <div >
            <Router history={history}>
                <div>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/submit" component={SubmitForm} />
                        <Route path="/leads" component={Leads} />
                        <Route path="/sourced" component={Sourced} />
                    </Switch>

                </div>

            </Router>
        </div>
    );
};


export default App;