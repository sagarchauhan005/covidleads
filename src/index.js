/*eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import './style/style.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';

render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root')
);
