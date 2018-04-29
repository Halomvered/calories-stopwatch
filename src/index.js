import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter from './routers/AppRouter';
import registerServiceWorker from './ServiceWorker/registerServiceWorker';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
