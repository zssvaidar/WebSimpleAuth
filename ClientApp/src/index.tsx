import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
//import * as ReactDOM from 'react-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import configureStore from './store/configureStore';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';
import { alertActions } from './actions';

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
//const store = configureStore(history);

const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

history.listen(location => {
    store.dispatch(alertActions.clear());
});
//<ConnectedRouter history={history}>
    //<App />
//</ConnectedRouter>
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>

       
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
