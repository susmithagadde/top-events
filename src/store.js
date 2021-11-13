import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/rootReducer';
import logger from 'redux-logger'


function configureStore(initialState={}) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
      rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(thunk, logger)),
    );
}

export const store = configureStore();