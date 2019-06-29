import {createStore} from 'redux';

import rootReducer from './reducers/rootReducer';

export default function configureStore(initialState) {
    // Add support for Redux Dev Tools
    // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(rootReducer, initialState);
}