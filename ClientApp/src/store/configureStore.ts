//import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
//import thunk from 'redux-thunk';
//import { connectRouter, routerMiddleware } from 'connected-react-router';
//import { History } from 'history';
//import { ApplicationState, reducers } from './';

//export default function configureStore(history: History, initialState?: ApplicationState) {
//    const middleware = [
//        thunk,
//        routerMiddleware(history)
//    ];

//    const rootReducer = combineReducers({
//        ...reducers,
//        router: connectRouter(history)
//    });

//    const enhancers = [];
//    const windowIfDefined = typeof window === 'undefined' ? null : window as any; // eslint-disable-line @typescript-eslint/no-explicit-any
//    if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
//        enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
//    }

//    return createStore(
//        rootReducer,
//        initialState,
//        compose(applyMiddleware(...middleware), ...enhancers)
//    );
//}

import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import * as Authentication from './Authorize';
import * as Registration from './Registration';
import * as Alert from './Alert';

import { History } from 'history';
import { ApplicationState, reducers } from './';

import * as WeatherForecasts from './WeatherForecasts';
import * as Counter from './Counter';

export default function configureStore(history: History, initialState?: ApplicationState) {//(history, initialState) {
    const reducers = {
        authentication: Authentication.reducer,
        registration: Registration.reducer,
        alert: Alert.reducer,


        counter: Counter.reducer ,
        weatherForecasts: WeatherForecasts.reducer 

    };

    const middleware = [
        thunk,
        routerMiddleware(history)
    ];

    // In development, use the browser's Redux dev tools extension if installed
    const enhancers = [];
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
        enhancers.push(window.devToolsExtension());
    }

    const rootReducer = combineReducers({
        ...reducers,
        routing: routerReducer
    });

    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );
}
